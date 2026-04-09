import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import BrendovayaFAQ from './BrendovayaFAQ'

export const metadata = {
  title: 'Ремонт брендовой одежды в Москве — Премиум',
  description: 'Ремонт брендовой одежды в Москве — реставрация люксовых вещей: Moncler, Max Mara, Burberry и других брендов. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-brendovoj-odezhdy',
  },
  openGraph: {
    title: 'Ремонт брендовой одежды в Москве — Премиум',
    description: 'Реставрация люксовых вещей: Moncler, Max Mara, Burberry. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/remont-brendovoj-odezhdy',
    images: [{ url: '/images/uslugi-poshiv-hero.webp' }],
  },
}

export default function RemontBrendovojOdezhdyPage() {
  return (
    <ServicePageTemplate
      title="Ремонт брендовой одежды в Москве"
      subtitle="Реставрация люксовых изделий"
      description="Ремонт брендовой одежды требует особого подхода — мы работаем с изделиями Moncler, Max Mara, Burberry, Loro Piana и других премиальных марок. Сохраняем оригинальную фурнитуру и подбираем материалы, идентичные оригиналу. Мастера с опытом работы с люксовыми брендами."
      heroImage="/images/uslugi-poshiv-hero.webp"
      features={[
        { title: 'Работа с люксом', description: 'Знаем особенности конструкции и материалов премиальных брендов.' },
        { title: 'Оригинальная фурнитура', description: 'Сохраняем или подбираем фурнитуру, идентичную оригиналу.' },
        { title: 'Ремонт пуховиков', description: 'Реставрация пуховиков Moncler, Canada Goose и других.' },
        { title: 'Ремонт кашемира', description: 'Бережная штопка и восстановление кашемировых изделий.' },
        { title: 'Замена подкладки', description: 'Подбор ткани, максимально близкой к оригиналу.' },
        { title: 'Конфиденциальность', description: 'Индивидуальный подход и бережное обращение с каждой вещью.' },
      ]}
      prices={[
        { label: 'Ремонт пуховика (премиум)', price: 'от 5 000 ₽' },
        { label: 'Ремонт кашемирового пальто', price: 'от 4 000 ₽' },
        { label: 'Замена фурнитуры (бренд)', price: 'от 3 000 ₽' },
        { label: 'Замена подкладки', price: 'от 7 000 ₽' },
        { label: 'Штопка / реставрация ткани', price: 'от 2 500 ₽' },
      ]}
      galleryAspect="3/2"
      gallery={[
        { src: '/images/kozha-gallery/001-2.webp', alt: 'Ремонт дублёнки — до и после' },
        { src: '/images/kozha-gallery/003-2.webp', alt: 'Реставрация кожаной куртки — до и после' },
        { src: '/images/kozha-gallery/005-1.webp', alt: 'Ремонт дублёнки с мехом — до и после' },
        { src: '/images/kozha-gallery/002-1.webp', alt: 'Восстановление кожаного изделия' },
        { src: '/images/kozha-gallery/004-1.webp', alt: 'Ремонт зимней куртки — до и после' },
        { src: '/images/kozha-gallery/006-1.webp', alt: 'Реставрация дублёнки — результат' },
        { src: '/images/kozha-gallery/007-1.webp', alt: 'Ремонт кожаной одежды — до и после' },
        { src: '/images/kozha-gallery/008-1.webp', alt: 'Восстановление меховой отделки' },
        { src: '/images/kozha-gallery/009-1.webp', alt: 'Ремонт брендовой куртки — результат' },
        { src: '/images/kozha-gallery/010-6.webp', alt: 'Реставрация кожи — до и после' },
      ]}
      relatedServices={[
        { title: 'Ремонт пальто', href: '/uslugi/remont-palto' },
        { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi' },
        { title: 'Химчистка', href: '/uslugi/himchistka' },
      ]}
    >
      <BrendovayaFAQ />
    </ServicePageTemplate>
  )
}
