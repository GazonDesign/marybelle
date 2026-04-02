import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import VideoGallery from './VideoGallery'

export const metadata = {
  title: 'Наша мастерская — Видео работ мехового ателье Mary Belle',
  description: 'Видео из мастерской мехового ателье Mary Belle: перекрой шуб, реставрация меха, создание изделий на заказ. Смотрите процесс работы наших мастеров.',
  alternates: {
    canonical: 'https://mary-belle.ru/nasha-masterskaya',
  },
  openGraph: {
    title: 'Наша мастерская — Видео работ Mary Belle',
    description: 'Видео из мастерской мехового ателье Mary Belle: перекрой шуб, реставрация меха, создание изделий на заказ.',
    url: 'https://mary-belle.ru/nasha-masterskaya',
    images: [{ url: '/images/gov-import/proizvodstvo/s-ceh-s.jpg' }],
  },
}

const videos = [
  { slug: 'kostium-iz-karakulchi', title: 'Костюм из каракульчи', category: 'poshiv' },
  { slug: 'anglijskij-vorotnik-sobol', title: 'Английский воротник и манжеты из соболя', category: 'poshiv' },
  { slug: 'v-edinstvennom-ekzemplare', title: 'В единственном экземпляре', category: 'poshiv' },
  { slug: 'mechta-iz-karakulchi', title: 'Мечта из каракульчи', category: 'poshiv' },
  { slug: 'sozdanie-shuby-anglijskij-vorotnik', title: 'Создание шубы с английским воротником', category: 'poshiv' },
  { slug: 'trendovye-shubki-2025', title: 'Трендовые шубки из натурального меха 2025', category: 'poshiv' },
  { slug: 'shubka-s-rysyu', title: 'Шубка с рысью', category: 'poshiv' },
  { slug: 'shubka-s-rysyu-itog', title: 'Шубка с отделкой из рыси — итоговый результат', category: 'poshiv' },
  { slug: 'shubka-lavanda-nachalnyj-etap', title: 'Шубка цвета лаванды — начальный этап', category: 'poshiv' },
  { slug: 'shubka-berezka-itog', title: 'Шубка «Берёзка» — итоговый результат', category: 'perekroj' },
  { slug: 'perekroj-shubki-berezka-ch2', title: 'Перекрой шубки «Берёзка» — часть 2', category: 'perekroj' },
  { slug: 'peredelka-shuby-iz-norki-ch1', title: 'Переделка шубы из норки — часть 1', category: 'perekroj' },
  { slug: 'perekroj-shuby-iz-kozlika', title: 'Перекрой шубы из козлика', category: 'perekroj' },
  { slug: 'perekroj-i-restavraciya-ch2', title: 'Перекрой и реставрация старой шубки — часть 2', category: 'perekroj' },
  { slug: 'preobrazhenie-shuby-karakul', title: 'Преображение шубы из каракуля', category: 'perekroj' },
  { slug: 'rezultat-perekroya', title: 'Результат перекроя', category: 'perekroj' },
  { slug: 'pervyj-etap-modernizacii', title: 'Первый этап модернизации шубки', category: 'perekroj' },
  { slug: 'ne-vybrasyvajte-staruyu-shubu', title: 'Не выбрасывайте старую шубу!', category: 'perekroj' },
  { slug: 'iz-staroj-shuby-v-hudi-ch2', title: 'Из старой шубы в меховое худи — часть 2', category: 'perekroj' },
  { slug: 'shyom-iz-staroj-shuby-hudi', title: 'Шьём из старой шубы меховое худи', category: 'perekroj' },
  { slug: 'ubrali-vsyo-lishnee', title: 'Убрали всё лишнее', category: 'perekroj' },
  { slug: 'uvelichenie-shuby-sobol-ch2', title: 'Увеличение шубы из соболя — часть 2', category: 'perekroj' },
  { slug: 'finalnyj-rezultat-peredelki', title: 'Финальный результат переделки', category: 'perekroj' },
  { slug: 'chto-delat-esli-shubka-ustarela', title: 'Что делать, если ваша шубка устарела?', category: 'perekroj' },
  { slug: 'preimushchestvo-perekroya', title: 'В чём преимущество перекроя?', category: 'perekroj' },
  { slug: 'glavnoe-preimushchestvo-perekroya', title: 'Главное преимущество перекроя', category: 'perekroj' },
  { slug: 'spalili-shubu', title: 'Спалили шубу', category: 'remont' },
  { slug: 'chto-s-etim-delat', title: 'Что с этим делать?', category: 'remont' },
  { slug: 'chto-delat-esli-isportila-shubu', title: 'Что делать, если испортила шубу?', category: 'remont' },
  { slug: 'slozhnost-raboty-s-mehom', title: 'Сложность работы с мехом', category: 'remont' },
  { slug: 'shuba-v-holodilnik', title: 'Запихнули шубу в холодильник!', category: 'hranenie' },
  { slug: 'vazhna-li-furnitura', title: 'Важна ли фурнитура в изделии?', category: 'aksessuary' },
  { slug: 'tyoplye-aksessuary', title: 'Тёплые аксессуары', category: 'aksessuary' },
  { slug: 'eksperimenty-s-odezhdoj', title: 'А вы любите экспериментировать с одеждой?', category: 'aksessuary' },
  { slug: 'varianty-dlya-tyoploj-zimy', title: 'Варианты для тёплой зимы', category: 'aksessuary' },
  { slug: 'vechnaya-klassika', title: 'Вечная классика', category: 'aksessuary' },
  { slug: 'mnogoslojnost-zimoj', title: 'Многослойность зимой', category: 'aksessuary' },
  { slug: 'palto-pod-pogodu', title: 'Пальто под погоду', category: 'aksessuary' },
  { slug: 'chto-nosit-etoj-vesnoj', title: 'Что носить этой весной?', category: 'aksessuary' },
  { slug: 'otlichie-mehovogo-atelie', title: 'Отличие мехового ателье от обычного', category: 'atelie' },
  { slug: 'v-poiskah-togo-samogo-izdeliya', title: 'В поисках того самого изделия', category: 'atelie' },
  { slug: 'trendy-mehovyh-izdelij-ch2', title: 'Тренды меховых изделий — часть 2', category: 'atelie' },
  { slug: 'hit-sezona', title: 'Хит сезона', category: 'atelie' },
  { slug: 'eto-hit', title: 'Это хит', category: 'atelie' },
  { slug: 's-nastupayushchim-mary-belle', title: 'С наступающим от Mary Belle', category: 'atelie' },
]

const VIDEO_BASE = 'https://gov.mary-belle.ru/videos'

const categories: Record<string, string> = {
  all: 'Все',
  poshiv: 'Пошив',
  perekroj: 'Перекрой',
  remont: 'Ремонт',
  hranenie: 'Хранение',
  aksessuary: 'Стиль и мода',
  atelie: 'Ателье',
}

export default function NashaMasterskayaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-white/50">
              Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Наша мастерская
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Заглядывайте за кулисы нашего ателье. Каждое видео — это история
              о том, как старое изделие обретает новую жизнь в руках мастеров Mary Belle.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Наша мастерская</span>
          </div>
        </div>

        {/* Video Gallery */}
        <VideoGallery
          videos={videos}
          categories={categories}
          videoBase={VIDEO_BASE}
        />

        {/* CTA */}
        <section className="py-20 md:py-28 bg-bg-dark text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Хотите так же?</h2>
            <p className="text-white/70 mb-10 text-lg">
              Привезите изделие в наше ателье — мастер осмотрит и предложит лучшее решение.
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
                className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
              >
                Как добраться
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
