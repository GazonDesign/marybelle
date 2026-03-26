import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import Link from 'next/link'
import { getProductsByTag } from '@/data/products'

export const metadata = {
  title: 'Шубы больших размеров в Москве — Купить от 52 до 62 | Mary Belle',
  description: 'Шубы больших размеров (52–62) из скандинавской норки. Изготовим по вашим меркам за 21 день. Московская меховая фабрика Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin/bolshie-razmery',
  },
  openGraph: {
    title: 'Шубы больших размеров в Москве — Купить от 52 до 62',
    description: 'Шубы больших размеров (52–62) из скандинавской норки. Изготовим по вашим меркам за 21 день. Московская меховая фабрика Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/magazin/bolshie-razmery',
    images: [{ url: '/images/gov-import/katalog-shuby/01-img_5695.jpg' }],
  },
}

export default function BolshieRazmeryPage() {
  const items = getProductsByTag('bolshie-razmery')

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Размеры 52–62
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Шубы больших размеров</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Изготовим по вашим меркам за 21 день. Выберите понравившуюся модель —
              ваш размер сошьём на заказ. Все модели из скандинавской норки.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Большие размеры</span>
          </div>
        </div>

        {/* Category nav */}
        <div className="border-b border-border-light">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-4">
              {[
                { label: 'Все шубы', href: '/magazin' },
                { label: 'Норка', href: '/magazin/shuby/norka' },
                { label: 'Каракуль', href: '/magazin/shuby/karakul' },
                { label: 'Соболь', href: '/magazin/shuby/sobol' },
                { label: 'Большие размеры', href: '/magazin/bolshie-razmery', active: true },
                { label: 'Пальто', href: '/magazin/palto' },
                { label: 'Кожа', href: '/magazin/kozha' },
              ].map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`shrink-0 px-5 py-2 text-sm tracking-wide transition-all ${
                    'active' in cat && cat.active
                      ? 'bg-brand text-white'
                      : 'bg-bg-light text-text-muted hover:bg-brand/10 hover:text-brand'
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {items.map((p) => (
                <ProductCard
                  key={p.slug}
                  title={p.title}
                  description={p.description}
                  image={p.images[0]}
                  href={`/magazin/product/${p.slug}`}
                  price={p.price}
                  oldPrice={p.oldPrice}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Не нашли свой размер?</h2>
            <p className="text-white/70 mb-10 text-lg">
              Мы изготовим шубу любого размера по вашим индивидуальным меркам за 21 день.
              Позвоните или приезжайте в ателье — мастер снимет мерки и подберёт модель.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Позвонить
              </a>
              <Link
                href="/kontakty"
                className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Как добраться
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
