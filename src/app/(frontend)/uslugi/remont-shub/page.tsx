import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import RemontShubFAQ from './RemontShubFAQ'
import RemontShubGallery from './RemontShubGallery'
import SeasonalBanner from '@/components/ui/SeasonalBanner'
import { getSeasonalBanner } from '@/lib/strapi'
import PriceText, { payPart } from '@/components/ui/PriceText'

export const metadata = {
  title: 'Ремонт шуб в Москве — Реставрация норковых шуб',
  description: 'Ремонт шуб в Москве любой сложности: ремонт шубы из норки, реставрация меховых изделий, перекрой и перешив. Меховое ателье Mary Belle — мастера с опытом 15+ лет, гарантия на работы. М. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-shub',
  },
  openGraph: {
    title: 'Ремонт шуб в Москве — Реставрация норковых шуб',
    description: 'Ремонт шуб в Москве любой сложности: ремонт шубы из норки, реставрация меховых изделий, перекрой и перешив. Меховое ателье Mary Belle — мастера с опытом 15+ лет, гарантия на работы. М. Войковская.',
    url: 'https://mary-belle.ru/uslugi/remont-shub',
    images: [{ url: '/images/og/remont-shub.jpg', width: 1200, height: 630 }],
  },
}

const features = [
  { title: 'Замена подкладки', description: 'Полная или частичная замена на итальянский шёлк или вискозу по выбору.' },
  { title: 'Ремонт разрывов', description: 'Сшивание разрывов на мездре с укреплением и маскировкой швов.' },
  { title: 'Перешив и перекрой', description: 'Изменение фасона, длины, силуэта — из старой шубы в актуальную модель.' },
  { title: 'Замена фурнитуры', description: 'Крючки, пуговицы, молнии — подбираем под стиль изделия.' },
  { title: 'Ремонт карманов', description: 'Восстановление прорезных и накладных карманов.' },
  { title: 'Укрепление плеч', description: 'Замена и укрепление плечевых швов, подплечников.' },
]

const ateliers = [
  {
    title: 'Специализированное меховое ателье',
    subtitle: 'Лучший выбор',
    badge: 'Рекомендуем',
    isPrimary: true,
    rows: [
      { label: 'Оборудование', text: 'Скорняжные машинки, профессиональные ножи и барабаны для чистки.' },
      { label: 'Команда', text: 'Над изделием работают дизайнер, конструктор и скорняк.' },
      { label: 'Гарантия', text: 'Дают письменную гарантию на работу и отвечают за результат.' },
      { label: 'Результат', text: 'Делают даже сложный раскрой («поперечку»), подбирают идеальную фурнитуру.' },
    ],
    note: 'Дороже и дольше, чем в обычной мастерской.',
  },
  {
    title: 'Общее швейное ателье',
    subtitle: 'Для простых задач',
    rows: [
      { label: 'Оборудование', text: 'Обычные швейные машины, не для меха.' },
      { label: 'Компетенции', text: 'Мастер может быть отличным портным по тканям, но мех — специфичный материал.' },
      { label: 'Результат', text: 'Укоротить рукава, подшить подкладку, ушить шубу по бокам.' },
    ],
    note: 'Сложный перекрой или смену фасона лучше не доверять.',
  },
  {
    title: 'Частный мастер с Авито',
    subtitle: 'Рискованный вариант',
    rows: [
      { label: 'Оборудование', text: 'Обычно работают дома на бытовой машинке.' },
      { label: 'Гарантии', text: 'Никаких. Если что-то пойдёт не так — претензию предъявить некому.' },
      { label: 'Результат', text: 'Подойдёт, только если шуба не представляет ценности и вы готовы к экспериментам ради экономии.' },
    ],
    note: 'Главный риск — испортить дорогое изделие безвозвратно.',
  },
]

const prices = [
  { label: 'Замена подкладки без утеплителя', price: '~~21 500 ₽~~ 15 000 ₽' },
  { label: 'Замена подкладки с утеплителем', price: '~~от 28 500 ₽~~ от 20 000 ₽' },
  { label: 'Зашить разрыв (2–10 см)', price: '~~от 2 100 ₽~~ от 1 500 ₽' },
  { label: 'Поставить заплатку (4×4–8×8 см)', price: '~~от 5 000 ₽~~ от 3 500 ₽' },
  { label: 'Замена крючка шубного', price: '~~2 100 ₽~~ 1 500 ₽' },
  { label: 'Укоротить / удлинить низ', price: '~~от 18 500 ₽~~ от 13 000 ₽' },
  { label: 'Укоротить / удлинить рукава', price: '~~от 8 500 ₽~~ от 5 800 ₽' },
  { label: 'Реставрация карманов', price: '~~11 000 ₽~~ 7 800 ₽' },
  { label: 'Ушить плечевой шов', price: '~~от 5 500 ₽~~ от 3 800 ₽' },
]

export default async function RemontShubPage() {
  const sb = await getSeasonalBanner()
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/uslugi-remont-mehov-hero.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Лето — выгоднее · Фабрика с 1870 года
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Ремонт шуб в Москве — Меховое ателье Mary Belle
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Отремонтируем и до зимы сохраним в меховом холодильнике. Заберём бесплатно.
            </p>
            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand/60 bg-black/40 backdrop-blur-md text-white text-sm md:text-base font-serif tracking-wide text-center">
                Ремонт от 3 500 ₽ · Диагностика бесплатно · Гарантия 2 года
              </span>
            </div>
          </div>
        </section>

        {/* Летняя секция-баннер (под хиро) */}
        {sb.enabled && (
          <SeasonalBanner
            eyebrow={sb.eyebrow}
            title="Лето — лучшее время для ремонта шубы"
            text="Без очередей и спешки. Отремонтируем и до зимы сохраним в меховом холодильнике."
            chips={['от 3 500 ₽', 'Диагностика бесплатно', 'Гарантия 2 года']}
            ctaLabel="Записаться на диагностику"
            ctaHref="#zapis"
          />
        )}

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
                { '@type': 'ListItem', position: 3, name: 'Ремонт шуб' },
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
              name: 'Ремонт шуб в Москве',
              description: 'Профессиональный ремонт шуб из норки, соболя, каракуля — от мелкого ремонта до полной реставрации меховых изделий.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Mary Belle',
                '@id': 'https://mary-belle.ru/#organization',
              },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: prices.map((p) => {
                const pay = payPart(p.price)
                const numeric = pay.replace(/[^\d]/g, '')
                const isFrom = /^от\s/i.test(pay.trim())
                if (isFrom) {
                  return {
                    '@type': 'Offer',
                    name: p.label,
                    priceSpecification: { '@type': 'PriceSpecification', minPrice: numeric, priceCurrency: 'RUB' },
                  }
                }
                return { '@type': 'Offer', name: p.label, price: numeric, priceCurrency: 'RUB' }
              }),
            }),
          }}
        />
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Ремонт шуб</span>
          </div>
        </div>

        {/*
          Порядок секций (20.07.2026): фото работ → цены → тексты.
          Раньше цены стояли на 9-м экране из 14 (за четырьмя текстовыми
          статьями), и поисковый трафик уходил с отказами до 58%: человек
          искал «ремонт шуб цена» и не находил ответа. Тексты остались —
          они кормят SEO — но переехали ниже дела.
        */}

        {/* Gallery — первой */}
        <RemontShubGallery />

        {/* Prices — сразу после работ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Стоимость ремонта шуб</h2>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide"><PriceText price={item.price} /></span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">* Точная стоимость определяется после осмотра изделия мастером</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Когда шубе нужен ремонт?</h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Даже качественная норковая шуба со временем изнашивается: подкладка рвётся, мездра трескается
                  в местах сгиба, крючки расшатываются, а карманы протираются. Если вовремя не сделать ремонт —
                  повреждения только растут, и восстановление обходится дороже.
                </p>
                <p>
                  Профессиональный ремонт шуб из норки, соболя, каракуля, лисы и других мехов — от мелкого
                  ремонта до полной реставрации. Каждое изделие проходит диагностику, после чего мы составляем
                  план работ и называем точную стоимость.
                </p>
                <p>
                  Ателье Mary Belle специализируется на ремонте меховых изделий с 1870 года. Наши мастера
                  имеют опыт работы с любыми видами меха — от бюджетного кролика до русского соболя.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO content — detailed text */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                Ремонт шубы из норки — особенности
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Ремонт норковых шуб — самый частый запрос в нашем ателье. Норка — мех нежный и при этом
                  дорогой, поэтому важно доверить ремонт профессионалам. Домашние попытки зашить разрыв
                  или заменить крючок часто приводят к ещё большим повреждениям мездры.
                </p>
                <p>
                  Типичные проблемы норковых шуб: разрывы мездры в зоне плеч и проймы (из-за нагрузки
                  при надевании), потёртости на рукавах и по низу, растянутые петли для крючков,
                  износ подкладки в карманах и по спинке. Все эти повреждения мы устраняем
                  с подбором меха в тон — после ремонта заплатки и швы не видны.
                </p>
                <p>
                  Реставрация шубы — это более масштабная работа: восстановление цвета, замена
                  целых секций меха, обновление подкладки и фурнитуры. Результат — изделие выглядит
                  как новое и служит ещё много сезонов. Стоимость реставрации шубы определяется
                  после осмотра мастером — приезжайте на бесплатную диагностику.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Виды ремонта</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atelier comparison — закрытие возражения «почему вы дороже» */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-3">
              Как выбрать ателье для ремонта шубы
            </h2>
            <p className="text-text-muted mb-12 max-w-2xl text-lg leading-relaxed">
              От того, куда вы обратитесь, напрямую зависит — будете рады результату или разочарованы.
              Есть три уровня мастерских, разберём каждый.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ateliers.map((a, i) => (
                <div
                  key={i}
                  className={`relative p-8 border ${
                    a.isPrimary
                      ? 'bg-brand/5 border-brand shadow-sm'
                      : 'bg-white border-border-light'
                  }`}
                >
                  {a.badge && (
                    <span className="absolute -top-3 left-6 px-3 py-1 bg-brand text-white text-xs uppercase tracking-widest">
                      {a.badge}
                    </span>
                  )}
                  <span className="block text-xs uppercase tracking-widest text-text-muted">
                    {a.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-black mt-2 mb-6">{a.title}</h3>
                  <ul className="space-y-4">
                    {a.rows.map((r, j) => (
                      <li key={j}>
                        <span className="block text-xs uppercase tracking-widest text-brand/80 mb-1">
                          {r.label}
                        </span>
                        <span className="text-text-body text-sm leading-relaxed">{r.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 pt-6 border-t border-border-light text-text-muted text-xs italic leading-relaxed">
                    {a.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-text-muted">
              Mary Belle — специализированное меховое ателье с 1870 года.{' '}
              <Link href="/o-fabrike" className="text-brand hover:underline">
                О нашем производстве →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="zapis" className="relative py-20 md:py-28 text-center overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/gov-import/proizvodstvo/sh-ceh-sh.jpg)' }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Запишитесь на диагностику</h2>
            <p className="text-white/70 mb-10 text-lg">
              Привезите шубу в ателье — мастер осмотрит изделие, покажет все проблемные места
              и назовёт точную стоимость ремонта. Диагностика бесплатная.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
                Позвонить
              </a>
              <Link href="/kontakty" className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline">
                Как добраться
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <RemontShubFAQ />

        {/* Related */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Ремонт норковых шуб', href: '/uslugi/remont-shub/norkovye' },
                { title: 'Ремонт шуб из соболя', href: '/uslugi/remont-shub/sobolinye' },
                { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group p-8 border border-border-light hover:border-brand transition-colors">
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
