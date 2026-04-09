import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Холодильник vs шкаф: сравнение хранения шуб',
  description: 'Меховой холодильник или шкаф — где хранить шубу летом? Сравнение температуры, влажности, защиты от моли. Мифы о кондиционере, чехлах и антимоли.',
  alternates: {
    canonical: 'https://mary-belle.ru/blog/holodilnik-vs-shkaf',
  },
  openGraph: {
    title: 'Холодильник vs шкаф: сравнение хранения шуб',
    description: 'Меховой холодильник или шкаф — где хранить шубу летом? Сравнение температуры, влажности, защиты от моли. Мифы о кондиционере, чехлах и антимоли.',
    url: 'https://mary-belle.ru/blog/holodilnik-vs-shkaf',
    images: [{ url: '/images/og-blog.jpg' }],
  },
}

export default function HolodilnikVsShkaf() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "image": "https://mary-belle.ru/images/og-blog.jpg",
          "headline": "Меховой холодильник vs обычный шкаф: сравнение условий хранения",
          "description": "Меховой холодильник или шкаф — где хранить шубу летом? Сравнение температуры, влажности, защиты от моли. Мифы о кондиционере, чехлах и антимоли.",
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
            "@id": "https://mary-belle.ru/blog/holodilnik-vs-shkaf"
          },
          "datePublished": "2026-02-20",
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
            <span className="text-text-primary">Холодильник vs шкаф</span>
          </div>
        </div>

        <article className="py-20 md:py-28">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-text-muted text-sm mb-6">20 февраля 2026 &middot; 6 мин чтения</div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-10 leading-tight">
              Меховой холодильник vs обычный шкаф: сравнение условий хранения
            </h1>

            <div className="prose-article space-y-6 text-text-body leading-relaxed text-lg">
              <p>
                «Зачем платить за хранение, если шуба может висеть в шкафу?» — самый частый вопрос,
                который мы слышим. Ответ простой: шкаф и меховой холодильник — это два принципиально
                разных мира для вашей шубы. В одном мех медленно умирает, в другом — сохраняется
                на десятилетия. Давайте сравним конкретные параметры.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Таблица сравнения условий</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b-2 border-border-light">
                      <th className="text-left py-3 px-4 font-serif text-black">Параметр</th>
                      <th className="text-left py-3 px-4 font-serif text-black">Шкаф дома</th>
                      <th className="text-left py-3 px-4 font-serif text-black">Холодильник</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Температура</td>
                      <td className="py-3 px-4">+22…+30°C</td>
                      <td className="py-3 px-4">+2…+4°C</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Влажность</td>
                      <td className="py-3 px-4">20–80% (скачет)</td>
                      <td className="py-3 px-4">50–55% (стабильно)</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Свет</td>
                      <td className="py-3 px-4">Рассеянный через щели</td>
                      <td className="py-3 px-4">Полная темнота</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Моль</td>
                      <td className="py-3 px-4">Активна, размножается</td>
                      <td className="py-3 px-4">Полностью неактивна</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Запахи</td>
                      <td className="py-3 px-4">Впитывает из квартиры</td>
                      <td className="py-3 px-4">Изолированная среда</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Пыль</td>
                      <td className="py-3 px-4">Оседает на мехе</td>
                      <td className="py-3 px-4">Отсутствует</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-3 px-4 font-medium">Перепады температуры</td>
                      <td className="py-3 px-4">Ежедневные (день/ночь)</td>
                      <td className="py-3 px-4">Отсутствуют (±0,5°C)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Что происходит с мехом за одно лето в шкафу</h2>
              <p>
                Мех — это живой материал. Каждая ворсинка состоит из кератина, покрытого тонким слоем
                натуральных жиров. Эти жиры придают меху блеск, мягкость и водоотталкивающие свойства.
                При температуре выше +15°C жиры начинают окисляться — мех тускнеет и становится жёстким.
              </p>
              <p>
                За одно лето в шкафу при +25°C шуба теряет до 15% блеска. Это не абстрактная цифра —
                это разница, которую видно при сравнении «до» и «после». Мех становится менее шелковистым
                на ощупь, цвет приобретает желтоватый или рыжеватый оттенок (особенно у белых и светлых шуб).
              </p>
              <p>
                Мездра (кожевая основа) теряет влагу при низкой влажности домашнего воздуха. Пересохшая
                мездра трескается по швам, шуба «садится» и теряет форму. Восстановить эластичность
                пересохшей мездры невозможно — это необратимый процесс.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Мифы о домашнем хранении</h2>

              <h3 className="font-serif text-xl text-black mt-8 mb-3">Миф 1: кондиционер заменит холодильник</h3>
              <p>
                Кондиционер охлаждает воздух до +18…+22°C — это в 4–5 раз теплее, чем нужно для меха.
                При такой температуре моль продолжает размножаться, жиры окисляются (медленнее, но всё равно).
                Кроме того, кондиционер сушит воздух до 15–20% влажности — это катастрофа для мездры.
              </p>
              <p>
                Ещё один нюанс: кондиционер работает циклами. Он включается, охлаждает воздух, выключается.
                Температура постоянно скачет на 3–5°C. Мех не терпит перепадов — при каждом цикле
                нагрев-охлаждение волокна мездры расширяются и сжимаются, что ускоряет износ.
              </p>

              <h3 className="font-serif text-xl text-black mt-8 mb-3">Миф 2: чехол защитит от всего</h3>
              <p>
                Тканевый чехол защищает от пыли — и только. Он не контролирует температуру, влажность,
                не останавливает моль. Полиэтиленовый чехол ещё хуже: он создаёт парниковый эффект,
                мездра отсыревает, появляется плесень и затхлый запах.
              </p>
              <p>
                Правильный чехол для меха — из натуральной хлопковой ткани, свободного кроя, без плотного
                прилегания. Но даже идеальный чехол не решает главную проблему: температуру. В чехле при +25°C
                шубе так же плохо, как и без него.
              </p>

              <h3 className="font-serif text-xl text-black mt-8 mb-3">Миф 3: антимольные средства защищают мех</h3>
              <p>
                Все антимольные средства (таблетки, пластины, саше, спреи) работают по одному принципу:
                отпугивают взрослых бабочек запахом. На личинок моли — основных вредителей — они не действуют.
                Личинки не имеют обоняния в том виде, в каком его имеют бабочки. Они ориентируются
                по вкусу и температуре.
              </p>
              <p>
                Более того, если моль уже отложила яйца на шубе (а это может произойти за одну ночь
                при открытом окне), никакие антимольные средства не помешают личинкам вылупиться
                и начать питаться мехом. Единственное, что остановит их — холод.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Холодильник: стабильные +4°C и полный контроль</h2>
              <p>
                Профессиональный меховой холодильник — это не бытовой холодильник и не кладовка
                с кондиционером. Это специализированное помещение с двухконтурной системой
                климат-контроля, которая поддерживает:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Температуру +2…+4°C</strong> — с точностью до 0,5°C, без перепадов, 24/7</li>
                <li><strong>Влажность 50–55%</strong> — с точностью до 2%, что идеально для мездры</li>
                <li><strong>Полную темноту</strong> — свет включается только при обслуживании</li>
                <li><strong>Чистый воздух</strong> — система фильтрации удаляет пыль, запахи, споры грибков</li>
                <li><strong>Антимольную обработку</strong> — озонирование, которое уничтожает моль на всех стадиях</li>
              </ul>
              <p>
                В таких условиях мех не стареет. Коллагеновые волокна мездры сохраняют эластичность,
                жиры на поверхности ворса не окисляются, моль полностью неактивна.
                Шуба, которая хранится в профессиональном холодильнике каждое лето, через 15–20 лет
                выглядит так же, как новая.
              </p>

              <h2 className="font-serif text-2xl text-black mt-12 mb-4">Итог: простая математика</h2>
              <p>
                Хранение в холодильнике Mary Belle — от 80 ₽ в день. За сезон (6 месяцев) — от 7 500 ₽.
                За эти деньги вы получаете полный контроль над всеми параметрами среды, антимольную
                обработку, страховку, курьера и возврат шубы в течение 24 часов.
              </p>
              <p>
                Хранение в шкафу — бесплатно. Но потеря 15% стоимости шубы за одно лето — это 30 000–75 000 ₽
                (при стоимости шубы 200 000–500 000 ₽). А если добавить риск моли — счёт может пойти
                на сотни тысяч.
              </p>
              <p>
                Бесплатное хранение обходится дороже. Это не маркетинговый ход — это факт.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-bg-warm border border-border-light text-center">
              <p className="font-serif text-xl text-black mb-3">Забронируйте место в холодильнике</p>
              <p className="text-text-muted mb-6">
                Стабильные +4°C, 55% влажности, антимольная обработка. Бесплатный курьер по Москве.
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
