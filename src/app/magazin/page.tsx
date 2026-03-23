'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import ProductCard from '@/components/magazin/ProductCard'
import { products } from '@/data/products'

const categories = [
  {
    title: 'Шубы из норки',
    description: 'Классические и современные модели из натуральной норки.',
    image: '/images/magazin/shuby/zhanna-norka/01.jpg',
    href: '/magazin/shuby/norka',
  },
  {
    title: 'Шубы из каракуля',
    description: 'Элегантные каракулевые шубы и полушубки.',
    image: '/images/magazin/shuby/afgan-karakul/01.jpg',
    href: '/magazin/shuby/karakul',
  },
  {
    title: 'Шубы из соболя',
    description: 'Роскошные изделия из самого ценного меха.',
    image: '/images/magazin/shuby/dunyasha-scanblack/01.jpg',
    href: '/magazin/shuby/sobol',
  },
  {
    title: 'Пальто',
    description: 'Шерстяные и кашемировые пальто собственного производства.',
    image: '/images/magazin/palto/palto-1/01.jpg',
    href: '/magazin/palto',
  },
  {
    title: 'Кожаные изделия',
    description: 'Куртки, жакеты, юбки из натуральной кожи и замши.',
    image: '/images/magazin/kozha/bomber-aviator/01.jpg',
    href: '/magazin/kozha',
  },
]

type FilterKey = 'all' | 'shuby' | 'palto' | 'kozha'

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'shuby', label: 'Шубы' },
  { key: 'palto', label: 'Пальто' },
  { key: 'kozha', label: 'Кожа' },
]

export default function MagazinPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter)

  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Магазин
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Шубы, пальто и кожаные изделия собственного производства. Каждое изделие можно примерить в ателье.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Магазин</span>
          </div>
        </div>

        {/* Category Cards */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative overflow-hidden"
                >
                  <div className="relative h-[200px] md:h-[260px] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h2 className="font-serif text-base md:text-lg text-white leading-tight">{cat.title}</h2>
                      <span className="inline-flex items-center gap-1 text-white/60 text-xs mt-1 group-hover:text-white group-hover:gap-2 transition-all duration-300">
                        Смотреть <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filter + Products Grid */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-border-light pb-6">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-6 py-2.5 text-sm tracking-wide transition-all ${
                    activeFilter === f.key
                      ? 'bg-brand text-white'
                      : 'bg-bg-light text-text-muted hover:bg-brand/10 hover:text-brand'
                  }`}
                >
                  {f.label}
                  <span className="ml-2 text-xs opacity-60">
                    {f.key === 'all' ? products.length : products.filter(p => p.category === f.key).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((p) => (
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

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-muted text-lg">В этой категории пока нет товаров</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
