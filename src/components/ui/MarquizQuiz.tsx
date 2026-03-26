'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/*
  Квиз 1: Меховые изделия — скидка 45% (id: 68869cc6ed329700199fff28)
  Квиз 2: Кожа и дублёнки — скидка 35% (id: 6925ef277deeb20019fe0baf)
  Квиз 3: Меховой холодильник           (id: 69a5814256a96f00193eb8c6)
  Квиз 4: Пошив кожаных изделий — 25%   (id: 69a848a4d655e300194ae5f6)

  Коды взяты из платформы Marquiz и адаптированы
  под динамическую загрузку в Next.js (SPA-навигация).
*/

const quizConfig = [
  {
    // КВИЗ 1: МЕХОВЫЕ ИЗДЕЛИЯ — скидка 45%
    paths: [
      '/',
      '/uslugi',
      '/uslugi/remont-shub',
      '/uslugi/remont-shub/norkovye',
      '/uslugi/remont-shub/sobolinye',
      '/uslugi/perekroj',
      '/uslugi/poshiv-shub',
      '/uslugi/poshiv-shub/iz-sobolya',
      '/uslugi/poshiv-shub/iz-norki',
      '/uslugi/remont-shub-vojkovskaya',
      '/uslugi/okrashivanie',
      '/magazin',
      '/magazin/shuby/norka',
      '/magazin/shuby/sobol',
      '/magazin/shuby/karakul',
      '/magazin/bolshie-razmery',
      '/trejd-in',
      '/portfolio',
    ],
    init: {
      host: '//quiz.marquiz.ru',
      region: 'ru',
      id: '68869cc6ed329700199fff28',
      autoOpen: 17,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false,
    },
    pop: {
      id: '68869cc6ed329700199fff28',
      title: 'Рассчитать стоимость работ',
      text: 'Получить скидку 45%',
      delay: 7,
      textColor: '#ffffff',
      bgColor: '#916119',
      svgColor: '#ffffff',
      closeColor: '#ffffff',
      bonusCount: 0,
      bonusText: 'Ваша скидка: 45%',
      type: 'side',
      position: 'position_bottom-left',
      rounded: true,
      shadow: true,
      blicked: true,
      pulse: false,
      disableOnMobile: false,
    },
  },
  {
    // КВИЗ 2: КОЖА И ДУБЛЁНКИ — скидка 35%
    paths: [
      '/uslugi/remont-kozhi',
      '/uslugi/remont-brendovoj-odezhdy',
      '/uslugi/remont-palto',
    ],
    init: {
      host: '//quiz.marquiz.ru',
      region: 'ru',
      id: '6925ef277deeb20019fe0baf',
      autoOpen: 12,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false,
    },
    pop: {
      id: '6925ef277deeb20019fe0baf',
      title: 'Рассчитать стоимость работ',
      text: 'Получить скидку 35%',
      delay: 7,
      textColor: '#ffffff',
      bgColor: '#a07031',
      svgColor: '#ffffff',
      closeColor: '#ffffff',
      bonusCount: 0,
      bonusText: 'Ваша скидка: 35%',
      type: 'side',
      position: 'position_bottom-left',
      rounded: true,
      shadow: true,
      blicked: true,
      pulse: false,
      disableOnMobile: false,
    },
  },
  {
    // КВИЗ 3: МЕХОВОЙ ХОЛОДИЛЬНИК
    paths: [
      '/uslugi/mehovoj-holodilnik',
      '/uslugi/himchistka',
    ],
    init: {
      host: '//quiz.marquiz.ru',
      region: 'ru',
      id: '69a5814256a96f00193eb8c6',
      autoOpen: 18,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false,
    },
    pop: {
      id: '69a5814256a96f00193eb8c6',
      title: 'Рассчитать стоимость хранения',
      text: 'Получить скидку 35%',
      delay: 7,
      textColor: '#ffffff',
      bgColor: '#772c00',
      svgColor: '#ffffff',
      closeColor: '#ffffff',
      bonusCount: 0,
      bonusText: 'Ваша скидка: 35%',
      type: 'side',
      position: 'position_bottom-left',
      rounded: true,
      shadow: true,
      blicked: true,
      pulse: false,
      disableOnMobile: false,
    },
  },
  {
    // КВИЗ 4: ПОШИВ КОЖАНЫХ ИЗДЕЛИЙ — скидка 25%
    paths: [
      '/magazin/kozha',
    ],
    init: {
      host: '//quiz.marquiz.ru',
      region: 'ru',
      id: '69a848a4d655e300194ae5f6',
      autoOpen: 16,
      autoOpenFreq: 'once',
      openOnExit: true,
      disableOnMobile: false,
    },
    pop: {
      id: '69a848a4d655e300194ae5f6',
      title: 'Скидка на пошив 25%',
      text: 'Получить скидку - заполнить',
      delay: 7,
      textColor: '#ffffff',
      bgColor: '#be6406',
      svgColor: '#ffffff',
      closeColor: '#ffffff',
      bonusCount: 0,
      bonusText: 'Ваша скидка: 35%',
      type: 'side',
      position: 'position_bottom-left',
      rounded: true,
      shadow: true,
      blicked: true,
      pulse: false,
      disableOnMobile: false,
    },
  },
]

declare global {
  interface Window {
    Marquiz?: {
      init: (options: any) => void
      add: (args: any[]) => void
    }
  }
}

/**
 * Marquiz v2.js конфликтует с Next.js: при обходе DOM скрипт
 * пытается записать свойство __NA на элемент, у которого Next.js
 * установил __NA = "" (пустая строка). Патчим это.
 */
function patchNextDomForMarquiz() {
  if (!(window as any).__marquizErrorPatched) {
    ;(window as any).__marquizErrorPatched = true
    window.addEventListener('error', (e) => {
      if (
        e.message?.includes('__NA') &&
        e.filename?.includes('marquiz')
      ) {
        e.preventDefault()
        return true
      }
    })
  }

  document.querySelectorAll('*').forEach((el) => {
    if ((el as any).__NA === '') {
      ;(el as any).__NA = {}
    }
  })
}

export default function MarquizQuiz() {
  const pathname = usePathname()

  useEffect(() => {
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')

    const activeQuiz = quizConfig.find((config) =>
      config.paths.includes(normalizedPath)
    )

    if (!activeQuiz) return

    // AIDA-подстраницы: увеличенный таймер автооткрытия (пользователь дольше читает)
    const aidaPages = [
      '/uslugi/remont-shub/norkovye',
      '/uslugi/remont-shub/sobolinye',
      '/uslugi/poshiv-shub/iz-sobolya',
      '/uslugi/poshiv-shub/iz-norki',
    ]
    const isAidaPage = aidaPages.includes(normalizedPath)
    const initOverride = isAidaPage
      ? { ...activeQuiz.init, autoOpen: 25 }
      : activeQuiz.init
    const popOverride = isAidaPage
      ? { ...activeQuiz.pop, delay: 8 }
      : activeQuiz.pop

    // --- Envybox: загружаем на страницах с квизом (десктоп/планшет) ---
    let envyCleanup: (() => void) | null = null
    if (window.innerWidth >= 768 && !document.querySelector('script[data-envybox]')) {
      const style = document.createElement('style')
      style.setAttribute('data-envybox', 'style')
      style.textContent = [
        '[class*="callbackkiller"] { opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; overflow: hidden !important; position: fixed !important; left: -9999px !important; }',
        '[class*="callbackkiller"][class*="open"], [class*="callbackkiller"][class*="active"], [class*="callbackkiller"][class*="showed"] { opacity: 1 !important; pointer-events: auto !important; width: auto !important; height: auto !important; overflow: visible !important; left: auto !important; }',
      ].join('\n')
      document.head.appendChild(style)

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.envybox.io/widget/cbk.css'
      link.setAttribute('data-envybox', 'css')
      document.head.appendChild(link)

      const envyScript = document.createElement('script')
      envyScript.src = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=45933bcf817cd4419c6d6867576a5000'
      envyScript.charset = 'UTF-8'
      envyScript.async = true
      envyScript.setAttribute('data-envybox', 'js')
      document.body.appendChild(envyScript)

      envyCleanup = () => {
        style.remove()
        link.remove()
        envyScript.remove()
      }
    }

    // Очистка предыдущего Marquiz
    document.querySelectorAll('script[data-marquiz]').forEach((el) => el.remove())
    document.querySelectorAll('[class*="marquiz"]').forEach((el) => el.remove())
    delete (window as any).Marquiz

    patchNextDomForMarquiz()

    // --- 1. Код инициализации (в head, как в официальной инструкции) ---
    const script = document.createElement('script')
    script.async = true
    script.src = '//script.marquiz.ru/v2.js'
    script.setAttribute('data-marquiz', activeQuiz.init.id)
    script.onload = function () {
      patchNextDomForMarquiz()

      if (document.readyState !== 'loading') {
        window.Marquiz!.init(initOverride)
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          window.Marquiz!.init(initOverride)
        })
      }
    }
    document.head.insertBefore(script, document.head.firstElementChild)

    // --- 2. Код баннера (marquizLoaded — официальный паттерн) ---
    const addPop = () => {
      patchNextDomForMarquiz()
      window.Marquiz!.add(['Pop', popOverride])
    }

    const onMarquizLoaded = () => addPop()
    document.addEventListener('marquizLoaded', onMarquizLoaded)

    if (window.Marquiz) {
      addPop()
    }

    // Marquiz → Envybox: после отправки квиза передаём номер в Envybox для автозвонка
    const onMarquizSubmit = (e: any) => {
      const phone = e?.detail?.phone || e?.data?.phone
      const w = window as any
      if (phone && w.CallbackKillerApi) {
        w.CallbackKillerApi.requestCallback({ phone })
      }
    }
    document.addEventListener('marquizSubmit', onMarquizSubmit)
    // Marquiz также шлёт postMessage из iframe
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === 'marquizSubmit' && e.data?.phone) {
        const w = window as any
        if (w.CallbackKillerApi) {
          w.CallbackKillerApi.requestCallback({ phone: e.data.phone })
        }
      }
    }
    window.addEventListener('message', onMessage)

    // MutationObserver: патчим __NA на новых элементах
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement && (node as any).__NA === '') {
            ;(node as any).__NA = {}
          }
        }
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      script.remove()
      observer.disconnect()
      document.removeEventListener('marquizLoaded', onMarquizLoaded)
      document.removeEventListener('marquizSubmit', onMarquizSubmit)
      window.removeEventListener('message', onMessage)
      document.querySelectorAll('[class*="marquiz"]').forEach((el) => el.remove())
      delete (window as any).Marquiz
      if (envyCleanup) envyCleanup()
    }
  }, [pathname])

  return null
}
