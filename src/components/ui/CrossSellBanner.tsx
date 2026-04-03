'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { getTracking } from '@/lib/utm'
import PhoneInput from '@/components/ui/PhoneInput'

/* ─────────────────────────────────────────────
   Cross-Sell Banner — баннер смежной услуги
   на страницах Химчистка / Холодильник / Окрашивание
   ───────────────────────────────────────────── */

interface CrossSellBannerProps {
  currentService: 'himchistka' | 'mehovoj-holodilnik' | 'okrashivanie'
}

interface BannerData {
  tag: string
  title: string
  description: string
  utp?: string
  cta: string
  href: string
  image: string
  gradient: string
  /** popup = форма обратной связи */
  popup?: boolean
  popupTitle?: string
  popupInfo?: string
  popupCta?: string
  /** quiz = открыть Marquiz */
  quiz?: boolean
  quizId?: string
}

const QUIZ_HOLODILNIK = '69a5814256a96f00193eb8c6'

const allBanners: Record<string, BannerData> = {
  himchistka: {
    tag: 'Бережный уход',
    title: 'Химчистка меха и кожи',
    description:
      'Безопасные составы, дезинсекция, восстановление блеска. Ваша шуба — как новая.',
    cta: 'Заказать химчистку',
    href: '/uslugi/himchistka',
    image: '/images/himchistka/banner-bg.jpg',
    gradient: 'from-emerald-900/80 via-emerald-900/50 to-transparent',
    popup: true,
    popupTitle: 'Закажите химчистку шубы',
    popupInfo: 'Безопасные составы, дезинсекция, восстановление блеска. Мастер осмотрит изделие и назовёт точную стоимость. Консультация бесплатная.',
    popupCta: 'Заказать химчистку',
  },
  'mehovoj-holodilnik': {
    tag: 'Хранение +5 °C',
    title: 'Меховой холодильник',
    description:
      'Идеальный климат, защита от моли, страховка изделия.',
    utp: 'Курьер заберёт от 3-х шуб — бесплатно',
    cta: 'Сдать на хранение',
    href: '/uslugi/mehovoj-holodilnik',
    image: '/images/holodilnik/hero-new.jpg',
    gradient: 'from-sky-950/80 via-sky-950/50 to-transparent',
    quiz: true,
    quizId: QUIZ_HOLODILNIK,
  },
  okrashivanie: {
    tag: 'Новый цвет',
    title: 'Окрашивание меха',
    description:
      'Полное окрашивание, тонирование, эффект омбре. Стойкие красители, ровный цвет.',
    cta: 'Заказать окрашивание',
    href: '/uslugi/okrashivanie',
    image: '/images/okrashivanie/Гл-Индивидуальный-пошив.jpg',
    gradient: 'from-amber-950/80 via-amber-950/50 to-transparent',
    popup: true,
    popupTitle: 'Закажите окрашивание меха',
    popupInfo: 'Полное окрашивание, тонирование, эффект омбре. Стойкие красители европейского производства. Мастер подберёт оттенок под ваш стиль.',
    popupCta: 'Заказать окрашивание',
  },
}

const recommendations: Record<string, string[]> = {
  himchistka: ['mehovoj-holodilnik', 'okrashivanie'],
  'mehovoj-holodilnik': ['himchistka', 'okrashivanie'],
  okrashivanie: ['himchistka', 'mehovoj-holodilnik'],
}

export default function CrossSellBanner({ currentService }: CrossSellBannerProps) {
  const bannerKeys = recommendations[currentService] || []
  const [active, setActive] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const banner = allBanners[bannerKeys[active]]
  if (!banner) return null

  // Scroll-triggered entrance
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          if (imageRef.current) {
            gsap.fromTo(
              imageRef.current,
              { scale: 1.2, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out' },
            )
          }

          if (contentRef.current) {
            gsap.fromTo(
              Array.from(contentRef.current.children),
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 },
            )
          }
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Close popup on Escape
  useEffect(() => {
    if (!showPopup) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPopup(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [showPopup])

  // Switch between banners
  const switchBanner = (index: number) => {
    if (index === active) return

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(index)
        requestAnimationFrame(() => {
          if (imageRef.current) {
            gsap.fromTo(
              imageRef.current,
              { scale: 1.1, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
            )
          }
          if (contentRef.current) {
            gsap.fromTo(
              Array.from(contentRef.current.children),
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.1 },
            )
          }
        })
      },
    })

    if (contentRef.current) {
      tl.to(Array.from(contentRef.current.children), {
        y: -20,
        opacity: 0,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power2.in',
      })
    }

    if (imageRef.current) {
      tl.to(imageRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '<')
    }
  }

  // CTA click handler
  const handleCtaClick = (e: React.MouseEvent) => {
    if (banner.popup) {
      e.preventDefault()
      setShowPopup(true)
    } else if (banner.quiz && banner.quizId) {
      e.preventDefault()
      window.open(`https://quiz.marquiz.ru/quiz/${banner.quizId}`, '_blank')
    }
  }

  // Popup form submit
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
          message: `Заявка с кросс-сейл баннера: ${banner.title}`,
          source: 'callback',
          page: window.location.pathname,
          ...getTracking(),
        }),
      })
      setFormState('sent')
      form.reset()
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(29448140, 'reachGoal', 'form_submit_success')
      }
      const phone = formData.get('phone') as string
      const w = window as any
      if (phone && w.CallbackKillerApi) {
        w.CallbackKillerApi.requestCallback({ phone })
      }
    } catch {
      setFormState('sent')
    }
    setTimeout(() => {
      setFormState('idle')
      setShowPopup(false)
    }, 3000)
  }

  return (
    <>
      <section ref={sectionRef} className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section heading */}
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Вам также может быть интересно</span>
          </div>

          {/* Banner card */}
          <div className="relative rounded-sm overflow-hidden group" style={{ minHeight: 380 }}>
            {/* BG Image */}
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-top will-change-transform transition-transform duration-[3000ms] group-hover:scale-105"
              style={{ backgroundImage: `url(${banner.image})` }}
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 flex items-center min-h-[380px] p-8 md:p-14">
              <div ref={contentRef} className="max-w-md">
                {/* Tag */}
                <span className="inline-block mb-3 text-[11px] tracking-[0.25em] uppercase text-white/60 border-b border-white/20 pb-1">
                  {banner.tag}
                </span>

                {/* Title */}
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  {banner.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-5">
                  {banner.description}
                </p>

                {/* UTP accent */}
                {banner.utp && (
                  <div className="mb-8 inline-flex items-center gap-3 px-5 py-3 bg-white/15 backdrop-blur-sm border-2 border-white/60">
                    <span className="text-white text-lg md:text-2xl font-serif tracking-wide">
                      {banner.utp}
                    </span>
                  </div>
                )}

                {/* CTA */}
                {(banner.popup || banner.quiz) ? (
                  <button
                    onClick={handleCtaClick}
                    className="inline-block px-10 py-3.5 bg-brand text-white font-light tracking-widest text-sm btn-shimmer cursor-pointer"
                  >
                    {banner.cta}
                  </button>
                ) : (
                  <Link
                    href={banner.href}
                    className="inline-block px-10 py-3.5 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
                  >
                    {banner.cta}
                  </Link>
                )}
              </div>
            </div>

            {/* Toggle if 2 banners */}
            {bannerKeys.length > 1 && (
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex gap-2">
                {bannerKeys.map((key, i) => (
                  <button
                    key={key}
                    onClick={() => switchBanner(i)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                      i === active
                        ? 'border-white bg-white/20 text-white'
                        : 'border-white/30 bg-black/20 text-white/50 hover:border-white/60 hover:text-white/80'
                    }`}
                    aria-label={allBanners[key].title}
                  >
                    <span className="text-xs font-light">{i + 1}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popup form — Меховой холодильник */}
      {showPopup && banner.popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white w-full max-w-md mx-4 p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-black transition-colors text-xl cursor-pointer"
              aria-label="Закрыть"
            >
              &times;
            </button>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-4 pr-8 leading-tight">
              {banner.popupTitle}
            </h3>

            {/* UTP accent */}
            {banner.utp && (
              <div className="mb-5 px-4 py-3 bg-brand/10 border-2 border-brand">
                <span className="text-brand font-serif text-lg md:text-xl">
                  {banner.utp}
                </span>
              </div>
            )}

            {/* Info */}
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              {banner.popupInfo}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors text-base"
                />
              </div>
              <div>
                <PhoneInput
                  name="phone"
                  className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-brand transition-colors text-base"
                />
              </div>
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer disabled:opacity-60"
              >
                {formState === 'idle' && (banner.popupCta || 'Отправить')}
                {formState === 'sending' && 'Отправка...'}
                {formState === 'sent' && 'Спасибо! Мы свяжемся с вами.'}
              </button>
            </form>

            <p className="mt-4 text-[11px] text-text-light text-center leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/politika-konfidencialnosti" className="underline hover:text-brand" target="_blank">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
