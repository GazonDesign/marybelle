import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Сколько стоит хранение шубы в Москве — 2026',
  description: 'Сколько стоит хранение шубы в Москве? Сравнение цен: Меха Екатерина, rufurs, Mary Belle. Что входит в стоимость, как сэкономить на хранении и химчистке меха.',
  alternates: {
    canonical: 'https://mary-belle.ru/blog/skolko-stoit-hranenie-shuby',
  },
  openGraph: {
    title: 'Сколько стоит хранение шубы в Москве — 2026',
    description: 'Сколько стоит хранение шубы в Москве? Сравнение цен: Меха Екатерина, rufurs, Mary Belle. Что входит в стоимость, как сэкономить на хранении и химчистке меха.',
    url: 'https://mary-belle.ru/blog/skolko-stoit-hranenie-shuby',
    images: [{ url: '/images/og-blog.jpg' }],
  },
}

export default function SkolkoStoitHranenieShuby() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "image": "https://mary-belle.ru/images/og-blog.jpg",
          "headline": "Сколько стоит хранение шубы в Москве в 2026 году",
          "description": "Сколько стоит хранение шубы в Москве? Сравнение цен: Меха Екатерина, rufurs, Mary Belle. Что входит в стоимость, как сэкономить на хранении и химчистке меха.",
          "author": {
            "@type": "Organization",
            "name": "Mary Belle",
            "@id": "https://mary-belle.ru/#organization"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mary Belle",
            "@id": "https://mary-belle.ru/#organization"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://mary-belle.ru/blog/skolko-stoit-hranenie-shuby"
          },
          "datePublished": "2026-03-05",
          "dateModified": "2026-03-28"
        }) }}
      />
      <Header />
      <main>
        <div className="h-[70px]" />

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[800px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand transition-colors">Блог</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Сколько стоит хранение шубы</span>
          </div>
        </div>

        <article className="py-20 md:py-28">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-text-muted text-sm mb-6">5 марта 2026 &middot; 6 мин чтения</div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-10 leading-tight">
              Сколько стоит хранение шубы в Москве в 2026 году
            </h1>

            <div className="prose-article space-y-6 text-text-body leading-relaxed text-lg">
              <p>
                Каждую весну владелицы шуб ищут надёжное место для хранения. Цены на рынке различаются
                в несколько раз, а сервис — ещё больше. Одни компании предлагают просто повесить шубу
                в прохладную комнату, другие — полный цикл: от курьера до страховки. Мы провели обзор
                цен в Москве и сравнили, что конкретно вы получаете за свои деньги.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Обзор цен на хранение шуб в Москве</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b-2 border-border-light">
                      <th className="text-left py-3 px-4 font-serif text-black">Компания</th>
                      <th className="text-left py-3 px-4 font-serif text-black">Цена за сезон (6 мес)</th>
                      <th className="text-left py-3 px-4 font-serif text-black">Цена за день</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Меха Екатерина</td>
                      <td className="py-3 px-4">3 500 – 21 000 ₽</td>
                      <td className="py-3 px-4">от 19 ₽</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Rufurs</td>
                      <td className="py-3 px-4">9 000 – 15 000 ₽</td>
                      <td className="py-3 px-4">от 50 ₽</td>
                    </tr>
                    <tr className="border-b border-border-light bg-bg-warm">
                      <td className="py-3 px-4 font-medium">Mary Belle</td>
                      <td className="py-3 px-4 font-medium">7 500 – 19 200 ₽</td>
                      <td className="py-3 px-4 font-medium">от 42 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                На первый взгляд кажется, что дешевле — значит лучше. Но цена без контекста обманчива.
                Ключевой вопрос: что именно входит в стоимость?
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Что входит в стоимость: сравнение сервиса</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b-2 border-border-light">
                      <th className="text-left py-3 px-4 font-serif text-black">Услуга</th>
                      <th className="text-center py-3 px-4 font-serif text-black">Меха Екатерина</th>
                      <th className="text-center py-3 px-4 font-serif text-black">Rufurs</th>
                      <th className="text-center py-3 px-4 font-serif text-black">Mary Belle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Температура +2…+4°C</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Влажность 50–55%</td>
                      <td className="py-3 px-4 text-center">Нет данных</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Антимольная обработка</td>
                      <td className="py-3 px-4 text-center">За доплату</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да (озон)</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Страховка изделия</td>
                      <td className="py-3 px-4 text-center">Нет</td>
                      <td className="py-3 px-4 text-center">До 100 000 ₽</td>
                      <td className="py-3 px-4 text-center">Полная стоимость</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Курьерская доставка</td>
                      <td className="py-3 px-4 text-center">За доплату</td>
                      <td className="py-3 px-4 text-center">За доплату</td>
                      <td className="py-3 px-4 text-center">Бесплатно</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4">Осмотр и фотофиксация</td>
                      <td className="py-3 px-4 text-center">Нет</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Как посчитать: цена за день vs стоимость шубы</h2>
              <p>
                Давайте посчитаем простую арифметику. Средняя стоимость норковой шубы — 300 000 ₽.
                Хранение в Mary Belle — от 80 ₽ в день (при посуточной оплате) или от 42 ₽/день
                при оплате за сезон.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Хранение за сезон (6 мес): ~7 500 ₽ — это 2,5% от стоимости шубы</li>
                <li>Потеря блеска за лето в шкафу: 10–15% стоимости = 30 000–45 000 ₽</li>
                <li>Ремонт после моли: от 30 000 ₽</li>
                <li>Полная потеря шубы из-за неправильного хранения: 300 000 ₽</li>
              </ul>
              <p>
                Вложив 7 500 ₽ в профессиональное хранение, вы защищаете актив стоимостью 300 000 ₽.
                Это не расход — это страховка. Причём страховка, которая окупается уже в первый сезон.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Скидки на длительное хранение</h2>
              <p>
                Большинство компаний предлагают скидки при оплате за длительный срок. В Mary Belle действуют
                следующие условия:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Сезонное хранение (6 мес)</strong> — базовая цена, скидка 10% от посуточного тарифа</li>
                <li><strong>Годовое хранение (12 мес)</strong> — скидка 20% от посуточного тарифа</li>
                <li><strong>Второе и последующие изделия</strong> — скидка 15% на каждое</li>
              </ul>
              <p>
                Если у вас несколько меховых изделий (шуба, жилетка, шапка), выгоднее хранить их
                все вместе — скидка на второе и третье изделие существенно снижает общую сумму.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Как сэкономить: химчистка + хранение</h2>
              <p>
                Перед хранением шубу рекомендуется почистить — за зиму на мехе скапливаются пыль,
                кожный жир, следы парфюма и городской грязи. Всё это ускоряет деградацию меха в тёплых условиях.
              </p>
              <p>
                В Mary Belle химчистка перед хранением — со скидкой 15%. Это удобно: вы сдаёте шубу один раз,
                и мы делаем всё сами — чистим, обрабатываем антимолью, размещаем в холодильнике.
                Не нужно ездить в два места и координировать сроки.
              </p>
              <p>
                Стоимость комплекса «химчистка + хранение 6 месяцев» для норковой шубы длиной до 110 см
                начинается от 12 000 ₽. По отдельности те же услуги обойдутся на 3 000–4 000 ₽ дороже.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">На что обращать внимание при выборе</h2>
              <p>
                Не все компании, предлагающие «хранение шуб», имеют настоящий меховой холодильник.
                Некоторые хранят изделия в обычных прохладных помещениях без контроля влажности.
                Вот на что стоит обратить внимание:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Есть ли у компании собственный холодильник? Попросите показать — добросовестные компании устраивают экскурсии.</li>
                <li>Какая точная температура и влажность? «Прохладное помещение» — это не +4°C.</li>
                <li>Есть ли страховка? И на какую сумму? Страховка на 100 000 ₽ не покроет шубу за 500 000 ₽.</li>
                <li>Что включено в цену? Курьер, осмотр, антимольная обработка — или всё за доплату?</li>
                <li>Как быстро вернут шубу? В Mary Belle — в течение 24 часов по звонку.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-bg-warm border border-border-light text-center">
              <p className="font-serif text-xl text-black mb-3">Забронируйте место в холодильнике</p>
              <p className="text-text-muted mb-6">
                Прозрачные цены, бесплатный курьер, страховка на полную стоимость. От 80 ₽/день.
              </p>
              <Link
                href="/uslugi/mehovoj-holodilnik"
                className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer mb-4"
              >
                Подробнее
              </Link>
              <br />
              <a
                href="tel:+74952254444"
                className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
              >
                Позвонить
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
