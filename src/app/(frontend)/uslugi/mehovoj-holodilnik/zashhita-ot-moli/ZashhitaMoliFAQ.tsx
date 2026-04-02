'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Моль может появиться в шубе, даже если я храню её в чехле?',
    answer:
      'Да. Антимольный чехол отпугивает взрослых бабочек, но личинки могут уже находиться в мехе до упаковки. При комнатной температуре они продолжают питаться ворсом внутри чехла. Кроме того, чехол создаёт среду с повышенной влажностью, что ускоряет порчу мездры.',
  },
  {
    question: 'При какой температуре моль перестаёт портить мех?',
    answer:
      'При температуре ниже +5°C жизнедеятельность моли и жука-кожееда полностью прекращается. Личинки не питаются, не растут и не повреждают мех. Именно поэтому меховые холодильники поддерживают стабильные +4°C — это научно подтверждённый порог безопасности.',
  },
  {
    question: 'Что такое жук-кожеед и чем он опасен для шубы?',
    answer:
      'Жук-кожеед (Attagenus) — насекомое, личинки которого питаются натуральным мехом, кожей и шерстью. В отличие от моли, кожеед повреждает не только ворс, но и мездру — основу шкурки. Ущерб от кожееда часто необратим. При +4°C кожеед полностью неактивен.',
  },
  {
    question: 'Нужна ли антимольная обработка, если шуба хранится в холодильнике?',
    answer:
      'Мы проводим антимольную обработку при приёмке как дополнительную меру безопасности. Холод останавливает вредителей, а обработка уничтожает яйца и личинок, которые могли попасть на изделие до сдачи. Двойная защита — максимальная гарантия.',
  },
  {
    question: 'Сколько стоит хранение шубы в меховом холодильнике?',
    answer:
      'Хранение шубы в нашем холодильнике — от 5 000 ₽ за сезон (апрель–октябрь), это примерно 80 ₽ в день. Для сравнения: ремонт шубы после повреждения молью обходится от 30 000 ₽, а полная замена меха может стоить дороже новой шубы.',
  },
]

export default function ZashhitaMoliFAQ() {
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
            Частые вопросы о моли и хранении
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
