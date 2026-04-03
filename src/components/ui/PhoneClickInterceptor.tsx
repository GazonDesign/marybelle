'use client'

import { useEffect } from 'react'

/**
 * Глобальный перехватчик кликов по tel: ссылкам.
 * На десктопе (≥768px) — открывает Envybox вместо набора номера.
 * На мобилке — не вмешивается, tel: работает как обычно.
 */
export default function PhoneClickInterceptor() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (window.innerWidth < 768) return

      const target = (e.target as HTMLElement).closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!target) return

      e.preventDefault()
      const w = window as any
      if (w.CallbackKillerApi) {
        w.CallbackKillerApi.open()
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
