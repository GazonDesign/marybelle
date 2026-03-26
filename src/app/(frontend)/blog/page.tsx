import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/strapi'

export const metadata = {
  title: 'Блог о мехе и уходе за шубами — Mary Belle | Москва',
  description: 'Полезные статьи о мехе, уходе за шубами, выборе меха и хранении меховых изделий. Блог мехового ателье Mary Belle.',
  alternates: {
    canonical: 'https://mary-belle.ru/blog',
  },
}

const fallbackArticles = [
  {
    slug: 'kakoj-meh-samyj-teplyj',
    title: 'Какой мех самый тёплый?',
    excerpt: 'Разбираемся, какие виды меха лучше всего согревают в российские морозы. Рейтинг от песца до норки.',
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
        <section className="bg-bg-dark py-24 md:py-32 text-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">Блог</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
                  <span>{article.readTime}</span>
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
