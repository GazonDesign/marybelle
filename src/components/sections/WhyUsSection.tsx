'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const features = [
  {
    num: '01',
    title: 'Опытные мастера',
    description: 'Стаж работы с мехом более 15 лет. Мастера передают технологии из поколения в поколение.',
  },
  {
    num: '02',
    title: 'Собственное производство',
    description: 'Полный цикл работ на фабрике — от приёмки до выдачи. Промышленное оборудование.',
  },
  {
    num: '03',
    title: 'Гарантия качества',
    description: 'Даём гарантию на все виды работ. Несём ответственность за результат.',
  },
  {
    num: '04',
    title: 'Удобное расположение',
    description: '5 минут от м. Войковская. Бесплатная парковка. Курьер по Москве.',
  },
]

export default function WhyUsSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Наши преимущества
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Почему выбирают Mary Belle
          </h2>
        </div>

        {/* Photos */}
        <div
          className={`grid grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/gov-import/proizvodstvo/sh-ceh-sh.jpg"
              alt="Швейная машина на фабрике Mary Belle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 560px"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/gov-import/proizvodstvo/s-ceh-s.jpg"
              alt="Шуба в работе на столе мастера"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 560px"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.num}
              className={`group relative p-8 bg-white border border-border-light hover:border-brand/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              {/* Accent top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="font-serif text-4xl text-brand/15 block mb-4">{feature.num}</span>
              <h3 className="font-serif text-xl text-black mb-3">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
