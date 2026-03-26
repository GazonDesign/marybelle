import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import Link from 'next/link'
import { getProductsByCategory } from '@/data/products'

export const metadata = {
  title: 'Шубы из норки — Купить норковую шубу в Москве | Mary Belle',
  description: 'Шубы из норки от московской фабрики Mary Belle. Норковые шубы собственного производства — классические и современные модели. Примерка в ателье у м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin/shuby/norka',
  },
}

export default function NorkaPage() {
  const items = getProductsByCategory('shuby', 'norka')

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Шубы из норки</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
