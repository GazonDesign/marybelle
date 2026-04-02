import { getAllProducts } from '@/lib/get-products'
import MagazinClient from './MagazinClient'

export const metadata = {
  title: 'Магазин — Шубы, пальто и кожаные изделия | Mary Belle',
  description: 'Магазин меховых изделий Mary Belle. Шубы, пальто, кожаные куртки собственного производства. Примерка в ателье у м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin',
  },
  openGraph: {
    title: 'Магазин — Шубы, пальто и кожаные изделия | Mary Belle',
    description: 'Магазин меховых изделий Mary Belle. Шубы, пальто, кожаные куртки собственного производства.',
    url: 'https://mary-belle.ru/magazin',
    images: [{ url: '/images/hero-bg.jpg' }],
  },
}

export default async function MagazinPage() {
  const products = await getAllProducts()
  return <MagazinClient products={products} />
}
