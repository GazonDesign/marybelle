import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import CategoryNav from '@/components/magazin/CategoryNav'
import Link from 'next/link'
import { getProductsByCategory } from '@/lib/get-products'

export const metadata = {
  title: 'Шубы из норки — Купить норковую шубу в Москве | Mary Belle',
  description: 'Шубы из норки от московской фабрики Mary Belle. Норковые шубы собственного производства — классические и современные модели. Примерка в ателье у м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin/shuby/norka',
  },
}

export default async function NorkaPage() {
  const items = await getProductsByCategory('shuby', 'norka')

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/history/2025/banner-okrashivanie.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">Шубы из норки</h1>
            <p className="mt-3 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Норковые шубы собственного производства — от классики до авангарда.
              Каждую модель можно примерить в нашем ателье.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Шубы из норки</span>
          </div>
        </div>

        <CategoryNav active="/magazin/shuby/norka" />

        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((p) => (
                <ProductCard
                  key={p.slug}
                  title={p.title}
                  description={p.description}
                  image={p.images[0]}
                  href={`/magazin/product/${p.slug}`}
                  price={p.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
