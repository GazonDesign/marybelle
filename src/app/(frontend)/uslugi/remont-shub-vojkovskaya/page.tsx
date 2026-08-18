import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import VojkovskayaFAQ from './VojkovskayaFAQ'

export const metadata = {
  title: 'Ремонт шуб у метро Войковская — Ателье',
  description: 'Ремонт шуб у метро Войковская — меховое ателье Mary Belle в 5 минутах от станции. Ремонт шуб Войковская: реставрация, перешив, химчистка. 1-й Новоподмосковный пер., д. 2/1.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-shub-vojkovskaya',
  },
  openGraph: {
    title: 'Ремонт шуб у метро Войковская — Ателье',
    description: 'Ремонт шуб у метро Войковская — меховое ателье Mary Belle в 5 минутах от станции. Реставрация, перешив, химчистка.',
    url: 'https://mary-belle.ru/uslugi/remont-shub-vojkovskaya',
    images: [{ url: '/images/og/remont-shub.jpg', width: 1200, height: 630 }],
  },
}

export default function RemontShubVojkovskayaPage() {
  return (
    <ServicePageTemplate
      title="Ремонт шуб у метро Войковская — Mary Belle"
      subtitle="Меховое ателье в 5 минутах от метро"
      description="Меховое ателье Mary Belle расположено в 5 минутах пешком от м. Войковская (1-й Новоподмосковный пер., д. 2/1). Ремонт шуб Войковская — полный спектр услуг: реставрация, перешив, окрашивание, химчистка, хранение в меховом холодильнике. Работаем с 1870 года."
      heroImage="/images/hero-bg.jpg"
      features={[
        { title: '5 минут от метро', description: 'Пешком от м. Войковская — удобное расположение в центре Москвы.' },
        { title: 'Все услуги на месте', description: 'Ремонт, пошив, окрашивание, химчистка — всё в одном ателье.' },
        { title: 'Бесплатная диагностика', description: 'Мастер осмотрит изделие и назовёт точную стоимость на месте.' },
        { title: 'Удобный график', description: 'Работаем ежедневно — подберём удобное время для визита.' },
        { title: 'Парковка', description: 'Бесплатная парковка рядом с ателье.' },
        { title: 'С 1870 года', description: 'Более 150 лет опыта работы с мехом и кожей.' },
      ]}
      prices={[
        { label: 'Ремонт шубы', price: '~~от 2 900 ₽~~ от 2 000 ₽' },
        { label: 'Перешив / перекрой', price: '~~от 21 500 ₽~~ от 15 000 ₽' },
        { label: 'Химчистка шубы', price: '~~от 7 000 ₽~~ от 5 000 ₽' },
        { label: 'Окрашивание', price: '~~от 11 500 ₽~~ от 8 000 ₽' },
        { label: 'Хранение (сезон)', price: '~~от 6 500 ₽~~ от 5 000 ₽' },
      ]}
      gallery={[
        { src: '/images/before-after/vojkovskaya-collage.jpg', alt: 'Ремонт шуб у м. Войковская — коллаж работ до и после' },
      ]}
      relatedServices={[
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
        { title: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub' },
        { title: 'Меховой холодильник', href: '/uslugi/mehovoj-holodilnik' },
      ]}
    >
      <VojkovskayaFAQ />
    </ServicePageTemplate>
  )
}
