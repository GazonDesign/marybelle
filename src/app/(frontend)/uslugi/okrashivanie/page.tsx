import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import OkrashivanieFAQ from './OkrashivanieFAQ'

export const metadata = {
  title: 'Покраска шубы из норки — Окрашивание в Москве',
  description: 'Покраска шубы из норки в Москве — профессиональное окрашивание меха без потери качества. Покрасить шубу в Москве: обновление цвета, тонирование, омбре. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/okrashivanie',
  },
  openGraph: {
    title: 'Покраска шубы из норки — Окрашивание в Москве',
    description: 'Покраска шубы из норки в Москве — профессиональное окрашивание меха без потери качества. Покрасить шубу в Москве: обновление цвета, тонирование, омбре. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/okrashivanie',
    images: [{ url: '/images/uslugi-okrashivanie-hero.webp' }],
  },
}

export default function OkrashivaniePage() {
  return (
    <ServicePageTemplate
      title="Покраска шубы из норки в Москве — Окрашивание меха"
      subtitle="Покрасить шубу в Москве"
      description="Покраска шубы из норки и других мехов профессиональными составами без потери качества ворса. Окрашивание меха: обновление выгоревшего цвета, тонирование, модный эффект омбре. Покрасить шубу в Москве — работаем с норкой, лисой, песцом, каракулем. Стойкие красители европейского производства."
      heroImage="/images/uslugi-okrashivanie-hero.webp"
      features={[
        { title: 'Полное окрашивание', description: 'Равномерное окрашивание всего изделия в выбранный цвет.' },
        { title: 'Тонирование', description: 'Освежение и углубление натурального оттенка меха.' },
        { title: 'Деградация (омбре)', description: 'Модный переход цвета от тёмного к светлому.' },
        { title: 'Окрашивание кожи', description: 'Обновление цвета кожаных вставок и элементов отделки.' },
        { title: 'Подбор оттенка', description: 'Мастер поможет выбрать цвет, который подойдёт именно вам.' },
        { title: 'Стойкие красители', description: 'Европейские составы — цвет держится несколько сезонов.' },
      ]}
      prices={[
        { label: 'Окрашивание шубы (полное)', price: 'от 12 000 ₽' },
        { label: 'Тонирование', price: 'от 8 000 ₽' },
        { label: 'Окрашивание жилета', price: 'от 7 000 ₽' },
        { label: 'Окрашивание воротника / манжет', price: 'от 3 000 ₽' },
        { label: 'Окрашивание кожаных элементов', price: 'от 4 000 ₽' },
      ]}
      galleryAspect="5/4"
      gallery={[
        { src: '/images/okrashivanie-gallery/011.jpg', alt: 'Окрашивание меха — до и после' },
        { src: '/images/okrashivanie-gallery/015.jpg', alt: 'Тонирование норковой шубы' },
        { src: '/images/okrashivanie-gallery/022.jpg', alt: 'Обновление цвета мехового изделия' },
        { src: '/images/okrashivanie-gallery/biryuzovaya-1-1.jpg', alt: 'Бирюзовое окрашивание меха' },
        { src: '/images/okrashivanie-gallery/photo_2026-02-05_20-05-57.jpg', alt: 'Окрашивание шубы — результат' },
        { src: '/images/okrashivanie-gallery/photo_2026-02-07_13-01-32.jpg', alt: 'Покраска мехового изделия' },
        { src: '/images/okrashivanie-gallery/remont061225.jpg', alt: 'Восстановление цвета меха' },
        { src: '/images/okrashivanie-gallery/remont26.jpg', alt: 'Профессиональное окрашивание' },
      ]}
      crossSellService="okrashivanie"
      relatedServices={[
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
        { title: 'Химчистка', href: '/uslugi/himchistka' },
        { title: 'Меховой холодильник', href: '/uslugi/mehovoj-holodilnik' },
      ]}
    >
      <OkrashivanieFAQ />
    </ServicePageTemplate>
  )
}
