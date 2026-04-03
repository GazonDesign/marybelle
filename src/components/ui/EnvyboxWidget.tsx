'use client'

import { useEffect } from 'react'

/**
 * Envybox (CallbackKiller) — виджет обратного звонка.
 * Загружается глобально на десктопе (>=768px).
 * Виджет скрыт по умолчанию, показывается при вызове CallbackKillerApi.open()
 * из FloatingCTA или при автоматическом срабатывании Envybox.
 */
export default function EnvyboxWidget() {
  useEffect(() => {
    if (window.innerWidth < 768) return
    if (document.querySelector('script[data-envybox]')) return

    const envyScript = document.createElement('script')
    envyScript.src = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=45933bcf817cd4419c6d6867576a5000'
    envyScript.charset = 'UTF-8'
    envyScript.async = true
    envyScript.setAttribute('data-envybox', 'js')
    document.body.appendChild(envyScript)

    return () => {
      // Не удаляем при навигации — виджет должен жить глобально
    }
  }, [])

  return null
}
