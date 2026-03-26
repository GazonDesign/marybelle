import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import SobolinyeFAQ from './SobolinyeFAQ'

export const metadata = {
  title: 'Ремонт шуб из соболя в Москве — Реставрация соболя | Mary Belle',
  description: 'Ремонт шуб из соболя в Москве: реставрация соболиного меха, замена подкладки, восстановление мездры. Бережный ремонт дорогих изделий. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-shub/sobolinye',
  },
  openGraph: {
    title: 'Ремонт шуб из соболя в Москве — Реставрация соболя',
    description: 'Ремонт шуб из соболя в Москве: реставрация соболиного меха, замена подкладки, восстановление мездры. Бережный ремонт дорогих изделий.',
    url: 'https://mary-belle.ru/uslugi/remont-shub/sobolinye',
    images: [{ url: '/images/gov-import/modeli/russkij-sobol.jpg' }],
  },
}

const features = [
  {
    title: 'Ручная работа',
    description: 'Каждый шов на соболиной шубе делается вручную — только так можно сохранить невидимость ремонта на таком тонком и ценном мехе.',
  },
  {
    title: 'Подбор меха в тон',
    description: 'При необходимости замены секции подбираем соболя точно в тон — по оттенку, высоте ворса и густоте подпушка. Из собственного запаса шкурок.',
  },
  {
    title: 'Укрепление мездры',
    description: 'Соболиная мездра — одна из самых тонких среди всех видов меха. Укрепляем проблемные зоны специальной сеткой, не утяжеляя изделие.',
  },
  {
    title: 'Реставрация цвета',
    description: 'Если мех потускнел или приобрёл нежелательный оттенок — восстанавливаем натуральный цвет профессиональным тонированием.',
  },
  {
    title: 'Подкладка премиум-класса',
    description: 'Для соболиных шуб используем только итальянский шёлк — подкладка, достойная изделия такого уровня.',
  },
  {
    title: 'Бережное хранение',
    description: 'На время ремонта изделие хранится в специальных условиях: контроль температуры, влажности, охранная система 24/7.',
  },
]

const prices = [
  { label: 'Зашить разрыв мездры', price: 'от 2 000 \u20BD' },
  { label: 'Заплатка из соболя (подбор меха)', price: 'от 8 000 \u20BD' },
  { label: 'Замена секции меха', price: 'от 15 000 \u20BD' },
  { label: 'Замена подкладки (итальянский шёлк)', price: 'от 25 000 \u20BD' },
  { label: 'Укрепление мездры (сетка)', price: 'от 5 000 \u20BD' },
  { label: 'Полная реставрация', price: 'от 40 000 \u20BD' },
  { label: 'Тонирование меха', price: 'от 12 000 \u20BD' },
]

const trustStats = [
  { value: 'с 1870', label: 'года работаем с мехом' },
  { value: '15+', label: 'лет опыт каждого мастера' },
  { value: '1 год', label: 'гарантия на работы' },
  { value: 'Бесплатно', label: 'диагностика и осмотр' },
]

export default function RemontSobolinyePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== A — ATTENTION ===== */}
        {/* Hero — clean, visual, just H1 + subtitle */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/gov-import/modeli/russkij-sobol.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/60">
              Бережная реставрация ценного меха
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Ремонт шуб из соболя в Москве
            </h1>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mary-belle.ru/' },
                { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://mary-belle.ru/uslugi' },
                { '@type': 'ListItem', position: 3, name: 'Ремонт шуб', item: 'https://mary-belle.ru/uslugi/remont-shub' },
                { '@type': 'ListItem', position: 4, name: 'Соболиные шубы' },
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
              name: 'Ремонт шуб из соболя в Москве',
              description: 'Профессиональная реставрация соболиных шуб — ручная работа, подбор меха в тон, укрепление мездры. Гарантия 1 год.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Mary Belle',
                '@id': 'https://mary-belle.ru/#organization',
                foundingDate: '1870',
                address: { '@type': 'PostalAddress', addressLocality: 'Москва', streetAddress: 'м. Войковская' },
              },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '2000',
                highPrice: '40000',
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
            <Link href="/uslugi/remont-shub" className="hover:text-brand transition-colors">Ремонт шуб</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Соболиные шубы</span>
          </div>
        </div>

        {/* Pain-point hook — CTA #1 */}
        <section className="py-12 md:py-16 border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl text-black leading-snug">
                Трещины на мездре? Потускнел ворс?
                <br className="hidden md:block" />
                Подкладка износилась?
              </p>
              <p className="mt-4 text-text-body text-lg">
                Восстановим бережно — так, что не отличить от нового изделия. Диагностика бесплатная.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+74952254444"
                  className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
                >
                  Записаться на диагностику
                </a>
                <a
                  href="https://wa.me/79670555978?text=Здравствуйте!%20Нужен%20ремонт%20соболиной%20шубы."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border border-brand text-brand font-light tracking-widest text-sm hover:bg-brand hover:text-white transition-colors"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== I — INTEREST ===== */}
        {/* Empathetic intro — emotional connection */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Мы понимаем, как дорога вам эта вещь
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Соболиная шуба — это не просто верхняя одежда. Это изделие, за которым стоит
                    история: подарок от близкого человека, символ достижений, вещь, которая передаётся
                    по наследству. И когда на мездре появляются трещины, ворс теряет блеск или
                    подкладка приходит в негодность — хочется не просто «починить», а восстановить
                    так, чтобы изделие снова выглядело и ощущалось как новое.
                  </p>
                  <p>
                    Именно так мы подходим к каждому ремонту. Соболь — самый ценный и самый
                    деликатный мех. Его мездра тоньше норковой, ворс — длиннее и мягче,
                    а каждый оттенок уникален. Работать с ним может только мастер, который
                    занимается этим ежедневно и понимает все тонкости этого меха.
                  </p>
                  <p>
                    Ателье Mary Belle работает с соболем с 1870 года. За полтора столетия
                    мы накопили опыт, который невозможно получить за несколько лет. Наши мастера
                    знают, как укрепить мездру, не утяжелив изделие, как подобрать заплатку,
                    которую не отличить от оригинала, как вернуть блеск потускневшему ворсу.
                    Каждый из них относится к вашей шубе так, как если бы это была его
                    собственная вещь.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/gov-import/modeli/russkij-sobol.jpg"
                  alt="Шуба из русского соболя — реставрация в ателье Mary Belle"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why sable needs special care — SEO + trust */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                Почему ремонт соболя нельзя доверить обычному ателье
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Стоимость соболиной шубы — от нескольких сотен тысяч до миллионов рублей.
                  Попытка отремонтировать такое изделие в обычном швейном ателье может усугубить
                  проблему: неправильный шов повредит тонкую мездру, а неподходящая заплатка
                  будет заметна даже издалека. Восстановить изделие после неквалифицированного
                  ремонта значительно сложнее и дороже.
                </p>
                <p>
                  Мездра соболя — тоньше миллиметра. Обычная швейная машинка для неё не подходит.
                  Скорняжная машина шьёт встык, не прокалывая мездру — так шов остаётся с изнанки,
                  а с лицевой стороны ворс полностью его скрывает. Это принципиально другая
                  технология, другое оборудование и другой уровень мастерства.
                </p>
                <p>
                  Ремонт соболиных шуб в Москве — одна из наших ключевых специализаций.
                  Мы восстанавливаем изделия любой сложности: от небольшого разрыва до полной
                  реставрации шубы, которую признали безнадёжной в другом ателье. Каждый ремонт
                  начинается с бесплатной диагностики — мастер осмотрит изделие, покажет все
                  повреждения и назовёт точную стоимость до начала работ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== I→D — INTEREST TO DESIRE ===== */}
        {/* Features / approach cards */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Как мы работаем с соболем
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Каждый этап — внимание к деталям и уважение к вашему изделию
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{f.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA — CTA #2 after features */}
        <section className="py-10 bg-bg-warm border-t border-border-light">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <p className="text-text-body text-lg mb-4">
              Узнайте точную стоимость ремонта вашей соболиной шубы
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+74952254444"
                className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20узнать%20стоимость%20ремонта%20соболиной%20шубы."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-brand text-brand font-light tracking-widest text-sm hover:bg-brand hover:text-white transition-colors"
              >
                Отправить фото в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ===== D — DESIRE ===== */}
        {/* Trust bar — social proof numbers */}
        <section className="py-12 bg-bg-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl md:text-4xl text-brand mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Care & safety — builds trust for premium audience */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10 text-center">
              Безопасность и забота о вашем изделии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Ваше изделие застраховано</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  На всё время ремонта соболиная шуба находится под страховкой.
                  Охранная система и контроль доступа 24/7. Вы можете не волноваться
                  за сохранность — мы несём полную ответственность.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Один мастер — одно изделие</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Вашу шубу ведёт один мастер от приёмки до выдачи. Никакого конвейера —
                  персональная ответственность за каждый шов, каждую деталь, каждый этап работы.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Согласование до начала работ</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Мастер покажет все повреждения, объяснит варианты и назовёт точную стоимость.
                  Работы начинаются только после вашего согласия. Никаких скрытых доплат
                  и неожиданных сумм.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость ремонта соболиных шуб</h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Цены фиксируются после осмотра. Ниже — ориентировочная стоимость основных работ
            </p>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Точная стоимость определяется после бесплатного осмотра мастером
              </p>
            </div>
          </div>
        </section>

        {/* CTA #3 — after prices */}
        <section className="py-10 bg-bg-light text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <p className="text-text-muted mb-4">
              Не нашли свою проблему в списке? Мастер оценит при осмотре — это бесплатно
            </p>
            <a
              href="tel:+74952254444"
              className="inline-block px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
            >
              Записаться на диагностику
            </a>
          </div>
        </section>

        {/* FAQ */}
        <SobolinyeFAQ />

        {/* ===== A — ACTION ===== */}
        {/* Final CTA — CTA #4 */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/gov-import/proizvodstvo/sh-ceh-sh.jpg)' }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Привезите шубу — покажем, что можно сделать
            </h2>
            <p className="text-white/70 mb-4 text-lg">
              Бесплатная диагностика занимает 15 минут. Мастер осмотрит соболиную шубу,
              покажет все проблемные места и назовёт точную стоимость ремонта.
            </p>
            <p className="text-white/50 mb-10 text-sm">
              Без обязательств. Если решите не ремонтировать — просто заберёте изделие.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
                +7 (495) 225-44-44
              </a>
              <Link href="/kontakty" className="px-12 py-4 border border-white/30 text-white font-light tracking-widest text-sm btn-shimmer-outline">
                Как добраться
              </Link>
            </div>
            <p className="mt-6 text-white/40 text-sm">
              м. Войковская, 5 минут пешком
            </p>
          </div>
        </section>

        {/* Related services */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги для соболиных шуб</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка соболиной шубы', href: '/uslugi/himchistka', icon: '/icons/services/cleaning.svg' },
                { title: 'Окрашивание меха соболя', href: '/uslugi/okrashivanie', icon: '/icons/services/coloring.svg' },
                { title: 'Хранение в холодильнике', href: '/uslugi/mehovoj-holodilnik', icon: '/icons/services/storage.svg' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group p-8 border border-border-light bg-white hover:border-brand transition-colors">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center bg-brand/10 rounded-sm">
                    <img src={s.icon} alt="" className="w-5 h-5 opacity-60" />
                  </div>
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
