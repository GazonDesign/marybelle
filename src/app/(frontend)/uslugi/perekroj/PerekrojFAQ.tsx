'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Что можно сделать из старой шубы?',
    answer:
      'Из старой шубы можно сделать практически любое меховое изделие: укороченный полушубок, модный жилет, пальто с меховой отделкой, накидку или болеро. Также можно полностью изменить фасон — сделать приталенный силуэт, добавить капюшон, обновить воротник и манжеты. Мастер предложит варианты после осмотра изделия.',
  },
  {
    question: 'Сколько стоит перешить шубу в жилет?',
    answer:
      'Перекрой шубы в жилет относится к частичному перекрою — стоимость составляет 67 000 рублей. Точная цена зависит от состояния меха, сложности нового фасона и необходимости дополнительных работ (замена подкладки, фурнитуры). Мастер назовёт окончательную стоимость после осмотра.',
  },
  {
    question: 'Не потеряет ли мех качество при перекрое?',
    answer:
      'Нет, при профессиональном перекрое мех сохраняет свои свойства. Наши мастера работают максимально бережно — аккуратно распарывают швы, удаляют изношенные участки и используют качественные материалы для сборки нового изделия. Мездра и ворс не повреждаются.',
  },
  {
    question: 'Сколько времени занимает перекрой шубы?',
    answer:
      'Полный перекрой шубы занимает в среднем 2–4 недели в зависимости от сложности работы. Частичный перекрой (изменение длины, замена воротника, перекрой рукава) выполняется быстрее — от 1 до 2 недель. Точные сроки мастер сообщит при оформлении заказа.',
  },
  {
    question: 'Можно ли перекроить шубу в пальто?',
    answer:
      'Да, это один из самых популярных вариантов перекроя. Из норковой или собольей шубы можно создать элегантное пальто с меховой отделкой, комбинируя мех с кожей или текстилем. Такое изделие выглядит современно и носится в более широком температурном диапазоне.',
  },
  {
    question: 'Стоит ли перекраивать старую шубу или лучше купить новую?',
    answer:
      'Перекрой имеет смысл, если мех в хорошем состоянии — мягкий, без проплешин, мездра прочная. В этом случае перекрой обойдётся значительно дешевле новой шубы, а качество натурального меха часто превосходит современные фабричные изделия. Мастер честно оценит состояние вашей шубы и подскажет, стоит ли вкладываться в перекрой.',
  },
]

export default function PerekrojFAQ() {
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
            Частые вопросы о перекрое шуб
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
