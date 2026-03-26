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
        { src: '/images/gov-import/modeli/prima.jpg', alt: 'Модель Прима — пошив шубы на заказ' },
        { src: '/images/gov-import/modeli/prima-1.jpg', alt: 'Шуба Прима — индивидуальный пошив' },
        { src: '/images/gov-import/modeli/betti-1.jpg', alt: 'Модель Бетти — меховое ателье Mary Belle' },
        { src: '/images/gov-import/modeli/russkij-sobol.jpg', alt: 'Шуба из русского соболя — пошив на заказ' },
        { src: '/images/gov-import/modeli/iz-norki.jpg', alt: 'Шуба из норки — индивидуальный крой' },
        { src: '/images/gov-import/modeli/manizhka-1.jpg', alt: 'Меховая манишка — аксессуар на заказ' },
        { src: '/images/gov-import/proizvodstvo/img_7184-kopiya.jpg', alt: 'Мастерская пошива — ателье Mary Belle' },
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
