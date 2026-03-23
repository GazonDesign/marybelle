import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Хранение шуб в меховом холодильнике в Москве — Цены 2026 | Mary Belle',
  description: 'Хранение шуб в меховом холодильнике в Москве — цена от 5 000 ₽ за сезон. Температура +5°C, влажность 50–60%. Забор и доставка по Москве. Хранение меховых изделий в ателье Mary Belle.',
}

const steps = [
  { image: '/images/holodilnik/step-priem.jpg', title: 'Приёмка и осмотр', description: 'Мастер в перчатках осматривает изделие, фиксирует состояние — полная прозрачность.' },
  { image: '/images/holodilnik/step-chistka.jpg', title: 'Чистка и обработка', description: 'Профессиональная чистка и антимольная обработка перед размещением в холодильнике.' },
  { image: '/images/holodilnik/step-razmeshenie.jpg', title: 'Размещение в холодильнике', description: 'Каждое изделие хранится на индивидуальном месте при +4°C и влажности 50–60%.' },
  { image: '/images/holodilnik/step-vydacha.jpg', title: 'Выдача к сезону', description: 'Ваша шуба в идеальном состоянии — забирайте в ателье или закажите доставку.' },
]

const advantages = [
  { image: '/images/holodilnik/klimat.jpg', title: 'Идеальный климат', description: 'Температура +4–5°C и влажность 50–60% — мех сохраняет эластичность и блеск.' },
  { image: '/images/holodilnik/zashita.jpg', title: 'Защита от вредителей', description: 'Антимольная обработка и герметичное хранение — ни одна моль не доберётся.' },
  { image: '/images/holodilnik/solntse.jpg', title: 'Защита от солнца', description: 'Полная темнота внутри камеры — мех не выгорает и не теряет цвет.' },
  { image: '/images/holodilnik/individual.jpg', title: 'Индивидуальное размещение', description: 'Каждое изделие на отдельной вешалке с достаточным пространством.' },
  { image: '/images/holodilnik/dostup.jpg', title: 'Доступ в любое время', description: 'Нужна шуба раньше? Приезжайте — мы выдадим изделие в любой момент.' },
  { image: '/images/holodilnik/safe.jpg', title: 'Страховка и безопасность', description: 'Каждое изделие застраховано. Охрана и контроль доступа 24/7.' },
]

const prices = [
  { label: 'Хранение шубы (сезон, апрель–октябрь)', price: 'от 5 000 ₽' },
  { label: 'Хранение дублёнки', price: 'от 3 500 ₽' },
  { label: 'Забор курьером по Москве', price: '1 500 ₽' },
  { label: 'Доставка обратно', price: '1 500 ₽' },
  { label: 'Химчистка перед хранением', price: 'от 4 000 ₽' },
]

export default function MehovojHolodilnikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/holodilnik/hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/70">
              Профессиональное хранение меховых изделий
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Меховой холодильник
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-2xl">
              +4°C, влажность 50–60%, страховка — ваша шуба проведёт лето в идеальных условиях
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/uslugi" className="hover:text-brand transition-colors">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Меховой холодильник</span>
          </div>
        </div>

        {/* Intro + image */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">Зачем хранить шубу в холодильнике?</h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Мех — живой материал. При комнатной температуре мездра пересыхает, ворс теряет блеск,
                    а моль может уничтожить изделие за один сезон.
                  </p>
                  <p>
                    Меховой холодильник поддерживает температуру +4–5°C и влажность 50–60% — это условия,
                    при которых мех сохраняется десятилетиями. Плюс полная темнота и обработка от вредителей.
                  </p>
                  <p>
                    Мы заберём шубу курьером, обработаем, разместим на индивидуальном месте и вернём
                    к началу сезона в идеальном состоянии.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img src="/images/holodilnik/climate.jpg" alt="Меховой холодильник +4°C" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Как это работает</h2>
            <p className="text-text-muted text-center mb-14 max-w-2xl mx-auto">От приёмки до выдачи — 4 простых шага</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="bg-white overflow-hidden group">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand text-white flex items-center justify-center font-serif text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-black mb-2">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12 text-center">Преимущества хранения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <div key={i} className="group overflow-hidden">
                  <div className="relative h-[220px] overflow-hidden">
                    <img src={adv.image} alt={adv.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white">{adv.title}</h3>
                  </div>
                  <div className="p-4 bg-bg-light">
                    <p className="text-text-muted text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with big image */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/images/holodilnik/storage.jpg)' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Забронируйте место в холодильнике</h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Количество мест ограничено. Оставьте заявку — курьер заберёт шубу в удобное время.
            </p>
            <a href="tel:+74952254444" className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer">
              Забронировать
            </a>
          </div>
        </section>

        {/* Prices */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-12">Стоимость</h2>
            <div className="max-w-2xl">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-border-light">
                  <span className="text-text-body">{item.label}</span>
                  <span className="text-brand font-medium tracking-wide">{item.price}</span>
                </div>
              ))}
              <p className="mt-6 text-sm text-text-muted">* Точная стоимость определяется после осмотра изделия мастером</p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-10">Другие услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Химчистка', href: '/uslugi/himchistka', icon: '/icons/services/cleaning.svg' },
                { title: 'Ремонт шуб', href: '/uslugi/remont-shub', icon: '/icons/services/repair.svg' },
                { title: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub', icon: '/icons/services/sewing.svg' },
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
