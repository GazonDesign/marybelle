import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Контакты мехового ателье Mary Belle — Москва, м. Войковская',
  description: 'Меховое ателье Mary Belle: адрес, телефон, режим работы. Москва, 1-й Новоподмосковный пер., д. 2/1, 5 минут от м. Войковская. Звоните: +7 (495) 225-44-44.',
  alternates: {
    canonical: 'https://mary-belle.ru/kontakty',
  },
}

export default function KontaktyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Контакты
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Приезжайте в наше ателье — мы находимся в 5 минутах пешком от метро Войковская.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Контакты</span>
          </div>
        </div>

        {/* Contact Info + Map */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Info */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Как нас найти</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-text-body text-lg mb-1">Адрес</p>
                      <a
                        href="https://yandex.ru/maps/-/CLQ-yI2e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-body hover:text-brand transition-colors block"
                      >
                        Москва, 1-й Новоподмосковный пер., дом 2/1
                      </a>
                      <p className="text-text-muted text-sm mt-1">5 минут пешком от м. Войковская</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-text-body text-lg mb-1">Телефон</p>
                      <a href="tel:+74952254444" className="text-text-body hover:text-brand transition-colors block text-lg">
                        +7 (495) 225-44-44
                      </a>
                      <a href="tel:+79670555978" className="text-text-muted hover:text-brand transition-colors block">
                        +7 (967) 055-59-78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-text-body text-lg mb-1">Режим работы</p>
                      <p className="text-text-body">Пн–Пт: 11:00–20:00</p>
                      <p className="text-text-body">Сб–Вс: 12:00–18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-text-body text-lg mb-1">Email</p>
                      <a href="mailto:info@mary-belle.ru" className="text-text-body hover:text-brand transition-colors">
                        info@mary-belle.ru
                      </a>
                    </div>
                  </div>
                </div>

                {/* Transport */}
                <div className="mt-12 p-8 bg-bg-warm border border-border-light">
                  <div className="flex items-center gap-3 mb-4">
                    <Navigation size={20} className="text-brand" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl text-black">Как добраться</h3>
                  </div>
                  <div className="space-y-4 text-text-body text-sm leading-relaxed">
                    <div>
                      <p className="font-medium mb-1">На метро</p>
                      <p className="text-text-muted">Станция «Войковская» (Замоскворецкая линия). Выход к 1-му Новоподмосковному переулку, 5 минут пешком.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">На автомобиле</p>
                      <p className="text-text-muted">Рядом с Ленинградским шоссе. Бесплатная парковка у здания.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div>
                <div className="w-full h-[500px] lg:h-full min-h-[400px] bg-bg-light border border-border-light">
                  {/* Yandex Map embed */}
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Afalse&amp;source=constructor&amp;ll=37.498173%2C55.818812&amp;z=16&amp;pt=37.498173%2C55.818812%2Cpm2rdm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Mary Belle на карте"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Запишитесь на консультацию</h2>
            <p className="text-white/70 mb-10 text-lg">
              Привезите изделие — мастер осмотрит и назовёт точную стоимость бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
