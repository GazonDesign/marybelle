import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import { getPages, getPageBySlug } from '@/lib/strapi'
import { renderSections } from '@/lib/sections-renderer'

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) return {}

  const STRAPI_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337'
  const ogImg = page.ogImage?.url
    ? page.ogImage.url.startsWith('/uploads/')
      ? `${STRAPI_URL}${page.ogImage.url}`
      : page.ogImage.url
    : undefined

  return {
    title: page.seoTitle || `${page.title} — Mary Belle`,
    description: page.seoDescription || '',
    alternates: {
      canonical: `https://mary-belle.ru/p/${slug}`,
    },
    openGraph: {
      title: page.seoTitle || page.title,
      description: page.seoDescription || '',
      url: `https://mary-belle.ru/p/${slug}`,
      ...(ogImg && { images: [{ url: ogImg }] }),
    },
  }
}

export async function generateStaticParams() {
  const pages = await getPages()
  return pages.map((p) => ({ slug: p.slug }))
}

export default async function DynamicPage({ params }: { params: Params }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  return (
    <>
      <Header />
      <main>
        <div className="h-[70px]" />
        {renderSections(page.sections)}
      </main>
      <Footer />
    </>
  )
}
