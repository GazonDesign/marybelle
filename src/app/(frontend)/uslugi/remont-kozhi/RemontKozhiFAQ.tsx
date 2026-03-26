'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Можно ли восстановить потёртости на кожаной куртке?',
    answer:
      'Да, мы успешно восстанавливаем потёртости на кожаных куртках, особенно в зонах наибольшего износа — манжеты, воротник, карманы. Мастер подбирает точный оттенок и наносит профессиональное покрытие, которое возвращает изделию ухоженный вид. Стоимость реставрации потёртостей — от 3 000 ₽.',
  },
  {
    question: 'Сколько стоит ремонт дублёнки?',
    answer:
      'Стоимость ремонта дублёнки зависит от вида работ. Общий ремонт — от 4 000 ₽, замена подкладки — 15 000 ₽, частичная реставрация подкладки — от 5 500 до 8 200 ₽. Точную стоимость мастер определит после осмотра изделия в нашем ателье у м. Войковская.',
  },
  {
    question: 'Берёте ли вы в ремонт изделия из экокожи?',
    answer:
      'Мы специализируемся на работе с натуральной кожей и дублёнками. Изделия из экокожи принимаем на ремонт выборочно — зависит от качества материала и характера повреждений. Рекомендуем привезти вещь на бесплатный осмотр, чтобы мастер оценил возможность восстановления.',
  },
  {
    question: 'Можно ли перекрасить кожаную куртку в другой цвет?',
    answer:
      'Да, мы выполняем полное и локальное окрашивание кожаных изделий. Подбираем точный оттенок, используем профессиональные красители, которые не трескаются и сохраняют мягкость кожи. Окрашивание кожаной куртки — от 6 000 ₽. Ателье Mary Belle работает с 1870 года и накопило огромный опыт в реставрации кожи.',
  },
  {
    question: 'Сколько времени занимает ремонт кожаного изделия?',
    answer:
      'Сроки зависят от сложности работ. Замена молнии или фурнитуры занимает 3–5 рабочих дней. Реставрация потёртостей и окрашивание — от 5 до 10 дней. Полная замена подкладки — до двух недель. Точные сроки мастер озвучит после осмотра.',
  },
  {
    question: 'Что делать, если на дублёнке появились трещины?',
    answer:
      'Трещины на дублёнке — частая проблема, особенно при неправильном хранении. Наши мастера восстанавливают повреждённые участки: заделывают трещины, укрепляют материал и при необходимости подкрашивают. Чем раньше вы обратитесь, тем проще и дешевле будет ремонт. Привозите изделие на осмотр — это бесплатно.',
  },
]

export default function RemontKozhiFAQ() {
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
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section className="py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о ремонте кожи и дублёнок</h2>
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
