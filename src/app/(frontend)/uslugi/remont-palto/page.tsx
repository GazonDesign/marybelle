import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import RemontPaltoFAQ from './RemontPaltoFAQ'

export const metadata = {
  title: 'Ремонт пальто в Москве — Реставрация пальто',
  description: 'Ремонт пальто в Москве — реставрация пальто любой сложности. Замена подкладки, ремонт швов, замена фурнитуры. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/remont-palto',
  },
  openGraph: {
    title: 'Ремонт пальто в Москве — Реставрация пальто',
    description: 'Ремонт пальто любой сложности. Замена подкладки, ремонт швов, замена фурнитуры. Ателье Mary Belle.',
    url: 'https://mary-belle.ru/uslugi/remont-palto',
    images: [{ url: '/images/og/remont-palto.jpg', width: 1200, height: 630 }],
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
        { label: 'Замена подкладки без утеплителя', price: '~~21 500 ₽~~ 15 000 ₽' },
        { label: 'Замена подкладки с утеплителем', price: '~~от 28 500 ₽~~ от 20 000 ₽' },
        { label: 'Ушить по боковым швам', price: '~~от 9 500 ₽~~ от 6 500 ₽' },
        { label: 'Ушить плечевой шов', price: '~~от 5 500 ₽~~ от 3 800 ₽' },
        { label: 'Укоротить / удлинить рукава', price: '~~от 8 500 ₽~~ от 5 800 ₽' },
        { label: 'Изменить фасон воротника', price: '~~от 14 500 ₽~~ от 10 000 ₽' },
      ]}
      gallery={[
        { src: '/images/history/2025/betti-palto-01.jpg', alt: 'Серое классическое пальто с меховым воротником — ателье Mary Belle' },
        { src: '/images/magazin/palto/palto-1/01.jpg', alt: 'Чёрное длинное пальто — модель Mary Belle' },
        { src: '/images/magazin/palto/palto-4/01.jpg', alt: 'Пальто цвета кэмел с меховым воротником и манжетами' },
        { src: '/images/history/2025/anna-palto-01.jpg', alt: 'Тёмное пальто с вязаными рукавами и меховым воротником' },
        { src: '/images/magazin/palto/palto-5/01.jpg', alt: 'Бордовое пальто оверсайз — ателье Mary Belle' },
        { src: '/images/magazin/palto/palto-8/01.jpg', alt: 'Бежевое пальто с меховым воротником и карманами' },
        { src: '/images/history/2025/betti-palto-02.jpg', alt: 'Классическое пальто — вид сзади' },
        { src: '/images/magazin/palto/palto-9/01.jpg', alt: 'Чёрное пальто с меховыми карманами — модель Mary Belle' },
        { src: '/images/magazin/palto/palto-2/01.jpg', alt: 'Тёмно-коричневое пальто с меховой отделкой' },
        { src: '/images/magazin/palto/palto-6/01.jpg', alt: 'Бежевое пальто оверсайз — ателье Mary Belle' },
        { src: '/images/history/2025/anna-palto-02.jpg', alt: 'Пальто с поясом и меховым воротником — полный рост' },
        { src: '/images/magazin/palto/palto-7/01.jpg', alt: 'Оливковое классическое пальто — модель Mary Belle' },
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
