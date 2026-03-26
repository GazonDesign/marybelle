import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { getPrices } from '@/lib/strapi'

export const metadata = {
  title: 'Цены на ремонт шуб, пошив, хранение и химчистку — Mary Belle | Москва',
  description: 'Прайс-лист мехового ателье Mary Belle. Цены на ремонт шуб, хранение шуб в холодильнике, пошив на заказ, окрашивание, химчистку. Москва, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/ceny',
  },
}

const fallbackCategories = [
  {
    categoryName: 'Перекрой', href: '/uslugi/perekroj', sortOrder: 1, slug: 'perekroj',
    items: [
      { label: 'Полный перекрой', price: '96 000 ₽' },
      { label: 'Частичный перекрой', price: '67 000 ₽' },
    ],
  },
  {
    categoryName: 'Мелкий ремонт', href: '/uslugi/remont-shub', sortOrder: 2, slug: 'melkij-remont',
    items: [
      { label: 'Пришить вешалку (без стоимости)', price: '600 ₽' },
      { label: 'Изготовить и пришить вешалку', price: '1 000 ₽' },
      { label: 'Замена крючка шубного (с учётом стоимости)', price: '1 500 ₽' },
    ],
  },
]

export default async function CenyPage() {
  const strapiPrices = await getPrices()
  const priceCategories = strapiPrices.length > 0 ? strapiPrices : fallbackCategories

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Прайс-лист
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Цены на услуги
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Актуальные цены на ремонт меховых изделий. Точная стоимость определяется
              после осмотра изделия мастером.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Цены</span>
          </div>
        </div>

        <section className="py-20 md:py-28">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            <div className="space-y-16">
              {priceCategories.map((cat) => (
                <div key={cat.categoryName}>
                  <div className="flex items-end justify-between mb-6">
                    <h2 className="font-serif text-2xl md:text-3xl text-black">{cat.categoryName}</h2>
                    {cat.href && (
                      <Link
                        href={cat.href}
                        className="text-brand text-sm hover:underline hidden sm:inline"
                      >
                        Подробнее &rarr;
                      </Link>
                    )}
                  </div>
                  <div className="border border-border-light">
                    {cat.items.map((item: { label: string; price: string }, i: number) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center px-6 py-4 ${
                          i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
                        }`}
                      >
                        <span className="text-text-body">{item.label}</span>
                        <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  {cat.href && (
                    <Link
                      href={cat.href}
                      className="text-brand text-sm hover:underline mt-3 inline-block sm:hidden"
                    >
                      Подробнее &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-bg-warm border border-border-light text-center">
              <p className="font-serif text-xl text-black mb-3">Точная стоимость — после осмотра</p>
              <p className="text-text-muted max-w-xl mx-auto mb-6">
                Цены актуальны. Мастер осмотрит изделие и назовёт точную стоимость
                с учётом сложности работ, типа меха и состояния.
              </p>
              <a
                href="tel:+74952254444"
                className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Записаться на осмотр
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
