import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import CategoryNav from '@/components/magazin/CategoryNav'
import Link from 'next/link'
import { getProductsByCategory } from '@/lib/get-products'

export const metadata = {
  title: 'Пальто из шерсти и экомеха — Купить в Москве | Mary Belle',
  description: 'Пальто из натуральной шерсти и экомеха в Mary Belle. Женские пальто московского производства. С 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin/palto',
  },
}

export default async function PaltoPage() {
  const items = await getProductsByCategory('palto')

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/modeli/palto.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">Пальто</h1>
            <p className="mt-3 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Шерстяные и кашемировые пальто собственного производства. Каждую модель можно подогнать по фигуре.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Пальто</span>
          </div>
        </div>

        <CategoryNav active="/magazin/palto" />

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
