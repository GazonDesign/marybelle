'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Чем хранение элитных мехов отличается от обычного хранения шуб?',
    answer:
      'Соболь, шиншилла и рысь требуют более строгого контроля условий, чем норка или песец. Для соболя критична полная темнота — даже слабый свет за сезон может изменить оттенок меха. Шиншилла нуждается в стабильной влажности 50–55% без колебаний. Рысьи шубы размещаются с увеличенным интервалом на специальных широких вешалках, чтобы длинный ворс не заминался. Мы учитываем эти особенности при размещении каждого изделия.',
  },
  {
    question: 'Как страхуются дорогие изделия из соболя и шиншиллы?',
    answer:
      'Каждое изделие страхуется на декларированную стоимость — вы сами указываете сумму при сдаче. При приёмке проводится фотофиксация состояния, составляется опись с описанием всех деталей, место хранения пломбируется. Холодильник оборудован охранной сигнализацией, видеонаблюдением и системой контроля доступа 24/7.',
  },
  {
    question: 'Какой температурный режим поддерживается для элитных мехов?',
    answer:
      'Стабильные +4°C при влажности 50–55% — это международный стандарт для хранения ценных мехов, который используется на аукционных домах и в музеях. Наша система оснащена резервными генераторами и дублирующей климатической установкой — температура поддерживается даже при отключении электричества.',
  },
  {
    question: 'Можно ли сдать на хранение комбинированное изделие (мех + кожа)?',
    answer:
      'Да, мы принимаем комбинированные изделия. Кожа и мех требуют немного разных условий, но наш режим хранения оптимален для обоих материалов. Стоимость хранения комбинированных изделий — +15% к базовой цене, так как требуется дополнительный уход за кожаными элементами.',
  },
  {
    question: 'Какие скидки есть при длительном хранении?',
    answer:
      'При оплате за 6 месяцев вперёд — скидка 10%. При оплате за год — скидка 20%. Это выгодно для владельцев нескольких элитных изделий. Также мы предлагаем комплексную услугу: хранение + химчистка премиум-класса перед размещением в холодильнике.',
  },
]

export default function PremiumFurFAQ() {
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
            Частые вопросы о хранении элитных мехов
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
