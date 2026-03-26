import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Гарантия на работы — Меховое ателье Mary Belle | Москва',
  description: 'Гарантия на все виды работ мехового ателье Mary Belle. Условия гарантии на ремонт, пошив и окрашивание меховых изделий.',
  alternates: {
    canonical: 'https://mary-belle.ru/garantiya',
  },
}

export default function GarantiyaPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[70px]" />

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[800px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Гарантия</span>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-black mb-10">Гарантия на работы</h1>

            <div className="space-y-8 text-text-body leading-relaxed">
              <p>
                Меховое ателье Mary Belle предоставляет гарантию на все виды выполненных работ.
                Мы уверены в качестве — и отвечаем за результат.
              </p>

              <h2 className="font-serif text-2xl text-black mt-8">Условия гарантии</h2>

              <div className="space-y-4">
                <div className="p-6 border border-border-light">
                  <h3 className="font-medium text-black mb-2">Ремонт и реставрация</h3>
                  <p className="text-text-muted">Гарантия 6 месяцев на все швы, фурнитуру и выполненные работы.</p>
                </div>
                <div className="p-6 border border-border-light">
                  <h3 className="font-medium text-black mb-2">Индивидуальный пошив</h3>
                  <p className="text-text-muted">Гарантия 12 месяцев на швы, фурнитуру и конструкцию изделия.</p>
                </div>
                <div className="p-6 border border-border-light">
                  <h3 className="font-medium text-black mb-2">Окрашивание</h3>
                  <p className="text-text-muted">Гарантия на стойкость цвета — 1 сезон при соблюдении рекомендаций по уходу.</p>
                </div>
                <div className="p-6 border border-border-light">
                  <h3 className="font-medium text-black mb-2">Химчистка</h3>
                  <p className="text-text-muted">Гарантия качества чистки. Если результат вас не устроит — проведём повторную обработку бесплатно.</p>
                </div>
                <div className="p-6 border border-border-light">
                  <h3 className="font-medium text-black mb-2">Хранение</h3>
                  <p className="text-text-muted">Изделия застрахованы на весь период хранения. Состояние фиксируется при приёмке.</p>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-black mt-8">Гарантия не распространяется на:</h2>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Естественный износ меха при длительной носке</li>
                <li>Повреждения, вызванные неправильным хранением после выдачи</li>
                <li>Механические повреждения, нанесённые после выполнения работ</li>
                <li>Изменения, внесённые другими мастерскими</li>
              </ul>

              <p>
                При обнаружении дефекта в рамках гарантийного срока привезите изделие в ателье —
                мастер осмотрит его и выполнит гарантийный ремонт бесплатно.
              </p>

              <p className="text-text-muted text-sm">
                Подтверждением гарантии является квитанция о выполненных работах, выданная при получении изделия.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
