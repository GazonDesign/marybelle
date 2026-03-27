'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const fallbackCases = [
  {
    id: 1,
    title: 'Перекрой дублёнки',
    description: 'Старая дублёнка → современный крой с косой молнией.',
    image: '/images/before-after/case-02.jpg',
  },
  {
    id: 2,
    title: 'Перекрой норковой шубы',
    description: 'Устаревший фасон → элегантная шуба с воротником из чернобурки.',
    image: '/images/before-after/case-03.jpg',
  },
  {
    id: 3,
    title: 'Ремонт норки',
    description: 'Разрыв в области подмышки — аккуратная починка, шов не заметен.',
    image: '/images/before-after/case-04.jpg',
  },
  {
    id: 4,
    title: 'Перекрой каракуля',
    description: 'Старое пальто из каракуля → обновлённый современный силуэт.',
    image: '/images/before-after/case-05.jpg',
  },
  {
    id: 5,
    title: 'Перекрой шубы в пальто',
    description: 'Старая шуба → авторское пальто с аппликацией.',
    image: '/images/before-after/case-06.jpg',
  },
  {
    id: 6,
    title: 'Пошив по образцу',
    description: 'Клиент принёс фото — мы воплотили идею в жизнь.',
    image: '/images/before-after/case-01.jpg',
  },
]

interface BeforeAfterCase {
  id: number
  title: string
  description: string
  image: string
}

interface Props {
  cases?: BeforeAfterCase[]
}

export default function BeforeAfterSection({ cases: propCases }: Props) {
  const cases = propCases && propCases.length > 0 ? propCases : fallbackCases
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
                <div className="absolute bottom-0 left-0 right-0 flex">
                  <span className="flex-1 text-center bg-black/50 text-white text-xs py-1.5 tracking-wider uppercase">До</span>
                  <span className="flex-1 text-center bg-brand/80 text-white text-xs py-1.5 tracking-wider uppercase">После</span>
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
