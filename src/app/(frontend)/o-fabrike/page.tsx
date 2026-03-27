import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'О фабрике Mary Belle — Московская меховая фабрика с 1870 года',
  description: 'История меховой фабрики Mary Belle — более 150 лет работы с мехом. Пошив, ремонт и хранение шуб в Москве. Ателье у м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/o-fabrike',
  },
}

const milestones = [
  { year: '1870', title: 'Основание фабрики', description: 'Основана как небольшая меховая мастерская в Москве. Специализация — работа с ценными мехами для московской знати.', image: '/images/history/2018/vintage-sewing-machine.jpg', imageAlt: 'Традиции ручного мастерства — историческая швейная мастерская' },
  { year: '1920-е', title: 'Советский период', description: 'Фабрика продолжает работу, обслуживая государственные заказы. Сохраняются традиции мастерства и обработки меха.', image: null, imageAlt: '' },
  { year: '1990-е', title: 'Новая эра', description: 'Возрождение как частное ателье. Акцент на индивидуальный пошив и ремонт меховых изделий премиум-класса.', image: null, imageAlt: '' },
  { year: '2018', title: 'Первый онлайн-каталог', description: 'Запуск интернет-магазина. Первая профессиональная съёмка коллекции — начало цифровой истории фабрики.', image: '/images/history/2018/first-catalog-shuba-01.jpg', imageAlt: 'Первая каталожная съёмка Mary Belle, 2018 год' },
  { year: '2021', title: 'Расширение ассортимента', description: 'Новые направления — экошубы, кожаные изделия. Профессиональная editorial-съёмка коллекции соболей.', image: '/images/history/2021/editorial-sobol-duo.jpg', imageAlt: 'Editorial-фотосессия коллекции соболей Mary Belle, 2021 год' },
  { year: '2023', title: 'Обновление производства', description: 'Модернизация мастерской, запуск мехового холодильника. Полный цикл ухода за меховыми изделиями.', image: '/images/history/2023/holodilnik-hangers.jpg', imageAlt: 'Меховой холодильник Mary Belle — профессиональное хранение шуб, 2023 год' },
  { year: '2025', title: 'Новая глава', description: 'Запуск программы трейд-ин, новый фирменный стиль, уличная фотосессия именных моделей. Полный спектр услуг для меховых и кожаных изделий.', image: '/images/history/2025/pudra-01.jpg', imageAlt: 'Модель Пудра — коллекция Mary Belle, 2025 год' },
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
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/o-fabrike/mary_belle_workshop_panoramic.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-gold">
              С 1870 года
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Московская меховая фабрика Mary Belle
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
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

        {/* Production Gallery */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Наше производство</h2>
              <p className="text-text-muted max-w-2xl mx-auto">Собственная мастерская, профессиональное оборудование и мастера с многолетним опытом</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 relative overflow-hidden group">
                <img src="/images/production/workshop-table-01.jpg" alt="Раскройный стол мастерской Mary Belle — соболь в работе, 2025" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-xl text-white">Мастерская</h3>
                  <p className="text-white/70 text-sm">Раскройный стол — здесь рождаются шубы</p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img src="/images/production/workshop-hands-sobol.jpg" alt="Руки мастера на соболином мехе — фабрика Mary Belle, 2025" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-xl text-white">Ручная работа</h3>
                  <p className="text-white/70 text-sm">Каждое изделие проходит через руки мастера</p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img src="/images/o-fabrike/mary_belle_tools_table.jpg" alt="Инструменты скорняка" className="w-full h-[192px] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-lg text-white">Инструменты</h3>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img src="/images/production/workshop-table-02.jpg" alt="Соболиный мех на раскройном столе — крупный план, 2025" className="w-full h-[192px] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-lg text-white">Раскройка</h3>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <img src="/images/production/karakul-detail.jpg" alt="Каракулевый мех — деталь производства" className="w-full h-[192px] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-lg text-white">Каракуль</h3>
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
                  <div className="pb-12 flex-1">
                    <span className="text-brand font-medium text-sm tracking-wide">{m.year}</span>
                    <h3 className="font-serif text-xl text-black mt-1 mb-2">{m.title}</h3>
                    <p className="text-text-muted leading-relaxed">{m.description}</p>
                    {m.image && (
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <img
                          src={m.image}
                          alt={m.imageAlt}
                          className="w-full max-w-md h-56 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
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

        {/* Brand Identity */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Фирменный стиль</h2>
              <p className="text-text-muted max-w-2xl mx-auto">Каждая деталь — от упаковки до визитки — отражает наше отношение к качеству</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden group">
                <img src="/images/brand-mockups/bags-mockup.webp" alt="Фирменные пакеты Mary Belle" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden group">
                <img src="/images/brand-mockups/box-mockup.webp" alt="Фирменная коробка Mary Belle" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden group">
                <img src="/images/brand-mockups/stationery-mockup.webp" alt="Фирменная канцелярия Mary Belle" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
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
