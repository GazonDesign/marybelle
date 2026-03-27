import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import HimchistkaFAQ from './HimchistkaFAQ'

export const metadata = {
  title: 'Химчистка шубы в Москве — Чистка меха из норки, цены | Mary Belle',
  description: 'Химчистка шубы из норки в Москве от 3 500 ₽. Химчистка меха, дублёнок и кожаных изделий на профессиональном оборудовании. Антимолевая обработка. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/himchistka',
  },
  openGraph: {
    title: 'Химчистка шубы в Москве — Чистка меха из норки, цены',
    description: 'Химчистка шубы из норки в Москве от 3 500 ₽. Химчистка меха, дублёнок и кожаных изделий на профессиональном оборудовании. Антимолевая обработка. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/himchistka',
    images: [{ url: '/images/uslugi-himchistka-hero.webp' }],
  },
}

const cleaningTypes = [
  {
    title: 'Химчистка шубы из норки',
    description: 'Норковый мех требует особого подхода. Мы используем щадящие составы, которые удаляют загрязнения из глубины ворса, не повреждая структуру меха. После чистки норка восстанавливает естественный блеск и мягкость.',
  },
  {
    title: 'Химчистка дублёнки',
    description: 'Дублёнки из натуральной овчины чистим специальными средствами для замши и кожи. Убираем солевые разводы, пятна, засаленность воротника и карманов. Восстанавливаем цвет и фактуру материала.',
  },
  {
    title: 'Чистка кожаных изделий',
    description: 'Профессиональная чистка кожаных курток, плащей и аксессуаров. Удаляем загрязнения, восстанавливаем эластичность кожи, обрабатываем защитным составом для продления срока службы изделия.',
  },
  {
    title: 'Антимольная обработка',
    description: 'Обработка меховых и шерстяных изделий специальным аэрозолем от моли. Рекомендуем проводить перед сезонным хранением — это надёжная защита от вредителей на весь период межсезонья.',
  },
]

const features = [
  { image: '/images/himchistka/sostavy.jpg', title: 'Безопасные составы', description: 'Используем профессиональные средства BioClean — деликатная чистка без повреждения меха и кожи.' },
  { image: '/images/himchistka/dezinsekcia.jpg', title: 'Дезинсекция', description: 'Антимольная обработка специальным аэрозолем — защита изделия от вредителей после чистки.' },
  { image: '/images/himchistka/blesk.jpg', title: 'Восстановление блеска', description: 'Мех после чистки выглядит как новый — глубокий цвет и естественный блеск возвращаются.' },
  { image: '/images/himchistka/zapah.jpg', title: 'Удаление запахов', description: 'Устраняем запах табака, духов, затхлости — изделие пахнет свежестью.' },
  { image: '/images/himchistka/nakoplenie.jpg', title: 'Глубокая очистка', description: 'Удаляем накопившуюся пыль, грязь и жир из глубины ворса — то, что не видно, но разрушает мех.' },
]

const prices = [
  { label: 'Химчистка шубы', price: 'от 5 000 ₽' },
  { label: 'Химчистка дублёнки', price: 'от 4 000 ₽' },
  { label: 'Химчистка кожаной куртки', price: 'от 3 000 ₽' },
  { label: 'Антимольная обработка', price: 'от 1 500 ₽' },
  { label: 'Экспресс-чистка (1–2 дня)', price: '+50% к стоимости' },
]

export default function HimchistkaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/uslugi-himchistka-hero.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Профессиональная чистка меха и кожи
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Химчистка шубы из норки в Москве
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Деликатная чистка меховых и кожаных изделий на профессиональном оборудовании
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Химчистка</span>
          </div>
        </div>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Зачем нужна химчистка меха?</h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  За сезон мех накапливает пыль, жир, влагу и запахи. Если не чистить шубу регулярно,
                  ворс теряет блеск, мездра грубеет, а изделие начинает пахнуть.
                </p>
                <p>
                  Мы используем профессиональные составы BioClean и специальное оборудование —
                  чистим мех деликатно, без агрессивной химии. После обработки ваша шуба выглядит как новая.
                </p>
                <p>
                  Рекомендуем делать химчистку шубы перед сезонным хранением — это продлевает жизнь изделия на годы.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed text — SEO content */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                Профессиональная химчистка меха в Москве
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Домашняя чистка меха — одна из главных причин порчи дорогих изделий. Народные средства
                  (крахмал, бензин, уксус) разрушают мездру, обесцвечивают ворс и оставляют неприятный запах.
                  Химчистка шубы в профессиональном ателье — единственный способ безопасно удалить загрязнения,
                  сохранив структуру и внешний вид меха на долгие годы.
                </p>
                <p>
                  В ателье Mary Belle мы выполняем химчистку шубы из норки, соболя, каракуля, песца и других
                  видов меха. Также принимаем дублёнки из натуральной овчины, кожаные куртки, плащи
                  и аксессуары. Каждое изделие получает индивидуальный подход — метод чистки подбирается
                  в зависимости от типа меха, степени загрязнения и состояния мездры.
                </p>
                <p>
                  Наш процесс включает пять этапов: осмотр изделия мастером, подбор оптимального метода чистки,
                  деликатная химчистка профессиональными составами, финишная обработка для восстановления блеска
                  и мягкости, итоговый контроль качества. Чистка меха в Москве в нашем ателье — это гарантия
                  бережного отношения к вашему изделию.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features with photos — alternating layout */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-14 text-center">Что мы делаем</h2>
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <span className="font-serif text-4xl text-brand/15 block mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-2xl text-black mb-3">{feature.title}</h3>
                    <p className="text-text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning types cards */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">
              Виды химчистки
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cleaningTypes.map((type, i) => (
                <div key={i} className="bg-white p-8 border border-border-light">
                  <span className="font-serif text-3xl text-brand/15 block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{type.title}</h3>
                  <p className="text-text-muted leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Запишитесь на химчистку</h2>
            <p className="text-white/70 mb-10 text-lg">
              Привезите изделие — мастер осмотрит и назовёт точную стоимость. Консультация бесплатная.
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

        {/* Prices */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Стоимость</h2>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">* Точная стоимость определяется после осмотра изделия мастером</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <HimchistkaFAQ />

        {/* Related */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Меховой холодильник', href: '/uslugi/mehovoj-holodilnik', icon: '/icons/services/storage.svg' },
                { title: 'Окрашивание меха', href: '/uslugi/okrashivanie', icon: '/icons/services/coloring.svg' },
                { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi', icon: '/icons/services/leather.svg' },
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
