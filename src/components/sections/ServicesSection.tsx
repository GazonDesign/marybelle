'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Ремонт шуб',
    description: 'Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой. Мастера с опытом от 15 лет.',
    image: '/images/product-norka.jpg',
    href: '/uslugi/remont-shub',
    icon: '/icons/services/repair.svg',
  },
  {
    title: 'Ремонт кожи и дублёнок',
    description: 'Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация потёртостей.',
    image: '/images/product-kozha.jpg',
    href: '/uslugi/remont-kozhi',
    icon: '/icons/services/leather.svg',
  },
  {
    title: 'Индивидуальный пошив',
    description: 'Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой, мех от Kopenhagen Fur и NAFA.',
    image: '/images/product-sobol.jpg',
    href: '/uslugi/poshiv-shub',
    icon: '/icons/services/sewing.svg',
  },
  {
    title: 'Меховой холодильник',
    description: 'Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьерский забор и доставка по Москве.',
    image: '/images/about-bg.jpg',
    href: '/uslugi/mehovoj-holodilnik',
    icon: '/icons/services/storage.svg',
  },
  {
    title: 'Окрашивание меха',
    description: 'Покраска шубы из норки и других мехов европейскими составами. Полное окрашивание, тонирование, эффект омбре.',
    image: '/images/product-palto.jpg',
    href: '/uslugi/okrashivanie',
    icon: '/icons/services/coloring.svg',
  },
  {
    title: 'Химчистка',
    description: 'Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений и запахов, антимольная обработка, восстановление блеска.',
    image: '/images/product-plus.jpg',
    href: '/uslugi/himchistka',
    icon: '/icons/services/cleaning.svg',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Наши услуги
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Полный спектр услуг
          </h2>
          <p
            className={`max-w-2xl mx-auto text-text-muted text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            От ремонта и реставрации до индивидуального пошива — мы заботимся
            о ваших изделиях как о своих.
          </p>
        </div>

        {/* Grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {service.icon && (
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                      <img src={service.icon} alt="" className="w-8 h-8 brightness-0 invert" />
                    </div>
                  )}
                  <h3 className="font-serif text-2xl text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white/60 text-sm mt-3 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                    Подробнее <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <Link
            href="/uslugi"
            className="inline-block px-12 py-4 border-2 border-brand text-brand font-light tracking-widest text-sm btn-shimmer-outline"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  )
}
