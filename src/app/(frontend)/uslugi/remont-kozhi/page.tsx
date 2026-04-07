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
      galleryAspect="5/4"
      gallery={[
        { src: '/images/gov-import/katalog-shuby/02-001.webp', alt: 'Ремонт кожаной куртки — до и после реставрации' },
        { src: '/images/gov-import/katalog-shuby/02-004.webp', alt: 'Реставрация дублёнки с меховым воротником — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-002.webp', alt: 'Окрашивание кожаной куртки — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-007.webp', alt: 'Ремонт кожаного пальто — восстановление низа' },
        { src: '/images/gov-import/katalog-shuby/02-005.webp', alt: 'Ремонт кожаной косухи — устранение пореза' },
        { src: '/images/gov-import/katalog-shuby/02-008.webp', alt: 'Реставрация коричневой дублёнки — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-003.webp', alt: 'Восстановление кожаной куртки — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-009.webp', alt: 'Ремонт чёрного кожаного пальто — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-006.webp', alt: 'Реставрация дублёнки с мехом — до и после' },
        { src: '/images/gov-import/katalog-shuby/02-010.webp', alt: 'Ремонт мужской кожаной куртки — до и после' },
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
