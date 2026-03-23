'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { getTracking } from '@/lib/utm'
import PhoneInput from '@/components/ui/PhoneInput'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          message: formData.get('message'),
          source: 'contact',
          page: window.location.pathname,
          ...getTracking(),
        }),
      })
      setFormState('sent')
      form.reset()
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(106018856, 'reachGoal', 'form_submit_success')
      }
    } catch {
      setFormState('sent')
    }
    setTimeout(() => setFormState('idle'), 3000)
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase">
              Контакты
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Получите бесплатную консультацию от наших мастеров. Мы ответим
              на все ваши вопросы и поможем выбрать оптимальное решение.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-text-body">Адрес</p>
                  <a
                    href="https://yandex.ru/maps/-/CLQ-yI2e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-brand transition-colors block"
                  >
                    Москва, 1-Новоподмосковный пер., дом 2/1
                  </a>
                  <p className="text-text-muted text-sm">5 минут от м. Войковская</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-brand mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-text-body">Телефон</p>
                  <a href="tel:+74952254444" className="text-text-muted hover:text-brand transition-colors block">
                    +7 (495) 225-44-44
                  </a>
                  <a href="tel:+79670555978" className="text-text-muted hover:text-brand transition-colors block">
                    +7 (967) 055-59-78
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-brand mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-text-body">Режим работы</p>
                  <p className="text-text-muted">Пн–Пт: 11:00–20:00</p>
                  <p className="text-text-muted">Сб–Вс: 12:00–18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-body mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Введите имя"
                  className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-body mb-2">
                  Телефон или email
                </label>
                <PhoneInput
                  name="phone"
                  className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-body mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Расскажите о вашем запросе..."
                  className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors text-base resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-brand text-white font-light tracking-widest text-sm btn-hover disabled:opacity-60"
              >
                {formState === 'idle' && 'Отправить заявку'}
                {formState === 'sending' && 'Отправка...'}
                {formState === 'sent' && 'Спасибо! Мы свяжемся с вами.'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
