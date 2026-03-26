'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Как часто нужна химчистка шубы?',
    answer:
      'Рекомендуем проводить химчистку шубы минимум один раз в год — в конце сезона, перед летним хранением. Если шуба носится ежедневно или попала под дождь и снег, может потребоваться дополнительная чистка в середине сезона.',
  },
  {
    question: 'Можно ли почистить шубу дома?',
    answer:
      'Домашняя чистка меха крайне нежелательна. Народные средства — крахмал, бензин, уксус — могут повредить мездру, обесцветить ворс и оставить неприятный запах. Профессиональная химчистка шубы безопаснее и эффективнее: мастер подбирает состав под конкретный тип меха.',
  },
  {
    question: 'Сколько стоит химчистка норковой шубы?',
    answer:
      'Стоимость химчистки шубы из норки начинается от 5 000 рублей. Точная цена зависит от длины изделия, степени загрязнения и необходимости дополнительных процедур (антимольная обработка, восстановление блеска). Мастер назовёт стоимость после осмотра.',
  },
  {
    question: 'Сколько времени занимает химчистка?',
    answer:
      'Стандартная химчистка шубы занимает 3–5 рабочих дней. Если нужна срочная чистка за 1–2 дня, действует наценка 50%. Сроки могут увеличиться в сезон (сентябрь–ноябрь и март–май).',
  },
  {
    question: 'Какие изделия вы принимаете на химчистку?',
    answer:
      'Мы принимаем шубы из любого меха (норка, соболь, каракуль, песец, мутон), дублёнки из натуральной овчины, кожаные куртки и плащи, а также меховые аксессуары — шапки, воротники, муфты. Перед приёмом мастер осматривает изделие и согласовывает объём работ.',
  },
]

export default function HimchistkaFAQ() {
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
            Частые вопросы о химчистке
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
