'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит пошив шубы из норки на заказ?',
    answer: 'Пошив шубы из норки начинается от 120 000 ₽. Итоговая стоимость зависит от выбранного вида норки, длины изделия, сложности модели и дополнительных элементов (капюшон, пояс, декор). Точную стоимость мастер рассчитает после консультации.',
  },
  {
    question: 'Сколько времени занимает пошив шубы?',
    answer: 'Стандартный срок пошива шубы — 21 рабочий день с момента утверждения эскиза и внесения предоплаты. Срок включает подбор и закупку меха, раскрой, пошив и три примерки. При необходимости возможен ускоренный пошив.',
  },
  {
    question: 'Можно ли принести свой эскиз или фото желаемой модели?',
    answer: 'Конечно! Вы можете принести собственный эскиз, фотографию из журнала или изображение из интернета. Наш дизайнер адаптирует модель под ваши пожелания, особенности фигуры и выбранный мех, чтобы результат превзошёл ожидания.',
  },
  {
    question: 'Из каких видов меха вы шьёте?',
    answer: 'Мы работаем с широким ассортиментом натурального меха: норка (NAFA, Kopenhagen Fur), русский соболь, каракуль, лиса, песец, шиншилла и другие виды. Весь мех — от проверенных поставщиков с сертификатами качества.',
  },
  {
    question: 'Сколько примерок входит в пошив?',
    answer: 'В стоимость пошива входят три примерки. Первая — проверка базовой конструкции и посадки. Вторая — уточнение силуэта и деталей. Третья — финальная примерка готового изделия. Такой подход гарантирует идеальную посадку по фигуре.',
  },
  {
    question: 'Что входит в стоимость пошива?',
    answer: 'В стоимость входит полный цикл: консультация дизайнера, разработка эскиза, построение индивидуальной выкройки, подбор и закупка меха, раскрой, пошив, три примерки, фурнитура и финальная отделка. Вы получаете готовое изделие без скрытых доплат.',
  },
]

export default function PoshivShubFAQ() {
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
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о пошиве шуб</h2>
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
