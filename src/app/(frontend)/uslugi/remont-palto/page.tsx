import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import RemontPaltoFAQ from './RemontPaltoFAQ'

export const metadata = {
  title: 'Ремонт пальто в Москве — Профессиональная реставрация | Mary Belle',
  description: 'Ремонт пальто в Москве — реставрация пальто любой сложности. Замена подкладки, ремонт швов, замена фурнитуры. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-palto',
  },
}

export default function RemontPaltoPage() {
  return (
    <ServicePageTemplate
      title="Ремонт пальто в Москве — Профессиональная реставрация"
      subtitle="Ремонт пальто любой сложности"
      description="Ремонт пальто в Москве — профессиональная реставрация шерстяных, кашемировых и драповых пальто. Устраняем повреждения, меняем подкладку, восстанавливаем фурнитуру. Ремонт пальто с меховыми элементами — наша специальность."
      heroImage="/images/product-palto.jpg"
      features={[
        { title: 'Замена подкладки', description: 'Полная или частичная замена подкладки на качественную ткань.' },
        { title: 'Ремонт швов', description: 'Укрепление и восстановление разошедшихся швов.' },
        { title: 'Замена фурнитуры', description: 'Пуговицы, молнии, крючки — подбор в стиль изделия.' },
        { title: 'Штопка и реставрация', description: 'Устранение дыр, потёртостей, следов от моли.' },
        { title: 'Ремонт мехового воротника', description: 'Восстановление или замена мехового воротника на пальто.' },
        { title: 'Подгонка по фигуре', description: 'Ушивание или расставление пальто по размеру.' },
      ]}
      prices={[
        { label: 'Замена подкладки без утеплителя', price: '15 000 ₽' },
        { label: 'Замена подкладки с утеплителем', price: 'от 20 000 ₽' },
        { label: 'Ушить по боковым швам', price: 'от 6 500 ₽' },
        { label: 'Ушить плечевой шов', price: 'от 3 800 ₽' },
        { label: 'Укоротить / удлинить рукава', price: 'от 5 800 ₽' },
        { label: 'Изменить фасон воротника', price: 'от 10 000 ₽' },
      ]}
      gallery={[
        { src: '/images/gov-import/modeli/palto.jpg', alt: 'Ремонт пальто — готовая работа' },
        { src: '/images/gov-import/modeli/palto2.jpg', alt: 'Реставрация пальто — результат' },
        { src: '/images/gov-import/modeli/palto3.jpg', alt: 'Пальто после ремонта — вид сзади' },
        { src: '/images/gov-import/modeli/palto-back.jpg', alt: 'Детали ремонта пальто' },
        { src: '/images/gov-import/modeli/palto-back-1.jpg', alt: 'Пальто — качество швов после реставрации' },
      ]}
      relatedServices={[
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
        { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi' },
        { title: 'Химчистка', href: '/uslugi/himchistka' },
      ]}
    >
      <RemontPaltoFAQ />
    </ServicePageTemplate>
  )
}
