import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import NorkovyeFAQ from './NorkovyeFAQ'

export const metadata = {
  title: 'Ремонт норковых шуб в Москве — Реставрация норки | Mary Belle',
  description: 'Ремонт норковых шуб в Москве: зашить разрыв, заменить подкладку, восстановить мездру. Ремонт шубы из норки любой сложности. Ателье Mary Belle — от 1 500 ₽, гарантия 1 год. М. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-shub/norkovye',
  },
  openGraph: {
    title: 'Ремонт норковых шуб в Москве — Реставрация норки',
    description: 'Ремонт норковых шуб в Москве: зашить разрыв, заменить подкладку, восстановить мездру. Ремонт шубы из норки любой сложности. Ателье Mary Belle — от 1 500 ₽, гарантия 1 год.',
    url: 'https://mary-belle.ru/uslugi/remont-shub/norkovye',
    images: [{ url: '/images/uslugi-remont-mehov-hero.webp' }],
  },
}

const problems = [
  {
    title: 'Разрыв мездры',
    where: 'Плечи, пройма, подмышки',
    why: 'Мездра норки тонкая — при активной носке трескается в зонах нагрузки.',
    solution: 'Сшивание с укреплением, при необходимости — заплатка из аналогичного меха.',
    duration: '1–3 дня',
  },
  {
    title: 'Потёртости ворса',
    where: 'Рукава, низ, карманы',
    why: 'Трение о сумку, ремень безопасности, контакт с поверхностями.',
    solution: 'Замена секции меха с подбором в тон — потёртость становится невидимой.',
    duration: '3–5 дней',
  },
  {
    title: 'Износ подкладки',
    where: 'Спинка, карманы, рукава',
    why: 'Подкладка из дешёвого материала изнашивается за 3–5 сезонов.',
    solution: 'Полная замена на итальянский шёлк или вискозу — выбираете цвет и материал.',
    duration: '5–7 дней',
  },
  {
    title: 'Сломанные крючки',
    where: 'Застёжка, воротник',
    why: 'Крючки расшатываются от ежедневного использования.',
    solution: 'Замена на усиленные крючки или скрытые магнитные застёжки.',
    duration: '1 день',
  },
  {
    title: 'Провисшие плечи',
    where: 'Плечевая зона',
    why: 'Подплечники просели, шуба «поехала» с плеч.',
    solution: 'Замена подплечников, корректировка плечевого шва — силуэт восстановлен.',
    duration: '2–3 дня',
  },
  {
    title: 'Жёлтый мех',
    where: 'Светлые участки, воротник',
    why: 'Выгорание на солнце, неправильное хранение.',
    solution: 'Профессиональная чистка или тонирование — возвращаем натуральный оттенок.',
    duration: '3–5 дней',
  },
]

const prices = [
  { label: 'Зашить разрыв по шву', price: 'от 1 500 ₽' },
  { label: 'Зашить разрыв мездры (2–10 см)', price: 'от 2 500 ₽' },
  { label: 'Заплатка из норки (подбор в тон)', price: 'от 3 500 ₽' },
  { label: 'Устранить потёртости на рукавах', price: 'от 5 000 ₽' },
  { label: 'Замена секции меха', price: 'от 8 000 ₽' },
  { label: 'Замена подкладки (без утеплителя)', price: '15 000 ₽' },
  { label: 'Замена подкладки (с утеплителем)', price: 'от 20 000 ₽' },
  { label: 'Замена крючков (за штуку)', price: '1 500 ₽' },
  { label: 'Укоротить низ', price: 'от 13 000 ₽' },
  { label: 'Укоротить / удлинить рукава', price: 'от 5 800 ₽' },
  { label: 'Ремонт карманов', price: '7 800 ₽' },
  { label: 'Ушить плечевой шов', price: 'от 3 800 ₽' },
  { label: 'Полная реставрация норковой шубы', price: 'от 25 000 ₽' },
]

const trustStats = [
  { value: 'с 1870', label: 'года работаем с мехом' },
  { value: '15+', label: 'лет опыт каждого мастера' },
  { value: '1 год', label: 'гарантия на работы' },
  { value: 'Бесплатно', label: 'диагностика и осмотр' },
]

export default function RemontNorkovyePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== A — ATTENTION ===== */}
        {/* Hero — clean, visual, short */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/uslugi-remont-mehov-hero.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Специализация — норковый мех
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Ремонт норковых шуб в Москве
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
                { '@type': 'ListItem', position: 4, name: 'Норковые шубы' },
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
              name: 'Ремонт норковых шуб в Москве',
              description: 'Профессиональный ремонт шуб из норки — восстановление мездры, замена подкладки, реставрация меха. Гарантия 1 год.',
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
                lowPrice: '1500',
                highPrice: '25000',
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
            <span className="text-text-primary">Норковые шубы</span>
          </div>
        </div>

        {/* Pain-point hook — visible, right after breadcrumbs */}
        <section className="py-12 md:py-16 border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl text-black leading-snug">
                Порвалась мездра? Потёртости на рукавах?
                <br className="hidden md:block" />
                Подкладка расползлась?
              </p>
              <p className="mt-4 text-text-body text-lg">
                Восстановим — так, что не отличить от новой. Диагностика бесплатная.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+74952254444"
                  className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
                >
                  Записаться на диагностику
                </a>
                <a
                  href="https://wa.me/79670555978?text=Здравствуйте!%20Нужен%20ремонт%20норковой%20шубы."
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
        {/* "Знакомо?" — deeper engagement */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Знакомо?
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Достали шубу из шкафа — а она треснула по шву. Надели пару раз — появились
                    потёртости на рукавах. Подкладка разошлась, крючки болтаются, а плечи съехали
                    и шуба потеряла форму.
                  </p>
                  <p>
                    Мы понимаем, как дорога вам эта вещь — и речь не только о стоимости.
                    Каждый из этих случаев мы видим ежедневно, и каждый — решаемый.
                    Главное — не пытаться ремонтировать норку дома или в обычном ателье:
                    это может усугубить проблему, а изделие стоимостью в сотни тысяч рублей
                    потеряет вид.
                  </p>
                  <p>
                    Норковый мех — нежный, тонкий, дорогой. Работать с ним должен
                    скорняк, который занимается этим каждый день. Именно такие мастера
                    работают в ателье Mary Belle — и каждый относится к вашему изделию
                    так, как если бы это была его собственная вещь.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/gov-import/remont-do-posle/remont-shub.jpg"
                  alt="Ремонт норковой шубы — мастер за работой"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO text — why professional repair */}
        <section className="py-20 md:py-28 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                Почему ремонт норковой шубы нельзя доверить обычному ателье
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Обычные швеи работают с тканью. Мех — принципиально другой материал.
                  У норковой мездры толщина менее миллиметра, и обычная швейная машинка
                  для неё не подходит. Скорняжная машина шьёт встык, не прокалывая
                  мездру — именно так достигается невидимый шов.
                </p>
                <p>
                  Ремонт норковых шуб в Москве — наша основная специализация.
                  Мы восстанавливаем изделия любой сложности: от мелкого разрыва
                  до полной реставрации шубы, которую «списали» в другом ателье.
                  Подбираем мех в тон из собственного запаса — норка скандинавская,
                  с аукционов NAFA и Kopenhagen Fur.
                </p>
                <p>
                  Каждый ремонт начинается с бесплатной диагностики. Мастер осмотрит
                  изделие, покажет все повреждения, объяснит варианты и назовёт точную
                  стоимость — до начала работ. Без сюрпризов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== I→D — INTEREST TO DESIRE ===== */}
        {/* Problems → Solutions with durations */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Типичные проблемы норковых шуб
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Каждую из них мы решаем ежедневно. Вот как именно
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((p, i) => (
                <div key={i} className="bg-white border border-border-light overflow-hidden group hover:border-brand/30 transition-colors">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-serif text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-black">{p.title}</h3>
                        <span className="text-xs text-text-muted uppercase tracking-wider">{p.where}</span>
                      </div>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">{p.why}</p>
                    <div className="pt-3 border-t border-border-light">
                      <span className="text-xs text-brand uppercase tracking-wider font-medium">Решение</span>
                      <p className="text-text-body text-sm leading-relaxed mt-1">{p.solution}</p>
                      <span className="inline-block mt-2 text-xs text-text-muted">
                        Срок: {p.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== D — DESIRE ===== */}
        {/* Gallery — proof */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-3">Примеры работ</h2>
            <p className="text-text-muted mb-8">Реальные результаты ремонта в нашем ателье</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/gov-import/remont-do-posle/remont-shub.jpg', alt: 'Ремонт норковой шубы — восстановление мездры' },
                { src: '/images/gov-import/remont-do-posle/remont-shub-1.jpg', alt: 'Реставрация норки — результат работы' },
                { src: '/images/gov-import/remont-do-posle/restovratsiya.jpg', alt: 'Полная реставрация норковой шубы' },
                { src: '/images/gov-import/remont-do-posle/remont26.jpg', alt: 'Ремонт норковой шубы — ателье Mary Belle' },
              ].map((img, i) => (
                <div key={i} className="overflow-hidden group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA — after gallery proof */}
        <section className="py-10 bg-bg-warm">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <p className="text-text-body text-lg mb-4">
              Узнайте точную стоимость ремонта вашей шубы
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+74952254444"
                className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20узнать%20стоимость%20ремонта%20норковой%20шубы."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-brand text-brand font-light tracking-widest text-sm hover:bg-brand hover:text-white transition-colors"
              >
                Отправить фото в WhatsApp
              </a>
            </div>
          </div>
        </section>

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Ваше изделие застраховано</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  На всё время ремонта шуба находится под страховкой. Охрана и контроль доступа 24/7.
                  Вы можете не волноваться за сохранность.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Один мастер — одно изделие</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Вашу шубу ведёт один мастер от приёмки до выдачи. Никакого конвейера —
                  персональная ответственность за результат.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-black mb-3">Согласование до начала работ</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Мастер покажет все повреждения, объяснит варианты и стоимость. Работы
                  начинаются только после вашего согласия. Без сюрпризов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed prices */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость ремонта норковых шуб</h2>
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

        {/* Inline CTA after prices */}
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

        {/* FAQ — builds confidence, targets long-tail queries */}
        <NorkovyeFAQ />

        {/* ===== A — ACTION ===== */}
        {/* Final CTA — after peak Desire */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/gov-import/proizvodstvo/sh-ceh-sh.jpg)' }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Привезите шубу — покажем, что можно сделать
            </h2>
            <p className="text-white/70 mb-4 text-lg">
              Бесплатная диагностика занимает 15 минут. Мастер осмотрит изделие,
              покажет все проблемные места и назовёт точную стоимость.
            </p>
            <p className="text-white/50 mb-10 text-sm">
              Без обязательств. Если решите не ремонтировать — просто заберёте шубу.
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

        {/* Related */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги для норковых шуб</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка шубы из норки', href: '/uslugi/himchistka', icon: '/icons/services/cleaning.svg' },
                { title: 'Окрашивание норки', href: '/uslugi/okrashivanie', icon: '/icons/services/coloring.svg' },
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
