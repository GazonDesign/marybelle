import type { Metadata } from 'next'
import { products } from '@/data/products'
import ProductPageClient from './ProductPageClient'

const categoryLabels: Record<string, string> = {
  shuby: 'Шубы',
  palto: 'Пальто',
  kozha: 'Кожаные изделия',
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: 'Товар не найден',
    }
  }

  const category = categoryLabels[product.category] || product.category

  return {
    title: `${product.title} — ${category} | Купить в Москве`,
    description: `${product.description} ${product.price}. Московская меховая фабрика Mary Belle — с 1870 года. Примерка, подгонка по фигуре. м. Войковская.`,
    openGraph: {
      title: `${product.title} — ${category} | Mary Belle`,
      description: product.description,
      images: [{ url: product.images[0], width: 600, height: 800 }],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  const jsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.images.map((img) => `https://mary-belle.ru${img}`),
        brand: {
          '@type': 'Brand',
          name: 'Mary Belle',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Mary Belle — Меховое ателье',
          foundingDate: '1870',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1-й Новоподмосковный пер., д. 2/1',
            addressLocality: 'Москва',
            addressCountry: 'RU',
          },
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'RUB',
          price: product.price === 'Цена по запросу' ? undefined : product.price.replace(/[^\d]/g, ''),
          seller: {
            '@type': 'Organization',
            name: 'Mary Belle',
          },
        },
        category: categoryLabels[product.category] || product.category,
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductPageClient slug={slug} />
    </>
  )
}
