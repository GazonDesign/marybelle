export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'

/*
  AmoCRM Webhook → Яндекс.Метрика Офлайн-конверсии

  Когда сделка в AmoCRM переходит в статус "Закрыто — УСПЕШНО",
  AmoCRM шлёт вебхук сюда. Мы берём yclid + сумму и отправляем
  офлайн-конверсию в Метрику. Директ видит revenue и оптимизирует.
*/

const AMO_SUBDOMAIN = process.env.AMO_SUBDOMAIN
const AMO_TOKEN = process.env.AMO_TOKEN
const METRIKA_TOKEN = process.env.METRIKA_OAUTH_TOKEN
const METRIKA_COUNTER = '106018856'

// Fetch lead details from AmoCRM to get yclid + revenue
async function getLeadDetails(leadId: string) {
  if (!AMO_SUBDOMAIN || !AMO_TOKEN) return null

  const res = await fetch(
    `https://${AMO_SUBDOMAIN}.amocrm.ru/api/v4/leads/${leadId}?with=contacts`,
    {
      headers: {
        Authorization: `Bearer ${AMO_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!res.ok) return null
  return res.json()
}

// Send offline conversion to Yandex Metrika
async function sendOfflineConversion(params: {
  yclid?: string
  clientId?: string
  target: string
  revenue: number
  dateTime: string
}) {
  if (!METRIKA_TOKEN) {
    console.warn('METRIKA_OAUTH_TOKEN not set, skipping offline conversion')
    return null
  }

  // Yandex Metrika Offline Conversions API
  // https://yandex.ru/dev/metrika/doc/api2/management/offline_conversion/upload.html

  const csvLines = ['ClientId,Target,DateTime,Price,Currency']

  if (params.yclid) {
    // yclid-based conversion (preferred — ties directly to Yandex Direct click)
    csvLines[0] = 'Yclid,Target,DateTime,Price,Currency'
    csvLines.push(
      `${params.yclid},${params.target},${params.dateTime},${params.revenue},RUB`
    )
  } else if (params.clientId) {
    // ClientID-based conversion (fallback)
    csvLines.push(
      `${params.clientId},${params.target},${params.dateTime},${params.revenue},RUB`
    )
  } else {
    console.warn('No yclid or clientId — cannot send offline conversion')
    return null
  }

  const csvBody = csvLines.join('\n')

  try {
    const res = await fetch(
      `https://api-metrika.yandex.net/management/v1/counter/${METRIKA_COUNTER}/offline_conversions/upload?client_id_type=${params.yclid ? 'YCLID' : 'CLIENT_ID'}`,
      {
        method: 'POST',
        headers: {
          Authorization: `OAuth ${METRIKA_TOKEN}`,
          'Content-Type': 'text/csv',
        },
        body: csvBody,
      }
    )

    const result = await res.json()
    console.log('Metrika offline conversion result:', JSON.stringify(result))
    return result
  } catch (error) {
    console.error('Metrika offline conversion error:', error)
    return null
  }
}

const AMO_WEBHOOK_SECRET = process.env.AMO_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret (pass as ?secret=xxx in AmoCRM webhook URL)
    if (AMO_WEBHOOK_SECRET) {
      const url = new URL(req.url)
      if (url.searchParams.get('secret') !== AMO_WEBHOOK_SECRET) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
    }

    // AmoCRM sends webhook as application/x-www-form-urlencoded
    const body = await req.text()
    const params = new URLSearchParams(body)

    // AmoCRM webhook format: leads[status][0][id], leads[status][0][status_id]
    // Status "Закрыто — УСПЕШНО" = status_id 142 (standard AmoCRM success status)
    const leadId =
      params.get('leads[status][0][id]') ||
      params.get('leads[update][0][id]')

    if (!leadId) {
      return NextResponse.json({ ok: true, skipped: 'no lead id' })
    }

    // Get full lead data from AmoCRM
    const lead = await getLeadDetails(leadId)
    if (!lead) {
      return NextResponse.json({ ok: true, skipped: 'lead not found' })
    }

    // Check if lead is in "success" status (status_id = 142 is standard "closed-won")
    const statusId = lead.status_id
    if (statusId !== 142) {
      return NextResponse.json({ ok: true, skipped: `status ${statusId} is not closed-won` })
    }

    // Extract yclid and clientId from custom fields
    let yclid: string | undefined
    let clientId: string | undefined
    const revenue = lead.price || 0 // AmoCRM lead budget field (id: 37715687 maps to lead.price)

    if (lead.custom_fields_values) {
      for (const field of lead.custom_fields_values) {
        if (field.field_name === 'yclid') {
          yclid = field.values?.[0]?.value
        }
        if (field.field_name === 'ClientID') {
          clientId = field.values?.[0]?.value
        }
      }
    }

    if (!yclid && !clientId) {
      return NextResponse.json({ ok: true, skipped: 'no yclid or clientId' })
    }

    // Format datetime for Metrika (ISO 8601)
    const dateTime = new Date().toISOString().replace('T', ' ').slice(0, 19)

    // Send offline conversion
    const result = await sendOfflineConversion({
      yclid,
      clientId,
      target: 'sale', // Goal name in Metrika
      revenue,
      dateTime,
    })

    console.log(`Offline conversion sent for lead ${leadId}: yclid=${yclid}, revenue=${revenue}`)

    return NextResponse.json({ ok: true, leadId, revenue, result })
  } catch (error) {
    console.error('AmoCRM webhook error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
