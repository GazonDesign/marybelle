import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HolodilnikFAQ from './HolodilnikFAQ'
import Link from 'next/link'
import CrossSellBanner from '@/components/ui/CrossSellBanner'
import FadeIn from '@/components/ui/FadeIn'

export const metadata = {
  title: 'Хранение шуб в холодильнике — Цены 2026, Москва',
  description: 'Хранение шуб в меховом холодильнике в Москве — цена от 5 000 ₽ за сезон. Температура +5°C, влажность 50–60%. Забор и доставка по Москве. Хранение меховых изделий в ателье Mary Belle.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik',
  },
  openGraph: {
    title: 'Хранение шуб в холодильнике — Цены 2026, Москва',
    description: 'Хранение шуб в меховом холодильнике в Москве — цена от 5 000 ₽ за сезон. Температура +5°C, влажность 50–60%. Забор и доставка по Москве. Хранение меховых изделий в ателье Mary Belle.',
    url: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik',
    images: [{ url: '/images/holodilnik/hero-new.jpg' }],
  },
}

const steps = [
  { image: '/images/holodilnik/step-priem.jpg', title: 'Приёмка и осмотр', description: 'Мастер в перчатках осматривает изделие, фиксирует состояние — полная прозрачность.' },
  { image: '/images/holodilnik/step-chistka.jpg', title: 'Чистка и обработка', description: 'Профессиональная чистка и антимольная обработка перед размещением в холодильнике.' },
  { image: '/images/holodilnik/step-razmeshenie.jpg', title: 'Размещение в холодильнике', description: 'Каждое изделие хранится на индивидуальном месте при +4°C и влажности 50–60%.' },
  { image: '/images/holodilnik/step-vydacha.jpg', title: 'Выдача к сезону', description: 'Ваша шуба в идеальном состоянии — забирайте в ателье или закажите доставку.' },
]

const advantages = [
  { image: '/images/holodilnik/klimat.jpg', title: 'Идеальный климат', description: 'Температура +4–5°C и влажность 50–60% — мех сохраняет эластичность и блеск.' },
  { image: '/images/holodilnik/zashita.jpg', title: 'Защита от вредителей', description: 'Антимольная обработка и герметичное хранение — ни одна моль не доберётся.' },
  { image: '/images/holodilnik/solntse.jpg', title: 'Защита от солнца', description: 'Полная темнота внутри камеры — мех не выгорает и не теряет цвет.' },
  { image: '/images/holodilnik/individual.jpg', title: 'Индивидуальное размещение', description: 'Каждое изделие на отдельной вешалке с достаточным пространством.' },
  { image: '/images/holodilnik/dostup.jpg', title: 'Доступ в любое время', description: 'Нужна шуба раньше? Приезжайте — мы выдадим изделие в любой момент.' },
  { image: '/images/holodilnik/safe.jpg', title: 'Страховка и безопасность', description: 'Каждое изделие застраховано. Охрана и контроль доступа 24/7.' },
]

const packages = [
  {
    name: 'На месяц',
    price: 'от 1 150 ₽/мес.',
    features: ['Климат +4°C, влажность 50%', 'Фото-фиксация при приёме', 'Материальная гарантия'],
    highlighted: false,
  },
  {
    name: 'На сезон',
    subtitle: '6 месяцев, апрель–октябрь',
    price: 'от 6 900 ₽/сезон',
    features: ['Климат +4°C, влажность 50%', 'Фото-фиксация при приёме', 'Материальная гарантия', 'Бесплатный курьер от 3 шуб'],
    highlighted: true,
  },
  {
    name: 'На год',
    subtitle: '12 месяцев, скидка 25%',
    price: 'от 10 350 ₽/год',
    features: ['Климат +4°C, влажность 50%', 'Фото-фиксация при приёме', 'Материальная гарантия', 'Бесплатный курьер всегда'],
    highlighted: false,
  },
]

const priceTable = [
  { fur: 'Шиншилла', month: '3 200 ₽', season: '19 200 ₽', year: '28 800 ₽' },
  { fur: 'Соболь', month: '2 900 ₽', season: '17 400 ₽', year: '26 100 ₽' },
  { fur: 'Норка', month: '2 450 ₽', season: '14 700 ₽', year: '22 050 ₽' },
  { fur: 'Лиса / Песец', month: '2 100 ₽', season: '12 600 ₽', year: '18 900 ₽' },
  { fur: 'Бобер / Нерпа', month: '1 750 ₽', season: '10 500 ₽', year: '15 750 ₽' },
  { fur: 'Кролик / Мутон', month: '1 250 ₽', season: '7 500 ₽', year: '11 250 ₽' },
  { fur: 'Дублёнка', month: '1 500 ₽', season: '9 000 ₽', year: '13 500 ₽' },
  { fur: 'Меховой жилет', month: '1 150 ₽', season: '6 900 ₽', year: '10 350 ₽' },
]

export default function MehovojHolodilnikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/holodilnik/hero-new.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Профессиональное хранение меховых изделий
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Хранение шуб в меховом холодильнике
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              +4°C, влажность 50–60%, страховка — ваша шуба проведёт лето в идеальных условиях
            </p>
          </div>
        </section>

        {/* Breadcrumbs + Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mary-belle.ru/' },
                { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://mary-belle.ru/uslugi' },
                { '@type': 'ListItem', position: 3, name: 'Меховой холодильник' },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Хранение шуб в меховом холодильнике',
              description: 'Профессиональное хранение шуб и меховых изделий в меховом холодильнике при температуре +4°C и влажности 50–60%. Забор и доставка по Москве.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Mary Belle',
                '@id': 'https://mary-belle.ru/#organization',
              },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: priceTable.map((row) => ({
                '@type': 'Offer',
                name: `Хранение — ${row.fur}`,
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  minPrice: row.month.replace(/[^\d]/g, ''),
                  priceCurrency: 'RUB',
                  unitText: 'месяц',
                },
              })),
            }),
          }}
        />
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Меховой холодильник</span>
          </div>
        </div>

        {/* Intro + image */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Зачем хранить шубу в холодильнике?</h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Мех — живой материал. При комнатной температуре мездра пересыхает, ворс теряет блеск,
                    а моль может уничтожить изделие за один сезон.
                  </p>
                  <p>
                    Меховой холодильник поддерживает температуру +4–5°C и влажность 50–60% — это условия,
                    при которых мех сохраняется десятилетиями. Плюс полная темнота и обработка от вредителей.
                  </p>
                  <p>
                    Мы заберём шубу курьером, обработаем, разместим на индивидуальном месте и вернём
                    к началу сезона в идеальном состоянии.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img src="/images/holodilnik/climate.jpg" alt="Меховой холодильник +4°C" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Как это работает</h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">От приёмки до выдачи — 4 простых шага</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 100} className="bg-white overflow-hidden group">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand text-white flex items-center justify-center font-serif text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-black mb-2">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">Преимущества хранения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <FadeIn key={i} delay={i * 80} className="group overflow-hidden">
                  <div className="relative h-[220px] overflow-hidden">
                    <img src={adv.image} alt={adv.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white">{adv.title}</h3>
                  </div>
                  <div className="p-4 bg-bg-light">
                    <p className="text-text-muted text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with big image */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/holodilnik/storage.jpg)' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Забронируйте место в холодильнике</h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Количество мест ограничено. Оставьте заявку — курьер заберёт шубу в удобное время.
            </p>
            <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
              Забронировать
            </a>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Тарифы хранения</h2>
              <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">Выберите удобный период — чем дольше, тем выгоднее</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <FadeIn key={i} delay={i * 100} className={`relative p-8 border ${pkg.highlighted ? 'border-brand bg-brand/[0.02]' : 'border-border-light bg-white'}`}>
                  {pkg.highlighted && (
                    <span className="absolute -top-3 left-8 bg-brand text-white text-xs tracking-widest uppercase px-4 py-1">
                      Популярный
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-black mb-1">{pkg.name}</h3>
                  {pkg.subtitle && <p className="text-text-muted text-sm mb-4">{pkg.subtitle}</p>}
                  {!pkg.subtitle && <div className="mb-4" />}
                  <p className="text-brand text-2xl font-medium mb-6">{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-text-body text-sm">
                        <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+74952254444"
                    className={`block text-center mt-8 px-8 py-3 font-light tracking-widest text-sm ${
                      pkg.highlighted
                        ? 'bg-brand text-white btn-shimmer'
                        : 'border-2 border-brand text-brand btn-shimmer-outline'
                    }`}
                  >
                    Забронировать
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <FadeIn className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Цены по виду меха</h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">Стоимость зависит от типа изделия и периода хранения</p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b-2 border-brand/20">
                    <th className="text-left py-4 pr-4 font-serif text-lg text-black">Вид меха</th>
                    <th className="text-right py-4 px-4 text-sm text-text-muted font-medium tracking-wide">Месяц</th>
                    <th className="text-right py-4 px-4 text-sm text-text-muted font-medium tracking-wide">Сезон (6 мес.)</th>
                    <th className="text-right py-4 pl-4 text-sm text-text-muted font-medium tracking-wide">Год (−25%)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                      <td className="py-4 pr-4 text-text-body">{row.fur}</td>
                      <td className="py-4 px-4 text-right text-text-body whitespace-nowrap">{row.month}</td>
                      <td className="py-4 px-4 text-right text-brand font-medium whitespace-nowrap">{row.season}</td>
                      <td className="py-4 pl-4 text-right text-text-body whitespace-nowrap">{row.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="max-w-4xl mx-auto mt-8 space-y-2 text-sm text-text-muted">
              <p>* Курьерская доставка — от 500 ₽ по Москве (бесплатно при сдаче 3+ изделий или годовом пакете)</p>
              <p>* Химчистка перед хранением — скидка 10% при заказе вместе с хранением</p>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <HolodilnikFAQ />

        {/* Cross-sell banner */}
        <CrossSellBanner currentService="mehovoj-holodilnik" />

        {/* Related */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка', href: '/uslugi/himchistka', icon: '/icons/services/cleaning.svg' },
                { title: 'Ремонт шуб', href: '/uslugi/remont-shub', icon: '/icons/services/repair.svg' },
                { title: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub', icon: '/icons/services/sewing.svg' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group p-8 border border-border-light bg-white hover:border-brand transition-colors">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center bg-brand/10 rounded-sm">
                    <img src={s.icon} alt="" className="w-5 h-5 opacity-60" />
                  </div>
                  <h3 className="font-serif text-xl text-black group-hover:text-brand transition-colors">{s.title}</h3>
                  <span className="inline-flex items-center gap-2 text-text-muted text-sm mt-3 group-hover:text-brand group-hover:gap-4 transition-all duration-300">
                    Подробнее <span>&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
