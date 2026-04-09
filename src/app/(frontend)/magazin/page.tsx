import { getAllProducts } from '@/lib/get-products'
import MagazinClient from './MagazinClient'

export const metadata = {
  title: 'Шубы, пальто и кожаные изделия — Купить в Москве',
  description: 'Магазин меховых изделий Mary Belle. Шубы, пальто, кожаные куртки собственного производства. Примерка в ателье у м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin',
  },
  openGraph: {
    title: 'Шубы, пальто и кожаные изделия — Купить в Москве',
    description: 'Магазин меховых изделий Mary Belle. Шубы, пальто, кожаные куртки собственного производства.',
    url: 'https://mary-belle.ru/magazin',
    images: [{ url: '/images/hero-bg.jpg' }],
  },
}

export default async function MagazinPage() {
  const products = await getAllProducts()

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Шубы, пальто и кожаные изделия Mary Belle',
    numberOfItems: products.length,
    itemListElement: products.slice(0, 30).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://mary-belle.ru/magazin/product/${p.slug}`,
      name: p.title,
      image: p.images?.[0] ? `https://mary-belle.ru${p.images[0]}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <MagazinClient products={products} />
    </>
  )
}
