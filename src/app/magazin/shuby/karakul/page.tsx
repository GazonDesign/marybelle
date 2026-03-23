import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import Link from 'next/link'
import { getProductsByCategory } from '@/data/products'

export const metadata = {
  title: 'Шубы из каракуля — Купить каракулевую шубу в Москве | Mary Belle',
  description: 'Шубы из каракуля от фабрики Mary Belle. Каракулевые шубы и полушубки — элегантные модели собственного производства. Москва, м. Войковская.',
}

export default function KarakulPage() {
  const items = getProductsByCategory('shuby', 'karakul')

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Шубы из каракуля</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Элегантные каракулевые шубы — тонкий завиток, лёгкий блеск, утончённый стиль.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Шубы из каракуля</span>
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
