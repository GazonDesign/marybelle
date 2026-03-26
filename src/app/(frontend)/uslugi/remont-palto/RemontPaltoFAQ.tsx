'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Можно ли заменить подкладку в кашемировом пальто?',
    answer:
      'Да, мы выполняем полную и частичную замену подкладки в кашемировых пальто. Подбираем качественную ткань, которая не электризуется и приятна к телу. Стоимость замены подкладки без утеплителя — 15 000 ₽, с утеплителем — от 20 000 ₽. Работаем аккуратно, сохраняя форму и посадку изделия.',
  },
  {
    question: 'Сколько стоит ушить пальто по фигуре?',
    answer:
      'Стоимость зависит от объёма работ: ушить по боковым швам — от 6 500 ₽, скорректировать плечевой шов — от 3 800 ₽, укоротить или удлинить рукава — от 5 800 ₽. Мастер проведёт примерку и предложит оптимальный вариант, чтобы пальто сидело идеально.',
  },
  {
    question: 'Берёте ли вы в ремонт пальто с меховым воротником?',
    answer:
      'Да, ремонт пальто с меховыми элементами — одна из наших специализаций. Мы восстанавливаем и заменяем меховые воротники, манжеты и отделку. Ателье Mary Belle работает с мехом с 1870 года, поэтому вы можете быть уверены в качестве работы.',
  },
  {
    question: 'Можно ли укоротить пальто и сохранить пропорции?',
    answer:
      'Конечно. Наши мастера укорачивают пальто с учётом фасона, расположения карманов и общих пропорций силуэта. При необходимости корректируем линию низа и подкладку. Результат выглядит так, будто пальто изначально было такой длины. Стоимость зависит от модели — уточним после осмотра.',
  },
  {
    question: 'Сколько времени занимает ремонт пальто?',
    answer:
      'Простые работы — замена пуговиц, мелкий ремонт швов — выполняются за 2–3 дня. Ушивание по фигуре и замена подкладки — от 7 до 14 рабочих дней. Сложная реставрация с меховыми элементами может занять до трёх недель. Точные сроки мастер назовёт после осмотра в ателье у м. Войковская.',
  },
  {
    question: 'Что делать, если пальто прожжено или повреждено молью?',
    answer:
      'Привозите изделие к нам на бесплатный осмотр. В большинстве случаев мы можем незаметно устранить прожог или след от моли: выполняем художественную штопку, при необходимости — реставрацию ткани. Чем раньше обратитесь, тем лучше результат. Работаем с шерстью, кашемиром и драпом.',
  },
]

export default function RemontPaltoFAQ() {
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
          <h2 className="font-serif text-3xl md:text-4xl text-black">Частые вопросы о ремонте пальто</h2>
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
