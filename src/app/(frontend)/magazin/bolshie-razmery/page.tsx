import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import CategoryNav from '@/components/magazin/CategoryNav'
import Link from 'next/link'
import { getProductsByTag } from '@/lib/get-products'

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

export default async function BolshieRazmeryPage() {
  const items = await getProductsByTag('bolshie-razmery')

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/bannery/banner-dub.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 text-center">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] font-light uppercase text-white/60">
              Размеры 52–62
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">Шубы больших размеров</h1>
            <p className="mt-3 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
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

        <CategoryNav active="/magazin/bolshie-razmery" />

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
