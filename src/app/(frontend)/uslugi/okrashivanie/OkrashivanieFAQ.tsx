'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Можно ли покрасить шубу в другой цвет?',
    answer:
      'Да, шубу можно покрасить практически в любой цвет — от классических тёмных и натуральных оттенков до ярких и модных. Мастер подберёт тон с учётом исходного цвета меха и ваших пожеланий. Используем стойкие красители европейского производства, безопасные для ворса и мездры.',
  },
  {
    question: 'Не испортится ли мех после окрашивания?',
    answer:
      'При профессиональном окрашивании качество меха не страдает. Мы работаем с сертифицированными составами европейского производства, которые не повреждают структуру ворса. Мех сохраняет мягкость, блеск и пластичность. Перед окрашиванием мастер оценит состояние изделия и при необходимости порекомендует предварительную подготовку.',
  },
  {
    question: 'Сколько стоит покрасить шубу из норки?',
    answer:
      'Стоимость полного окрашивания норковой шубы — от 12 000 рублей. Тонирование обойдётся от 8 000 рублей, окрашивание жилета — от 7 000 рублей, воротника или манжет — от 3 000 рублей. Точная цена зависит от размера изделия, типа меха и сложности работы. Мастер назовёт стоимость после осмотра.',
  },
  {
    question: 'Как долго держится краска на мехе?',
    answer:
      'Профессиональное окрашивание стойкими европейскими красителями держится несколько сезонов — как правило, 2–3 года при аккуратной носке. Тонирование чуть менее стойкое, его рекомендуется обновлять раз в 1–2 сезона. На долговечность влияют условия хранения и уход за изделием.',
  },
  {
    question: 'Какие виды окрашивания вы делаете?',
    answer:
      'Мы предлагаем полное окрашивание в один цвет, тонирование для освежения натурального оттенка, модную деградацию (эффект омбре — плавный переход цвета), а также окрашивание кожаных вставок и элементов отделки. Работаем с норкой, лисой, песцом, каракулем и другими видами меха.',
  },
  {
    question: 'Можно ли покрасить только воротник или манжеты?',
    answer:
      'Да, мы окрашиваем отдельные элементы изделия — воротник, манжеты, капюшон, кожаные вставки. Это удобно, если нужно обновить только потёртые или выгоревшие участки. Стоимость окрашивания воротника или манжет — от 3 000 рублей, кожаных элементов — от 4 000 рублей.',
  },
]

export default function OkrashivanieFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-black">
            Частые вопросы об окрашивании меха
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className="border-b border-border-light"
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
