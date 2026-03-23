import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Магазин меховых изделий и пальто — Mary Belle | Москва',
  description: 'Магазин шуб, пальто и кожаных изделий Mary Belle. Шубы из норки, соболя, каракуля. Пальто из шерсти. Кожаные куртки и аксессуары. Москва, м. Войковская.',
}

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

export default function MagazinPage() {
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

        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative overflow-hidden"
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="font-serif text-2xl text-white mb-2">{cat.title}</h2>
                      <p className="text-white/70 text-sm">{cat.description}</p>
                      <span className="inline-flex items-center gap-2 text-white/60 text-sm mt-3 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                        Смотреть <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
