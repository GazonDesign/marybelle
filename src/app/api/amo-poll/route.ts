export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'

/*
  Polling AmoCRM → Яндекс.Метрика Офлайн-конверсии

  Альтернатива webhook'ам (webhooks требуют расширенный тариф AmoCRM).
  Вызывается по cron раз в час: проверяет сделки, изменившиеся за последний час,
  и отправляет офлайн-конверсии в Метрику для отслеживаемых этапов.

  Дедупликация: файл STATE_FILE хранит отправленные пары leadId-statusId.
  Одна и та же конверсия не отправляется повторно, даже если лид попадает
  в 2-часовое окно выборки несколько раз подряд.

  GET /api/amo-poll?secret=<CRON_SECRET>
*/

const AMO_SUBDOMAIN = process.env.AMO_SUBDOMAIN
const AMO_TOKEN = process.env.AMO_TOKEN
const METRIKA_TOKEN = process.env.METRIKA_OAUTH_TOKEN
const METRIKA_COUNTER = '29448140'
const METRIKA_COUNTER_ADS = '106018856' // рекламный счётчик gov.mary-belle.ru
const CRON_SECRET = process.env.AMO_WEBHOOK_SECRET // reuse same secret

const STATE_FILE = '/var/www/mary-belle/.amo-poll-state.json'
const STATE_TTL_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

type SentState = Record<string, number> // "leadId-statusId" → unix ms

function loadState(): SentState {
  try {
    return JSON.parse(readFileSync(STATE_FILE, 'utf-8'))
  } catch {
    return {}
  }
}

function saveState(state: SentState) {
  const now = Date.now()
  const cleaned: SentState = {}
  for (const [k, v] of Object.entries(state)) {
    if (now - v < STATE_TTL_MS) cleaned[k] = v
  }
  writeFileSync(STATE_FILE, JSON.stringify(cleaned), 'utf-8')
}

// Pipeline "Воронка продаж для Mary Belle" (ID 9896122)
const STATUS_TO_GOAL: Record<number, string> = {
  78654354: 'crm_consultation_scheduled', // Консультация назначена
  78654358: 'crm_consultation_done',      // Консультация проведена
  78654774: 'crm_deal_in_progress',       // Сделка в работе
  142:      'sale',                        // Закрыто — Успешно
}

async function getRecentLeads(updatedAfter: number) {
  if (!AMO_SUBDOMAIN || !AMO_TOKEN) return []

  const leads: any[] = []
  let page = 1
  const limit = 50

  while (true) {
    const url = new URL(`https://${AMO_SUBDOMAIN}.amocrm.ru/api/v4/leads`)
    url.searchParams.set('limit', String(limit))
    url.searchParams.set('page', String(page))
    url.searchParams.set('filter[updated_at][from]', String(updatedAfter))
    url.searchParams.set('with', 'contacts')

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${AMO_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) break

    const text = await res.text()
    if (!text) break
    const data = JSON.parse(text)
    const items = data?._embedded?.leads || []
    leads.push(...items)

    if (items.length < limit) break
    page++
    if (page > 10) break // safety limit
  }

  return leads
}

async function sendOfflineConversion(params: {
  yclid?: string
  clientId?: string
  target: string
  revenue: number
  dateTime: string
  counter?: string
}) {
  if (!METRIKA_TOKEN) return null

  const counter = params.counter || METRIKA_COUNTER
  const csvLines = ['ClientId,Target,DateTime,Price,Currency']

  if (params.yclid) {
    csvLines[0] = 'Yclid,Target,DateTime,Price,Currency'
    csvLines.push(
      `${params.yclid},${params.target},${params.dateTime},${params.revenue},RUB`
    )
  } else if (params.clientId) {
    csvLines.push(
      `${params.clientId},${params.target},${params.dateTime},${params.revenue},RUB`
    )
  } else {
    return null
  }

  try {
    const csvBody = csvLines.join('\n')
    const formData = new FormData()
    formData.append('file', new Blob([csvBody], { type: 'text/csv' }), 'data.csv')

    const res = await fetch(
      `https://api-metrika.yandex.net/management/v1/counter/${counter}/offline_conversions/upload?client_id_type=${params.yclid ? 'YCLID' : 'CLIENT_ID'}`,
      {
        method: 'POST',
        headers: {
          Authorization: `OAuth ${METRIKA_TOKEN}`,
        },
        body: formData,
      }
    )
    const result = await res.json()
    console.log(`[amo-poll] Metrika [${counter}] result:`, JSON.stringify(result))
    return result
  } catch (error) {
    console.error('Metrika upload error:', error)
    return null
  }
}

export async function GET(req: NextRequest) {
  try {
    // Auth check
    if (CRON_SECRET) {
      const url = new URL(req.url)
      if (url.searchParams.get('secret') !== CRON_SECRET) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
    }

    // Get leads updated in the last 2 hours (overlap to avoid gaps)
    const twoHoursAgo = Math.floor(Date.now() / 1000) - 7200
    const leads = await getRecentLeads(twoHoursAgo)

    const state = loadState()
    const results: any[] = []
    let sent = 0
    let skipped = 0
    let deduped = 0

    for (const lead of leads) {
      const statusId = lead.status_id
      const goalTarget = STATUS_TO_GOAL[statusId]

      if (!goalTarget) {
        skipped++
        continue
      }

      const stateKey = `${lead.id}-${statusId}`
      if (state[stateKey]) {
        deduped++
        continue
      }

      // Extract yclid and clientId from custom fields
      let yclid: string | undefined
      let clientId: string | undefined
      let ymCounter: string | undefined

      if (lead.custom_fields_values) {
        for (const field of lead.custom_fields_values) {
          if (field.field_id === 1030691 || field.field_name === 'yclid') {
            yclid = field.values?.[0]?.value
          }
          if (field.field_id === 1030685 || field.field_name === 'ClientID' || field.field_name === '_ym_uid') {
            clientId = field.values?.[0]?.value
          }
          if (field.field_id === 1030687 || field.field_name === '_ym_counter') {
            ymCounter = field.values?.[0]?.value
          }
        }
      }

      if (!yclid && !clientId) {
        skipped++
        continue
      }

      const updatedAt = String(lead.updated_at || Math.floor(Date.now() / 1000))

      const conversionData = {
        yclid,
        clientId,
        target: goalTarget,
        revenue: goalTarget === 'sale' ? (lead.price || 0) : 0,
        dateTime: updatedAt,
      }

      const targetCounter = ymCounter === METRIKA_COUNTER_ADS ? METRIKA_COUNTER_ADS : METRIKA_COUNTER
      const result = await sendOfflineConversion({ ...conversionData, counter: targetCounter })

      if (result) {
        state[stateKey] = Date.now()
        sent++
        results.push({ leadId: lead.id, goal: goalTarget, counter: targetCounter, yclid: yclid || clientId })
      }
    }

    saveState(state)

    console.log(`[amo-poll] Leads: ${leads.length}, sent: ${sent}, skipped: ${skipped}, deduped: ${deduped}`)

    return NextResponse.json({
      ok: true,
      leads: leads.length,
      sent,
      skipped,
      deduped,
      results,
    })
  } catch (error) {
    console.error('amo-poll error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
