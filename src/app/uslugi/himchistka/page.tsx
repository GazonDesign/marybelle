import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Химчистка шубы из норки в Москве — Чистка меха и дублёнок | Mary Belle',
  description: 'Химчистка шубы из норки в Москве — профессиональная чистка меха, химчистка дублёнки. Химчистка меха на профессиональном оборудовании. Ателье Mary Belle, м. Войковская.',
}

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
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/product-plus.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/70">
              Профессиональная чистка меха и кожи
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Химчистка шубы
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-2xl">
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

        {/* Features with photos — alternating layout */}
        <section className="py-20 md:py-28 bg-bg-warm">
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
