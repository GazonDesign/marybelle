'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

function StatCounter({ value, suffix, label, visible }: {
  value: number; suffix: string; label: string; visible: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!visible || hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const duration = 2000
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [visible, value])

  return (
    <div className="p-6 text-center">
      <span className="block font-serif text-4xl md:text-5xl text-brand mb-2">
        {count.toLocaleString('ru-RU')}{suffix}
      </span>
      <span className="text-text-muted text-sm tracking-wide uppercase">{label}</span>
    </div>
  )
}

export default function SubHeroSection() {
  const section = useInView(0.2)
  const stats = useInView(0.3)

  return (
    <section ref={section.ref} className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`relative z-10 transition-all duration-1000 ${
              section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase">
              Наша философия
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black leading-tight mb-6">
              Искусство, передаваемое{'\n'}из поколения в поколение
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Мы создаём, реставрируем и перекраиваем шубы по технологии,
              отработанной на тысячах изделий. Каждое изделие проходит строгий
              контроль — от приёма до выдачи.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Наше производство — это современное оборудование для меха,
              собственные стандарты качества, передача мастерства из поколения
              в поколение.
            </p>
            <Link
              href="/o-fabrike"
              className="inline-flex items-center gap-2 text-brand font-medium tracking-wide hover:gap-4 transition-all duration-300"
            >
              Узнать больше о фабрике
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>

          {/* Images */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <div
              className="absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden shadow-2xl"
              style={{
                clipPath: section.isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
                transition: 'clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1) 0.2s',
              }}
            >
              <img
                src="/images/subhero-1.jpg"
                alt="Mary Belle — мастерство"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden shadow-2xl"
              style={{
                clipPath: section.isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                transition: 'clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1) 0.6s',
              }}
            >
              <img
                src="/images/subhero-2.jpg"
                alt="Mary Belle — качество"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative */}
            <div
              className="absolute top-[10%] left-[-5%] w-32 h-32 border border-brand/20"
              style={{
                opacity: section.isVisible ? 1 : 0,
                transform: section.isVisible ? 'scale(1)' : 'scale(0.6)',
                transition: 'all 1.2s cubic-bezier(0.33, 1, 0.68, 1) 1s',
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={stats.ref} className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-20 lg:mt-32">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 transition-all duration-700 delay-300 ${
            stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: 150, suffix: '+', label: 'Лет истории' },
            { value: 50000, suffix: '+', label: 'Довольных клиентов' },
            { value: 15, suffix: '+', label: 'Лет опыта мастеров' },
            { value: 6, suffix: '', label: 'Направлений услуг' },
          ].map((stat, i) => (
            <div key={i} className={i < 3 ? 'border-r border-border-light' : ''}>
              <StatCounter {...stat} visible={stats.isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
