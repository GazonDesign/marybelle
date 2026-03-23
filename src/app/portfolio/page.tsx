'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const portfolioItems = [
  { image: '/images/portfolio/001.jpg', title: 'Окрашивание норковой шубы', category: 'Окрашивание', description: 'Перекраска из тёмно-коричневого в золотистый оттенок с сохранением текстуры меха.' },
  { image: '/images/portfolio/002.jpg', title: 'Реставрация норковой шубы', category: 'Ремонт шуб', description: 'Восстановление тёмной норковой шубы: чистка, обновление ворса, ремонт подкладки.' },
  { image: '/images/portfolio/003.jpg', title: 'Окрашивание норковой шубы в тёмный', category: 'Окрашивание', description: 'Перекраска светлой норки в глубокий тёмно-коричневый цвет.' },
  { image: '/images/portfolio/004.jpg', title: 'Реставрация соболиной шубы', category: 'Ремонт шуб', description: 'Комплексная реставрация шубы из соболя: восстановление меха, обновление фурнитуры.' },
  { image: '/images/portfolio/005.jpg', title: 'Перекрой пальто с меховым воротником', category: 'Перекрой', description: 'Перекрой мехового воротника и обновление силуэта пальто.' },
  { image: '/images/portfolio/006.jpg', title: 'Окрашивание шубы из песца', category: 'Окрашивание', description: 'Перекраска шубы из песца из серого в белоснежный цвет.' },
  { image: '/images/portfolio/007.jpg', title: 'Реставрация мехового полушубка', category: 'Ремонт шуб', description: 'Обновление мехового полушубка: чистка, восстановление воротника.' },
  { image: '/images/portfolio/008.jpg', title: 'Реставрация мужской шубы', category: 'Ремонт шуб', description: 'Восстановление мужской шубы: чистка меха, ремонт подкладки и фурнитуры.' },
  { image: '/images/portfolio/009.jpg', title: 'Реставрация дублёнки-авиатор', category: 'Ремонт дублёнок', description: 'Восстановление дублёнки: чистка, обновление цвета, ремонт мехового воротника.' },
  { image: '/images/portfolio/010.jpg', title: 'Окрашивание шубы из песца', category: 'Окрашивание', description: 'Перекраска шубы из песца с обновлением оттенка и восстановлением блеска.' },
  { image: '/images/portfolio/011.jpg', title: 'Реставрация норковой шубы', category: 'Ремонт шуб', description: 'Восстановление норковой шубы: обновление цвета, ремонт швов.' },
  { image: '/images/portfolio/012.jpg', title: 'Окрашивание шубы из лисы', category: 'Окрашивание', description: 'Перекраска шубы из лисы в светлый оттенок с полным обновлением изделия.' },
]

const categories = ['Все', 'Ремонт шуб', 'Окрашивание', 'Перекрой', 'Ремонт дублёнок']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filtered = activeCategory === 'Все'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Наши работы
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Портфолио — до и после
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Реальные результаты работы наших мастеров. На каждой фотографии — одно изделие до и после реставрации.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Портфолио</span>
          </div>
        </div>

        {/* Filters */}
        <section className="py-8 border-b border-border-light">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm tracking-wide transition-all ${
                    activeCategory === cat
                      ? 'bg-brand text-white'
                      : 'bg-bg-light text-text-muted hover:bg-brand/10 hover:text-brand'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((item, i) => (
                <div key={i} className="group">
                  <div className="relative overflow-hidden bg-bg-light">
                    <img
                      src={item.image}
                      alt={`${item.title} — до и после`}
                      className="w-full h-auto"
                    />
                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 tracking-wider uppercase">
                      До
                    </div>
                    <div className="absolute top-4 right-4 bg-brand text-white text-xs px-3 py-1 tracking-wider uppercase">
                      После
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="text-brand text-xs tracking-wider uppercase">{item.category}</span>
                    <h3 className="font-serif text-xl text-black mt-1">{item.title}</h3>
                    <p className="text-text-muted text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-warm text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Хотите такой же результат?</h2>
            <p className="text-text-muted text-lg mb-10">
              Привезите изделие в ателье — мастер осмотрит и скажет, что можно сделать.
              Консультация бесплатная.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Позвонить
              </a>
              <Link
                href="/uslugi"
                className="px-12 py-4 border-2 border-brand text-brand font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Все услуги
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
