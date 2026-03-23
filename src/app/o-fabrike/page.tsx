import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'О фабрике Mary Belle — Московская меховая фабрика с 1870 года',
  description: 'История меховой фабрики Mary Belle — более 150 лет работы с мехом. Пошив, ремонт и хранение шуб в Москве. Ателье у м. Войковская.',
}

const milestones = [
  { year: '1870', title: 'Основание фабрики', description: 'Основана как небольшая меховая мастерская в Москве. Специализация — работа с ценными мехами для московской знати.' },
  { year: '1920-е', title: 'Советский период', description: 'Фабрика продолжает работу, обслуживая государственные заказы. Сохраняются традиции мастерства и обработки меха.' },
  { year: '1990-е', title: 'Новая эра', description: 'Возрождение как частное ателье. Акцент на индивидуальный пошив и ремонт меховых изделий премиум-класса.' },
  { year: '2010-е', title: 'Расширение услуг', description: 'Открытие мехового холодильника, запуск услуг химчистки и окрашивания. Полный цикл ухода за меховыми изделиями.' },
  { year: '2020-е', title: 'Программа трейд-ин', description: 'Запуск программы обмена старых шуб на новые. Курьерский забор и доставка по Москве.' },
  { year: 'Сегодня', title: '150+ лет мастерства', description: 'Полный спектр услуг для меховых и кожаных изделий. Собственное производство, опытные мастера, современное оборудование.' },
]

const values = [
  { title: 'Мастерство', description: 'Мастера с опытом 15–30 лет. Каждый специалист работает с определённым типом меха — это гарантирует экспертный уровень.' },
  { title: 'Честность', description: 'Называем точную стоимость после осмотра. Не навязываем лишних услуг. Если ремонт нецелесообразен — скажем об этом.' },
  { title: 'Качество материалов', description: 'Работаем с проверенными поставщиками: мех — NAFA, Kopenhagen Fur. Подкладка — итальянский шёлк и вискоза.' },
  { title: 'Гарантия', description: 'Даём гарантию на все виды работ. Уверены в результате — и отвечаем за него.' },
]

export default function OFabrikePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-gold">
              С 1870 года
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Московская меховая фабрика Mary Belle
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Более 150 лет мы работаем с мехом. Три поколения мастеров, тысячи довольных клиентов.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">О фабрике</span>
          </div>
        </div>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Наша история</h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Mary Belle — московская меховая фабрика, основанная в 1870 году. За более чем
                    полтора века мы прошли путь от небольшой мастерской до полноценного мехового
                    ателье с собственным производством.
                  </p>
                  <p>
                    Сегодня мы предлагаем полный спектр услуг: от ремонта и реставрации шуб до
                    индивидуального пошива из лучших мехов мира. Наш меховой холодильник хранит
                    сотни изделий наших клиентов каждый сезон.
                  </p>
                  <p>
                    Ателье расположено в 5 минутах от метро Войковская — удобно для жителей
                    всей Москвы. Приезжайте, и наши мастера позаботятся о вашем изделии.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-warm p-8 text-center">
                  <span className="font-serif text-4xl text-brand block">150+</span>
                  <span className="text-text-muted text-sm mt-2 block">лет работы</span>
                </div>
                <div className="bg-bg-warm p-8 text-center">
                  <span className="font-serif text-4xl text-brand block">12</span>
                  <span className="text-text-muted text-sm mt-2 block">мастеров</span>
                </div>
                <div className="bg-bg-warm p-8 text-center">
                  <span className="font-serif text-4xl text-brand block">3 000+</span>
                  <span className="text-text-muted text-sm mt-2 block">изделий в год</span>
                </div>
                <div className="bg-bg-warm p-8 text-center">
                  <span className="font-serif text-4xl text-brand block">5 мин</span>
                  <span className="text-text-muted text-sm mt-2 block">от м. Войковская</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-16 text-center">Ключевые вехи</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand shrink-0 mt-2" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-brand/20" />}
                  </div>
                  <div className="pb-12">
                    <span className="text-brand font-medium text-sm tracking-wide">{m.year}</span>
                    <h3 className="font-serif text-xl text-black mt-1 mb-2">{m.title}</h3>
                    <p className="text-text-muted leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">Наши принципы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className="p-8 border border-border-light">
                  <h3 className="font-serif text-xl text-black mb-3">{v.title}</h3>
                  <p className="text-text-muted leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Приезжайте к нам</h2>
            <p className="text-white/70 mb-10 text-lg">
              Мы находимся в 5 минутах от м. Войковская. Привезите изделие —
              мастер осмотрит и проконсультирует бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakty"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Как добраться
              </Link>
              <Link
                href="/uslugi"
                className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
