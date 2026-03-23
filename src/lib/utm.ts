const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

export type UtmData = Partial<Record<typeof UTM_PARAMS[number], string>>

export interface TrackingData {
  utm: UtmData
  yclid?: string
  clientId?: string
}

// Save UTM params + yclid from URL to sessionStorage on first visit
export function captureUtm() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)

  // Capture UTM
  const hasUtm = UTM_PARAMS.some((p) => params.has(p))
  if (hasUtm) {
    const utm: UtmData = {}
    UTM_PARAMS.forEach((p) => {
      const val = params.get(p)
      if (val) utm[p] = val
    })
    sessionStorage.setItem('utm', JSON.stringify(utm))
  }

  // Capture yclid (Yandex Click ID) — crucial for offline conversions
  const yclid = params.get('yclid')
  if (yclid) {
    sessionStorage.setItem('yclid', yclid)
  }
}

// Get Yandex Metrika ClientID
function getClientId(): string | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    const ym = (window as any).ym
    if (!ym) return undefined
    let cid: string | undefined
    ym(106018856, 'getClientID', (clientID: string) => {
      cid = clientID
    })
    return cid
  } catch {
    return undefined
  }
}

// Get saved UTM params
export function getUtm(): UtmData {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem('utm')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// Get all tracking data for form submissions
export function getTracking(): TrackingData {
  if (typeof window === 'undefined') return { utm: {} }
  return {
    utm: getUtm(),
    yclid: sessionStorage.getItem('yclid') || undefined,
    clientId: getClientId(),
  }
}
