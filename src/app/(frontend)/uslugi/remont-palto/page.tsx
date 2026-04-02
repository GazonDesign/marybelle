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
        { src: '/images/palto-gallery/0220012.jpg', alt: 'Пальто из шерсти — ателье Mary Belle' },
        { src: '/images/palto-gallery/0220038.jpg', alt: 'Реставрация кашемирового пальто' },
        { src: '/images/palto-gallery/0220072.jpg', alt: 'Пальто после ремонта — идеальный силуэт' },
        { src: '/images/palto-gallery/1-e1746367363465-794x1024.jpg', alt: 'Пальто с меховым воротником — готовая работа' },
        { src: '/images/palto-gallery/photo_2023-02-20_17-16-31-767x1024.jpg', alt: 'Классическое пальто — реставрация' },
        { src: '/images/palto-gallery/shal-2-767x1024.jpg', alt: 'Пальто с шалью — ателье Mary Belle' },
        { src: '/images/palto-gallery/perekroj-0220011.jpg', alt: 'Модель в пальто — индивидуальный пошив' },
        { src: '/images/palto-gallery/perekroj-0220019.jpg', alt: 'Пальто — вид сбоку' },
        { src: '/images/palto-gallery/perekroj-0220028.jpg', alt: 'Пальто с поясом — реставрация' },
        { src: '/images/palto-gallery/perekroj-0220032.jpg', alt: 'Пальто — результат перекроя' },
        { src: '/images/palto-gallery/perekroj-0220036.jpg', alt: 'Пальто из перекроенного меха' },
        { src: '/images/palto-gallery/perekroj-0220042.jpg', alt: 'Элегантное пальто — работа ателье' },
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
