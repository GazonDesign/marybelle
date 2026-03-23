'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  { num: '01', title: 'Консультация', description: 'Оставьте заявку — мы свяжемся в течение 15 минут и ответим на все вопросы.' },
  { num: '02', title: 'Осмотр', description: 'Личный визит на Войковскую или удалённая оценка по фото и видео.' },
  { num: '03', title: 'Диагностика', description: 'Мастер оценивает состояние изделия, предлагает варианты и решения.' },
  { num: '04', title: 'Согласование', description: 'Чёткие сроки. Прозрачная стоимость. Никаких скрытых доплат.' },
  { num: '05', title: 'Работа на фабрике', description: 'Только опытные мастера. Только промышленное оборудование.' },
  { num: '06', title: 'Примерка и выдача', description: 'Вы убеждаетесь в результате. Мы — в вашем доверии.' },
]

export default function HowWeWorkSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Процесс
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Как мы работаем
          </h2>
          <p
            className={`max-w-2xl mx-auto text-text-muted text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Процесс, отточенный за 150 лет. От первого звонка до готового изделия — шесть понятных шагов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative p-8 bg-white border border-border-light transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              <span className="font-serif text-4xl text-brand/15 block mb-4">{step.num}</span>
              <h3 className="font-serif text-xl text-black mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
