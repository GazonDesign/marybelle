'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит пошив кожаной куртки на заказ?',
    answer: 'Пошив кожаной куртки начинается от 45 000 ₽. Итоговая стоимость зависит от модели, вида кожи, сложности кроя и фурнитуры. Точную цену мастер назовёт после консультации и снятия мерок.',
  },
  {
    question: 'Сколько времени занимает индивидуальный пошив изделия из кожи?',
    answer: 'Стандартный срок — 3–4 недели с момента утверждения модели и снятия мерок. Возможен ускоренный пошив до 10 дней с доплатой. В срок входят раскрой, пошив и промежуточные примерки.',
  },
  {
    question: 'С какой кожей вы работаете?',
    answer: 'Мы шьём из итальянской кожи — наппа, нубук, замша, плотная одёжная кожа. Подбираем материал под модель и образ. По желанию можем работать с кожей заказчика.',
  },
  {
    question: 'Какие изделия из кожи вы шьёте?',
    answer: 'Куртки (косуха, бомбер, авиатор), пальто и жакеты, жилеты, юбки, брюки, дублёнки и аксессуары — сумки, ремни, перчатки. Принимаем как классические, так и авторские модели.',
  },
  {
    question: 'Сколько примерок входит в пошив?',
    answer: 'Мы снимаем более 30 мерок и проводим промежуточные примерки на каждом этапе — это гарантирует посадку строго по вашей фигуре. Личный мастер сопровождает заказ от эскиза до выдачи.',
  },
  {
    question: 'Даёте ли вы гарантию на пошив?',
    answer: 'Да, на каждое изделие распространяется гарантия. Mary Belle — семейная фабрика с 1870 года, пять поколений мастеров; жительницы Москвы доверяют нам пошив и ремонт изделий из кожи и меха по рекомендации.',
  },
]

export default function PoshivKozhiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => { setOpenIndex(openIndex === index ? null : index) }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section className="py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о пошиве изделий из кожи</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-border-light">
                <button onClick={() => toggle(i)} className="flex w-full items-center justify-between py-6 text-left gap-4 cursor-pointer" aria-expanded={isOpen}>
                  <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-black'}`}>{item.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-2xl leading-none transition-all duration-300 ${isOpen ? 'text-brand rotate-45' : 'text-text-muted rotate-0'}`}>+</span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-400 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="pb-6 text-text-muted leading-relaxed">{item.answer}</p>
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
