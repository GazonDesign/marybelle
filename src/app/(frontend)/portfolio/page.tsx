import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import PortfolioClient from '@/components/sections/PortfolioClient'
import { getPortfolio } from '@/lib/strapi'

export const metadata = {
  title: 'Портфолио — до и после | Меховое ателье Mary Belle, Москва',
  description: 'Реальные работы мехового ателье Mary Belle: ремонт шуб, перекрой, окрашивание меха. Фотографии до и после реставрации.',
  alternates: {
    canonical: 'https://mary-belle.ru/portfolio',
  },
}

const fallbackBeforeAfter = [
  {
    title: 'Реставрация норковой шубы', category: 'Ремонт шуб',
    description: 'Полная реставрация, замена подкладки, ремонт воротника, укорачивание рукавов.',
    beforeImage: '/images/portfolio-cases/case-001-before.jpg',
    afterImage: '/images/portfolio-cases/case-001-after.jpg',
    singleImage: null, duration: '14 дней', sortOrder: 1,
  },
]

const fallbackGrid = [
  {
    title: 'Окрашивание норковой шубы', category: 'Окрашивание',
    description: 'Перекраска из тёмно-коричневого в золотистый оттенок с сохранением текстуры меха.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/001.jpg', duration: null, sortOrder: 7,
  },
]

export default async function PortfolioPage() {
  const allItems = await getPortfolio()
  const data = allItems.length > 0 ? allItems : [...fallbackBeforeAfter, ...fallbackGrid]

  const beforeAfterCases = data.filter(i => i.beforeImage && i.afterImage)
  const portfolioItems = data.filter(i => i.singleImage && !i.beforeImage)

  const categorySet = new Set(portfolioItems.map(i => i.category).filter(Boolean))
  const categories = ['Все', ...Array.from(categorySet)]

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/70">
              Наши работы
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Портфолио — до и после
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-2xl">
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

        <PortfolioClient
          beforeAfterCases={beforeAfterCases}
          portfolioItems={portfolioItems}
          categories={categories}
        />
      </main>
      <Footer />
    </>
  )
}
