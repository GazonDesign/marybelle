import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Услуги мехового ателье Mary Belle — Москва | С 1870 года',
  description: 'Ремонт шуб, пошив на заказ, окрашивание меха, химчистка, хранение в меховом холодильнике. Ателье Mary Belle у м. Войковская.',
}

const services = [
  {
    title: 'Ремонт шуб',
    description: 'Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой.',
    image: '/images/product-norka.jpg',
    href: '/uslugi/remont-shub',
    icon: '/icons/services/repair.svg',
  },
  {
    title: 'Ремонт кожи и дублёнок',
    description: 'Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация.',
    image: '/images/product-kozha.jpg',
    href: '/uslugi/remont-kozhi',
    icon: '/icons/services/leather.svg',
  },
  {
    title: 'Индивидуальный пошив',
    description: 'Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой.',
    image: '/images/product-sobol.jpg',
    href: '/uslugi/poshiv-shub',
    icon: '/icons/services/sewing.svg',
  },
  {
    title: 'Меховой холодильник',
    description: 'Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьер по Москве.',
    image: '/images/about-bg.jpg',
    href: '/uslugi/mehovoj-holodilnik',
    icon: '/icons/services/storage.svg',
  },
  {
    title: 'Окрашивание меха',
    description: 'Покраска шубы из норки и других мехов. Полное окрашивание, тонирование, эффект омбре.',
    image: '/images/product-palto.jpg',
    href: '/uslugi/okrashivanie',
    icon: '/icons/services/coloring.svg',
  },
  {
    title: 'Химчистка',
    description: 'Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений, антимольная обработка.',
    image: '/images/product-plus.jpg',
    href: '/uslugi/himchistka',
    icon: '/icons/services/cleaning.svg',
  },
  {
    title: 'Перекрой шубы',
    description: 'Новый фасон из старой шубы — перешив, укорачивание, модернизация. Полный и частичный перекрой.',
    image: '/images/product-norka.jpg',
    href: '/uslugi/perekroj',
    icon: '/icons/services/repair.svg',
  },
  {
    title: 'Ремонт пальто',
    description: 'Реставрация шерстяных, кашемировых и драповых пальто. Замена подкладки, ремонт швов.',
    image: '/images/product-palto.jpg',
    href: '/uslugi/remont-palto',
    icon: '/icons/services/sewing.svg',
  },
  {
    title: 'Ремонт брендовой одежды',
    description: 'Moncler, Max Mara, Burberry — работаем с люксовыми брендами. Оригинальная фурнитура.',
    image: '/images/product-sobol.jpg',
    href: '/uslugi/remont-brendovoj-odezhdy',
    icon: '/icons/services/leather.svg',
  },
]

export default function UslugiPage() {
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
              Наши услуги
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Полный спектр услуг для меховых и кожаных изделий — от ремонта до индивидуального пошива.
              Работаем с 1870 года.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Услуги</span>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative overflow-hidden"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      {service.icon && (
                        <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                          <img src={service.icon} alt="" className="w-8 h-8 brightness-0 invert" />
                        </div>
                      )}
                      <h2 className="font-serif text-2xl text-white mb-2 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white/60 text-sm mt-4 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                        Подробнее <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-warm text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Не нашли нужную услугу?</h2>
            <p className="text-text-muted text-lg mb-10">
              Позвоните нам — мастер проконсультирует и подскажет решение для вашего изделия.
            </p>
            <a
              href="tel:+74952254444"
              className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
            >
              Позвонить
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
