'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { getTracking } from '@/lib/utm'
import PhoneInput from '@/components/ui/PhoneInput'

/* ─────────────────────────────────────────────
   Hero Banner Carousel — GSAP-анимированная
   ротация баннеров на главной странице
   ───────────────────────────────────────────── */

interface Slide {
  tag: string
  title: string
  subtitle: string
  accent?: string
  cta: string
  href: string
  image: string
  popup?: boolean
  /** Если true — CTA открывает квиз Marquiz */
  quiz?: boolean
  quizId?: string
}

const QUIZ_HOLODILNIK = '69a5814256a96f00193eb8c6'
const QUIZ_FUR = '68869cc6ed329700199fff28'

const slides: Slide[] = [
  {
    tag: 'Специальное хранение',
    title: 'Меховой холодильник',
    subtitle: 'Хранение шуб при +5 °C и влажности 50–60 %. Защита от моли, страховка изделия.',
    accent: 'Курьер заберёт от 3-х шуб — бесплатно',
    cta: 'Сдать на хранение',
    href: '/uslugi/mehovoj-holodilnik',
    image: '/images/holodilnik/hero-new.jpg',
    popup: true,
  },
  {
    tag: 'Реставрация любой сложности',
    title: 'Ремонт шуб',
    subtitle: 'Замена подкладки, ремонт швов, перекрой — норка, соболь, каракуль. Гарантия на все работы.',
    cta: 'Рассчитать стоимость',
    href: '/uslugi/remont-shub',
    image: '/images/hero-remont-shub.jpg',
    popup: true,
  },
  {
    tag: 'Бережный уход',
    title: 'Химчистка меха',
    subtitle: 'Профессиональная чистка шуб, дублёнок и кожи. Безопасные составы, восстановление блеска.',
    cta: 'Заказать химчистку',
    href: '/uslugi/himchistka',
    image: '/images/himchistka/banner-bg.jpg',
    popup: true,
  },
]

const SLIDE_DURATION = 6000
const TRANSITION_SPEED = 1.2

export default function HeroBannerCarousel() {
  const [current, setCurrent] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isAnimating = useRef(false)

  useEffect(() => {
    setIsReady(true)
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

  // Pause autoplay when popup is open
  useEffect(() => {
    if (showPopup && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [showPopup])

  const animateProgress = useCallback(() => {
    if (!progressRef.current) return
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: SLIDE_DURATION / 1000, ease: 'none' },
    )
  }, [])

  const animateSlide = useCallback(
    (index: number, direction: 1 | -1 = 1) => {
      if (isAnimating.current || !textRef.current || !imageRef.current) return
      isAnimating.current = true

      const textEls = textRef.current.children
      const xOut = direction === 1 ? -60 : 60
      const xIn = direction === 1 ? 60 : -60

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrent(index)

          requestAnimationFrame(() => {
            if (!textRef.current || !imageRef.current) return

            const newTextEls = textRef.current.children

            gsap.fromTo(
              imageRef.current,
              { scale: 1.15, opacity: 0 },
              { scale: 1, opacity: 1, duration: TRANSITION_SPEED, ease: 'power3.out' },
            )

            gsap.fromTo(
              Array.from(newTextEls),
              { x: xIn, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                delay: 0.2,
                onComplete: () => {
                  isAnimating.current = false
                  animateProgress()
                },
              },
            )
          })
        },
      })

      tl.to(Array.from(textEls), {
        x: xOut,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.in',
      })

      tl.to(
        imageRef.current,
        { scale: 1.08, opacity: 0, duration: 0.6, ease: 'power2.in' },
        '<0.1',
      )
    },
    [animateProgress],
  )

  // Auto-advance timer
  useEffect(() => {
    if (showPopup) return

    animateProgress()

    timerRef.current = setInterval(() => {
      const next = (current + 1) % slides.length
      animateSlide(next, 1)
    }, SLIDE_DURATION)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [current, animateSlide, animateProgress, showPopup])

  const goTo = (index: number) => {
    if (index === current || isAnimating.current) return
    if (timerRef.current) clearInterval(timerRef.current)
    gsap.killTweensOf(progressRef.current)
    animateSlide(index, index > current ? 1 : -1)
  }

  const handleCtaClick = (e: React.MouseEvent) => {
    const s = slides[current]
    if (s.popup) {
      e.preventDefault()
      setShowPopup(true)
    } else if (s.quiz && s.quizId) {
      e.preventDefault()
      window.open(`https://quiz.marquiz.ru/quiz/${s.quizId}`, '_blank')
    }
  }

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
          message: `Заявка с баннера главной: ${slides[current].title}`,
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

  const slide = slides[current]

  return (
    <>
      {/* Strip */}
      <div className="bg-white py-5 flex items-center justify-center">
        <span className="text-[11px] tracking-[0.35em] uppercase text-text-muted font-light">
          Самое популярное прямо сейчас
        </span>
      </div>

      {/* Banner */}
      <div className="bg-white px-6 md:px-12 pb-8">
        <section
          ref={containerRef}
          className="relative max-w-[1400px] mx-auto overflow-hidden rounded-sm"
          style={{ height: 'min(70vh, 600px)' }}
        >
        {/* Background Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-top will-change-transform"
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
            <div
              ref={textRef}
              className={`max-w-2xl transition-all duration-1000 ${
                isReady ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Tag */}
              <span className="inline-block mb-4 px-4 py-1.5 border border-white/30 text-white/80 text-xs tracking-[0.25em] uppercase backdrop-blur-sm">
                {slide.tag}
              </span>

              {/* Title */}
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6">
                {slide.subtitle}
              </p>

              {/* CTA Button */}
              <div className="mb-4">
              {(slide.popup || slide.quiz) ? (
                <button
                  onClick={handleCtaClick}
                  className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer cursor-pointer"
                >
                  {slide.cta}
                </button>
              ) : (
                <Link
                  href={slide.href}
                  className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
                >
                  {slide.cta}
                </Link>
              )}
              </div>

              {/* Accent UTP */}
              {slide.accent && (
                <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand/60 bg-black/40 backdrop-blur-md">
                  <span className="text-white text-sm md:text-base font-serif tracking-wide whitespace-nowrap">
                    {slide.accent}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slide indicators — simple bars at bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="cursor-pointer"
              aria-label={`Слайд ${i + 1}: ${s.title}`}
            >
              <div
                className={`relative h-[3px] rounded-full overflow-hidden transition-all duration-500 ${
                  i === current ? 'w-12 bg-white/30' : 'w-6 bg-white/20 hover:bg-white/40'
                }`}
              >
                {i === current && (
                  <div
                    ref={i === current ? progressRef : undefined}
                    className="absolute inset-0 bg-white origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </section>
      </div>

      {/* Popup — форма обратной связи */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white w-full max-w-md mx-4 p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-black transition-colors text-xl cursor-pointer"
              aria-label="Закрыть"
            >
              &times;
            </button>

            <h3 className="font-serif text-2xl md:text-3xl text-black mb-4 pr-8 leading-tight">
              Закажите химчистку шубы
            </h3>

            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Безопасные составы, дезинсекция, восстановление блеска. Мастер осмотрит изделие и назовёт точную стоимость. Консультация бесплатная.
            </p>

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
                {formState === 'idle' && 'Отправить заявку'}
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
