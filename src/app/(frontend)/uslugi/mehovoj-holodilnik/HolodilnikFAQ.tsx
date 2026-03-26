'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Когда лучше сдать шубу на хранение?',
    answer:
      'Оптимальное время — апрель–май, когда сезон носки заканчивается. Чем раньше изделие попадёт в холодильник, тем меньше оно подвергается воздействию тепла и влажности. Мы принимаем шубы на хранение с апреля по октябрь.',
  },
  {
    question: 'Какая температура и влажность в меховом холодильнике?',
    answer:
      'Мы поддерживаем температуру +4–5°C и влажность 50–60%. Это международный стандарт для хранения натурального меха: мездра не пересыхает, ворс сохраняет эластичность и блеск, а моль не размножается при такой температуре.',
  },
  {
    question: 'Нужно ли чистить шубу перед хранением?',
    answer:
      'Рекомендуем — остатки пота, косметики и уличная пыль ускоряют разрушение меха. Мы проводим профессиональную химчистку и антимольную обработку перед размещением в холодильнике. Стоимость чистки — от 4 000 ₽.',
  },
  {
    question: 'Могу ли я забрать шубу раньше окончания сезона?',
    answer:
      'Да, вы можете забрать изделие в любой момент. Просто позвоните или напишите нам — подготовим шубу к выдаче в течение одного рабочего дня.',
  },
  {
    question: 'Застрахована ли моя шуба на время хранения?',
    answer:
      'Каждое изделие застраховано на полную стоимость. Холодильник оборудован охранной сигнализацией и системой контроля доступа 24/7. При приёмке мы фиксируем состояние шубы — полная прозрачность.',
  },
  {
    question: 'Есть ли доставка? Сколько стоит?',
    answer:
      'Да, курьер заберёт шубу по Москве за 1 500 ₽ и доставит обратно за 1 500 ₽. Вы также можете привезти и забрать изделие самостоятельно в нашем ателье на Войковской.',
  },
  {
    question: 'Какие изделия можно сдать на хранение?',
    answer:
      'Шубы из любого меха (норка, соболь, каракуль, песец, лиса), дублёнки, кожаные куртки и пальто, а также меховые аксессуары — воротники, шапки, муфты. Каждое изделие размещается на отдельной вешалке с достаточным пространством.',
  },
]

export default function HolodilnikFAQ() {
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
            Частые вопросы о хранении
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
