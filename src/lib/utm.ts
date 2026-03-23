const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

export type UtmData = Partial<Record<typeof UTM_PARAMS[number], string>>

// Save UTM params from URL to sessionStorage on first visit
export function captureUtm() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const hasUtm = UTM_PARAMS.some((p) => params.has(p))
  if (hasUtm) {
    const utm: UtmData = {}
    UTM_PARAMS.forEach((p) => {
      const val = params.get(p)
      if (val) utm[p] = val
    })
    sessionStorage.setItem('utm', JSON.stringify(utm))
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
