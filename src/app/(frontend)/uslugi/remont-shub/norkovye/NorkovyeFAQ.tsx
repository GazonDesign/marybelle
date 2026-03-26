'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит ремонт норковой шубы?',
    answer: 'Зависит от вида работ: зашить разрыв — от 1 500 ₽, устранить потёртости — от 5 000 ₽, заменить подкладку — от 15 000 ₽. Полная реставрация — от 25 000 ₽. Мастер осмотрит шубу и назовёт точную стоимость до начала работ.',
  },
  {
    question: 'Можно ли зашить разрыв на норке незаметно?',
    answer: 'Да. Скорняжная машина шьёт встык, не прокалывая мездру — шов получается с изнанки, а с лицевой стороны ворс полностью его скрывает. При необходимости ставим заплатку из норки того же оттенка и направления ворса.',
  },
  {
    question: 'Сколько времени занимает ремонт?',
    answer: 'Мелкий ремонт (разрыв, крючок) — 1–3 дня. Замена подкладки — 5–7 дней. Полная реставрация — 14–21 день. Точные сроки мастер назовёт при осмотре.',
  },
  {
    question: 'Берёте ли старые норковые шубы на ремонт?',
    answer: 'Да, если мездра не рассыпается. Мы ремонтируем шубы возрастом 20–30 лет — главное, чтобы мех был живой. Мастер при осмотре оценит состояние и скажет, что возможно.',
  },
  {
    question: 'Даёте ли гарантию на ремонт?',
    answer: 'Да. Гарантия на замену подкладки и фурнитуры — 1 год. На ремонт швов — 6 месяцев. Если что-то пойдёт не так — устраним бесплатно.',
  },
  {
    question: 'Чем ваш ремонт отличается от обычного ателье?',
    answer: 'Мы — меховое ателье, а не швейное. У нас скорняжное оборудование, собственный запас аукционной норки для заплаток, и мастера, которые работают только с мехом. Обычное ателье шьёт ткань — мех требует другого подхода, инструментов и опыта.',
  },
  {
    question: 'Можно ли одновременно сделать ремонт и химчистку?',
    answer: 'Да, это даже рекомендуется. Мы сначала делаем химчистку, затем ремонт — так мех лучше ложится, а результат чище. Комплексный заказ обычно выгоднее по срокам.',
  },
]

export default function NorkovyeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Частые вопросы о ремонте норки</h2>
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
