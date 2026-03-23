'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'
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
        (window as any).ym(106018856, 'reachGoal', 'form_submit_success')
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
            <button
              onClick={() => { setIsCallbackOpen(true); setIsOpen(false) }}
              className="flex items-center gap-3 bg-brand text-white pl-5 pr-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
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
          <button
            onClick={() => setIsCallbackOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100/80 backdrop-blur-md text-brand text-sm font-medium tracking-wide rounded-2xl shadow-lg border border-gray-200/50"
          >
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
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
