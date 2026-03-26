import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import SobolyaFAQ from './SobolyaFAQ'

export const metadata = {
  title: 'Пошив шуб из соболя на заказ в Москве — Цены | Mary Belle',
  description: 'Пошив шубы из соболя на заказ в Москве. Русский и канадский соболь, индивидуальный крой, три примерки. Меховое ателье Mary Belle — шубы из соболя от 350 000 ₽. М. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-shub/iz-sobolya',
  },
  openGraph: {
    title: 'Пошив шуб из соболя на заказ в Москве — Цены',
    description: 'Пошив шубы из соболя на заказ в Москве. Русский и канадский соболь, индивидуальный крой, три примерки. Меховое ателье Mary Belle — шубы из соболя от 350 000 ₽.',
    url: 'https://mary-belle.ru/uslugi/poshiv-shub/iz-sobolya',
    images: [{ url: '/images/gov-import/modeli/russkij-sobol.jpg' }],
  },
}

const processSteps = [
  {
    num: '01',
    title: 'Консультация и подбор меха',
    description: 'Обсуждаем фасон, длину, силуэт. Подбираем соболя по цвету — от золотистого до тёмно-шоколадного. Показываем образцы меха в ателье.',
  },
  {
    num: '02',
    title: 'Эскиз и утверждение',
    description: 'Создаём эскиз будущего изделия. Согласовываем все детали: воротник, манжеты, застёжка, подкладка. Вы видите результат до начала работ.',
  },
  {
    num: '03',
    title: 'Снятие мерок и крой',
    description: 'Снимаем индивидуальные мерки. Строим выкройку под вашу фигуру — никаких стандартных лекал. Каждая шкурка подбирается вручную.',
  },
  {
    num: '04',
    title: 'Три примерки',
    description: 'Первая — проверка посадки на макете. Вторая — корректировка на меховой заготовке. Третья — финальная, с подкладкой и фурнитурой.',
  },
  {
    num: '05',
    title: 'Готовое изделие',
    description: 'Контроль качества каждого шва. Ваша шуба из соболя готова — роскошная, идеально сидящая, единственная в своём роде.',
  },
]

const prices = [
  { label: 'Шуба из соболя, короткая (70 см)', price: 'от 350 000 ₽', pelts: '30–40 шкурок' },
  { label: 'Шуба из соболя, до колена (90 см)', price: 'от 500 000 ₽', pelts: '50–60 шкурок' },
  { label: 'Шуба из соболя, длинная (110 см)', price: 'от 700 000 ₽', pelts: '70–80 шкурок' },
  { label: 'Жилет из соболя', price: 'от 180 000 ₽', pelts: '15–25 шкурок' },
  { label: 'Соболиный воротник / палантин', price: 'от 80 000 ₽', pelts: '5–10 шкурок' },
  { label: 'Пошив по эскизу заказчика', price: 'индивидуально', pelts: 'рассчитаем при встрече' },
]

const trustStats = [
  { value: 'с 1870', label: 'года создаём изделия из меха' },
  { value: '21 день', label: 'от эскиза до готовой шубы' },
  { value: '3', label: 'примерки для идеальной посадки' },
  { value: 'Бесплатно', label: 'консультация и эскиз' },
]

const careFeatures = [
  {
    title: 'Мех с аукционов',
    description: 'Работаем только с аукционным соболем — NAFA, Kopenhagen Fur. Каждая шкурка имеет сертификат подлинности и прошла строгий отбор по качеству, оттенку и густоте ворса.',
  },
  {
    title: 'Персональный мастер',
    description: 'За вашим изделием закрепляется один мастер — от первого эскиза до финальной примерки. Вы всегда знаете, кто работает над вашей шубой, и можете обсудить любые детали напрямую.',
  },
  {
    title: 'Гарантия на швы и фурнитуру',
    description: 'Мы уверены в качестве своей работы и даём гарантию на каждое изделие. Если что-то потребует корректировки — устраним бесплатно. Мы ведём каждую шубу, которую создали.',
  },
]

const galleryImages = [
  { src: '/images/gov-import/modeli/russkij-sobol.jpg', alt: 'Шуба из русского соболя — пошив на заказ' },
  { src: '/images/gov-import/modeli/sobol-e1746367903636.jpg', alt: 'Соболиная шуба — вид сзади' },
  { src: '/images/gov-import/proizvodstvo/img_7184-kopiya.jpg', alt: 'Мастерская пошива — ателье Mary Belle' },
  { src: '/images/gov-import/modeli/prima.jpg', alt: 'Модель Прима — меховое ателье Mary Belle' },
]

export default function PoshivSobolyaPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================ */}
        {/* A — ATTENTION: Hero                          */}
        {/* ============================================ */}
        <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/modeli/russkij-sobol.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/60">
              Индивидуальный пошив
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Пошив шуб из соболя на заказ
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Русский соболь — самый ценный мех в мире. Создаём уникальные изделия по вашим меркам в Москве
            </p>
          </div>
        </section>

        {/* Schema — BreadcrumbList + Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mary-belle.ru/' },
                { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://mary-belle.ru/uslugi' },
                { '@type': 'ListItem', position: 3, name: 'Пошив шуб', item: 'https://mary-belle.ru/uslugi/poshiv-shub' },
                { '@type': 'ListItem', position: 4, name: 'Из соболя' },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Пошив шуб из соболя на заказ',
              description: 'Индивидуальный пошив шуб из русского баргузинского соболя в Москве. Три примерки, авторский дизайн, мех с международных аукционов.',
              provider: { '@type': 'LocalBusiness', name: 'Mary Belle', '@id': 'https://mary-belle.ru/#organization' },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '350000',
                priceCurrency: 'RUB',
                offerCount: prices.length,
              },
            }),
          }}
        />

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi/poshiv-shub" className="hover:text-brand transition-colors">Пошив шуб</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Из соболя</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* Pain-point hook / Desire trigger + CTA #1    */}
        {/* ============================================ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6 max-w-3xl mx-auto">
              Шуба из соболя, созданная для вас — единственная в своём роде
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-text-body leading-relaxed mb-10">
              <p>
                Вы заслуживаете шубу, которая подчеркнёт именно вашу индивидуальность — не компромисс
                из магазина, а изделие, созданное с нуля по вашим меркам и пожеланиям.
                В ателье Mary Belle мы соединяем редчайший мех в мире с мастерством,
                которое оттачивалось на протяжении более 150 лет.
              </p>
              <p>
                Персональный подход на каждом этапе: от выбора оттенка соболя до финальной примерки.
                Никаких стандартных лекал — только ваш силуэт, ваш стиль, ваша шуба.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Записаться на консультацию
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20пошив%20шубы%20из%20соболя."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-brand/30 text-brand font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* I — INTEREST: Why sable is special           */}
        {/* ============================================ */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Почему соболь — это особенный мех?
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Русский баргузинский соболь — самый редкий и ценный мех в мире. Его ворс невероятно мягкий,
                    шелковистый, с характерным глубоким блеском, который невозможно спутать ни с чем.
                    На протяжении веков соболь был символом статуса и утончённого вкуса — его носили
                    при императорских дворах Европы и России.
                  </p>
                  <p>
                    Шуба из соболя — это не просто верхняя одежда. Это инвестиция, которая сохраняет ценность
                    десятилетиями, и фамильная вещь, которую передают из поколения в поколение. Соболиный мех
                    необыкновенно лёгкий и при этом тёплый — в нём комфортно даже в самые сильные морозы.
                  </p>
                  <p>
                    Мы работаем с русским баргузинским соболем — самым ценным в мире. Золотистый,
                    серебристый, шоколадный, тёмный — подберём оттенок, который подчеркнёт
                    цвет вашей кожи, глаз и волос. Каждая шкурка проходит ручной отбор
                    по высоте ворса, густоте и равномерности окраса.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/gov-import/modeli/sobol-e1746367903636.jpg"
                  alt="Шуба из русского соболя — пошив на заказ в ателье Mary Belle"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -left-4 bg-brand text-white px-6 py-3 font-serif text-sm tracking-wide">
                  С 1870 года
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why custom is better than ready-made */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                Почему индивидуальный пошив, а не готовая шуба?
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Готовая шуба шьётся на стандартную фигуру. Даже самая дорогая модель из магазина —
                  это компромисс: где-то чуть широко в плечах, где-то длина не та, где-то оттенок
                  не совсем ваш. Когда речь идёт о соболе — мехе, стоимость которого измеряется
                  сотнями тысяч рублей — компромиссы неуместны.
                </p>
                <p>
                  Индивидуальный пошив — это совсем другой подход. Выкройка строится по вашим меркам.
                  Фасон подбирается под ваш стиль жизни и тип фигуры. Мех подбирается под оттенок
                  вашей кожи. Три примерки на разных этапах гарантируют безупречную посадку.
                  Результат — шуба, которая выглядит так, будто создана самой природой именно для вас.
                </p>
                <p>
                  В ателье Mary Belle пошивом соболя занимаются мастера с опытом более 15 лет.
                  Каждая шкурка подбирается вручную по оттенку, высоте ворса и густоте —
                  чтобы изделие выглядело как единое целое. Это кропотливая работа, которая требует
                  не только мастерства, но и настоящей любви к своему делу.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* I → D: Process timeline                      */}
        {/* ============================================ */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Как мы создаём шубу</h2>
            <p className="text-text-muted text-center mb-14 max-w-xl mx-auto">
              Пять этапов от первой встречи до готового изделия — прозрачно и понятно на каждом шаге
            </p>
            <div className="max-w-3xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="relative pl-16 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border-light" />
                  )}
                  {/* Number circle */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-serif text-sm">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl text-black mb-2">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* D — DESIRE: Gallery                          */}
        {/* ============================================ */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10 text-center">Наши работы</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust bar — stats */}
        <section className="py-16 md:py-20 bg-bg-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl md:text-4xl text-white mb-2">{stat.value}</div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Care features — 3 columns */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">
              Почему нам доверяют
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careFeatures.map((feature, i) => (
                <div key={i} className="p-8 border border-border-light bg-white">
                  <span className="font-serif text-3xl text-brand/15 block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prices — expanded with breakdowns */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость пошива из соболя</h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Цена зависит от длины изделия, количества шкурок и сложности фасона.
              Ниже — ориентировочная стоимость для каждого типа изделия.
            </p>
            <div className="max-w-3xl">
              {/* Table header */}
              <div className="hidden sm:grid grid-cols-3 gap-4 pb-4 border-b border-border-light text-sm text-text-muted font-medium">
                <span>Изделие</span>
                <span className="text-center">Расход шкурок</span>
                <span className="text-right">Стоимость</span>
              </div>
              {prices.map((item, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-5 border-b border-border-light items-center">
                  <span className="text-text-body font-medium sm:font-normal">{item.label}</span>
                  <span className="text-text-muted text-sm sm:text-center">{item.pelts}</span>
                  <span className="text-brand font-medium tracking-wide sm:text-right">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Точная стоимость рассчитывается после консультации и выбора меха. Стоимость включает
                все этапы работы: подбор шкурок, эскиз, крой, три примерки и финишную обработку.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-CTA #2 */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-bg-dark" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/40">
              Индивидуальный подход
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Приезжайте в ателье — покажем образцы соболя и обсудим ваш проект
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Вы сможете потрогать мех, увидеть разницу между оттенками, примерить готовые образцы
              и обсудить идею будущей шубы с мастером. Консультация бесплатная и ни к чему не обязывает.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Позвонить
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20пошив%20шубы%20из%20соболя."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/30 text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* D → A: FAQ                                   */}
        {/* ============================================ */}
        <SobolyaFAQ />

        {/* ============================================ */}
        {/* A — ACTION: Final CTA #4                     */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-bg-dark">
          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/40">
              Меховое ателье Mary Belle
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Создадим вашу идеальную шубу из соболя
            </h2>
            <p className="text-white/60 mb-4 text-lg">
              Позвоните или напишите — расскажем подробнее и подберём удобное время для визита в ателье.
            </p>
            <p className="text-white/60 mb-10">
              <span className="text-white font-serif text-xl">+7 (495) 225-44-44</span>
              <br />
              <span className="text-white/50 text-sm">м. Войковская, 5 минут пешком</span>
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
                className="px-12 py-4 border border-white/30 text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Как добраться
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* Related services                             */}
        {/* ============================================ */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Смотрите также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Пошив шуб из норки', href: '/uslugi/poshiv-shub/iz-norki' },
                { title: 'Все виды пошива', href: '/uslugi/poshiv-shub' },
                { title: 'Шубы из соболя в магазине', href: '/magazin/shuby/sobol' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group p-8 border border-border-light bg-white hover:border-brand transition-colors">
                  <h3 className="font-serif text-xl text-black group-hover:text-brand transition-colors">{s.title}</h3>
                  <span className="inline-flex items-center gap-2 text-text-muted text-sm mt-3 group-hover:text-brand group-hover:gap-4 transition-all duration-300">
                    Подробнее <span>&rarr;</span>
                  </span>
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
