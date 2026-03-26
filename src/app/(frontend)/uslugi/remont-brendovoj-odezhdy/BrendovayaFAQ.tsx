'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Сохраните ли вы оригинальную фурнитуру при ремонте?',
    answer: 'Да, мы всегда стараемся сохранить оригинальную фурнитуру. Если замена неизбежна — подбираем элементы, максимально идентичные оригиналу, чтобы изделие сохранило свой первоначальный вид и ценность.',
  },
  {
    question: 'Работаете ли вы с пуховиками Moncler и Canada Goose?',
    answer: 'Да, наши мастера имеют большой опыт работы с пуховиками Moncler, Canada Goose, Burberry и других премиальных брендов. Мы знаем особенности конструкции каждой марки и используем соответствующие материалы и технологии ремонта. Стоимость ремонта пуховика — от 5 000 ₽.',
  },
  {
    question: 'Можно ли заменить подкладку в брендовом пальто на идентичную?',
    answer: 'Мы подбираем ткань подкладки, максимально близкую к оригиналу по составу, цвету и фактуре. Благодаря работе с проверенными поставщиками премиальных тканей результат практически неотличим от фабричного. Замена подкладки — от 7 000 ₽.',
  },
  {
    question: 'Сколько стоит ремонт кашемирового изделия?',
    answer: 'Стоимость ремонта кашемирового пальто или пиджака начинается от 4 000 ₽. Точная цена зависит от сложности повреждения и объёма работ. Мы выполняем бережную штопку, восстановление ткани и другие виды реставрации кашемира.',
  },
  {
    question: 'Гарантируете ли вы конфиденциальность при сдаче дорогих вещей?',
    answer: 'Безусловно. Мы понимаем ценность каждого изделия — как финансовую, так и эмоциональную. Все вещи хранятся в отдельном закрытом помещении, каждый заказ обрабатывается индивидуально. Конфиденциальность и бережное обращение гарантированы.',
  },
  {
    question: 'Как долго занимает ремонт брендовой одежды?',
    answer: 'Сроки зависят от сложности ремонта: мелкий ремонт — от 3 до 5 рабочих дней, замена подкладки или фурнитуры — от 7 до 14 дней. Точные сроки мастер назовёт после осмотра изделия. При необходимости возможен срочный ремонт.',
  },
]

export default function BrendovayaFAQ() {
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
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о ремонте брендовой одежды</h2>
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
