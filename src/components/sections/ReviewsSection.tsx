'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

export interface Review {
  name: string
  text: string
  rating: number
  service: string
}

const fallbackReviews: Review[] = [
  {
    name: 'Елена М.',
    text: 'Отличное ателье! Переделала здесь несколько шуб, работа выполнена качественно и в срок. Очень довольна результатом, всем рекомендую!',
    rating: 5,
    service: 'Перекрой шубы',
  },
  {
    name: 'Андрей К.',
    text: 'Сдавал на хранение меховые изделия. Все организовано на высшем уровне, удобно, что есть услуга доставки. Спасибо!',
    rating: 5,
    service: 'Хранение шуб',
  },
  {
    name: 'Наталья В.',
    text: 'Хорошее качество работы, но сроки немного затянулись. В целом осталась довольна результатом, буду обращаться ещё.',
    rating: 4,
    service: 'Ремонт шубы',
  },
  {
    name: 'Ирина С.',
    text: 'Покрасили норковую шубу — как новая! Цвет ровный, мех мягкий. Мастера знают своё дело. Рекомендую.',
    rating: 5,
    service: 'Окрашивание меха',
  },
  {
    name: 'Марина Д.',
    text: 'Заказывала пошив шубы из норки. Три примерки, всё подогнали идеально. Качество на высоте, спасибо фабрике!',
    rating: 5,
    service: 'Пошив шубы',
  },
]

export default function ReviewsSection({ reviews }: { reviews?: Review[] }) {
  const data = reviews && reviews.length > 0 ? reviews : fallbackReviews
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
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Отзывы
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((review, i) => (
            <div
              key={i}
              className={`p-8 border border-border-light transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < review.rating ? 'text-gold fill-gold' : 'text-border'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="text-text-body leading-relaxed mb-6 text-sm">
                &laquo;{review.text}&raquo;
              </p>
              <div className="border-t border-border-light pt-4">
                <p className="font-medium text-text-body">{review.name}</p>
                <p className="text-text-muted text-xs mt-1">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
