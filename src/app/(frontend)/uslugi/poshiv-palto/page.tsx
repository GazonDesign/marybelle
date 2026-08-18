import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import PoshivPaltoFAQ from './PoshivPaltoFAQ'

export const metadata = {
  title: 'Пошив пальто на заказ в Москве — Кашемир, шерсть',
  description: 'Индивидуальный пошив пальто в Москве: классика, оверсайз, тренч, кейп из итальянского кашемира и английской шерсти. Меховая отделка, идеальная посадка, гарантия 2 года. Меховое ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-palto',
  },
  openGraph: {
    title: 'Пошив пальто на заказ в Москве — Кашемир, шерсть',
    description: 'Индивидуальный пошив пальто в Москве: классика, оверсайз, тренч, кейп из итальянского кашемира и английской шерсти. Меховая отделка, идеальная посадка, гарантия 2 года. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/poshiv-palto',
    images: [{ url: '/images/og/poshiv-palto.jpg', width: 1200, height: 630 }],
  },
}

export default function PoshivPaltoPage() {
  return (
    <ServicePageTemplate
      title="Индивидуальный пошив пальто на заказ — Москва"
      subtitle="Пошив пальто по индивидуальным меркам"
      description="Индивидуальный пошив пальто в Москве — классика, оверсайз, тренч и кейп из итальянского кашемира и английской шерсти. Жительницы Москвы выбирают пошив пальто на заказ в ателье Mary Belle: безупречная посадка по фигуре, меховая отделка по желанию и личный мастер, который ведёт заказ от эскиза до примерки. Семейная фабрика с 1870 года, гарантия 2 года."
      heroImage="/images/product-palto.webp"
      features={[
        { title: 'Консультация и мерки', description: 'Снятие мерок и подбор фасона с персональным мастером — бесплатно.' },
        { title: 'Кашемир и шерсть', description: 'Итальянский кашемир, английская шерсть, премиальная подкладка и фурнитура.' },
        { title: 'Индивидуальные лекала', description: 'Крой строго по вашей фигуре — пальто садится идеально.' },
        { title: 'Меховая отделка', description: 'Воротник, манжеты, подстёжка из натурального меха по желанию.' },
        { title: 'Любой фасон', description: 'Классическое, оверсайз, тренч, кейп, двубортное — воплотим вашу идею.' },
        { title: 'Гарантия 2 года', description: 'На пошив и фурнитуру — мы отвечаем за результат.' },
      ]}
      prices={[
        { label: 'Пошив пальто', price: '~~от 128 500 ₽~~ от 90 000 ₽' },
        { label: 'Пошив пальто из шерсти', price: '~~от 93 000 ₽~~ от 65 000 ₽' },
        { label: 'Пошив пальто из кашемира', price: '~~от 128 500 ₽~~ от 90 000 ₽' },
        { label: 'Пошив пальто с меховой отделкой', price: '~~от 128 500 ₽~~ от 90 000 ₽' },
        { label: 'Пошив тренча / кейпа', price: '~~от 78 500 ₽~~ от 55 000 ₽' },
        { label: 'Перешив и реконструкция пальто', price: '~~от 35 500 ₽~~ от 25 000 ₽' },
      ]}
      gallery={[
        { src: '/images/palto-gallery/palto-fs-01.jpg', alt: 'Пошив пальто на заказ — модель ателье Mary Belle' },
        { src: '/images/palto-gallery/palto-fs-02.jpg', alt: 'Кашемировое пальто на заказ — индивидуальный пошив' },
        { src: '/images/palto-gallery/palto-fs-03.jpg', alt: 'Пальто по индивидуальным меркам — посадка по фигуре' },
        { src: '/images/palto-gallery/palto-fs-04.jpg', alt: 'Пальто на заказ — фотосет ателье Mary Belle' },
        { src: '/images/palto-gallery/palto-fs-05.jpg', alt: 'Шерстяное пальто — авторский крой' },
        { src: '/images/palto-gallery/palto-fs-06.jpg', alt: 'Классическое пальто на заказ — Mary Belle' },
        { src: '/images/palto-gallery/1-e1746367363465-794x1024.jpg', alt: 'Пальто с меховой отделкой — пошив на заказ' },
        { src: '/images/palto-gallery/photo_2023-02-20_17-16-31-767x1024.jpg', alt: 'Шерстяное пальто — авторский крой' },
        { src: '/images/palto-gallery/shal-2-767x1024.jpg', alt: 'Пальто-кейп на заказ — модель Mary Belle' },
      ]}
      ctaText="Приходите на бесплатную консультацию — обсудим модель, подберём мех, снимем мерки и рассчитаем точную стоимость. Мы в 5 минутах от м. Войковская."
      relatedServices={[
        { title: 'Ремонт пальто', href: '/uslugi/remont-palto' },
        { title: 'Индивидуальный пошив шуб', href: '/uslugi/poshiv-shub' },
        { title: 'Перекрой и перешив', href: '/uslugi/perekroj' },
      ]}
    >
      <PoshivPaltoFAQ />
    </ServicePageTemplate>
  )
}
