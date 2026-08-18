import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { getPrices } from '@/lib/strapi'

export const metadata = {
  title: 'Цены на ремонт шуб, пошив и хранение — Москва',
  description: 'Прайс-лист мехового ателье Mary Belle. Цены на ремонт шуб, хранение шуб в холодильнике, пошив на заказ, окрашивание, химчистку. Москва, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/ceny',
  },
  openGraph: {
    title: 'Цены на ремонт шуб, пошив и хранение — Москва',
    description: 'Прайс-лист мехового ателье Mary Belle. Цены на ремонт шуб, хранение, пошив на заказ, окрашивание, химчистку.',
    url: 'https://mary-belle.ru/ceny',
    images: [{ url: '/images/og/ceny.jpg', width: 1200, height: 630 }],
  },
}

// Раздел пошива. Держим его в коде (а не только в Strapi), чтобы он гарантированно
// показывался на /ceny с актуальными ценами. При мердже не дублируется, если такой
// раздел появится в Strapi (см. CenyPage).
const poshivCategory = {
  categoryName: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub', sortOrder: 0, slug: 'individualnyj-poshiv',
  items: [
    { label: 'Пошив шубы из норки', price: 'от 130 000 ₽' },
    { label: 'Пошив шубы из соболя', price: 'от 260 000 ₽' },
    { label: 'Пошив шубы из шиншиллы', price: 'от 210 000 ₽' },
    { label: 'Пошив шубы из каракуля', price: 'от 105 000 ₽' },
    { label: 'Пошив шубы из лисы / песца', price: 'от 95 000 ₽' },
    { label: 'Меховой жилет', price: 'от 55 000 ₽' },
    { label: 'Болеро / меховая накидка', price: 'от 45 000 ₽' },
    { label: 'Меховой палантин', price: 'от 35 000 ₽' },
    { label: 'Пошив пальто (шерсть / кашемир)', price: 'от 90 000 ₽' },
    { label: 'Пальто с меховой отделкой', price: 'от 90 000 ₽' },
    { label: 'Куртка (мех + кожа)', price: 'от 75 000 ₽' },
    { label: 'Пончо / кейп с мехом', price: 'от 65 000 ₽' },
    { label: 'Изготовление макета с выкройкой', price: 'от 15 000 ₽' },
    { label: 'Сборка и разборка шубы', price: 'от 35 000 ₽' },
  ],
}

const fallbackCategories = [
  poshivCategory,
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
      { label: 'Химчистка шубы (норка, каракульча)', price: 'от 10 500 ₽' },
      { label: 'Химчистка шубы (соболь, шиншилла, рысь, куница)', price: 'от 13 000 ₽' },
      { label: 'Химчистка шубы (лиса, песец, енот, волк)', price: 'от 10 500 ₽' },
      { label: 'Химчистка шубы (бобёр, нерпа, каракуль, котик)', price: 'от 9 200 ₽' },
      { label: 'Химчистка дублёнки', price: 'от 6 000 ₽' },
      { label: 'Химчистка кожаной куртки / пальто', price: 'от 5 000 ₽' },
      { label: 'Пуховики, стёганые изделия', price: 'от 5 500 ₽' },
      { label: 'Антимольная обработка', price: 'от 1 500 ₽' },
      { label: 'Экспресс-чистка (1–2 дня)', price: '+50%' },
    ],
  },
  {
    categoryName: 'Окрашивание меха', href: '/uslugi/okrashivanie', sortOrder: 14, slug: 'okrashivanie',
    items: [
      { label: 'Окрашивание шубы (полное)', price: 'от 50 000 ₽' },
      { label: 'Тонирование', price: 'от 15 000 ₽' },
      { label: 'Окрашивание жилета', price: 'от 30 000 ₽' },
    ],
  },
]

// Сезонный формат цены: "~~от 21 500 ₽~~ от 15 000 ₽" — часть в ~~ ~~ рендерится
// зачёркнутой («цена без скидки»). Обычная строка проходит как есть.
function PriceCell({ price }: { price: string }) {
  const m = price.match(/^~~(.+?)~~\s*(.+)$/)
  if (!m) return <>{price}</>
  return (
    <>
      <s className="text-text-muted font-normal opacity-70 mr-2">{m[1]}</s>
      {m[2]}
    </>
  )
}

export default async function CenyPage() {
  const strapiPrices = await getPrices()
  // Гарантируем раздел пошива: если Strapi отдаёт цены, но раздела пошива в нём
  // ещё нет — добавляем его первым. Фолбэк уже содержит poshivCategory.
  const strapiHasPoshiv = strapiPrices.some(
    (c) => c.slug === 'individualnyj-poshiv' || /пошив/i.test(c.categoryName)
  )
  const priceCategories =
    strapiPrices.length > 0
      ? (strapiHasPoshiv ? strapiPrices : [poshivCategory, ...strapiPrices])
      : fallbackCategories

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/production/karakul-detail.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Прайс-лист
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Цены на услуги
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Актуальные цены на индивидуальный пошив и ремонт меховых изделий.
              Точная стоимость определяется после консультации с мастером.
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
                          <PriceCell price={item.price} />
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
                Рекламный прайс — не публичная оферта, требуется консультация специалиста.
                Мастер осмотрит изделие и назовёт точную стоимость с учётом сложности работ,
                типа меха и состояния.
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
