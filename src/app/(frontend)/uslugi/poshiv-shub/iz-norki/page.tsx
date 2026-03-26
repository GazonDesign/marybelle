import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import NorkiFAQ from './NorkiFAQ'

export const metadata = {
  title: 'Пошив шуб из норки на заказ в Москве — Цены | Mary Belle',
  description: 'Пошив шубы из норки на заказ в Москве. Скандинавская норка NAFA и Kopenhagen Fur, индивидуальный крой, три примерки за 21 день. Ателье Mary Belle — от 120 000 ₽. М. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-shub/iz-norki',
  },
  openGraph: {
    title: 'Пошив шуб из норки на заказ в Москве — Цены',
    description: 'Пошив шубы из норки на заказ в Москве. Скандинавская норка NAFA и Kopenhagen Fur, индивидуальный крой, три примерки за 21 день. Ателье Mary Belle — от 120 000 ₽.',
    url: 'https://mary-belle.ru/uslugi/poshiv-shub/iz-norki',
    images: [{ url: '/images/gov-import/modeli/iz-norki.jpg' }],
  },
}

const advantages = [
  {
    title: 'Скандинавская аукционная норка',
    description: 'Мы работаем только с мехом высшего класса — NAFA и Kopenhagen Fur. Густой подпушок, шелковистый ворс, насыщенный цвет. Каждая шкурка проходит тщательный отбор.',
  },
  {
    title: 'Индивидуальный крой по вашей фигуре',
    description: 'Выкройка строится по вашим меркам — никаких стандартных размерных сеток. Шуба сядет так, как не сядет ни одна готовая модель из магазина.',
  },
  {
    title: 'Три примерки — полный контроль',
    description: 'На каждом этапе вы видите, как создаётся ваша шуба: макет из ткани, меховая заготовка, готовое изделие с подкладкой. Никаких сюрпризов — только уверенность.',
  },
  {
    title: 'Всего 21 день до готовой шубы',
    description: 'От первой встречи до момента, когда вы наденете шубу — три недели. Если нужно быстрее — обсудим срочный пошив. Мы ценим ваше время.',
  },
  {
    title: 'Вы выбираете всё — от цвета до подкладки',
    description: 'Чёрная, коричневая, белая, голубая норка — или комбинация оттенков. Фасон, длина, тип подкладки, фурнитура — каждая деталь по вашему вкусу.',
  },
  {
    title: 'Гарантия и забота после покупки',
    description: 'Гарантия на все швы и фурнитуру. Если что-то не так — устраним бесплатно. Мы также консультируем по хранению и уходу за мехом.',
  },
]

const prices = [
  { label: 'Полушубок из норки (70 см)', price: 'от 120 000 ₽' },
  { label: 'Шуба до колена (90 см)', price: 'от 160 000 ₽' },
  { label: 'Шуба миди (110 см)', price: 'от 190 000 ₽' },
  { label: 'Шуба в пол', price: 'от 220 000 ₽' },
  { label: 'Норковый жилет', price: 'от 45 000 ₽' },
  { label: 'Пальто с норковым воротником', price: 'от 80 000 ₽' },
  { label: 'Срочный пошив (+30% к стоимости)', price: 'от 156 000 ₽' },
]

const trustStats = [
  { value: 'с 1870', label: 'года создаём изделия из меха' },
  { value: '21 день', label: 'от эскиза до готовой шубы' },
  { value: '3', label: 'примерки для идеальной посадки' },
  { value: 'Бесплатно', label: 'консультация и подбор меха' },
]

const carePoints = [
  {
    title: 'Аукционная норка',
    description: 'Только NAFA и Kopenhagen Fur — мех высшего аукционного класса с сертификатами. Мы не работаем с дешёвым сырьём, потому что хотим, чтобы ваша шуба служила десятилетия.',
  },
  {
    title: 'Персональный мастер',
    description: 'Один мастер ведёт ваш заказ от первого эскиза до последнего стежка. Он знает каждый шов вашей шубы — и несёт за неё личную ответственность.',
  },
  {
    title: 'Гарантия качества',
    description: 'Гарантия на все швы и фурнитуру. Если в процессе носки возникнет вопрос — приезжайте, решим. Мы дорожим каждой клиенткой и своей репутацией.',
  },
]

export default function PoshivNorkiPage() {
  return (
    <>
      <Header />
      <main>
        {/* ======================================== */}
        {/* A — ATTENTION: Hero                      */}
        {/* ======================================== */}
        <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/modeli/iz-norki.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/60">
              Скандинавская норка
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Пошив шуб из норки на заказ в Москве
            </h1>
          </div>
        </section>

        {/* ======================================== */}
        {/* Schema (BreadcrumbList + Service)         */}
        {/* ======================================== */}
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
                { '@type': 'ListItem', position: 4, name: 'Из норки' },
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
              name: 'Пошив шуб из норки на заказ',
              description: 'Индивидуальный пошив шуб из скандинавской норки в Москве. Три примерки, срок 21 день.',
              provider: { '@type': 'LocalBusiness', name: 'Mary Belle', '@id': 'https://mary-belle.ru/#organization' },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '120000',
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
            <span className="text-text-primary">Из норки</span>
          </div>
        </div>

        {/* ======================================== */}
        {/* Desire trigger — CTA #1                  */}
        {/* ======================================== */}
        <section className="py-14 md:py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <p className="font-serif text-2xl md:text-3xl text-black leading-snug mb-8">
              Норковая шуба, сшитая по вашим меркам — идеальная посадка, уникальный фасон, ваш стиль
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Записаться на консультацию
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20пошив%20шубы%20из%20норки."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-brand/30 text-brand font-light tracking-widest text-sm btn-shimmer-outline hover:border-brand transition-colors"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* I — INTEREST: Two-column intro            */}
        {/* ======================================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Почему индивидуальный пошив — это совсем другой уровень
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Норка — один из самых благородных мехов. Лёгкая, тёплая, невероятно
                    износостойкая — при правильном уходе норковая шуба верно служит 15–20 лет.
                    А если она сшита точно по вашей фигуре — носить её будет одно удовольствие.
                  </p>
                  <p>
                    В ателье Mary Belle мы работаем со скандинавской аукционной норкой NAFA
                    и Kopenhagen Fur — это мех высшего класса с густым подпушком, шелковистым
                    ворсом и глубоким, насыщенным цветом. Каждая шкурка проходит тщательный
                    отбор — мы принципиально не используем мех низких сортов. Для нас это
                    вопрос профессиональной чести.
                  </p>
                  <p>
                    Разница между готовой шубой и индивидуальным пошивом — как между костюмом
                    с вешалки и костюмом от портного. В первом случае вы подстраиваетесь под
                    чужие лекала. Во втором — шуба создаётся вокруг вас: вашей фигуры, вашего
                    стиля, вашего образа жизни.
                  </p>
                  <p>
                    Вы выбираете всё сами: фасон, длину, цвет меха, тип подкладки, фурнитуру.
                    Хотите классический силуэт — воплотим. Мечтаете об авторском дизайне —
                    создадим. Мы рядом на каждом этапе: от первого эскиза до финальной примерки.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/gov-import/modeli/norka3.jpg"
                  alt="Шуба из скандинавской норки — индивидуальный пошив в ателье Mary Belle"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-brand text-white px-6 py-3 font-serif text-sm tracking-wide">
                  с 1870 года
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* I->D: Advantages grid                     */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Почему выбирают нас</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
              Более 150 лет наша семья работает с мехом. Это не просто опыт — это традиция,
              которой мы дорожим и которую передаём в каждом изделии.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* D — DESIRE: Photo gallery                 */}
        {/* ======================================== */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10 text-center">Наши работы</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/gov-import/modeli/iz-norki.jpg', alt: 'Шуба из норки — индивидуальный пошив' },
                { src: '/images/gov-import/modeli/prima.jpg', alt: 'Модель Прима — норковая шуба' },
                { src: '/images/gov-import/modeli/prima-1.jpg', alt: 'Шуба Прима — вид сзади' },
                { src: '/images/gov-import/modeli/norka3.jpg', alt: 'Норковая шуба — ателье Mary Belle' },
              ].map((img, i) => (
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

        {/* ======================================== */}
        {/* D — DESIRE: Trust bar                     */}
        {/* ======================================== */}
        <section className="py-14 md:py-16 bg-bg-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat, i) => (
                <div key={i}>
                  <span className="block font-serif text-3xl md:text-4xl text-white mb-2">{stat.value}</span>
                  <span className="text-white/60 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* D — DESIRE: Care / Trust section          */}
        {/* ======================================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Что стоит за каждой шубой
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
              Мы понимаем: пошив шубы — это серьёзное решение и значительная инвестиция.
              Поэтому делаем всё, чтобы вы чувствовали себя уверенно на каждом этапе.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {carePoints.map((point, i) => (
                <div key={i} className="text-center px-4">
                  <h3 className="font-serif text-xl text-black mb-4">{point.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* D — DESIRE: Prices                        */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость пошива из норки</h2>
            <p className="text-text-muted mb-10 max-w-2xl">
              Мы открыто говорим о ценах. Финальная стоимость зависит от длины изделия,
              типа норки и сложности фасона. Точную цену мастер назовёт до начала работ —
              после того как вы вместе выберете мех и обсудите модель.
            </p>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Стоимость зависит от длины изделия, типа норки и сложности фасона.
                На консультации мастер рассчитает точную цену именно для вашей модели.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* Mid-CTA #2                                */}
        {/* ======================================== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">
              Приезжайте — покажем образцы норки, обсудим фасон
            </h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Вы сможете потрогать мех, сравнить оттенки, примерить готовые модели для вдохновения.
              Консультация бесплатная, без обязательств.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20пошив%20шубы%20из%20норки."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-brand/30 text-brand font-light tracking-widest text-sm btn-shimmer-outline hover:border-brand transition-colors"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* D->A: FAQ                                 */}
        {/* ======================================== */}
        <NorkiFAQ />

        {/* ======================================== */}
        {/* A — ACTION: Final CTA #3                  */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-dark text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Закажите пошив норковой шубы</h2>
            <p className="text-white/70 mb-4 text-lg">
              Приезжайте в ателье — покажем образцы, обсудим фасон, снимем мерки.
              Через 21 день ваша шуба будет готова.
            </p>
            <p className="text-white/50 mb-10 text-sm">
              м. Войковская, 5 минут пешком
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20пошив%20шубы%20из%20норки."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/30 text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
              <Link href="/kontakty" className="px-12 py-4 border border-white/20 text-white/70 font-light tracking-widest text-sm btn-shimmer-outline hover:text-white hover:border-white/40 transition-colors">
                Как добраться
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* Related services                          */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Смотрите также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Пошив шуб из соболя', href: '/uslugi/poshiv-shub/iz-sobolya' },
                { title: 'Все виды пошива', href: '/uslugi/poshiv-shub' },
                { title: 'Шубы из норки в магазине', href: '/magazin/shuby/norka' },
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
