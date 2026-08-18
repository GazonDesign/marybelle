'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CrossSellBanner from '@/components/ui/CrossSellBanner'
import SeasonalBanner from '@/components/ui/SeasonalBanner'
import PriceText, { payPart } from '@/components/ui/PriceText'

interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  /** Летний оффер-подзаголовок под H1 (опционально) */
  heroOffer?: string
  /** Плашка-оффер под H1: цена/гарантия/условие (опционально) */
  heroBadge?: string
  features: ServiceFeature[]
  prices: { label: string; price: string }[]
  relatedServices: { title: string; href: string }[]
  gallery?: { src: string; alt: string }[]
  /** Aspect ratio для галереи: '4/5' (вертикальное, по умолчанию) или '5/4' (горизонтальное) */
  galleryAspect?: '4/5' | '5/4' | '3/2' | '16/9'
  crossSellService?: 'himchistka' | 'mehovoj-holodilnik' | 'okrashivanie'
  /** Текст в блоке записи. По умолчанию — про осмотр изделия (ремонтные услуги).
      Для пошива обязательно передавать свой: клиентка ЗАКАЗЫВАЕТ шубу, ей нечего
      «привозить на осмотр» — этот ляп заметила тест-посетительница. */
  ctaText?: string
  /** Летняя секция-баннер под хиро (рендерится только если передана) */
  seasonalBanner?: {
    eyebrow?: string
    title: string
    text?: string
    chips?: string[]
    ctaLabel: string
    ctaHref: string
  } | null
  children?: React.ReactNode
}

// Набор иконок /icons/services/ удалён из рендера 20.07 по решению Юлии:
// «не наши, пережиток первой версии сайта». Файлы остались на диске,
// но нигде не показываются.

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  heroOffer,
  heroBadge,
  features,
  prices,
  relatedServices,
  gallery,
  galleryAspect = '4/5',
  crossSellService,
  ctaText,
  seasonalBanner,
  children,
}: ServicePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  // Галерея раскрывается порциями: сначала 4 фото, «Смотреть ещё» добавляет по 8.
  // Так мобильная страница не превращается в бесконечную ленту (у пошива 25 фото),
  // а невидимые снимки вообще не попадают в DOM и не грузятся.
  const [galleryVisible, setGalleryVisible] = useState(4)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightbox === null || !gallery) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev! + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev! - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox, gallery])

  const goNext = useCallback(() => {
    if (gallery) setLightbox((prev) => (prev! + 1) % gallery.length)
  }, [gallery])

  const goPrev = useCallback(() => {
    if (gallery) setLightbox((prev) => (prev! - 1 + gallery.length) % gallery.length)
  }, [gallery])

  // Свайп в лайтбоксе (тач)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.changedTouches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }, [])
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    // горизонтальный свайп от 40px, и не вертикальный (скролл/закрытие)
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext()
      else goPrev()
    }
  }, [goNext, goPrev])

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span
              className={`inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {subtitle}
            </span>
            <h1
              className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {title}
            </h1>
            {heroOffer && (
              <p
                className={`mt-5 text-white/80 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '350ms' }}
              >
                {heroOffer}
              </p>
            )}
            {heroBadge && (
              <div
                className={`mt-5 flex justify-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand/60 bg-black/40 backdrop-blur-md text-white text-sm md:text-base font-serif tracking-wide text-center">
                  {heroBadge}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Летняя секция-баннер (под хиро) */}
        {seasonalBanner && <SeasonalBanner {...seasonalBanner} />}

        {/* Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://mary-belle.ru/" },
                { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://mary-belle.ru/uslugi" },
                { "@type": "ListItem", "position": 3, "name": title },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": title,
              "description": description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Mary Belle",
                "@id": "https://mary-belle.ru/#organization",
              },
              "areaServed": {
                "@type": "City",
                "name": "Москва",
              },
              "offers": prices.map((p) => {
                const pay = payPart(p.price)
                const numeric = pay.replace(/[^\d]/g, '')
                const isFrom = /^от\s/i.test(pay.trim())
                if (isFrom) {
                  return {
                    "@type": "Offer",
                    "name": p.label,
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "minPrice": numeric,
                      "priceCurrency": "RUB",
                    },
                  }
                }
                return {
                  "@type": "Offer",
                  "name": p.label,
                  "price": numeric,
                  "priceCurrency": "RUB",
                }
              }),
            }),
          }}
        />
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{title}</span>
          </div>
        </div>

        {/*
          Порядок секций (перестроен 20.07.2026 по требованию владельца):
          фото → прайс → всё остальное. Раньше цены стояли за описанием и
          «Что включено» — на мобильном это 5-9 экранов до ответа «сколько
          стоит», и поисковый трафик уходил (отказы до 58%). Замер показал:
          посетителю нужны работы и цена, тексты — ниже.
        */}

        {/* Gallery — первой, сразу под хиро */}
        {gallery && gallery.length > 0 && (
          <section className="py-16 md:py-20 bg-bg-light">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-8">Наши работы</h2>
              {/* Мобайл: один снимок в ряд. Десктоп: два в ряд (было 3) —
                  крупнее кадр, лучше видно качество работы.
                  Одиночное фото (коллаж) — целиком, без кропа, по центру. */}
              {gallery.length === 1 ? (
                <div
                  className="max-w-3xl mx-auto overflow-hidden group cursor-pointer"
                  onClick={() => setLightbox(0)}
                >
                  <img
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    loading="eager"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {gallery.slice(0, galleryVisible).map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden group cursor-pointer"
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${galleryAspect === '16/9' ? 'aspect-video' : galleryAspect === '5/4' ? 'aspect-[5/4]' : galleryAspect === '3/2' ? 'aspect-[3/2]' : 'aspect-[4/5]'}`}
                    />
                  </div>
                ))}
              </div>
              )}
              {galleryVisible < gallery.length && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setGalleryVisible((v) => v + 8)}
                    className="px-10 py-3.5 border border-brand text-brand font-light tracking-widest text-sm hover:bg-brand hover:text-white transition-colors"
                  >
                    Смотреть ещё ({gallery.length - galleryVisible})
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Prices — сразу после работ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Стоимость</h2>
            <div className="max-w-3xl">
              {prices.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-6 py-5 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
                  }`}
                >
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4"><PriceText price={item.price} /></span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                *Рекламный прайс — не публичная оферта, требуется консультация специалиста.{' '}
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('openCallback'))}
                  className="underline hover:text-brand transition-colors cursor-pointer"
                >
                  Записаться на консультацию
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-text-body leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Что включено</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  {/* Accent top line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  {/* Number */}
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ slot */}
        {children}

        {/* Cross-sell banner */}
        {crossSellService && <CrossSellBanner currentService={crossSellService} />}

        {/* CTA */}
        <section id="zapis" className="relative py-20 md:py-28 text-white text-center overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/gov-import/proizvodstvo/s-ceh-s.jpg)' }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Запишитесь на консультацию</h2>
            <p className="text-white/70 mb-10 text-lg">
              {ctaText || 'Привезите изделие в наше ателье — мастер осмотрит и назовёт точную стоимость. Мы находимся в 5 минутах от м. Войковская.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Позвонить
              </a>
              <Link
                href="/kontakty"
                className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Как добраться
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {relatedServices.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group p-8 border-2 border-brand/25 shadow-sm hover:border-brand hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200"
                  >
                    <h3 className="font-serif text-xl text-black group-hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-text-muted text-sm mt-3 group-hover:text-brand group-hover:gap-4 transition-all duration-300">
                      Подробнее <span>&rarr;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox !== null && gallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors text-3xl z-10"
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            &times;
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white/50 text-sm tracking-wider">
            {lightbox + 1} / {gallery.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors text-4xl z-10"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Предыдущее фото"
          >
            &#8249;
          </button>

          {/* Image */}
          <img
            src={gallery[lightbox].src}
            alt={gallery[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none touch-pan-y"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors text-4xl z-10"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Следующее фото"
          >
            &#8250;
          </button>

        </div>
      )}
    </>
  )
}
