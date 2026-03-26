import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import VojkovskayaFAQ from './VojkovskayaFAQ'

export const metadata = {
  title: 'Ремонт шуб у метро Войковская — Меховое ателье Mary Belle',
  description: 'Ремонт шуб у метро Войковская — меховое ателье Mary Belle в 5 минутах от станции. Ремонт шуб Войковская: реставрация, перешив, химчистка. 1-й Новоподмосковный пер., д. 2/1.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-shub-vojkovskaya',
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
        { label: 'Ремонт шубы', price: 'от 2 000 ₽' },
        { label: 'Перешив / перекрой', price: 'от 15 000 ₽' },
        { label: 'Химчистка шубы', price: 'от 5 000 ₽' },
        { label: 'Окрашивание', price: 'от 8 000 ₽' },
        { label: 'Хранение (сезон)', price: 'от 5 000 ₽' },
      ]}
      gallery={[
        { src: '/images/gov-import/proizvodstvo/img_7184-kopiya.jpg', alt: 'Мастерская мехового ателье Mary Belle' },
        { src: '/images/gov-import/proizvodstvo/img_7185-kopiya-1.jpg', alt: 'Рабочее место мастера по меху' },
        { src: '/images/gov-import/proizvodstvo/img_7195-kopiya.jpg', alt: 'Процесс работы в ателье' },
        { src: '/images/gov-import/proizvodstvo/s-ceh-s.jpg', alt: 'Цех мехового ателье' },
        { src: '/images/gov-import/proizvodstvo/ss-ceh-sh-1.jpg', alt: 'Производство — ателье Mary Belle у м. Войковская' },
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
