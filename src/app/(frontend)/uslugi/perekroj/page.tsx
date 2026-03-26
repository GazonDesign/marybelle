import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import PerekrojFAQ from './PerekrojFAQ'

export const metadata = {
  title: 'Перекрой шубы из норки в Москве — Перешить шубу | Mary Belle',
  description: 'Перекрой шубы из норки в Москве — перешив шубы из соболя, модернизация мехового изделия. Перешить шубу из норки: новый фасон из старой шубы. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/perekroj',
  },
  openGraph: {
    title: 'Перекрой шубы из норки в Москве — Перешить шубу',
    description: 'Перекрой шубы из норки в Москве — перешив шубы из соболя, модернизация мехового изделия. Перешить шубу из норки: новый фасон из старой шубы. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/perekroj',
    images: [{ url: '/images/uslugi-remont-mehov-hero.webp' }],
  },
}

export default function PerekrojPage() {
  return (
    <ServicePageTemplate
      title="Перекрой шубы из норки — Модернизация мехового изделия"
      subtitle="Перешить шубу в Москве"
      description="Перекрой шубы — это возможность получить актуальную модель из старого мехового изделия. Перешив шубы из норки, соболя и других мехов: изменение фасона, длины, силуэта. Перешить шубу из норки в нашем ателье — мастера сохранят качество меха и создадут современный крой."
      heroImage="/images/uslugi-remont-mehov-hero.webp"
      features={[
        { title: 'Изменение фасона', description: 'Из длинной шубы — укороченную, из прямой — приталенную.' },
        { title: 'Перекрой в жилет', description: 'Модный меховой жилет из старой шубы — лёгкий и стильный.' },
        { title: 'Комбинирование мехов', description: 'Сочетание разных видов меха и кожи в одном изделии.' },
        { title: 'Обновление деталей', description: 'Новый воротник, манжеты, капюшон — освежение образа.' },
        { title: 'Подгонка по фигуре', description: 'Корректировка размера после изменений фигуры.' },
        { title: 'Сохранение меха', description: 'Максимально бережная работа — мех не теряет качества.' },
      ]}
      prices={[
        { label: 'Полный перекрой', price: '96 000 ₽' },
        { label: 'Частичный перекрой', price: '67 000 ₽' },
        { label: 'Перекрой рукава', price: 'от 7 200 ₽' },
        { label: 'Перекрой плечевого пояса', price: 'от 15 000 ₽' },
        { label: 'Замена воротника', price: 'от 13 000 ₽' },
        { label: 'Изготовить капюшон', price: 'от 25 000 ₽' },
        { label: 'Укоротить / удлинить низ', price: 'от 13 000 ₽' },
      ]}
      gallery={[
        { src: '/images/gov-import/remont-do-posle/chastichnyj-perekroj_.jpg', alt: 'Частичный перекрой шубы — до и после' },
        { src: '/images/gov-import/remont-do-posle/perekroj-1.jpg', alt: 'Перекрой шубы — новый фасон' },
        { src: '/images/gov-import/modeli/palto.jpg', alt: 'Пальто из перекроенной шубы' },
        { src: '/images/gov-import/modeli/palto2.jpg', alt: 'Перекрой в пальто — вид сбоку' },
        { src: '/images/gov-import/modeli/palto3.jpg', alt: 'Перекрой в пальто — вид сзади' },
      ]}
      relatedServices={[
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
        { title: 'Окрашивание меха', href: '/uslugi/okrashivanie' },
        { title: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub' },
      ]}
    >
      <PerekrojFAQ />
    </ServicePageTemplate>
  )
}
