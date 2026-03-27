export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const AMO_SUBDOMAIN = process.env.AMO_SUBDOMAIN
const AMO_TOKEN = process.env.AMO_TOKEN
// Telegram via Cloudflare Worker bridge (bot token stays in Worker, not here)
const CF_WORKER_URL = process.env.CF_TELEGRAM_WORKER_URL
const CF_WORKER_SECRET = process.env.CF_TELEGRAM_WORKER_SECRET
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const EMAIL_TO = process.env.EMAIL_TO || 'gazonmarketing@yandex.ru'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

// ===== Rate limiting (per-instance, resets on cold start) =====
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60_000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ===== HTML escaping for user data =====
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

interface UtmData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

interface LeadData {
  name: string
  phone: string
  message?: string
  source: string // 'contact', 'callback', 'trade-in'
  page?: string
  utm?: UtmData
  yclid?: string    // Yandex Click ID — for offline conversions
  clientId?: string // Yandex Metrika ClientID
}

const VALID_SOURCES = ['contact', 'callback', 'trade-in']

function validateAndSanitize(data: any): { valid: false; error: string } | { valid: true; data: LeadData } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' }
  }

  const phone = typeof data.phone === 'string' ? data.phone.trim() : ''
  if (!phone || phone.length < 6 || phone.length > 20 || !/^[0-9+\-() ]+$/.test(phone)) {
    return { valid: false, error: 'Некорректный номер телефона' }
  }

  const source = typeof data.source === 'string' ? data.source : ''
  if (!VALID_SOURCES.includes(source)) {
    return { valid: false, error: 'Некорректный источник заявки' }
  }

  const name = typeof data.name === 'string' ? data.name.slice(0, 100).trim() : ''
  const message = typeof data.message === 'string' ? data.message.slice(0, 2000).trim() : undefined
  const page = typeof data.page === 'string' ? data.page.slice(0, 500) : undefined
  const yclid = typeof data.yclid === 'string' ? data.yclid.slice(0, 100) : undefined
  const clientId = typeof data.clientId === 'string' ? data.clientId.slice(0, 100) : undefined

  let utm: UtmData | undefined
  if (data.utm && typeof data.utm === 'object') {
    utm = {}
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const) {
      if (typeof data.utm[key] === 'string') {
        utm[key] = data.utm[key].slice(0, 200)
      }
    }
  }

  return { valid: true, data: { name, phone, message, source, page, utm, yclid, clientId } }
}

// Send lead to AmoCRM
async function sendToAmoCRM(data: LeadData) {
  if (!AMO_SUBDOMAIN || !AMO_TOKEN) {
    console.warn('AmoCRM not configured, skipping')
    return null
  }

  const pipelineName: Record<string, string> = {
    'contact': 'Заявка с сайта',
    'callback': 'Обратный звонок',
    'trade-in': 'Трейд-ин',
  }

  const amoHeaders = {
    'Authorization': `Bearer ${AMO_TOKEN}`,
    'Content-Type': 'application/json; charset=utf-8',
  }

  try {
    // 1. Create contact
    const contactBody = JSON.stringify([
      {
        name: data.name || 'Без имени',
        custom_fields_values: [
          {
            field_code: 'PHONE',
            values: [{ value: data.phone, enum_code: 'MOB' }],
          },
        ],
      },
    ])
    const contactRes = await fetch(`https://${AMO_SUBDOMAIN}.amocrm.ru/api/v4/contacts`, {
      method: 'POST',
      headers: amoHeaders,
      body: Buffer.from(contactBody, 'utf-8'),
    })

    const contactData = await contactRes.json()
    const contactId = contactData?._embedded?.contacts?.[0]?.id

    // 2. Create lead linked to contact with UTM in tracking fields
    const utmFieldIds: Record<string, number> = {
      utm_source: 1030663,
      utm_medium: 1030659,
      utm_campaign: 1030661,
      utm_content: 1030657,
      utm_term: 1030665,
    }

    const trackingFields: Array<{ field_id?: number; field_name?: string; values: { value: any }[] }> = data.utm
      ? Object.entries(data.utm)
          .filter(([key, val]) => val && utmFieldIds[key])
          .map(([key, val]) => ({
            field_id: utmFieldIds[key],
            values: [{ value: val }],
          }))
      : []

    // Add source URL field
    trackingFields.push({
      field_id: 1478937, // Источник (URL)
      values: [{ value: data.page || '/' }],
    })

    // yclid — Yandex Click ID for offline conversions
    if (data.yclid) {
      trackingFields.push({
        field_name: 'yclid',
        values: [{ value: data.yclid }],
      })
    }

    // Metrika ClientID
    if (data.clientId) {
      trackingFields.push({
        field_name: 'ClientID',
        values: [{ value: data.clientId }],
      })
    }

    const leadBodyJson = JSON.stringify([
      {
        name: pipelineName[data.source] || 'Заявка с сайта',
        _embedded: {
          contacts: contactId ? [{ id: contactId }] : [],
        },
        custom_fields_values: trackingFields,
      },
    ])

    const leadRes = await fetch(`https://${AMO_SUBDOMAIN}.amocrm.ru/api/v4/leads`, {
      method: 'POST',
      headers: amoHeaders,
      body: Buffer.from(leadBodyJson, 'utf-8'),
    })

    const leadData = await leadRes.json()
    const leadId = leadData?._embedded?.leads?.[0]?.id

    // 3. Add note with message, source and UTM
    if (leadId) {
      const utmLines = data.utm
        ? Object.entries(data.utm)
            .filter(([, v]) => v)
            .map(([k, v]) => `${k}: ${v}`)
            .join('\n')
        : ''

      const noteText = [
        data.message ? `Сообщение: ${data.message}` : '',
        `Источник: ${data.source}`,
        `Страница: ${data.page || 'не указана'}`,
        utmLines ? `\n--- UTM ---\n${utmLines}` : '',
      ].filter(Boolean).join('\n')

      const noteJson = JSON.stringify([
        {
          note_type: 'common',
          params: { text: noteText },
        },
      ])

      await fetch(`https://${AMO_SUBDOMAIN}.amocrm.ru/api/v4/leads/${leadId}/notes`, {
        method: 'POST',
        headers: amoHeaders,
        body: Buffer.from(noteJson, 'utf-8'),
      })
    }

    return { contactId, leadId }
  } catch (error) {
    console.error('AmoCRM error:', error)
    return null
  }
}

// Send notification to Telegram via Cloudflare Worker bridge
async function sendToTelegram(data: LeadData) {
  if (!CF_WORKER_URL || !CF_WORKER_SECRET || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram Worker not configured, skipping')
    return null
  }

  const sourceLabels: Record<string, string> = {
    'contact': 'Форма связи',
    'callback': 'Обратный звонок',
    'trade-in': 'Трейд-ин',
  }

  const utmLine = data.utm
    ? Object.entries(data.utm)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}=${v}`)
        .join(', ')
    : ''

  // Escape user data for Telegram HTML
  const safeName = escapeHtml(data.name)
  const safePhone = escapeHtml(data.phone)
  const safeMessage = data.message ? escapeHtml(data.message) : ''
  const safePage = data.page ? escapeHtml(data.page) : ''
  const safeUtm = escapeHtml(utmLine)

  const text = [
    `🔔 <b>Новая заявка с сайта</b>`,
    ``,
    `📋 <b>Тип:</b> ${sourceLabels[data.source] || data.source}`,
    `👤 <b>Имя:</b> ${safeName}`,
    `📞 <b>Телефон:</b> ${safePhone}`,
    safeMessage ? `💬 <b>Сообщение:</b> ${safeMessage}` : '',
    safePage ? `📄 <b>Страница:</b> ${safePage}` : '',
    safeUtm ? `🏷 <b>UTM:</b> ${safeUtm}` : '',
  ].filter(Boolean).join('\n')

  try {
    const res = await fetch(CF_WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CF_WORKER_SECRET}`,
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    })

    if (!res.ok) {
      console.error(`Telegram Worker error: ${res.status} ${res.statusText}`)
    }
  } catch (error) {
    console.error('Telegram Worker error:', error)
  }
}

// Send email notification
async function sendEmail(data: LeadData) {
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn('SMTP not configured, skipping email')
    return null
  }

  const sourceLabels: Record<string, string> = {
    'contact': 'Форма связи',
    'callback': 'Обратный звонок',
    'trade-in': 'Трейд-ин',
  }

  // Escape user data for email HTML
  const safeName = escapeHtml(data.name)
  const safePhone = escapeHtml(data.phone)
  const safeMessage = data.message ? escapeHtml(data.message) : ''
  const safePage = escapeHtml(data.page || '/')
  const safeSource = escapeHtml(sourceLabels[data.source] || data.source)

  const utmHtml = data.utm
    ? Object.entries(data.utm)
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="color:#888;padding:4px 12px 4px 0">${escapeHtml(k)}</td><td>${escapeHtml(v || '')}</td></tr>`)
        .join('')
    : ''

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:500px">
      <h2 style="color:#8b6d4b;margin-bottom:20px">Новая заявка с сайта Mary Belle</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="color:#888;padding:6px 12px 6px 0">Тип</td><td><strong>${safeSource}</strong></td></tr>
        <tr><td style="color:#888;padding:6px 12px 6px 0">Имя</td><td>${safeName}</td></tr>
        <tr><td style="color:#888;padding:6px 12px 6px 0">Телефон</td><td><a href="tel:${safePhone}">${safePhone}</a></td></tr>
        ${safeMessage ? `<tr><td style="color:#888;padding:6px 12px 6px 0">Сообщение</td><td>${safeMessage}</td></tr>` : ''}
        <tr><td style="color:#888;padding:6px 12px 6px 0">Страница</td><td>${safePage}</td></tr>
      </table>
      ${utmHtml ? `<h3 style="color:#8b6d4b;margin-top:20px">UTM-метки</h3><table style="border-collapse:collapse">${utmHtml}</table>` : ''}
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    })

    await transporter.sendMail({
      from: `"Mary Belle Сайт" <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject: `Заявка: ${sourceLabels[data.source] || data.source} — ${data.name.slice(0, 50)}`,
      html,
    })
  } catch (error) {
    console.error('Email error:', error)
  }
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Слишком много запросов. Попробуйте позже.' }, { status: 429 })
    }

    const raw = await req.json()
    const result = validateAndSanitize(raw)
    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }
    const data = result.data

    // Send to all channels in parallel (email is fire-and-forget — SMTP may be slow)
    const [amoResult] = await Promise.allSettled([
      sendToAmoCRM(data),
      sendToTelegram(data),
    ])

    // Email — don't await, let it send in background
    sendEmail(data).catch((e) => console.error('Email bg error:', e))

    return NextResponse.json({
      success: true,
      amo: amoResult.status === 'fulfilled' ? amoResult.value : null,
    })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
