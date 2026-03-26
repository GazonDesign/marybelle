'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит пошив шубы из соболя?',
    answer:
      'Стоимость зависит от длины изделия, количества шкурок и сложности фасона. Короткая шуба (70 см) — от 350 000 ₽, до колена (90 см) — от 500 000 ₽, длинная шуба (110 см) — от 700 000 ₽. Жилет из соболя — от 180 000 ₽. Мастер рассчитает точную стоимость после консультации и выбора меха.',
  },
  {
    question: 'Сколько времени занимает пошив шубы из соболя?',
    answer:
      'В среднем от эскиза до готового изделия — 21 день. Сроки могут немного увеличиться при сложном фасоне или если нужен специальный подбор шкурок по оттенку. Мы не торопимся в ущерб качеству — каждый этап занимает ровно столько, сколько нужно.',
  },
  {
    question: 'Какие виды соболя вы используете?',
    answer:
      'Мы работаем с русским баргузинским соболем — самым ценным в мире. Доступны оттенки от светло-золотистого и серебристого до глубокого шоколадного и тёмного. Все шкурки — с международных аукционов NAFA и Kopenhagen Fur, с сертификатами подлинности. Подберём оттенок, который подчеркнёт именно вас.',
  },
  {
    question: 'Сколько шкурок соболя нужно на шубу?',
    answer:
      'На короткую шубу (70 см) требуется 30–40 шкурок, на шубу до колена (90 см) — 50–60 шкурок, на длинную шубу (110 см) — 70–80 шкурок. Точное количество зависит от размера, фасона и ширины юбки. Мастер рассчитает при создании эскиза.',
  },
  {
    question: 'Даёте ли вы гарантию на пошив?',
    answer:
      'Да. Мы даём гарантию на швы и фурнитуру. Если что-то потребует корректировки — устраним бесплатно. Кроме того, вы можете обращаться к нам за уходом и мелким ремонтом — мы ведём каждое изделие, которое создали.',
  },
  {
    question: 'Чем индивидуальный пошив отличается от готовой шубы?',
    answer:
      'Готовая шуба шьётся на стандартную фигуру — компромисс неизбежен. Индивидуальный пошив означает: выкройка строится по вашим меркам, фасон подбирается под ваш стиль и тип фигуры, мех — под оттенок кожи и волос. Три примерки гарантируют идеальную посадку. Результат — шуба, которая сидит безупречно и подчёркивает именно вас.',
  },
  {
    question: 'Можно ли пошить шубу из соболя по своему эскизу?',
    answer:
      'Конечно. Вы можете прийти со своим эскизом, фотографией или даже просто идеей — наш дизайнер доработает её и создаст технический рисунок. Мы также предложим свои варианты фасонов, если вы ещё определяетесь. Главное — чтобы результат был именно таким, каким вы его представляете.',
  },
]

export default function SobolyaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Частые вопросы о пошиве шуб из соболя
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
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
