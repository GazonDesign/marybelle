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

    // CSS виджета — без него Envybox рендерится без стилей
    // media=print → браузер грузит CSS без блокировки рендера, onload переключает на all
    const envyCss = document.createElement('link')
    envyCss.rel = 'stylesheet'
    envyCss.href = 'https://cdn.envybox.io/widget/cbk.css'
    envyCss.media = 'print'
    envyCss.onload = () => { envyCss.media = 'all' }
    envyCss.setAttribute('data-envybox', 'css')
    document.head.appendChild(envyCss)

    const envyScript = document.createElement('script')
    envyScript.src = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=45933bcf817cd4419c6d6867576a5000'
    envyScript.charset = 'UTF-8'
    envyScript.async = true
    envyScript.setAttribute('data-envybox', 'js')
    envyScript.onload = () => {
      console.log('[Envybox] script loaded, CallbackKillerApi:', typeof (window as any).CallbackKillerApi)
    }
    document.body.appendChild(envyScript)

    return () => {
      // Не удаляем при навигации — виджет должен жить глобально
    }
  }, [])

  return null
}
