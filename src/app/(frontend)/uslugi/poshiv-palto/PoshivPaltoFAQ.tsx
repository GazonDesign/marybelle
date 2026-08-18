'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит пошив пальто на заказ?',
    answer: 'Пошив шерстяного пальто начинается от 65 000 ₽, из кашемира — от 90 000 ₽. Итоговая стоимость зависит от ткани, фасона, подкладки и наличия меховой отделки. Точную цену мастер назовёт после консультации и снятия мерок.',
  },
  {
    question: 'Сколько времени занимает индивидуальный пошив пальто?',
    answer: 'Стандартный срок пошива пальто — 3–4 недели с момента утверждения эскиза и снятия мерок. Срок включает подбор ткани, раскрой по индивидуальным лекалам, пошив и промежуточные примерки.',
  },
  {
    question: 'Из каких тканей вы шьёте пальто?',
    answer: 'Мы работаем с итальянским кашемиром, английской шерстью, плотными пальтовыми тканями и комбинированными вариантами. Подбираем подкладку и фурнитуру под модель. Возможна работа с тканью заказчика.',
  },
  {
    question: 'Можно ли добавить меховую отделку?',
    answer: 'Да. Mary Belle — меховое ателье, поэтому мы делаем воротники, манжеты и подстёжки из натурального меха. Меховую отделку можно добавить к любому фасону пальто — это наша специализация с 1870 года.',
  },
  {
    question: 'Можно ли перешить старое пальто?',
    answer: 'Да, мы выполняем перешив и реконструкцию пальто — меняем фасон, длину, сажаем по фигуре, обновляем подкладку и фурнитуру. Перешив начинается от 25 000 ₽.',
  },
  {
    question: 'Какая гарантия на пошив пальто?',
    answer: 'На пошив и фурнитуру даём гарантию 2 года. Жительницы Москвы доверяют пошив пальто фабрике Mary Belle по рекомендации — пять поколений мастеров и безупречная посадка по индивидуальным лекалам.',
  },
]

export default function PoshivPaltoFAQ() {
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
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о пошиве пальто</h2>
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
