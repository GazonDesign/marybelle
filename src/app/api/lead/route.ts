export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const AMO_SUBDOMAIN = process.env.AMO_SUBDOMAIN
const AMO_TOKEN = process.env.AMO_TOKEN
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
// Chat ID will need to be set — for now we'll get it from the first message
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const EMAIL_TO = process.env.EMAIL_TO || 'gazonmarketing@yandex.ru'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

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

// Send notification to Telegram
async function sendToTelegram(data: LeadData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram not configured, skipping')
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

  const text = [
    `🔔 *Новая заявка с сайта*`,
    ``,
    `📋 *Тип:* ${sourceLabels[data.source] || data.source}`,
    `👤 *Имя:* ${data.name}`,
    `📞 *Телефон:* ${data.phone}`,
    data.message ? `💬 *Сообщение:* ${data.message}` : '',
    data.page ? `📄 *Страница:* ${data.page}` : '',
    utmLine ? `🏷 *UTM:* ${utmLine}` : '',
  ].filter(Boolean).join('\n')

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    })
  } catch (error) {
    console.error('Telegram error:', error)
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

  const utmHtml = data.utm
    ? Object.entries(data.utm)
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="color:#888;padding:4px 12px 4px 0">${k}</td><td>${v}</td></tr>`)
        .join('')
    : ''

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:500px">
      <h2 style="color:#8b6d4b;margin-bottom:20px">Новая заявка с сайта Mary Belle</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="color:#888;padding:6px 12px 6px 0">Тип</td><td><strong>${sourceLabels[data.source] || data.source}</strong></td></tr>
        <tr><td style="color:#888;padding:6px 12px 6px 0">Имя</td><td>${data.name}</td></tr>
        <tr><td style="color:#888;padding:6px 12px 6px 0">Телефон</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
        ${data.message ? `<tr><td style="color:#888;padding:6px 12px 6px 0">Сообщение</td><td>${data.message}</td></tr>` : ''}
        <tr><td style="color:#888;padding:6px 12px 6px 0">Страница</td><td>${data.page || '/'}</td></tr>
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
      subject: `Заявка: ${sourceLabels[data.source] || data.source} — ${data.name}`,
      html,
    })
  } catch (error) {
    console.error('Email error:', error)
  }
}

export async function POST(req: NextRequest) {
  try {
    const data: LeadData = await req.json()

    // Validate
    if (!data.phone || data.phone.length < 6) {
      return NextResponse.json({ error: 'Телефон обязателен' }, { status: 400 })
    }

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
