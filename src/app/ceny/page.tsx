import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Цены на ремонт шуб, пошив, хранение и химчистку — Mary Belle | Москва',
  description: 'Прайс-лист мехового ателье Mary Belle. Цены на ремонт шуб, хранение шуб в холодильнике, пошив на заказ, окрашивание, химчистку. Москва, м. Войковская.',
}

const priceCategories = [
  {
    title: 'Перекрой',
    href: '/uslugi/perekroj',
    items: [
      { label: 'Полный перекрой', price: '96 000 ₽' },
      { label: 'Частичный перекрой', price: '67 000 ₽' },
    ],
  },
  {
    title: 'Мелкий ремонт',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Пришить вешалку (без стоимости)', price: '600 ₽' },
      { label: 'Изготовить и пришить вешалку', price: '1 000 ₽' },
      { label: 'Замена крючка шубного (с учётом стоимости)', price: '1 500 ₽' },
      { label: 'Замена крючка обтяжного (с учётом стоимости)', price: '900 ₽' },
      { label: 'Замена кулиски (без стоимости кулиски)', price: '1 500 ₽' },
      { label: 'Замена пуговицы (без учёта стоимости)', price: '750 ₽' },
      { label: 'Замена фурнитуры (фиксаторы, наконечники)', price: '950 ₽' },
      { label: 'Зашить разрыв (2 / 4 / 6 / 8–10 см)', price: '2 000 / 1 500 / 1 800 / 3 000 ₽' },
      { label: 'Поставить заплатку (4×4 / 6×6 / 8×8 см)', price: '3 500 / 5 500 / 8 500 ₽' },
      { label: 'Замена плечиков (без учёта стоимости)', price: 'от 1 100 ₽' },
    ],
  },
  {
    title: 'Низ изделия',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Укоротить / удлинить низ (подкладка наглухо)', price: 'от 13 000 ₽' },
      { label: 'Укоротить / удлинить низ (подкладка отлетная)', price: 'от 15 000 ₽' },
      { label: 'Ремонт шлицы', price: 'от 8 000 ₽' },
      { label: 'Реставрация низа', price: 'от 12 000 ₽' },
    ],
  },
  {
    title: 'Рукава и плечи',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Укоротить / удлинить рукава без манжет', price: 'от 5 800 ₽' },
      { label: 'Укоротить / удлинить рукава с манжетами', price: 'от 7 200 ₽' },
      { label: 'Заузить / расширить', price: 'от 6 000 ₽' },
      { label: 'Коррекция оката проймы', price: 'от 7 800 ₽' },
      { label: 'Реставрация низа без манжет', price: 'от 4 200 ₽' },
      { label: 'Реставрация низа с манжетами', price: 'от 6 200 ₽' },
      { label: 'Перекрой рукава', price: 'от 7 200 ₽' },
      { label: 'Перекрой плечевого пояса', price: 'от 15 000 ₽' },
      { label: 'Ушить плечевой шов', price: 'от 3 800 ₽' },
    ],
  },
  {
    title: 'Борт / боковые и средние швы',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Ушить по боковым швам', price: 'от 6 500 ₽' },
      { label: 'Ушить по среднему шву', price: 'от 6 800 ₽' },
      { label: 'Ушить по среднему шву с разрезом, шлицей', price: 'от 6 800 ₽' },
      { label: 'Выравнивание бортов', price: 'от 14 000 ₽' },
      { label: 'Реставрация бортов', price: 'от 10 000 ₽' },
    ],
  },
  {
    title: 'Подкладка',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Замена подкладки без утеплителя', price: '15 000 ₽' },
      { label: 'Замена подкладки с утеплителем', price: 'от 20 000 ₽' },
      { label: 'Частичная реставрация подкладки', price: '5 500–8 200 ₽' },
    ],
  },
  {
    title: 'Воротник',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Изменение выреза горловины', price: 'от 7 700 ₽' },
      { label: 'Изменить фасон воротника', price: 'от 10 000 ₽' },
      { label: 'Замена воротника', price: 'от 13 000 ₽' },
      { label: 'Изготовить воротник без подкладки', price: 'от 13 000 ₽' },
      { label: 'Изготовить воротник с подкладкой', price: 'от 14 000 ₽' },
    ],
  },
  {
    title: 'Капюшон',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Изменить фасон капюшона', price: 'от 16 800 ₽' },
      { label: 'Изготовить капюшон', price: 'от 25 000 ₽' },
    ],
  },
  {
    title: 'Опушка',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Изготовить опушку', price: 'от 7 000 ₽' },
      { label: 'Пришить опушку', price: 'от 6 000 ₽' },
    ],
  },
  {
    title: 'Карманы',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Реставрация карманов', price: '7 800 ₽' },
      { label: 'Замена подкладки в карманах', price: '3 000 ₽' },
      { label: 'Изготовление карманов', price: '6 500 ₽' },
    ],
  },
  {
    title: 'Ластовицы и другое',
    href: '/uslugi/remont-shub',
    items: [
      { label: 'Ремонт 2 подмышек с добавлением меха', price: '18 000 ₽' },
      { label: 'Ушить рукава по внутренним швам', price: '7 500 ₽' },
      { label: 'Уменьшить в плечах', price: 'от 7 500 ₽' },
      { label: 'Ушить по боковым швам', price: 'от 12 000 ₽' },
    ],
  },
  {
    title: 'Хранение шуб',
    href: '/uslugi/mehovoj-holodilnik',
    items: [
      { label: 'Хранение шубы (сезон, апрель–октябрь)', price: 'от 5 000 ₽' },
      { label: 'Хранение дублёнки (сезон)', price: 'от 3 500 ₽' },
      { label: 'Забор курьером по Москве', price: '1 500 ₽' },
      { label: 'Доставка обратно', price: '1 500 ₽' },
    ],
  },
  {
    title: 'Химчистка',
    href: '/uslugi/himchistka',
    items: [
      { label: 'Химчистка шубы', price: 'от 5 000 ₽' },
      { label: 'Химчистка дублёнки', price: 'от 4 000 ₽' },
      { label: 'Химчистка кожаной куртки', price: 'от 3 000 ₽' },
      { label: 'Антимольная обработка', price: 'от 1 500 ₽' },
    ],
  },
  {
    title: 'Окрашивание меха',
    href: '/uslugi/okrashivanie',
    items: [
      { label: 'Окрашивание шубы (полное)', price: 'от 12 000 ₽' },
      { label: 'Тонирование', price: 'от 8 000 ₽' },
      { label: 'Окрашивание жилета', price: 'от 7 000 ₽' },
      { label: 'Окрашивание воротника / манжет', price: 'от 3 000 ₽' },
    ],
  },
]

export default function CenyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Прайс-лист
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Цены на услуги
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
                <div key={cat.title}>
                  <div className="flex items-end justify-between mb-6">
                    <h2 className="font-serif text-2xl md:text-3xl text-black">{cat.title}</h2>
                    <Link
                      href={cat.href}
                      className="text-brand text-sm hover:underline hidden sm:inline"
                    >
                      Подробнее &rarr;
                    </Link>
                  </div>
                  <div className="border border-border-light">
                    {cat.items.map((item, i) => (
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
                  <Link
                    href={cat.href}
                    className="text-brand text-sm hover:underline mt-3 inline-block sm:hidden"
                  >
                    Подробнее &rarr;
                  </Link>
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
