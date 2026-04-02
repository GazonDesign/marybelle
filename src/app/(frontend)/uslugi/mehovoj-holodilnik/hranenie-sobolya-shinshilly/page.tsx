import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import PremiumFurFAQ from './PremiumFurFAQ'

export const metadata = {
  title: 'Хранение соболя, шиншиллы и рыси в холодильнике — от 3 200 ₽/мес | Mary Belle',
  description: 'Хранение элитных шуб из соболя, шиншиллы, рыси, горностая в меховом холодильнике +4°C. Индивидуальный режим, полная страховка. Меховая фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/hranenie-sobolya-shinshilly',
  },
  openGraph: {
    title: 'Хранение соболя, шиншиллы и рыси в холодильнике — от 3 200 ₽/мес',
    description: 'Хранение элитных шуб из соболя, шиншиллы, рыси, горностая в меховом холодильнике +4°C. Индивидуальный режим, полная страховка. Меховая фабрика с 1870 года.',
    url: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/hranenie-sobolya-shinshilly',
    images: [{ url: '/images/holodilnik/hero-new.jpg' }],
  },
}

const furCards = [
  {
    title: 'Соболь',
    subtitle: 'Чувствителен к свету и перепадам температур',
    description:
      'Соболиный мех — самый ценный в мире. Его ворс крайне чувствителен к ультрафиолету: даже непрямой солнечный свет за один сезон способен изменить оттенок. Перепады температур приводят к пересыханию мездры, которая у соболя тоньше миллиметра. Хранение в полной темноте при стабильных +4°C — единственный способ сохранить природный блеск и эластичность на десятилетия.',
  },
  {
    title: 'Шиншилла',
    subtitle: 'Требует стабильной влажности для сохранения структуры ворса',
    description:
      'Мех шиншиллы — самый густой среди всех животных: до 20 000 волосков на квадратный сантиметр. Малейшее отклонение влажности приводит к слипанию или ломкости тончайшего ворса. Оптимальный режим — 50–55% влажности без колебаний. В домашних условиях обеспечить такую стабильность невозможно, в нашем холодильнике — это штатный режим.',
  },
  {
    title: 'Рысь',
    subtitle: 'Длинный ворс нуждается в большем пространстве между изделиями',
    description:
      'Рысь отличается роскошным длинным ворсом с характерными кисточками. При плотном хранении ворс заминается и теряет объём, восстановить который крайне сложно. Для рысьих шуб мы выделяем увеличенный интервал между вешалками — минимум 15 см с каждой стороны. Анатомические вешалки с широкими плечиками сохраняют силуэт изделия.',
  },
]

const advantages = [
  {
    title: 'Фабрика с 1870 года',
    description: '155 лет работы с элитным мехом. Мы знаем особенности каждого вида — от соболя до горностая.',
  },
  {
    title: 'Индивидуальные анатомические вешалки',
    description: 'Увеличенный интервал между изделиями. Широкие плечики сохраняют форму воротника и линию плеч.',
  },
  {
    title: 'Полная страховка',
    description: 'Каждое изделие застраховано на декларированную стоимость. Вы защищены от любых непредвиденных ситуаций.',
  },
  {
    title: 'Фотофиксация + опись + пломбирование',
    description: 'При приёмке фиксируем состояние изделия, составляем опись и пломбируем место хранения. Полная прозрачность.',
  },
  {
    title: 'Резервная климатическая система',
    description: 'Автономные генераторы и дублирующая система поддержания микроклимата. Температура стабильна даже при отключении электричества.',
  },
  {
    title: 'Охрана и контроль доступа 24/7',
    description: 'Круглосуточная охранная система, видеонаблюдение, контроль доступа по карте. Ваше изделие в полной безопасности.',
  },
]

const prices = [
  { label: 'Шиншилла, соболь, рысь, горностай, куница, белка', price: '3 200 ₽/мес' },
  { label: 'Оплата за 6 месяцев', price: 'скидка 10%' },
  { label: 'Оплата за 12 месяцев', price: 'скидка 20%' },
  { label: 'Комбинированные изделия (мех + кожа)', price: '+15% к базовой цене' },
  { label: 'Химчистка премиум перед хранением', price: 'от 5 000 ₽' },
]

const trustStats = [
  { value: 'с 1870', label: 'года работаем с элитным мехом' },
  { value: '+4°C', label: 'стабильная температура 24/7' },
  { value: '100%', label: 'страховка на декларированную стоимость' },
  { value: '24/7', label: 'охрана и контроль доступа' },
]

export default function HranenieSobolyaShinshillyPage() {
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
              Премиальное хранение элитных мехов
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Соболь, шиншилла, рысь — особый уход
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Так хранят мех на аукционах Sotheby&apos;s: +4°C, контролируемая влажность, полная страховка
            </p>
          </div>
        </section>

        {/* Schema — BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mary-belle.ru/' },
                { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://mary-belle.ru/uslugi' },
                { '@type': 'ListItem', position: 3, name: 'Меховой холодильник', item: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik' },
                { '@type': 'ListItem', position: 4, name: 'Хранение элитных мехов' },
              ],
            }),
          }}
        />
        {/* Schema — Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Хранение элитных шуб из соболя, шиншиллы и рыси',
              description: 'Хранение элитных шуб из соболя, шиншиллы, рыси, горностая в меховом холодильнике при +4°C. Индивидуальный режим, полная страховка на декларированную стоимость.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Mary Belle',
                '@id': 'https://mary-belle.ru/#organization',
                foundingDate: '1870',
                address: { '@type': 'PostalAddress', addressLocality: 'Москва', streetAddress: 'м. Войковская' },
              },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '3200',
                priceCurrency: 'RUB',
                offerCount: prices.length,
              },
            }),
          }}
        />

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi/mehovoj-holodilnik" className="hover:text-brand transition-colors">Меховой холодильник</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Хранение элитных мехов</span>
          </div>
        </div>

        {/* Premium pitch section */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Элитный мех требует элитного хранения
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Соболь, шиншилла, рысь — это не просто дорогой мех. Это изделия с уникальной
                    структурой ворса, тончайшей мездрой и особыми требованиями к условиям хранения.
                    Обычный шкаф или даже стандартный меховой холодильник не подходят — каждый вид
                    элитного меха чувствителен к своему набору факторов.
                  </p>
                  <p>
                    Соболь боится света и перепадов температур. Шиншилла — малейших колебаний
                    влажности. Рысь — тесного размещения, которое заминает длинный ворс.
                    Горностай, куница, белка — каждый мех со своими особенностями.
                  </p>
                  <p>
                    В ателье Mary Belle мы храним элитные меха с учётом индивидуальных требований
                    каждого вида. 155 лет опыта работы с самыми ценными мехами мира позволяют
                    нам гарантировать: ваше изделие проведёт межсезонье в идеальных условиях
                    и вернётся к вам в безупречном состоянии.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/holodilnik/climate.jpg"
                  alt="Меховой холодильник для элитных мехов — +4°C, контроль влажности"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Individual care cards */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Индивидуальный подход к каждому виду меха
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Каждый элитный мех уникален — и условия хранения тоже должны быть уникальными
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {furCards.map((card, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-2">{card.title}</h3>
                  <p className="text-brand text-sm font-medium mb-4">{card.subtitle}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Mary Belle for premium furs */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Почему Mary Belle для элитных мехов
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Всё, что нужно для безупречного хранения соболя, шиншиллы и рыси — в одном месте
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{adv.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prices */}
        <section id="price" className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость хранения элитных мехов</h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Прозрачные цены без скрытых доплат. Скидки при долгосрочном хранении
            </p>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Точная стоимость определяется после осмотра изделия мастером. Забор и доставка по Москве — 1 500 ₽ в каждую сторону.
              </p>
            </div>
          </div>
        </section>

        {/* Trust stats bar */}
        <section className="py-12 bg-bg-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl md:text-4xl text-brand mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA parallax */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/holodilnik/storage.jpg)' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Доверьте элитный мех профессионалам с 1870 года
            </h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Количество мест для премиальных мехов ограничено. Оставьте заявку — курьер заберёт изделие в удобное время.
            </p>
            <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
              Забронировать место
            </a>
          </div>
        </section>

        {/* FAQ */}
        <PremiumFurFAQ />

        {/* Related services */}
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
