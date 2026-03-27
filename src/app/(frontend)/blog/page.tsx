import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { getBlogPosts, formatDate } from '@/lib/strapi'

export const metadata = {
  title: 'Блог о мехе и уходе за шубами — Mary Belle | Москва',
  description: 'Полезные статьи о мехе, уходе за шубами, выборе меха и хранении меховых изделий. Блог мехового ателье Mary Belle.',
  alternates: {
    canonical: 'https://mary-belle.ru/blog',
  },
}

const fallbackArticles = [
  {
    slug: 'meh-v-sovremennyh-kollekciyah',
    title: 'Мех в современных коллекциях: как масс-маркет возвращает шубу в повседневность',
    excerpt: 'Befree, Zarina и Александр Рогов — как крупные бренды включают мех в повседневную моду и что это значит для вашего гардероба.',
    date: '5 марта 2026',
    readTime: '6 мин',
  },
  {
    slug: 'palto-s-membrannoj-tehnologiej',
    title: 'Пальто с мембранной технологией: когда красота не боится непогоды',
    excerpt: 'Как бренд Pompa совмещает итальянский кашемир с мембраной RaftPro — и почему это решение пришло именно из России.',
    date: '9 января 2026',
    readTime: '5 мин',
  },
  {
    slug: 'novye-premialnye-brendy-meha',
    title: 'Новые премиальные бренды меха: что происходит в России прямо сейчас',
    excerpt: 'Молодые российские бренды вроде Sencellerie предлагают собственное видение роскоши — от скандинавского сырья до кожаных курток.',
    date: '21 ноября 2025',
    readTime: '5 мин',
  },
  {
    slug: 'ekomeh-v-vysokoj-mode',
    title: 'Экомех в высокой моде: как Balenciaga изменила правила игры',
    excerpt: 'Когда один из самых влиятельных домов моды полностью отказывается от натурального меха и создаёт кутюрные шубы из экомеха — это новая реальность.',
    date: '3 октября 2025',
    readTime: '7 мин',
  },
  {
    slug: 'rossijskie-mehovye-fabriki',
    title: 'Российские меховые фабрики: как рождаются шубы мирового уровня',
    excerpt: 'Как отечественные производства Simakhov и ЗИМОС создают шубы, опираясь на собственные традиции и понимание российского климата.',
    date: '14 августа 2025',
    readTime: '6 мин',
  },
  {
    slug: 'kakoj-meh-samyj-teplyj',
    title: 'Какой мех самый тёплый?',
    excerpt: 'Разбираемся, какие виды меха лучше всего согревают в российские морозы. Рейтинг от песца до норки.',
    date: '15 декабря 2024',
    readTime: '5 мин',
  },
]

export default async function BlogPage() {
  const strapiPosts = await getBlogPosts()
  const articles = strapiPosts.length > 0
    ? strapiPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt || '',
        date: formatDate(p.publishedDate || p.publishedAt),
        readTime: p.readTime || '',
      }))
    : fallbackArticles

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Блог о мехе и уходе за шубами",
          "description": "Полезные статьи о мехе, уходе за шубами, выборе меха и хранении меховых изделий. Блог мехового ателье Mary Belle.",
          "url": "https://mary-belle.ru/blog",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://mary-belle.ru/#website"
          }
        }) }}
      />
      <Header />
      <main>
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 text-center">
            <span className="inline-block mb-3 text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/60">
              Mary Belle
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Блог
            </h1>
            <p className="mt-4 text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Полезные статьи о мехе, уходе за изделиями и выборе шубы.
            </p>
          </div>
        </section>

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Блог</span>
          </div>
        </div>

        <section className="py-20 md:py-28">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block p-8 border border-border-light hover:border-brand transition-colors mb-6"
              >
                <div className="flex items-center gap-4 text-text-muted text-sm mb-3">
                  {article.date && <span>{article.date}</span>}
                  {article.date && article.readTime && <span className="text-border-light">|</span>}
                  {article.readTime && <span>Время чтения: {article.readTime}</span>}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-black group-hover:text-brand transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-text-muted leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-brand text-sm mt-4 group-hover:gap-4 transition-all duration-300">
                  Читать <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
