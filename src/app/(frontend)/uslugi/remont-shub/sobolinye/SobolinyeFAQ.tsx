'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит ремонт соболиной шубы?',
    answer: 'Стоимость зависит от характера повреждений: зашить разрыв мездры — от 2 000 \u20BD, заплатка с подбором соболя в тон — от 8 000 \u20BD, замена подкладки на итальянский шёлк — от 25 000 \u20BD, полная реставрация — от 40 000 \u20BD. Точную стоимость мастер назовёт после бесплатного осмотра — до начала работ.',
  },
  {
    question: 'Сколько времени занимает ремонт шубы из соболя?',
    answer: 'Мелкий ремонт (разрыв мездры, замена крючков) — 2–3 дня. Замена подкладки — 7–10 дней. Полная реставрация с укреплением мездры и заменой секций — от 14 до 30 дней. Сроки зависят от объёма работ; мастер озвучит их при осмотре.',
  },
  {
    question: 'Можно ли восстановить потрескавшуюся мездру соболя?',
    answer: 'Да, если мездра не рассыпается полностью. Соболиная мездра — одна из самых тонких, поэтому мы используем специальную укрепляющую сетку, которая фиксирует проблемные зоны, не утяжеляя изделие. Мастер при осмотре определит, какие участки можно укрепить, а какие потребуют замены.',
  },
  {
    question: 'Застрахована ли шуба на время ремонта?',
    answer: 'Да. Каждое изделие, поступающее в ателье, застраховано на всё время нахождения у нас. Мастерская оборудована охранной системой и контролем доступа 24/7. Вы получаете квитанцию с описанием изделия и перечнем работ.',
  },
  {
    question: 'Какую гарантию вы даёте на ремонт?',
    answer: 'Гарантия на замену подкладки и фурнитуры — 1 год. На ремонт мездры и швов — 6 месяцев. Если в течение гарантийного срока возникнет проблема с выполненной работой — устраним бесплатно.',
  },
  {
    question: 'Как подбираете мех для заплаток на соболиной шубе?',
    answer: 'Соболь — мех с уникальным оттенком, высотой ворса и густотой подпушка. Мы подбираем заплатки из собственного запаса соболиных шкурок, ориентируясь на цвет, текстуру и направление ворса вашего изделия. Цель — сделать ремонт абсолютно незаметным.',
  },
  {
    question: 'Можно ли одновременно сделать ремонт и химчистку соболиной шубы?',
    answer: 'Да, и мы рекомендуем совмещать. Сначала выполняется химчистка — мех очищается, восстанавливается блеск и мягкость. Затем проводится ремонт — на чистом изделии результат точнее и аккуратнее. Комплексный заказ экономит время.',
  },
]

export default function SobolinyeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Частые вопросы о ремонте соболиных шуб</h2>
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
