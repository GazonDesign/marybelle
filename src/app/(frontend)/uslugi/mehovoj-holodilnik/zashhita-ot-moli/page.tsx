import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ZashhitaMoliFAQ from './ZashhitaMoliFAQ'
import Link from 'next/link'

export const metadata = {
  title: 'Защита шубы от моли — Холодильник +4°C, Москва',
  description: 'При +4°C моль не выживает. Профессиональная защита шуб от моли и жука-кожееда в меховом холодильнике. Антимольная обработка, страховка. Фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/zashhita-ot-moli',
  },
  openGraph: {
    title: 'Защита шубы от моли — Холодильник +4°C, Москва',
    description: 'При +4°C моль не выживает. Профессиональная защита шуб от моли и жука-кожееда в меховом холодильнике. Антимольная обработка, страховка. Фабрика с 1870 года.',
    url: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/zashhita-ot-moli',
    images: [{ url: '/images/og/holodilnik.jpg', width: 1200, height: 630 }],
  },
}

const homeRemedies = [
  { remedy: 'Нафталин', promise: 'Отпугивает моль', reality: 'Отпугивает бабочек, но не личинок — а именно личинки едят мех' },
  { remedy: 'Лавандовое масло', promise: 'Натуральная защита', reality: 'Работает 2–3 недели, потом выветривается. Нужно обновлять постоянно' },
  { remedy: 'Антимольный чехол', promise: 'Герметичная защита', reality: 'Мех не дышит, влага скапливается — мездра преет и разрушается' },
  { remedy: 'Кедровая щепа', promise: 'Отпугивает вредителей', reality: 'Запах отпугивает, но не убивает. Личинки внутри меха продолжают есть' },
]

const scienceSteps = [
  { temp: '+15°C и выше', status: 'Опасно', description: 'Личинки моли активно питаются мехом, за сезон могут уничтожить изделие', color: 'bg-red-500' },
  { temp: '+10°C', status: 'Замедление', description: 'Развитие личинок замедляется, но не прекращается полностью', color: 'bg-amber-500' },
  { temp: '+4°C', status: 'Безопасно', description: 'Полная остановка жизнедеятельности моли и жука-кожееда', color: 'bg-emerald-500' },
]

const protectionSteps = [
  { num: '01', title: 'Осмотр на наличие повреждений', description: 'Мастер в перчатках проверяет каждый участок меха — фиксируем состояние до хранения.' },
  { num: '02', title: 'Антимольная обработка', description: 'Профессиональная обработка уничтожает яйца и личинок, которые могли попасть на мех.' },
  { num: '03', title: 'Размещение при +4°C', description: 'Изделие хранится в камере при стабильных +4°C — температуре, при которой моль не выживает.' },
  { num: '04', title: 'Контроль влажности 55%', description: 'Оптимальная влажность сохраняет эластичность мездры и блеск ворса.' },
  { num: '05', title: 'Полная темнота (УФ-защита)', description: 'Камера полностью изолирована от света — мех не выгорает и не теряет цвет.' },
  { num: '06', title: 'Фотофиксация + страховка', description: 'Фиксируем состояние при приёмке. Каждое изделие застраховано на полную стоимость.' },
]

export default function ZashhitaOtMoliPage() {
  return (
    <>
      <Header />
      <main>
        {/* ======================================== */}
        {/* Schema: BreadcrumbList + Service          */}
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
                { '@type': 'ListItem', position: 3, name: 'Меховой холодильник', item: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik' },
                { '@type': 'ListItem', position: 4, name: 'Защита от моли' },
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
              name: 'Защита шубы от моли в меховом холодильнике',
              description: 'Профессиональная защита шуб от моли и жука-кожееда при +4°C. Антимольная обработка, страховка, фотофиксация.',
              provider: { '@type': 'LocalBusiness', name: 'Mary Belle', '@id': 'https://mary-belle.ru/#organization' },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '5000',
                priceCurrency: 'RUB',
              },
            }),
          }}
        />

        {/* ======================================== */}
        {/* Hero                                      */}
        {/* ======================================== */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/holodilnik/hero-new.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Меховой холодильник Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              При +4°C моль не выживает. Факт.
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Таблетки и лаванда отпугивают бабочек. Но личинки при +15°C уже едят ваш мех
            </p>
          </div>
        </section>

        {/* ======================================== */}
        {/* Breadcrumbs                               */}
        {/* ======================================== */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi/mehovoj-holodilnik" className="hover:text-brand transition-colors">Меховой холодильник</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Защита от моли</span>
          </div>
        </div>

        {/* ======================================== */}
        {/* Problem: Why home remedies don't work      */}
        {/* ======================================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Почему домашние средства не работают
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">
              Народные средства создают иллюзию защиты. Вот что происходит на самом деле.
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[1fr_1fr_2fr] gap-4 pb-4 border-b-2 border-border-light">
                <span className="font-serif text-lg text-black">Средство</span>
                <span className="font-serif text-lg text-black">Что обещают</span>
                <span className="font-serif text-lg text-black">Что на самом деле</span>
              </div>

              {homeRemedies.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-2 md:gap-4 py-6 border-b border-border-light">
                  <span className="font-serif text-lg text-black">{item.remedy}</span>
                  <span className="text-text-muted">{item.promise}</span>
                  <span className="text-text-body">{item.reality}</span>
                </div>
              ))}

              <div className="mt-10 p-8 bg-bg-warm border border-border-light text-center">
                <p className="font-serif text-xl md:text-2xl text-black">
                  Единственное надёжное решение — температура ниже +5°C
                </p>
                <p className="text-text-muted mt-2">
                  Это не маркетинг. Это энтомология.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* Science: How cold protection works          */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Как работает защита холодом
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">
              Температурный режим — главный фактор, определяющий выживаемость вредителей меха
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {scienceSteps.map((step, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${step.color}`} />
                  <span className="font-serif text-3xl text-black block mb-1">{step.temp}</span>
                  <span className={`inline-block text-xs tracking-widest uppercase font-medium mb-4 ${
                    step.color === 'bg-red-500' ? 'text-red-500' :
                    step.color === 'bg-amber-500' ? 'text-amber-500' : 'text-emerald-500'
                  }`}>
                    {step.status}
                  </span>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-serif text-xl md:text-2xl text-black">
                Наш холодильник: стабильные +4°C + антимольная обработка
              </p>
              <p className="text-text-muted mt-2">
                Двойная защита — холод останавливает, обработка уничтожает
              </p>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* What we do                                 */}
        {/* ======================================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Что мы делаем для защиты вашей шубы
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">
              Шесть этапов профессиональной защиты — от осмотра до страховки
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionSteps.map((step, i) => (
                <div key={i} className="bg-white p-8 border border-border-light relative group hover:border-brand/30 transition-colors">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-serif text-3xl text-brand/15 block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* Cost comparison                            */}
        {/* ======================================== */}
        <section id="price" className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">
              Сравните стоимость
            </h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Хранение в холодильнике — это не расход. Это страховка от потери шубы.
            </p>

            <div className="max-w-2xl">
              <div className="flex justify-between items-center py-5 border-b border-border-light">
                <span className="text-text-body">Ремонт шубы после моли</span>
                <span className="text-red-500 font-medium tracking-wide">от 30 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-border-light">
                <span className="text-text-body">Полная замена меха</span>
                <span className="text-red-500 font-medium tracking-wide">от 80 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b-2 border-brand">
                <span className="text-text-body font-medium">Хранение в холодильнике</span>
                <span className="text-brand font-medium tracking-wide">от 5 000 ₽ / сезон</span>
              </div>

              <div className="mt-10 p-8 bg-white border border-border-light">
                <p className="font-serif text-2xl md:text-3xl text-black text-center leading-snug">
                  80 ₽/день — дешевле кофе,<br />но спасает шубу за 300 000 ₽
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* CTA                                        */}
        {/* ======================================== */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/holodilnik/storage.jpg)' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Защитите шубу от моли прямо сейчас
            </h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Количество мест в холодильнике ограничено. Оставьте заявку — курьер заберёт шубу в удобное время.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74952254444"
                className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="https://wa.me/79670555978?text=Здравствуйте!%20Интересует%20защита%20шубы%20от%20моли%20в%20холодильнике."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/30 text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* FAQ                                        */}
        {/* ======================================== */}
        <ZashhitaMoliFAQ />

        {/* ======================================== */}
        {/* Related services                           */}
        {/* ======================================== */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Смотрите также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка меха', href: '/uslugi/himchistka' },
                { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
                { title: 'Хранение в холодильнике', href: '/uslugi/mehovoj-holodilnik' },
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
