'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  features: ServiceFeature[]
  prices: { label: string; price: string }[]
  relatedServices: { title: string; href: string }[]
}

const serviceIcons: Record<string, string> = {
  '/uslugi/remont-shub': '/icons/services/repair.svg',
  '/uslugi/remont-shub-vojkovskaya': '/icons/services/repair.svg',
  '/uslugi/remont-kozhi': '/icons/services/leather.svg',
  '/uslugi/remont-brendovoj-odezhdy': '/icons/services/leather.svg',
  '/uslugi/remont-palto': '/icons/services/repair.svg',
  '/uslugi/poshiv-shub': '/icons/services/sewing.svg',
  '/uslugi/perekroj': '/icons/services/sewing.svg',
  '/uslugi/mehovoj-holodilnik': '/icons/services/storage.svg',
  '/uslugi/okrashivanie': '/icons/services/coloring.svg',
  '/uslugi/himchistka': '/icons/services/cleaning.svg',
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  features,
  prices,
  relatedServices,
}: ServicePageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span
              className={`inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/70 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {subtitle}
            </span>
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {title}
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{title}</span>
          </div>
        </div>

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
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
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

        {/* Prices */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Стоимость</h2>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-5 border-b border-border-light"
                >
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Точная стоимость определяется после осмотра изделия мастером
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Запишитесь на консультацию</h2>
            <p className="text-white/70 mb-10 text-lg">
              Привезите изделие в наше ателье — мастер осмотрит и назовёт точную стоимость.
              Мы находимся в 5 минутах от м. Войковская.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74951234567"
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
                    className="group p-8 border border-border-light hover:border-brand transition-colors"
                  >
                    {serviceIcons[s.href] && (
                      <div className="w-10 h-10 mb-4 flex items-center justify-center bg-brand/10 rounded-sm">
                        <img src={serviceIcons[s.href]} alt="" className="w-5 h-5 opacity-60" />
                      </div>
                    )}
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
    </>
  )
}
