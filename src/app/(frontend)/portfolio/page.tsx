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
  {
    title: 'Перекрой соболиной шубы', category: 'Перекрой',
    description: 'Изменение фасона, укорачивание, обновление подкладки.',
    beforeImage: '/images/portfolio-cases/case-002-before.jpg',
    afterImage: '/images/portfolio-cases/case-002-after.jpg',
    singleImage: null, duration: '21 день', sortOrder: 2,
  },
  {
    title: 'Химчистка белой норковой шубы', category: 'Химчистка',
    description: 'Профессиональная химчистка, удаление пятен, восстановление белизны.',
    beforeImage: '/images/portfolio-cases/case-003-before.jpg',
    afterImage: '/images/portfolio-cases/case-003-after.jpg',
    singleImage: null, duration: '7 дней', sortOrder: 3,
  },
  {
    title: 'Реставрация норковой шубы', category: 'Ремонт шуб',
    description: 'Восстановление шубы из серой норки — замена фурнитуры, ремонт швов.',
    beforeImage: '/images/portfolio-new/case-grey-before.jpg',
    afterImage: '/images/portfolio-new/case-grey-after.jpg',
    singleImage: null, duration: '10 дней', sortOrder: 4,
  },
  {
    title: 'Обновление норковой шубы', category: 'Ремонт шуб',
    description: 'Реставрация тёмной норки — подгонка силуэта, замена подкладки.',
    beforeImage: '/images/portfolio-new/case-norka-before.jpg',
    afterImage: '/images/portfolio-new/case-norka-after.jpg',
    singleImage: null, duration: '14 дней', sortOrder: 5,
  },
  {
    title: 'Реставрация белой шубы', category: 'Ремонт шуб',
    description: 'Восстановление белой шубы — чистка, ремонт швов, обновление.',
    beforeImage: '/images/portfolio-new/case-white-before.jpg',
    afterImage: '/images/portfolio-new/case-white-after.jpg',
    singleImage: null, duration: '12 дней', sortOrder: 6,
  },
]

const fallbackGrid = [
  {
    title: 'Окрашивание норковой шубы', category: 'Окрашивание',
    description: 'Перекраска из тёмно-коричневого в золотистый оттенок с сохранением текстуры меха.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/001.jpg', duration: null, sortOrder: 7,
  },
  {
    title: 'Реставрация норковой шубы', category: 'Ремонт шуб',
    description: 'Обновление силуэта, замена подкладки, ремонт воротника.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/002.jpg', duration: null, sortOrder: 8,
  },
  {
    title: 'Перекрой норковой шубы', category: 'Перекрой',
    description: 'Изменение фасона норковой шубы — современный крой, новая посадка.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/003.jpg', duration: null, sortOrder: 9,
  },
  {
    title: 'Модернизация соболиной шубы', category: 'Перекрой',
    description: 'Обновление соболиной шубы — актуальный силуэт с сохранением качества меха.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/004.jpg', duration: null, sortOrder: 10,
  },
  {
    title: 'Перекрой шубы из лисы', category: 'Перекрой',
    description: 'Перекомпоновка воротника и рукавов, обновлённый силуэт.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/005.jpg', duration: null, sortOrder: 11,
  },
  {
    title: 'Окрашивание шубы из песца', category: 'Окрашивание',
    description: 'Перекраска песцовой шубы — из серого в белоснежный оттенок.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/006.jpg', duration: null, sortOrder: 12,
  },
  {
    title: 'Перекрой полушубка', category: 'Перекрой',
    description: 'Укороченный полушубок из бобра — новый крой из старого изделия.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/007.jpg', duration: null, sortOrder: 13,
  },
  {
    title: 'Пошив мужской шубы', category: 'Пошив',
    description: 'Индивидуальный пошив мужской шубы из лисы по меркам заказчика.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/008.jpg', duration: null, sortOrder: 14,
  },
  {
    title: 'Реставрация дублёнки', category: 'Ремонт шуб',
    description: 'Полная реставрация дублёнки — чистка, ремонт швов, обновление меха.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/009.jpg', duration: null, sortOrder: 15,
  },
  {
    title: 'Окрашивание шубы из песца', category: 'Окрашивание',
    description: 'Тонирование песцовой шубы с поясом — ровный насыщенный цвет.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/010.jpg', duration: null, sortOrder: 16,
  },
  {
    title: 'Перекрой норковой шубы', category: 'Перекрой',
    description: 'Современный оверсайз-силуэт из классической норковой шубы.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/011.jpg', duration: null, sortOrder: 17,
  },
  {
    title: 'Окрашивание шубы из лисы', category: 'Окрашивание',
    description: 'Перекраска длинной шубы из лисы — из рыжего в белый.',
    beforeImage: null, afterImage: null,
    singleImage: '/images/portfolio/012.jpg', duration: null, sortOrder: 18,
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
