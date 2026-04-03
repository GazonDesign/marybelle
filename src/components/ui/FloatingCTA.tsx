'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, X, Send } from 'lucide-react'
import Link from 'next/link'
import { getTracking } from '@/lib/utm'
import PhoneInput from '@/components/ui/PhoneInput'

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileCTA, setShowMobileCTA] = useState(false)
  const [quizHeight, setQuizHeight] = useState(0)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Открытие попапа по клику на tel: ссылки (из PhoneClickInterceptor)
  useEffect(() => {
    const handleOpen = () => setIsCallbackOpen(true)
    window.addEventListener('openCallback', handleOpen)
    return () => window.removeEventListener('openCallback', handleOpen)
  }, [])

  // Watch for Marquiz popup appearing/disappearing
  useEffect(() => {
    function measureQuiz() {
      const el = document.querySelector('.marquiz-pops') as HTMLElement | null
      if (el && el.style.display !== 'none') {
        const rect = el.getBoundingClientRect()
        if (rect.height > 10) {
          setQuizHeight(rect.height + 8)
          return
        }
      }
      setQuizHeight(0)
    }

    const observer = new MutationObserver(() => measureQuiz())
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] })

    // Poll every 300ms — Marquiz animates in and external script timing varies
    const interval = setInterval(measureQuiz, 300)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  const handleCallback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          source: 'callback',
          page: window.location.pathname,
          ...getTracking(),
        }),
      })
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(29448140, 'reachGoal', 'form_submit_success')
      }
      // Envybox автозвонок — передаём номер, Envybox сам перезванивает клиенту
      const phone = formData.get('phone') as string
      const w = window as any
      if (phone && w.CallbackKillerApi) {
        w.CallbackKillerApi.requestCallback({ phone })
      }
    } catch { /* silent */ }
    setFormState('sent')
    form.reset()
    setTimeout(() => {
      setFormState('idle')
      setIsCallbackOpen(false)
    }, 2000)
  }

  return (
    <>
      {/* Desktop: floating buttons bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col gap-3 animate-fade-up">
            <a
              href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="https://t.me/JuliaDenisova71"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#2AABEE] text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Send size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">Telegram</span>
            </a>
            <a
              href="https://vk.com/im?sel=-marybelle.atelie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0077FF] text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7.007c.15-.455 0-.789-.648-.789h-2.145c-.546 0-.798.289-.948.607 0 0-1.108 2.701-2.677 4.456-.508.508-.739.67-1.016.67-.138 0-.34-.162-.34-.617V7.007c0-.546-.158-.789-.612-.789H10.05c-.34 0-.545.252-.545.491 0 .516.77.635.849 2.086v3.152c0 .69-.125.817-.397.817-.739 0-2.536-2.714-3.602-5.82C6.154 6.46 5.95 6.218 5.4 6.218H3.255c-.613 0-.736.289-.736.607 0 .568.693 3.387 3.225 7.114C7.427 16.822 9.92 18 12.194 18c1.362 0 1.53-.306 1.53-.833v-1.926c0-.613.129-.735.56-.735.318 0 .862.16 2.133 1.385 1.453 1.453 1.692 2.106 2.509 2.106h2.145c.613 0 .92-.306.743-.91-.194-.602-.893-1.475-1.819-2.511-.503-.594-1.256-1.234-1.485-1.554-.317-.41-.226-.593 0-.958 0 0 2.632-3.707 2.905-4.964z"/></svg>
              <span className="text-sm font-medium">VK</span>
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOKhnfmL8NoSlJR-8QBqTMS7oEkTPkRg7FV-H-DcmghVHUCNNH4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#168DE2] text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">Max</span>
            </a>
            <button
              onClick={() => {
                // Открываем Envybox — он соединяет звонок автоматически
                const envyBtn = document.querySelector('a.cbk-phone') as HTMLElement
                if (envyBtn) {
                  envyBtn.click()
                } else {
                  setIsCallbackOpen(true)
                }
                setIsOpen(false)
              }}
              className="flex items-center gap-3 bg-brand text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <Phone size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">Перезвоните мне</span>
            </button>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all ${
            isOpen ? 'bg-black/80 rotate-45' : 'bg-brand hover:scale-110'
          }`}
          aria-label="Связаться с нами"
        >
          {isOpen ? (
            <X size={24} className="text-white" strokeWidth={1.5} />
          ) : (
            <Phone size={24} className="text-white" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile: floating glass buttons */}
      <div
        className={`fixed left-0 right-0 z-40 md:hidden transition-all duration-500 ease-out ${
          showMobileCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ bottom: `${quizHeight}px` }}
      >
        <div className={`flex gap-2 justify-center px-3 pb-2 pt-2 ${
          quizHeight === 0 ? 'bg-white/60 backdrop-blur-xl border-t border-white/30 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]' : ''
        }`}>
          <a
            href="tel:+74952254444"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand/90 backdrop-blur-md text-white text-sm font-medium tracking-wide rounded-2xl shadow-lg"
          >
            <Phone size={16} strokeWidth={1.5} />
            Позвонить
          </a>
          <a
            href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366]/90 backdrop-blur-md text-white text-sm font-medium tracking-wide rounded-2xl shadow-lg"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            WhatsApp
          </a>
          <a
            href="https://t.me/JuliaDenisova71"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2AABEE]/90 backdrop-blur-md text-white text-sm font-medium tracking-wide rounded-2xl shadow-lg"
          >
            <Send size={16} strokeWidth={1.5} />
            Telegram
          </a>
          <button
            onClick={() => setIsCallbackOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand/15 backdrop-blur-md text-brand text-sm font-medium tracking-wide rounded-2xl shadow-lg border border-brand/30"
          >
            <Phone size={16} strokeWidth={1.5} />
            Заявка
          </button>
        </div>
      </div>

      {/* Callback Modal */}
      {isCallbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCallbackOpen(false)}
          />
          <div className="relative bg-white max-w-md w-full p-8 shadow-2xl animate-fade-up">
            <button
              onClick={() => setIsCallbackOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-black transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <h3 className="font-serif text-2xl text-black mb-2">Перезвоним за 2 минуты</h3>
            <p className="text-text-muted text-sm mb-6">
              Оставьте номер — мастер перезвонит и проконсультирует бесплатно.
            </p>

            <form onSubmit={handleCallback} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Ваше имя"
                className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors"
              />
              <PhoneInput
                name="phone"
                className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer disabled:opacity-60"
              >
                {formState === 'idle' && 'Жду звонка'}
                {formState === 'sending' && 'Отправка...'}
                {formState === 'sent' && 'Заявка принята!'}
              </button>
              <p className="text-text-muted text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <Link href="/politika-konfidencialnosti" className="underline hover:text-brand transition-colors">
                  политикой конфиденциальности
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
