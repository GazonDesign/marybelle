'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { products } from '@/data/products'
import { ChevronLeft, ChevronRight, Phone, X, ZoomIn, Shield, Truck, Ruler, Snowflake } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  shuby: 'Шубы',
  palto: 'Пальто',
  kozha: 'Кожаные изделия',
}

const subcategoryLabels: Record<string, string> = {
  norka: 'из норки',
  karakul: 'из каракуля',
  sobol: 'из соболя',
}

const categoryNav = [
  { label: 'Норка', href: '/magazin/shuby/norka' },
  { label: 'Каракуль', href: '/magazin/shuby/karakul' },
  { label: 'Соболь', href: '/magazin/shuby/sobol' },
  { label: 'Большие размеры', href: '/magazin/bolshie-razmery' },
  { label: 'Пальто', href: '/magazin/palto' },
  { label: 'Кожа', href: '/magazin/kozha' },
]

export default function ProductPageClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Related slider
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    checkScroll()
    const el = sliderRef.current
    if (el) el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el?.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scrollSlider = (dir: 'left' | 'right') => {
    const el = sliderRef.current
    if (!el) return
    const cardWidth = el.querySelector('a')?.offsetWidth || 300
    el.scrollBy({ left: dir === 'right' ? cardWidth + 16 : -(cardWidth + 16), behavior: 'smooth' })
  }

  // Lightbox keyboard + swipe
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!lightboxOpen || !product) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i < product.images.length - 1 ? i + 1 : 0))
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i > 0 ? i - 1 : product.images.length - 1))
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      const dy = e.changedTouches[0].clientY - touchStartY.current
      // Only swipe if horizontal movement > 50px and more horizontal than vertical
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      if (dx < 0) {
        setLightboxIndex((i) => (i < product.images.length - 1 ? i + 1 : 0))
      } else {
        setLightboxIndex((i) => (i > 0 ? i - 1 : product.images.length - 1))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [lightboxOpen, product])

  if (!product) {
    return (
      <>
        <Header />
        <main className="py-32 text-center">
          <h1 className="font-serif text-3xl text-black mb-4">Товар не найден</h1>
          <Link href="/magazin" className="text-brand hover:underline">Вернуться в магазин</Link>
        </main>
        <Footer />
      </>
    )
  }

  const categoryLabel = categoryLabels[product.category] || product.category
  const subcategoryLabel = product.subcategory ? subcategoryLabels[product.subcategory] : ''
  const breadcrumbCategory = product.subcategory
    ? `${categoryLabel} ${subcategoryLabel}`
    : categoryLabel

  const isBolshieRazmery = product.tags?.includes('bolshie-razmery')
  const categoryHref = isBolshieRazmery
    ? '/magazin/bolshie-razmery'
    : product.subcategory
      ? `/magazin/shuby/${product.subcategory}`
      : `/magazin/${product.category}`

  const breadcrumbName = isBolshieRazmery ? 'Большие размеры' : breadcrumbCategory

  const prev = () => setActiveImage((i) => (i > 0 ? i - 1 : product.images.length - 1))
  const next = () => setActiveImage((i) => (i < product.images.length - 1 ? i + 1 : 0))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)

  return (
    <>
      <Header />
      <main>
        <div className="h-[70px]" />

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-brand transition-colors">Магазин</Link>
            <span className="mx-2">/</span>
            <Link href={categoryHref} className="hover:text-brand transition-colors">{breadcrumbName}</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{product.title}</span>
          </div>
        </div>

        {/* Category nav */}
        <div className="border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
              {categoryNav.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`shrink-0 px-4 py-1.5 text-xs tracking-wide transition-all ${
                    cat.href === categoryHref
                      ? 'bg-brand text-white'
                      : 'bg-bg-light text-text-muted hover:bg-brand/10 hover:text-brand'
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Product */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Gallery */}
              <div>
                {/* Main image */}
                <div
                  className="relative aspect-[3/4] bg-bg-light overflow-hidden mb-4 cursor-zoom-in group"
                  onClick={() => openLightbox(activeImage)}
                >
                  <img
                    src={product.images[activeImage]}
                    alt={`${product.title} — фото ${activeImage + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-80 transition-opacity" strokeWidth={1.5} />
                  </div>

                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prev() }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                        aria-label="Предыдущее фото"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); next() }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                        aria-label="Следующее фото"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1">
                    {activeImage + 1} / {product.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(product.images.length, 6)}, 1fr)` }}>
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`aspect-square overflow-hidden border-2 transition-colors ${
                          i === activeImage ? 'border-brand' : 'border-transparent hover:border-brand/30'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.title} — миниатюра ${i + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {product.category === 'kozha' && (
                  <p className="text-text-muted text-xs mt-3 italic">
                    Изделие на фото — наша модель, сшитая в нашем ателье. Фотографии стилизованы для каталога.
                  </p>
                )}
              </div>

              {/* Info */}
              <div className="lg:pt-4">
                <span className="text-brand text-sm tracking-[0.2em] uppercase font-medium">
                  {breadcrumbCategory}
                </span>
                <h1 className="font-serif text-3xl md:text-4xl text-black mt-3 mb-6">
                  {product.title}
                </h1>
                <p className="text-text-body text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {product.details && product.details.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-medium text-text-body mb-4">Характеристики</h3>
                    <div className="space-y-3">
                      {product.details.map((d, i) => {
                        const [label, value] = d.split(': ')
                        return (
                          <div key={i} className="flex justify-between py-2 border-b border-border-light">
                            <span className="text-text-muted">{label}</span>
                            <span className="text-text-body font-medium">{value}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="mb-8 p-6 bg-bg-warm border border-border-light">
                  <div className="flex items-baseline gap-3">
                    <p className="text-brand font-serif text-2xl">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-text-muted text-lg line-through">{product.oldPrice}</p>
                    )}
                  </div>
                  <p className="text-text-muted text-sm mt-1">
                    {isBolshieRazmery
                      ? 'Изготовим по вашим меркам за 21 день'
                      : 'Приезжайте на примерку — мы подгоним изделие по фигуре'}
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+74952254444"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
                  >
                    <Phone size={18} strokeWidth={1.5} />
                    Позвонить и записаться
                  </a>
                  <a
                    href={`https://wa.me/79670555978?text=${encodeURIComponent(`Здравствуйте! Интересует изделие «${product.title}»`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 border-2 border-brand text-brand font-light tracking-widest text-sm btn-shimmer-outline"
                  >
                    Написать в WhatsApp
                  </a>
                </div>

                <a
                  href="https://yandex.ru/maps/-/CLQ-yI2e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-xs mt-4 text-center block hover:text-brand transition-colors"
                >
                  Москва, 1-й Новоподмосковный пер., д. 2/1 (5 мин от м. Войковская)
                </a>

                {/* Trust badges */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-4 bg-bg-warm border border-border-light">
                    <Shield size={20} className="text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Гарантия 2 года</p>
                      <p className="text-xs text-text-muted mt-0.5">На мех и фурнитуру</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-bg-warm border border-border-light">
                    <Ruler size={20} className="text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Подгонка по фигуре</p>
                      <p className="text-xs text-text-muted mt-0.5">Бесплатно при покупке</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-bg-warm border border-border-light">
                    <Truck size={20} className="text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Примерка в ателье</p>
                      <p className="text-xs text-text-muted mt-0.5">Без обязательств</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-bg-warm border border-border-light">
                    <Snowflake size={20} className="text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Хранение меха</p>
                      <p className="text-xs text-text-muted mt-0.5">Меховой холодильник</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-border-light">
                  <p className="text-sm text-text-body leading-relaxed">
                    <span className="font-medium">Семейная фабрика с 1870 года.</span>{' '}
                    Все изделия отшиваются в нашем ателье в Москве. Размер подбираем индивидуально — приезжайте на примерку, подгоним по фигуре.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related — Slider */}
        {related.length > 0 && (
          <section className="py-16 md:py-24 bg-bg-warm">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="flex items-end justify-between mb-10">
                <h2 className="font-serif text-2xl md:text-3xl text-black">Похожие изделия</h2>
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={() => scrollSlider('left')}
                    disabled={!canScrollLeft}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-brand hover:text-brand transition-colors disabled:opacity-30 disabled:cursor-default"
                    aria-label="Назад"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => scrollSlider('right')}
                    disabled={!canScrollRight}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-brand hover:text-brand transition-colors disabled:opacity-30 disabled:cursor-default"
                    aria-label="Вперёд"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
              >
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/magazin/product/${p.slug}`}
                    className="group block shrink-0 w-[260px] md:w-[280px] snap-start"
                  >
                    <div className="relative overflow-hidden aspect-[3/4] bg-bg-light">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-3">
                      <h3 className="font-serif text-base text-black group-hover:text-brand transition-colors">{p.title}</h3>
                      <p className="text-text-muted text-sm mt-1">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
            aria-label="Закрыть"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white/50 text-sm z-10">
            {lightboxIndex + 1} / {product.images.length}
          </div>

          {/* Image area — tap outside photo closes lightbox */}
          <div
            className="w-full h-full flex items-center justify-center p-4 md:p-16"
            onClick={() => setLightboxOpen(false)}
          >
            <img
              src={product.images[lightboxIndex]}
              alt={`${product.title} — фото ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => setLightboxIndex((i) => (i > 0 ? i - 1 : product.images.length - 1))}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setLightboxIndex((i) => (i < product.images.length - 1 ? i + 1 : 0))}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Следующее фото"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Thumbnails strip */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden border-2 transition-all ${
                    i === lightboxIndex ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
