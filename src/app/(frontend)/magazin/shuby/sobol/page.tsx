import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/magazin/ProductCard'
import CategoryNav from '@/components/magazin/CategoryNav'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { getProductsByCategory } from '@/lib/get-products'

export const metadata = {
  title: 'Шубы из соболя — Купить соболиную шубу в Москве | Mary Belle',
  description: 'Шубы из соболя от московской фабрики Mary Belle. Индивидуальный пошив из соболя, эксклюзивные модели. С 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin/shuby/sobol',
  },
}

const sobolAdvantages = [
  { title: 'Самый ценный мех', description: 'Соболь — эталон роскоши и качества. Мех не имеет аналогов по мягкости, блеску и долговечности.' },
  { title: 'Индивидуальный пошив', description: 'Каждая шуба создаётся под вас — по меркам, с выбором модели, длины, капюшона и отделки.' },
  { title: 'Только отборные шкурки', description: 'Работаем с аукционным соболем — баргузинский, якутский. Каждую шкурку отбираем лично.' },
  { title: 'Мастера с опытом 15+ лет', description: 'Наши скорняки специализируются на соболе — знают особенности раскроя и посадки.' },
  { title: 'Примерки на этапе пошива', description: 'Приезжайте на примерку в процессе — подгоним посадку до идеала.' },
  { title: 'Гарантия на изделие', description: 'Даём письменную гарантию на все работы. Обслуживание и ремонт — бесплатно в течение года.' },
]

export default async function SobolPage() {
  const sobolItems = await getProductsByCategory('shuby', 'sobol')

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/modeli/sobol-e1746367903636.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 text-center">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] font-light uppercase text-gold">
              Индивидуальный пошив
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">Шубы из соболя</h1>
            <p className="mt-3 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Соболь — самый ценный мех в мире. Мы создаём соболиные шубы на заказ:
              от подбора шкурок до финальной примерки.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Шубы из соболя</span>
          </div>
        </div>

        <CategoryNav active="/magazin/shuby/sobol" />

        {/* Каталог товаров — стандартная сетка */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sobolItems.map((p) => (
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

        {/* === Премиальные секции === */}

        {/* Преимущества */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Почему соболь от Mary Belle
            </h2>
            <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
              Фабрика работает с соболем с 1870 года. За это время мы создали сотни эксклюзивных изделий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sobolAdvantages.map((item, i) => (
                <div key={i} className="p-8 bg-white border border-border-light">
                  <span className="text-brand/30 font-serif text-4xl">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl text-black mt-3 mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Как заказать */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Как заказать шубу из соболя</h2>
            <p className="text-text-muted mb-12 max-w-2xl mx-auto">
              Каждая соболиная шуба — индивидуальный проект. Мы не держим готовые изделия из соболя на витрине:
              каждую создаём под конкретного заказчика.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <span className="text-brand font-serif text-3xl">01</span>
                <h3 className="font-serif text-lg text-black mt-2 mb-2">Консультация</h3>
                <p className="text-text-muted text-sm">Приезжайте в ателье или позвоните. Обсудим модель, мех, бюджет.</p>
              </div>
              <div>
                <span className="text-brand font-serif text-3xl">02</span>
                <h3 className="font-serif text-lg text-black mt-2 mb-2">Подбор и пошив</h3>
                <p className="text-text-muted text-sm">Отберём шкурки, снимем мерки, сошьём изделие с промежуточными примерками.</p>
              </div>
              <div>
                <span className="text-brand font-serif text-3xl">03</span>
                <h3 className="font-serif text-lg text-black mt-2 mb-2">Ваша шуба готова</h3>
                <p className="text-text-muted text-sm">Финальная примерка, подгонка, упаковка. Гарантия и сервис на год.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
              Обсудить индивидуальный заказ
            </h2>
            <p className="text-text-muted text-lg mb-10">
              Позвоните или напишите — расскажем о сроках, стоимости и процессе пошива соболиной шубы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="inline-flex items-center justify-center gap-3 px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                <Phone size={18} strokeWidth={1.5} />
                Позвонить
              </a>
              <a
                href="https://wa.me/79670555978?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BF%D0%BE%D1%88%D0%B8%D0%B2%20%D1%88%D1%83%D0%B1%D1%8B%20%D0%B8%D0%B7%20%D1%81%D0%BE%D0%B1%D0%BE%D0%BB%D1%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-4 border-2 border-brand text-brand font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
            </div>
            <a
              href="https://yandex.ru/maps/-/CLQ-yI2e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-sm mt-6 block hover:text-brand transition-colors"
            >
              Москва, 1-й Новоподмосковный пер., д. 2/1 (5 мин от м. Войковская)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
