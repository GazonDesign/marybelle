'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BeforeAfterCase {
  title: string
  category: string
  description: string
  beforeImage: string | null
  afterImage: string | null
  duration: string | null
}

interface PortfolioItem {
  title: string
  category: string
  description: string
  singleImage: string | null
}

export default function PortfolioClient({
  beforeAfterCases,
  portfolioItems,
  categories,
}: {
  beforeAfterCases: BeforeAfterCase[]
  portfolioItems: PortfolioItem[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filtered = activeCategory === 'Все'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Before/After Cases */}
      <section className="py-16 md:py-24 bg-bg-warm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">До и после</h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">Реальные результаты работы наших мастеров — каждый кейс с фотографиями до и после реставрации</p>
          <div className="space-y-16">
            {beforeAfterCases.map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <img src={item.beforeImage || ''} alt={`${item.title} — до`} className="w-full h-auto" />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-4 py-2 tracking-wider uppercase font-medium">До</div>
                  </div>
                  <div className="relative">
                    <img src={item.afterImage || ''} alt={`${item.title} — после`} className="w-full h-auto" />
                    <div className="absolute top-4 left-4 bg-brand text-white text-xs px-4 py-2 tracking-wider uppercase font-medium">После</div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-brand text-xs tracking-wider uppercase">{item.category}</span>
                    <h3 className="font-serif text-2xl text-black mt-1">{item.title}</h3>
                    <p className="text-text-muted mt-1">{item.description}</p>
                  </div>
                  {item.duration && (
                    <div className="shrink-0 text-right">
                      <span className="text-text-muted text-sm">Срок работы</span>
                      <span className="block font-serif text-xl text-brand">{item.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    src={item.singleImage || ''}
                    alt={`${item.title} — до и после`}
                    className="w-full h-auto"
                  />
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
    </>
  )
}
