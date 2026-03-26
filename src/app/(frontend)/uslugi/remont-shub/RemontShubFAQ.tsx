'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит ремонт шубы из норки?',
    answer: 'Стоимость зависит от вида работ: зашить разрыв — от 1 500 ₽, замена подкладки — от 15 000 ₽, укоротить или удлинить — от 13 000 ₽. Мастер осмотрит изделие и назовёт точную цену до начала работ.',
  },
  {
    question: 'Какие повреждения можно отремонтировать?',
    answer: 'Практически любые: разрывы мездры, потёртости на рукавах и воротнике, порванные карманы, сломанные крючки, изношенную подкладку, провисшие плечи. Если мех цел — изделие можно восстановить.',
  },
  {
    question: 'Сколько времени занимает ремонт шубы?',
    answer: 'Мелкий ремонт (зашить разрыв, заменить крючок) — 1–3 дня. Замена подкладки — 5–7 дней. Полная реставрация или перекрой — 14–21 день. Срочный ремонт — по договорённости.',
  },
  {
    question: 'Можно ли перешить старую шубу в новую модель?',
    answer: 'Да, это одна из наших специализаций. Перекрой шубы позволяет изменить фасон, длину, силуэт — превратить длинную шубу в полушубок, убрать объёмный капюшон, заузить рукава. Мастер предложит варианты на консультации.',
  },
  {
    question: 'Даёте ли гарантию на ремонт?',
    answer: 'Да, мы даём гарантию на все виды работ. На замену подкладки и фурнитуры — 1 год. На ремонт швов — 6 месяцев. Если возникнет проблема — устраним бесплатно.',
  },
  {
    question: 'С какими мехами вы работаете?',
    answer: 'Ремонтируем шубы из любого натурального меха: норка, соболь, каракуль, лиса, песец, бобёр, шиншилла, нутрия. Каждый мех требует своего подхода — наши мастера имеют опыт работы со всеми видами.',
  },
]

export default function RemontShubFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Частые вопросы</h2>
        <div className="max-w-3xl space-y-0">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-border-light">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-serif text-lg text-black group-hover:text-brand transition-colors pr-4">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 flex items-center justify-center text-brand text-2xl transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-[500px] pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-text-muted leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </section>
  )
}
