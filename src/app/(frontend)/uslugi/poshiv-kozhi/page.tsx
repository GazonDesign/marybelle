import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import ServiceLeadForm from '@/components/forms/ServiceLeadForm'
import PoshivKozhiFAQ from './PoshivKozhiFAQ'

export const metadata = {
  title: 'Пошив кожаных изделий на заказ в Москве — Куртки, пальто',
  description: 'Индивидуальный пошив изделий из кожи в Москве: куртки, пальто, жилеты, юбки и дублёнки на заказ из итальянской кожи. Более 30 мерок, промежуточные примерки, гарантия. Меховое ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-kozhi',
  },
  openGraph: {
    title: 'Пошив кожаных изделий на заказ в Москве — Куртки, пальто',
    description: 'Индивидуальный пошив изделий из кожи в Москве: куртки, пальто, жилеты, юбки и дублёнки на заказ из итальянской кожи. Более 30 мерок, промежуточные примерки, гарантия. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/poshiv-kozhi',
    images: [{ url: '/images/og/poshiv-kozhi.jpg', width: 1200, height: 630 }],
  },
}

export default function PoshivKozhiPage() {
  return (
    <ServicePageTemplate
      title="Индивидуальный пошив кожаных изделий в Москве"
      subtitle="Пошив одежды из кожи на заказ"
      description="Индивидуальный пошив кожаных изделий в Москве — куртки, пальто, жилеты, юбки и дублёнки на заказ из итальянской кожи. Жительницы Москвы доверяют пошив одежды из кожи фабрике Mary Belle с 1870 года: пять поколений мастеров, более 30 мерок для безупречной посадки и личное сопровождение от эскиза до финальной примерки. На каждое изделие — гарантия."
      heroImage="/images/uslugi-kozha/poshiv-kozha-01.jpg"
      features={[
        { title: 'Личная консультация', description: 'Персональный мастер помогает выбрать модель, кожу и фурнитуру под ваш образ.' },
        { title: 'Итальянская кожа', description: 'Наппа, нубук, замша, плотная одёжная кожа от проверенных поставщиков.' },
        { title: 'Более 30 мерок', description: 'Точные замеры с учётом особенностей фигуры — посадка как на показе.' },
        { title: 'Промежуточные примерки', description: 'Контроль посадки на каждом этапе — результат без компромиссов.' },
        { title: 'Любые модели', description: 'Куртки и косухи, пальто, жилеты, юбки, дублёнки и аксессуары.' },
        { title: 'Гарантия на изделие', description: 'Мы уверены в каждом шве — поэтому даём гарантию на работу.' },
      ]}
      prices={[
        { label: 'Пошив кожаной куртки', price: '~~от 64 500 ₽~~ от 45 000 ₽' },
        { label: 'Пошив кожаного жакета', price: '~~от 54 500 ₽~~ от 38 000 ₽' },
        { label: 'Пошив кожаного пальто', price: '~~от 93 000 ₽~~ от 65 000 ₽' },
        { label: 'Длинное кожаное пальто (до колена и ниже)', price: '~~от 121 500 ₽~~ от 85 000 ₽' },
        { label: 'Пошив кожаного жилета', price: '~~от 31 500 ₽~~ от 22 000 ₽' },
        { label: 'Пошив кожаной юбки', price: '~~от 25 500 ₽~~ от 18 000 ₽' },
        { label: 'Пошив кожаных брюк', price: '~~от 34 500 ₽~~ от 24 000 ₽' },
        { label: 'Пошив кожаного платья', price: '~~от 45 500 ₽~~ от 32 000 ₽' },
        { label: 'Пошив кожаного комбинезона', price: '~~от 78 500 ₽~~ от 55 000 ₽' },
        { label: 'Дублёнка короткая', price: '~~от 68 500 ₽~~ от 48 000 ₽' },
        { label: 'Дублёнка длинная / на заказ', price: '~~от 107 000 ₽~~ от 75 000 ₽' },
        { label: 'Дублёнка с меховой отделкой', price: '~~от 135 500 ₽~~ от 95 000 ₽' },
        { label: 'Кожаная сумка', price: '~~от 21 500 ₽~~ от 15 000 ₽' },
        { label: 'Ремень кожаный', price: '~~от 6 500 ₽~~ от 4 500 ₽' },
        { label: 'Перчатки кожаные', price: '~~от 8 500 ₽~~ от 6 000 ₽' },
      ]}
      gallery={[
        { src: '/images/uslugi-kozha/poshiv-kozha-02.jpg', alt: 'Пошив кожаной куртки на заказ — модель ателье' },
        { src: '/images/uslugi-kozha/poshiv-kozha-03.jpg', alt: 'Кожаное пальто на заказ — индивидуальный пошив' },
        { src: '/images/uslugi-kozha/poshiv-kozha-11.jpg', alt: 'Кожаное пальто с поясом — пошив на заказ' },
        { src: '/images/uslugi-kozha/poshiv-kozha-12.jpg', alt: 'Кожаное пальто — индивидуальный пошив Mary Belle' },
        { src: '/images/uslugi-kozha/poshiv-kozha-13.jpg', alt: 'Кожаное пальто на модели — авторский крой' },
        { src: '/images/uslugi-kozha/poshiv-kozha-14.jpg', alt: 'Кожаный жакет-блейзер — пошив по меркам' },
        { src: '/images/uslugi-kozha/poshiv-kozha-15.jpg', alt: 'Кожаная куртка люкс — работа ателье' },
        { src: '/images/uslugi-kozha/poshiv-kozha-16.jpg', alt: 'Байкерская кожаная куртка — пошив на заказ' },
        { src: '/images/uslugi-kozha/poshiv-kozha-17.jpg', alt: 'Кожаная косуха — индивидуальный пошив' },
        { src: '/images/uslugi-kozha/poshiv-kozha-18.jpg', alt: 'Куртка-бомбер из кожи — модель Mary Belle' },
        { src: '/images/uslugi-kozha/poshiv-kozha-19.jpg', alt: 'Минималистичная кожаная куртка — на заказ' },
        { src: '/images/uslugi-kozha/poshiv-kozha-20.jpg', alt: 'Кожаная мото-куртка — пошив в ателье' },
        { src: '/images/uslugi-kozha/poshiv-kozha-21.jpg', alt: 'Пошив изделий из кожи в Москве — Mary Belle' },
      ]}
      ctaText="Приходите на бесплатную консультацию — обсудим модель, подберём мех, снимем мерки и рассчитаем точную стоимость. Мы в 5 минутах от м. Войковская."
      relatedServices={[
        { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi' },
        { title: 'Пошив пальто на заказ', href: '/uslugi/poshiv-palto' },
        { title: 'Индивидуальный пошив шуб', href: '/uslugi/poshiv-shub' },
      ]}
    >
      {/* У пошива кожи нет квиза — лид собираем формой */}
      <ServiceLeadForm serviceName="Пошив изделий из кожи" />
      <PoshivKozhiFAQ />
    </ServicePageTemplate>
  )
}
