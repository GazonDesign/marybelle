'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    title: 'Реставрация дублёнки-авиатор',
    description: 'Полная реставрация: чистка, восстановление цвета, замена фурнитуры.',
    image: '/images/portfolio/001.jpg',
  },
  {
    id: 2,
    title: 'Реставрация дублёнки-макси',
    description: 'Окрашивание, восстановление мехового воротника и манжет.',
    image: '/images/portfolio/005.jpg',
  },
  {
    id: 3,
    title: 'Восстановление короткой дублёнки',
    description: 'Чистка, восстановление цвета, замена застёжек.',
    image: '/images/portfolio/006.jpg',
  },
  {
    id: 4,
    title: 'Реставрация кожаной куртки',
    description: 'Восстановление цвета и эластичности кожи, ремонт швов.',
    image: '/images/portfolio/003.jpg',
  },
  {
    id: 5,
    title: 'Ремонт дублёнки с мехом',
    description: 'Глубокая чистка, окрашивание, восстановление меха.',
    image: '/images/portfolio/004.jpg',
  },
  {
    id: 6,
    title: 'Восстановление дублёнки',
    description: 'Комплексная реставрация: от чистки до полного обновления.',
    image: '/images/portfolio/002.jpg',
  },
]

export default function BeforeAfterSection() {
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
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'rgba(139, 109, 75, 0.05)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Наши работы
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            До и после
          </h2>
          <p
            className={`max-w-2xl mx-auto text-text-muted text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Реальные результаты работы наших мастеров. На каждом фото — одно изделие до и после реставрации.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-bg-light">
                <img
                  src={item.image}
                  alt={`${item.title} — до и после`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 tracking-wider uppercase">
                  До
                </div>
                <div className="absolute top-3 right-3 bg-brand text-white text-xs px-3 py-1 tracking-wider uppercase">
                  После
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-lg text-black">{item.title}</h3>
                <p className="text-text-muted text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
          >
            Все работы
          </Link>
        </div>
      </div>
    </section>
  )
}
