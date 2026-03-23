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
      '/uslugi/perekroj',
      '/uslugi/poshiv-shub',
      '/uslugi/remont-shub-vojkovskaya',
      '/uslugi/okrashivanie',
      '/magazin',
      '/magazin/shuby/norka',
      '/magazin/shuby/sobol',
      '/magazin/shuby/karakul',
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
        window.Marquiz!.init(activeQuiz.init)
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          window.Marquiz!.init(activeQuiz.init)
        })
      }
    }
    document.head.insertBefore(script, document.head.firstElementChild)

    // --- 2. Код баннера (marquizLoaded — официальный паттерн) ---
    const addPop = () => {
      patchNextDomForMarquiz()
      window.Marquiz!.add(['Pop', activeQuiz.pop])
    }

    const onMarquizLoaded = () => addPop()
    document.addEventListener('marquizLoaded', onMarquizLoaded)

    if (window.Marquiz) {
      addPop()
    }

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
      document.querySelectorAll('[class*="marquiz"]').forEach((el) => el.remove())
      delete (window as any).Marquiz
    }
  }, [pathname])

  return null
}
