import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import PoshivShubFAQ from './PoshivShubFAQ'

export const metadata = {
  title: 'Пошив шуб на заказ в Москве — Шубы из соболя и норки | Mary Belle',
  description: 'Индивидуальный пошив шуб в Москве: шубы из соболя, норки, каракуля на заказ. Три примерки, срок 21 день. Пошив шуб на заказ в меховом ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-shub',
  },
  openGraph: {
    title: 'Пошив шуб на заказ в Москве — Шубы из соболя и норки',
    description: 'Индивидуальный пошив шуб в Москве: шубы из соболя, норки, каракуля на заказ. Три примерки, срок 21 день. Пошив шуб на заказ в меховом ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/poshiv-shub',
    images: [{ url: '/images/uslugi-poshiv-hero.webp' }],
  },
}

export default function PoshivShubPage() {
  return (
    <ServicePageTemplate
      title="Пошив шуб на заказ из натурального меха — Москва"
      subtitle="Индивидуальный пошив шубы"
      description="Пошив шуб в Москве по индивидуальным меркам — от эскиза до готового изделия. Шубы на заказ из норки, соболя, каракуля, лисы, шиншиллы. Индивидуальный пошив шубы с тремя примерками гарантирует идеальную посадку. Пошив шуб на заказ — наша специализация с 1870 года."
      heroImage="/images/uslugi-poshiv-hero.webp"
      features={[
        { title: 'Консультация и эскиз', description: 'Обсуждаем пожелания, подбираем мех и фасон, создаём эскиз.' },
        { title: 'Подбор меха', description: 'Работаем с проверенными поставщиками — норка NAFA и Kopenhagen Fur.' },
        { title: 'Индивидуальный крой', description: 'Снятие мерок и построение выкройки под вашу фигуру.' },
        { title: 'Три примерки', description: 'Контроль посадки на каждом этапе — идеальный результат.' },
        { title: 'Авторский дизайн', description: 'Уникальные модели, которых нет в массовом производстве.' },
        { title: 'Гарантия', description: 'Гарантия на все швы и фурнитуру — мы уверены в качестве.' },
      ]}
      prices={[
        { label: 'Пошив шубы из норки', price: 'от 120 000 ₽' },
        { label: 'Пошив шубы из соболя', price: 'от 350 000 ₽' },
        { label: 'Пошив мехового жилета', price: 'от 45 000 ₽' },
        { label: 'Пошив пальто с мехом', price: 'от 80 000 ₽' },
        { label: 'Пошив аксессуаров (муфта, воротник)', price: 'от 15 000 ₽' },
      ]}
      gallery={[
        { src: '/images/poshiv-gallery/russkij-sobol.jpg', alt: 'Шуба из русского соболя — пошив на заказ' },
        { src: '/images/poshiv-gallery/0220001.jpg', alt: 'Норковая шуба — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/0220020.jpg', alt: 'Шуба из норки — авторский крой' },
        { src: '/images/poshiv-gallery/14.webp', alt: 'Меховое пальто — пошив на заказ' },
        { src: '/images/poshiv-gallery/15.webp', alt: 'Шуба из соболя — индивидуальный дизайн' },
        { src: '/images/poshiv-gallery/16.webp', alt: 'Элегантная шуба — пошив в ателье' },
        { src: '/images/poshiv-gallery/34.webp', alt: 'Норковая шуба — модель из каталога' },
        { src: '/images/poshiv-gallery/397.webp', alt: 'Шуба из каракуля — пошив на заказ' },
        { src: '/images/poshiv-gallery/img_5670-scaled-1080x1440.jpg', alt: 'Реальная модель в норковой шубе' },
        { src: '/images/poshiv-gallery/img_5679-scaled-1080x1441.jpg', alt: 'Пошив шубы — результат работы' },
      ]}
      relatedServices={[
        { title: 'Пошив шуб из соболя', href: '/uslugi/poshiv-shub/iz-sobolya' },
        { title: 'Пошив шуб из норки', href: '/uslugi/poshiv-shub/iz-norki' },
        { title: 'Ремонт шуб', href: '/uslugi/remont-shub' },
      ]}
    >
      <PoshivShubFAQ />
    </ServicePageTemplate>
  )
}
