'use client'

import { useEffect, useRef, useState } from 'react'

const faqItems = [
  {
    question: 'Можно ли перекроить устаревшую модель шубы в современную?',
    answer:
      'Да, это одна из наших основных услуг. Мы можем изменить длину, обновить силуэт, добавить капюшон или изменить воротник, комбинировать меха, добавить кожаные или замшевые вставки.',
  },
  {
    question: 'Сколько времени занимает ремонт или перекрой шубы?',
    answer:
      'Мелкий ремонт — 1–3 дня. Замена подкладки — 3–5 дней. Ремонт воротника или манжет — 3–7 дней. Частичный перекрой — 7–10 дней. Полный перекрой — 14–21 день. В сезон сроки могут увеличиться.',
  },
  {
    question: 'Можно ли из старой шубы сделать несколько изделий?',
    answer:
      'Да, при достаточном количестве качественного меха. Например: короткая шуба и жилет, шуба и аксессуары (шапка, муфта), несколько детских изделий.',
  },
  {
    question: 'Что делать, если на шубе появились проплешины?',
    answer:
      'Есть несколько решений: вшивка новых фрагментов меха, перекрой с перераспределением материала, комбинирование с кожей или замшей. Мастер подберёт оптимальный вариант после осмотра.',
  },
  {
    question: 'Возможно ли изменить цвет меха при ремонте?',
    answer:
      'Да, мы выполняем профессиональное окрашивание. Лучше всего переход от светлого к тёмному. Хорошо поддаются окрашиванию норка, песец, мутон. Перед работой проводим тест на образце.',
  },
  {
    question: 'Как ухаживать за шубой после ремонта?',
    answer:
      'Первые 2–3 недели избегайте интенсивных нагрузок. Храните в прохладном проветриваемом месте без прямого солнца. Используйте специальные плечики. Чистите щёткой по росту ворса. На лето рекомендуем меховой холодильник.',
  },
  {
    question: 'Можно ли отремонтировать шубу после повреждения молью?',
    answer:
      'В большинстве случаев — да. При локальных повреждениях вшиваем новые фрагменты. При обширных — перекрой с изменением фасона. Обязательно проводим антимольную обработку.',
  },
]

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-brand font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ответы на вопросы
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Часто задаваемые вопросы
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className={`border-b border-border-light transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
                      isOpen ? 'text-brand' : 'text-black'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-2xl leading-none transition-all duration-300 ${
                      isOpen ? 'text-brand rotate-45' : 'text-text-muted rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
