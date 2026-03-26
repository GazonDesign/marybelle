import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import RemontKozhiFAQ from './RemontKozhiFAQ'

export const metadata = {
  title: 'Ремонт дублёнок в Москве — Восстановление кожаных изделий | Mary Belle',
  description: 'Ремонт дублёнок в Москве: восстановление дублёнки, реставрация кожаных изделий, окрашивание кожи. Ремонт кожаных курток, замена фурнитуры. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-kozhi',
  },
  openGraph: {
    title: 'Ремонт дублёнок в Москве — Восстановление кожаных изделий',
    description: 'Ремонт дублёнок в Москве: восстановление дублёнки, реставрация кожаных изделий, окрашивание кожи. Ремонт кожаных курток, замена фурнитуры. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/remont-kozhi',
    images: [{ url: '/images/uslugi-remont-kozhi-hero.webp' }],
  },
}

export default function RemontKozhiPage() {
  return (
    <ServicePageTemplate
      title="Ремонт дублёнок и кожаных изделий в Москве"
      subtitle="Восстановление и реставрация дублёнки"
      description="Ремонт дублёнок в Москве — восстановление дублёнки, ремонт кожаных изделий любой сложности. Реставрация дублёнки: устраняем потёртости, восстанавливаем цвет, меняем фурнитуру. Работаем с натуральной кожей и дублёнками. Мастер осмотрит изделие и подберёт оптимальный способ восстановления."
      heroImage="/images/uslugi-remont-kozhi-hero.webp"
      features={[
        { title: 'Реставрация потёртостей', description: 'Восстановление покрытия в зонах износа — манжеты, воротник, карманы.' },
        { title: 'Окрашивание кожи', description: 'Полное или локальное окрашивание с подбором точного оттенка.' },
        { title: 'Замена молнии', description: 'Установка новой молнии с сохранением оригинального вида изделия.' },
        { title: 'Ремонт подкладки', description: 'Замена изношенной подкладки на качественную ткань.' },
        { title: 'Замена фурнитуры', description: 'Кнопки, пряжки, ремни — подбираем в тон и стиль.' },
        { title: 'Ремонт дублёнок', description: 'Реставрация меховой стороны, замена овчины, укрепление швов.' },
      ]}
      prices={[
        { label: 'Реставрация потёртостей', price: 'от 3 000 ₽' },
        { label: 'Окрашивание кожаной куртки', price: 'от 6 000 ₽' },
        { label: 'Замена молнии', price: 'от 2 500 ₽' },
        { label: 'Замена подкладки без утеплителя', price: '15 000 ₽' },
        { label: 'Частичная реставрация подкладки', price: '5 500–8 200 ₽' },
        { label: 'Ремонт дублёнки', price: 'от 4 000 ₽' },
      ]}
      gallery={[
        { src: '/images/uslugi-kozha/poshiv-kozha-01.jpg', alt: 'Пошив кожаного изделия — процесс работы' },
        { src: '/images/uslugi-kozha/poshiv-kozha-02.jpg', alt: 'Кожаная куртка — ручная работа мастера' },
        { src: '/images/uslugi-kozha/poshiv-kozha-03.jpg', alt: 'Раскрой натуральной кожи' },
        { src: '/images/uslugi-kozha/poshiv-kozha-04.jpg', alt: 'Детали кожаного изделия — швы и фурнитура' },
        { src: '/images/uslugi-kozha/poshiv-kozha-05.jpg', alt: 'Готовое кожаное изделие — результат работы' },
        { src: '/images/uslugi-kozha/poshiv-kozha-06.jpg', alt: 'Мастер работает с кожей — ателье Mary Belle' },
        { src: '/images/uslugi-kozha/poshiv-kozha-07.jpg', alt: 'Пошив кожаного платья — индивидуальный заказ' },
        { src: '/images/uslugi-kozha/poshiv-kozha-08.jpg', alt: 'Кожаные изделия — примерка в ателье' },
        { src: '/images/uslugi-kozha/poshiv-kozha-09.jpg', alt: 'Ремонт кожаной куртки — восстановление' },
        { src: '/images/uslugi-kozha/poshiv-kozha-10.jpg', alt: 'Готовое изделие из кожи — Mary Belle' },
      ]}
      relatedServices={[
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
        { title: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub' },
        { title: 'Химчистка', href: '/uslugi/himchistka' },
      ]}
    >
      <RemontKozhiFAQ />
    </ServicePageTemplate>
  )
}
