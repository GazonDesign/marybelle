import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogPosts, formatDate } from '@/lib/strapi'
import { renderBlocks } from '@/lib/blocks-renderer'

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Mary Belle`,
    description: post.excerpt,
    alternates: {
      canonical: `https://mary-belle.ru/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mary-belle.ru/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const author = post.author || 'Иван Обухов'
  const dateStr = formatDate(post.publishedDate || post.publishedAt)
  const readTimeStr = post.readTime ? `Время чтения: ${post.readTime}` : ''
  const meta = [dateStr, author, readTimeStr].filter(Boolean).join(' \u00B7 ')

  // content = Blocks JSON (визуальный редактор Strapi)
  // contentHtml = legacy HTML (fallback для старых статей)
  const blocks = post.content
  const legacyHtml = post.contentHtml || ''

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Person",
            "name": author,
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mary Belle",
            "@id": "https://mary-belle.ru/#organization",
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mary-belle.ru/blog/${post.slug}`,
          },
          "datePublished": post.publishedDate || post.publishedAt,
          "dateModified": post.publishedDate || post.publishedAt,
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
            <span className="text-text-primary">{post.title}</span>
          </div>
        </div>

        <article className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-text-muted text-sm mb-6">{meta}</div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-10 leading-tight">
              {post.title}
            </h1>

            {blocks && Array.isArray(blocks) && blocks.length > 0 ? (
              <div className="prose-article space-y-6 text-text-body leading-relaxed text-lg">
                {renderBlocks(blocks)}
              </div>
            ) : legacyHtml ? (
              <div
                className="prose-article space-y-6 text-text-body leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: legacyHtml }}
              />
            ) : null}

            <div className="mt-16 p-8 bg-bg-warm border border-border-light text-center">
              <p className="font-serif text-xl text-black mb-3">Нужна консультация?</p>
              <p className="text-text-muted mb-6">
                Наши мастера помогут — бесплатно.
              </p>
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
