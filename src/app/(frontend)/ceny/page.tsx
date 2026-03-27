import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { getPrices } from '@/lib/strapi'

export const metadata = {
  title: 'Цены на ремонт шуб, пошив, хранение и химчистку — Mary Belle | Москва',
  description: 'Прайс-лист мехового ателье Mary Belle. Цены на ремонт шуб, хранение шуб в холодильнике, пошив на заказ, окрашивание, химчистку. Москва, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/ceny',
  },
}

const fallbackCategories = [
  {
    categoryName: 'Перекрой', href: '/uslugi/perekroj', sortOrder: 1, slug: 'perekroj',
    items: [
      { label: 'Полный перекрой', price: '96 000 ₽' },
      { label: 'Частичный перекрой', price: '67 000 ₽' },
    ],
  },
  {
    categoryName: 'Мелкий ремонт', href: '/uslugi/remont-shub', sortOrder: 2, slug: 'melkij-remont',
    items: [
      { label: 'Пришить вешалку (без стоимости)', price: '600 ₽' },
      { label: 'Изготовить и пришить вешалку', price: '1 000 ₽' },
      { label: 'Замена крючка шубного', price: '1 500 ₽' },
      { label: 'Замена крючка обтяжного', price: '900 ₽' },
      { label: 'Замена кулиски', price: '1 500 ₽' },
      { label: 'Замена пуговицы', price: '750 ₽' },
      { label: 'Замена фурнитуры', price: '950 ₽' },
      { label: 'Зашить разрыв (2/4/6/8–10 см)', price: '2 000 / 1 500 / 1 800 / 3 000 ₽' },
      { label: 'Поставить заплатку (4×4/6×6/8×8 см)', price: '3 500 / 5 500 / 8 500 ₽' },
      { label: 'Замена плечиков', price: 'от 1 100 ₽' },
    ],
  },
  {
    categoryName: 'Низ изделия', href: '/uslugi/remont-shub', sortOrder: 3, slug: 'niz-izdeliya',
    items: [
      { label: 'Укоротить/удлинить низ (подкладка наглухо)', price: 'от 13 000 ₽' },
      { label: 'Укоротить/удлинить низ (подкладка отлетная)', price: 'от 15 000 ₽' },
      { label: 'Ремонт шлицы', price: 'от 8 000 ₽' },
      { label: 'Реставрация низа', price: 'от 12 000 ₽' },
    ],
  },
  {
    categoryName: 'Рукава и плечи', href: '/uslugi/remont-shub', sortOrder: 4, slug: 'rukava-i-plechi',
    items: [
      { label: 'Укоротить/удлинить рукава без манжет', price: 'от 5 800 ₽' },
      { label: 'Укоротить/удлинить рукава с манжетами', price: 'от 7 200 ₽' },
      { label: 'Заузить/расширить', price: 'от 6 000 ₽' },
      { label: 'Коррекция оката проймы', price: 'от 7 800 ₽' },
      { label: 'Реставрация низа без манжет', price: 'от 4 200 ₽' },
      { label: 'Реставрация низа с манжетами', price: 'от 6 200 ₽' },
      { label: 'Перекрой рукава', price: 'от 7 200 ₽' },
      { label: 'Перекрой плечевого пояса', price: 'от 15 000 ₽' },
      { label: 'Ушить плечевой шов', price: 'от 3 800 ₽' },
    ],
  },
  {
    categoryName: 'Борт / боковые и средние швы', href: '/uslugi/remont-shub', sortOrder: 5, slug: 'bort-shvy',
    items: [
      { label: 'Ушить по боковым швам', price: 'от 6 500 ₽' },
      { label: 'Ушить по среднему шву', price: 'от 6 800 ₽' },
      { label: 'Ушить по среднему шву с разрезом', price: 'от 6 800 ₽' },
      { label: 'Выравнивание бортов', price: 'от 14 000 ₽' },
      { label: 'Реставрация бортов', price: 'от 10 000 ₽' },
    ],
  },
  {
    categoryName: 'Подкладка', href: '/uslugi/remont-shub', sortOrder: 6, slug: 'podkladka',
    items: [
      { label: 'Замена подкладки без утеплителя', price: '15 000 ₽' },
      { label: 'Замена подкладки с утеплителем', price: 'от 20 000 ₽' },
      { label: 'Частичная реставрация подкладки', price: '5 500–8 200 ₽' },
    ],
  },
  {
    categoryName: 'Воротник', href: '/uslugi/remont-shub', sortOrder: 7, slug: 'vorotnik',
    items: [
      { label: 'Изменение выреза горловины', price: 'от 7 700 ₽' },
      { label: 'Изменить фасон воротника', price: 'от 10 000 ₽' },
      { label: 'Замена воротника', price: 'от 13 000 ₽' },
      { label: 'Изготовить воротник без подкладки', price: 'от 13 000 ₽' },
      { label: 'Изготовить воротник с подкладкой', price: 'от 14 000 ₽' },
    ],
  },
  {
    categoryName: 'Капюшон', href: '/uslugi/remont-shub', sortOrder: 8, slug: 'kapyushon',
    items: [
      { label: 'Изменить фасон капюшона', price: 'от 16 800 ₽' },
      { label: 'Изготовить капюшон', price: 'от 25 000 ₽' },
    ],
  },
  {
    categoryName: 'Опушка', href: '/uslugi/remont-shub', sortOrder: 9, slug: 'opushka',
    items: [
      { label: 'Изготовить опушку', price: 'от 7 000 ₽' },
      { label: 'Пришить опушку', price: 'от 6 000 ₽' },
    ],
  },
  {
    categoryName: 'Карманы', href: '/uslugi/remont-shub', sortOrder: 10, slug: 'karmany',
    items: [
      { label: 'Реставрация карманов', price: '7 800 ₽' },
      { label: 'Замена подкладки в карманах', price: '3 000 ₽' },
      { label: 'Изготовление карманов', price: '6 500 ₽' },
    ],
  },
  {
    categoryName: 'Ластовицы и другое', href: '/uslugi/remont-shub', sortOrder: 11, slug: 'lastovicy',
    items: [
      { label: 'Ремонт 2 подмышек с добавлением меха', price: '18 000 ₽' },
      { label: 'Ушить рукава по внутренним швам', price: '7 500 ₽' },
      { label: 'Уменьшить в плечах', price: 'от 7 500 ₽' },
      { label: 'Ушить по боковым швам', price: 'от 12 000 ₽' },
    ],
  },
  {
    categoryName: 'Хранение шуб', href: '/uslugi/mehovoj-holodilnik', sortOrder: 12, slug: 'hranenie',
    items: [
      { label: 'Хранение шубы (сезон, апрель–октябрь)', price: 'от 5 000 ₽' },
      { label: 'Хранение дублёнки (сезон)', price: 'от 3 500 ₽' },
      { label: 'Забор курьером по Москве', price: '1 500 ₽' },
      { label: 'Доставка обратно', price: '1 500 ₽' },
    ],
  },
  {
    categoryName: 'Химчистка', href: '/uslugi/himchistka', sortOrder: 13, slug: 'himchistka',
    items: [
      { label: 'Химчистка шубы', price: 'от 5 000 ₽' },
      { label: 'Химчистка дублёнки', price: 'от 4 000 ₽' },
      { label: 'Химчистка кожаной куртки', price: 'от 3 000 ₽' },
      { label: 'Антимольная обработка', price: 'от 1 500 ₽' },
    ],
  },
  {
    categoryName: 'Окрашивание меха', href: '/uslugi/okrashivanie', sortOrder: 14, slug: 'okrashivanie',
    items: [
      { label: 'Окрашивание шубы (полное)', price: 'от 12 000 ₽' },
      { label: 'Тонирование', price: 'от 8 000 ₽' },
      { label: 'Окрашивание жилета', price: 'от 7 000 ₽' },
      { label: 'Окрашивание воротника/манжет', price: 'от 3 000 ₽' },
    ],
  },
]

export default async function CenyPage() {
  const strapiPrices = await getPrices()
  const priceCategories = strapiPrices.length > 0 ? strapiPrices : fallbackCategories

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/production/karakul-detail.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/70">
              Прайс-лист
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Цены на услуги
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-2xl">
              Актуальные цены на ремонт меховых изделий. Точная стоимость определяется
              после осмотра изделия мастером.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Цены</span>
          </div>
        </div>

        <section className="py-20 md:py-28">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            <div className="space-y-16">
              {priceCategories.map((cat) => (
                <div key={cat.categoryName}>
                  <div className="flex items-end justify-between mb-6">
                    <h2 className="font-serif text-2xl md:text-3xl text-black">{cat.categoryName}</h2>
                    {cat.href && (
                      <Link
                        href={cat.href}
                        className="text-brand text-sm hover:underline hidden sm:inline"
                      >
                        Подробнее &rarr;
                      </Link>
                    )}
                  </div>
                  <div className="border border-border-light">
                    {cat.items.map((item: { label: string; price: string }, i: number) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center px-6 py-4 ${
                          i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
                        }`}
                      >
                        <span className="text-text-body">{item.label}</span>
                        <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  {cat.href && (
                    <Link
                      href={cat.href}
                      className="text-brand text-sm hover:underline mt-3 inline-block sm:hidden"
                    >
                      Подробнее &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-bg-warm border border-border-light text-center">
              <p className="font-serif text-xl text-black mb-3">Точная стоимость — после осмотра</p>
              <p className="text-text-muted max-w-xl mx-auto mb-6">
                Цены актуальны. Мастер осмотрит изделие и назовёт точную стоимость
                с учётом сложности работ, типа меха и состояния.
              </p>
              <a
                href="tel:+74952254444"
                className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Записаться на осмотр
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
