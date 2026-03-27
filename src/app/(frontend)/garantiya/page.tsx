import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata = {
  title: 'Российская гарантия на работы — Меховое ателье Mary Belle | Москва',
  description: 'Российская гарантия на все виды работ мехового ателье Mary Belle. До 12 месяцев на пошив и ремонт шуб. Москва, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/garantiya',
  },
}

const guaranteeItems = [
  {
    title: 'Ремонт и реставрация',
    period: '6 месяцев',
    description: 'На все швы, фурнитуру и выполненные работы. Если шов разошёлся или фурнитура вышла из строя — починим бесплатно.',
  },
  {
    title: 'Индивидуальный пошив',
    period: '12 месяцев',
    description: 'На швы, фурнитуру и конструкцию изделия. Полная ответственность за посадку, крой и качество меха.',
  },
  {
    title: 'Перекрой шубы',
    period: '12 месяцев',
    description: 'На все конструктивные элементы нового изделия. Перекрой — это фактически новая шуба, и гарантия соответствующая.',
  },
  {
    title: 'Окрашивание меха',
    period: '1 сезон',
    description: 'На стойкость цвета при соблюдении рекомендаций по уходу. Если цвет изменился при нормальной носке — перекрасим.',
  },
  {
    title: 'Химчистка',
    period: 'Гарантия результата',
    description: 'Если результат чистки вас не устроит — проведём повторную обработку бесплатно в течение 14 дней.',
  },
  {
    title: 'Хранение в холодильнике',
    period: 'Весь период хранения',
    description: 'Каждое изделие застраховано. Состояние фиксируется при приёмке. Полная ответственность за сохранность.',
  },
]

const principles = [
  {
    title: 'Письменная гарантия',
    description: 'Каждый клиент получает квитанцию с описанием работ, сроками гарантии и печатью ателье.',
  },
  {
    title: 'Бесплатный гарантийный ремонт',
    description: 'Обнаружили дефект в рамках срока — привезите изделие, починим за свой счёт без вопросов.',
  },
  {
    title: 'Российские стандарты',
    description: 'Работаем в соответствии с законодательством РФ о защите прав потребителей и отраслевыми стандартами.',
  },
  {
    title: 'Более 150 лет репутации',
    description: 'Фабрика с 1870 года. Наша гарантия — не бумажка, а репутация, заработанная тремя поколениями мастеров.',
  },
]

export default function GarantiyaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/production/designer-production.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Российская гарантия
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Даём письменную гарантию на все виды работ. Уверены в качестве — и отвечаем за результат.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Российская гарантия</span>
          </div>
        </div>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Почему наша гарантия — настоящая
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Мы не прячем условия мелким шрифтом. Каждый клиент получает квитанцию
                    с чётким описанием выполненных работ и сроком гарантии.
                  </p>
                  <p>
                    За 150 лет работы мы научились отвечать за качество. Наши мастера
                    специализируются на конкретных типах меха — это исключает ошибки и гарантирует
                    экспертный уровень каждой работы.
                  </p>
                  <p>
                    Если в рамках гарантийного срока вы обнаружите дефект — просто привезите
                    изделие. Мастер осмотрит его и выполнит ремонт бесплатно.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/o-fabrike/mary_belle_master_working.jpg"
                  alt="Мастер Mary Belle за работой"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Grid */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Сроки гарантии по видам работ
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Гарантия действует при соблюдении рекомендаций по уходу и хранению
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guaranteeItems.map((item, i) => (
                <div key={i} className="bg-white p-8 border border-border-light">
                  <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand text-sm font-medium tracking-wide mb-4">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">
              Принципы нашей гарантии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-brand/30 font-serif text-5xl leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-black mb-8">
              Гарантия не распространяется на:
            </h2>
            <ul className="space-y-4">
              {[
                'Естественный износ меха при длительной носке',
                'Повреждения, вызванные неправильным хранением после выдачи',
                'Механические повреждения, нанесённые после выполнения работ',
                'Изменения, внесённые другими мастерскими',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/40 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-text-muted text-sm">
              Подтверждением гарантии является квитанция о выполненных работах,
              выданная при получении изделия.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/production/workshop-hands-sobol.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Доверьте изделие профессионалам
            </h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Позвоните или приезжайте в ателье — мастер осмотрит изделие и расскажет о гарантии на конкретный вид работ.
            </p>
            <a
              href="tel:+74952254444"
              className="inline-flex items-center gap-3 px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
            >
              <Phone size={18} strokeWidth={1.5} />
              Позвонить
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
