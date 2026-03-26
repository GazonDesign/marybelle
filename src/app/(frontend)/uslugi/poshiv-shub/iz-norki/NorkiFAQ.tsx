'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит пошив шубы из норки на заказ?',
    answer: 'Стоимость зависит от длины изделия, типа норки и сложности фасона. Полушубок (70 см) — от 120 000 ₽, шуба до колена (90 см) — от 160 000 ₽, миди (110 см) — от 190 000 ₽, шуба в пол — от 220 000 ₽. Точную стоимость мастер назовёт после выбора меха и обсуждения модели — до начала работ вы будете знать финальную цену.',
  },
  {
    question: 'Сколько времени занимает пошив?',
    answer: 'Стандартный срок — 21 день от первой встречи до готового изделия. За это время проходят три примерки: макет из ткани, меховая заготовка и финальная примерка с подкладкой. Если шуба нужна к определённой дате — обсудим срочный пошив.',
  },
  {
    question: 'Какие цвета норки доступны?',
    answer: 'Мы работаем со всей палитрой скандинавской норки: классическая чёрная (blackglama), тёмно-коричневая, махагон, пастель, белая, голубая (сапфир), серебристо-голубая, жемчужная. Также возможны комбинации цветов. На консультации мастер поможет подобрать оттенок, который подходит именно вам — под цвет глаз, волос, тон кожи.',
  },
  {
    question: 'Как выбрать длину шубы?',
    answer: 'Длина зависит от вашего образа жизни и роста. Полушубок (70 см) — лёгкий, динамичный вариант для автоледи. До колена (90 см) — универсальная длина, подходит почти всем. Миди (110 см) — элегантный вариант для выхода. В пол — максимальная роскошь и тепло. На первой встрече мы обсудим, как вы планируете носить шубу, и подберём оптимальную длину.',
  },
  {
    question: 'Какая гарантия на изделие?',
    answer: 'Мы даём гарантию на все швы и фурнитуру. Если в процессе носки что-то пойдёт не так — устраним бесплатно. Сама норка при правильном хранении служит 15–20 лет. Мы также консультируем по уходу и хранению, чтобы шуба радовала вас как можно дольше.',
  },
  {
    question: 'Чем отличается норка NAFA от Kopenhagen Fur?',
    answer: 'NAFA (Северная Америка) — норка с особенно густым подпушком и бархатистым ворсом, идеальна для холодного климата. Kopenhagen Fur (Скандинавия) — шелковистый, блестящий мех с ровной текстурой, классический выбор для элегантных моделей. Обе марки — высший аукционный класс. На консультации покажем образцы обеих — вы сможете сравнить на ощупь и выбрать.',
  },
  {
    question: 'Можно ли приехать просто посмотреть образцы, без обязательств?',
    answer: 'Конечно. Мы приглашаем вас в ателье, чтобы потрогать мех, посмотреть образцы готовых изделий, обсудить идеи. Консультация и подбор меха — бесплатно. Никакого давления — мы хотим, чтобы решение о пошиве было вашим, взвешенным и радостным. Мы находимся в пяти минутах от м. Войковская.',
  },
]

export default function NorkiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Частые вопросы о пошиве из норки</h2>
        <div className="max-w-3xl space-y-0">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-border-light">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={openIndex === i}
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
