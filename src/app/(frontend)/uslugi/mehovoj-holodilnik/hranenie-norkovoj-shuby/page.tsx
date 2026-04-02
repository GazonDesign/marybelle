import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import CrossSellBanner from '@/components/ui/CrossSellBanner'
import FadeIn from '@/components/ui/FadeIn'

export const metadata = {
  title: 'Хранение норковой шубы в холодильнике в Москве — от 2 450 ₽/мес | Mary Belle',
  description: 'Профессиональное хранение норковой шубы в меховом холодильнике +4°C. Влажность 55% сохраняет блеск норки. Страховка, антимоль, курьер. Фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/hranenie-norkovoj-shuby',
  },
  openGraph: {
    title: 'Хранение норковой шубы в холодильнике в Москве — от 2 450 ₽/мес',
    description: 'Профессиональное хранение норковой шубы в меховом холодильнике +4°C. Влажность 55% сохраняет блеск норки. Страховка, антимоль, курьер. Фабрика с 1870 года.',
    url: 'https://mary-belle.ru/uslugi/mehovoj-holodilnik/hranenie-norkovoj-shuby',
    images: [{ url: '/images/holodilnik/hero-new.jpg' }],
  },
}

const prices = [
  { label: 'Норка (все виды)', price: '2 450 ₽/мес' },
  { label: 'Скидка при оплате за 6 месяцев', price: '−10%' },
  { label: 'Скидка при оплате за год', price: '−20%' },
  { label: 'Химчистка перед хранением', price: 'от 4 000 ₽' },
  { label: 'Курьер по Москве (от 3 шт)', price: 'бесплатно' },
]

const features = [
  { title: 'Профессиональная чистка', description: 'Перед размещением каждое изделие проходит бережную чистку — удаляем пыль, загрязнения и остатки парфюма.' },
  { title: 'Антимольная обработка', description: 'Обработка безопасным препаратом, который уничтожает личинки моли и предотвращает повторное заражение.' },
  { title: 'Анатомические вешалки', description: 'Норковая шуба хранится на широкой вешалке по размеру — плечи не деформируются, мех не заминается.' },
  { title: 'Фотофиксация при приёмке', description: 'Фотографируем изделие при приёмке и выдаче — полная прозрачность и контроль состояния.' },
  { title: 'Страховка на полную стоимость', description: 'Каждое изделие застраховано на заявленную стоимость. Вы ни чем не рискуете.' },
  { title: 'Охрана 24/7 + генератор', description: 'Круглосуточная охрана, контроль доступа и резервный генератор — холодильник работает даже при отключении электричества.' },
]

const trustStats = [
  { value: 'С 1870', label: 'года' },
  { value: '+4°C', label: 'температура' },
  { value: '55%', label: 'влажности' },
  { value: 'Страховка', label: 'включена' },
]

const faqItems = [
  {
    question: 'Почему норка желтеет при домашнем хранении?',
    answer: 'При комнатной температуре (+20–25°C) жиры в мездре норки окисляются и проникают в ворс, придавая ему жёлтый оттенок. Особенно это заметно на светлой норке. В холодильнике при +4°C окисление практически останавливается — мех сохраняет натуральный цвет.',
  },
  {
    question: 'При какой температуре хранить норковую шубу?',
    answer: 'Оптимальная температура хранения норки — от +2 до +5°C при влажности 50–60%. В нашем холодильнике поддерживается +4°C и влажность 55% — это идеальные условия, при которых мездра остаётся эластичной, ворс не пересыхает, а моль не выживает.',
  },
  {
    question: 'Нужна ли химчистка норки перед хранением?',
    answer: 'Да, мы рекомендуем чистку перед размещением. За сезон на мехе скапливаются частицы пыли, кожного жира и парфюма — всё это ускоряет износ. Профессиональная чистка удаляет загрязнения, не повреждая ворс. Стоимость — от 4 000 ₽.',
  },
  {
    question: 'Как часто нужно хранить норку в холодильнике?',
    answer: 'Каждое лето. С апреля по октябрь температура и влажность в квартире губительны для меха. Если вы хотите, чтобы норковая шуба прослужила 15–20 лет, профессиональное хранение в холодильнике — обязательное условие каждый тёплый сезон.',
  },
  {
    question: 'Можно ли забрать шубу раньше срока?',
    answer: 'Да, вы можете забрать изделие в любой момент — достаточно позвонить за день. Мы подготовим шубу к выдаче: проветрим и упакуем. Перерасчёт стоимости за неиспользованные месяцы не производится.',
  },
]

export default function HranenieNorkovojShubyPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== A — ATTENTION ===== */}
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/holodilnik/hero-new.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Профессиональное хранение норки
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Хранение норковой шубы в холодильнике
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              +4°C и влажность 55% — норка сохраняет блеск и эластичность десятилетиями
            </p>
          </div>
        </section>

        {/* Schema.org */}
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
                { '@type': 'ListItem', position: 4, name: 'Хранение норковой шубы' },
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
              name: 'Хранение норковой шубы в меховом холодильнике',
              description: 'Профессиональное хранение норковой шубы при +4°C и влажности 55%. Страховка, антимольная обработка, курьер по Москве.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Mary Belle',
                '@id': 'https://mary-belle.ru/#organization',
                foundingDate: '1870',
                address: { '@type': 'PostalAddress', addressLocality: 'Москва', streetAddress: 'м. Войковская' },
              },
              areaServed: { '@type': 'City', name: 'Москва' },
              offers: {
                '@type': 'Offer',
                price: '2450',
                priceCurrency: 'RUB',
                unitText: 'месяц',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
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
            <Link href="/uslugi/mehovoj-holodilnik" className="hover:text-brand transition-colors">Меховой холодильник</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Хранение норковой шубы</span>
          </div>
        </div>

        {/* ===== I — INTEREST ===== */}
        {/* Pain section */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                  Почему норка особенно уязвима
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand" />
                      <span>При +25°C жиры в мездре окисляются — мех желтеет, особенно светлая норка</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand" />
                      <span>Сухой воздух (20–30%) делает ворс ломким — норка теряет свою фирменную мягкость</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand" />
                      <span>Моль при +15°C активно размножается — ест мех изнутри, повреждения необратимы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand" />
                      <span>Солнечный свет разрушает пигменты — норка тускнеет и выгорает</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand" />
                      <span>Бытовые запахи — кухня, парфюм, табак — впитываются в мех навсегда</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img src="/images/holodilnik/climate.jpg" alt="Меховой холодильник — норковая шуба при +4°C" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Comparison section */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">
              Дома vs Холодильник Mary Belle
            </h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">
              Сравните условия — и решите, где вашей норке лучше
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Bad — home */}
              <FadeIn className="bg-white border border-border-light p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <h3 className="font-serif text-xl text-black">В шкафу дома</h3>
                </div>
                <div className="space-y-4 text-text-body text-sm leading-relaxed">
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Температура</span>
                    <span className="text-red-500 font-medium">+25°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Влажность</span>
                    <span className="text-red-500 font-medium">20–30%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Моль</span>
                    <span className="text-red-500 font-medium">активна при +15°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Свет</span>
                    <span className="text-red-500 font-medium">повреждает пигмент</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Результат</span>
                    <span className="text-red-500 font-medium">тусклый, ломкий мех</span>
                  </div>
                </div>
              </FadeIn>
              {/* Good — fridge */}
              <FadeIn delay={150} className="bg-white border border-brand/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 rounded-full bg-brand" />
                  <h3 className="font-serif text-xl text-black">В холодильнике +4°C</h3>
                </div>
                <div className="space-y-4 text-text-body text-sm leading-relaxed">
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Температура</span>
                    <span className="text-brand font-medium">+4°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Влажность</span>
                    <span className="text-brand font-medium">55%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Моль</span>
                    <span className="text-brand font-medium">погибает при +4°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border-light">
                    <span>Свет</span>
                    <span className="text-brand font-medium">полная темнота</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Результат</span>
                    <span className="text-brand font-medium">блестящий, мягкий мех</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ===== I to D — INTEREST TO DESIRE ===== */}
        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">
              Что мы делаем для вашей норки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <FadeIn key={i} delay={i * 80} className="bg-white border border-border-light overflow-hidden group hover:border-brand/30 transition-colors">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-serif text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-lg text-black pt-2">{f.title}</h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{f.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ===== D — DESIRE ===== */}
        {/* Prices */}
        <section id="price" className="py-20 md:py-28 bg-bg-light">
          <FadeIn className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Стоимость хранения норковой шубы</h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Фиксированная цена за месяц. Скидки при длительном хранении
            </p>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">
                * Стоимость действительна для сезона 2026. Курьер бесплатно при сдаче от 3 изделий
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Trust stats bar */}
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

        {/* CTA parallax */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/holodilnik/storage.jpg)' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Забронируйте место для норковой шубы</h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Количество мест ограничено. Позвоните — курьер заберёт шубу в удобное время.
            </p>
            <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
              +7 (495) 225-44-44
            </a>
          </div>
        </section>

        {/* FAQ — inline */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Частые вопросы о хранении норки</h2>
            <div className="max-w-3xl space-y-8">
              {faqItems.map((item, i) => (
                <div key={i} className="border-b border-border-light pb-8">
                  <h3 className="font-serif text-xl text-black mb-3">{item.question}</h3>
                  <p className="text-text-body leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-sell banner */}
        <CrossSellBanner currentService="mehovoj-holodilnik" />

        {/* ===== A — ACTION ===== */}
        {/* Related services */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги для норковых шуб</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка', href: '/uslugi/himchistka', icon: '/icons/services/cleaning.svg' },
                { title: 'Ремонт шуб', href: '/uslugi/remont-shub', icon: '/icons/services/repair.svg' },
                { title: 'Перекрой', href: '/uslugi/perekroj', icon: '/icons/services/sewing.svg' },
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
