'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Как добраться до ателье от метро Войковская?',
    answer: 'Ателье Mary Belle находится в 5 минутах пешком от станции метро Войковская по адресу: 1-й Новоподмосковный переулок, дом 2/1. Выходите из метро, двигайтесь по Старопетровскому проезду — ателье будет по правой стороне.',
  },
  {
    question: 'Есть ли парковка рядом с ателье?',
    answer: 'Да, рядом с ателье есть бесплатная парковка. Вы можете приехать на автомобиле — свободные места, как правило, всегда есть. Удобный подъезд со стороны 1-го Новоподмосковного переулка.',
  },
  {
    question: 'Можно ли приехать без записи?',
    answer: 'Да, вы можете приехать без предварительной записи в рабочие часы. Однако для вашего удобства мы рекомендуем записаться заранее — так мастер сможет уделить вам максимум внимания и времени.',
  },
  {
    question: 'Сколько стоит осмотр и оценка ремонта?',
    answer: 'Осмотр и диагностика изделия в нашем ателье — бесплатны. Мастер оценит состояние шубы, определит объём необходимых работ и назовёт точную стоимость ремонта на месте, без скрытых доплат.',
  },
  {
    question: 'Какие услуги можно получить на месте?',
    answer: 'В ателье Mary Belle на Войковской доступен полный спектр меховых услуг: ремонт и реставрация шуб, перешив и перекрой, индивидуальный пошив, окрашивание меха, профессиональная химчистка и сезонное хранение в меховом холодильнике.',
  },
  {
    question: 'Работаете ли вы в выходные?',
    answer: 'Да, наше ателье работает ежедневно, включая выходные дни. Мы подберём удобное время для вашего визита. Актуальный график работы можно уточнить по телефону или в мессенджере.',
  },
]

export default function VojkovskayaFAQ() {
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
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы об ателье на Войковской</h2>
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
