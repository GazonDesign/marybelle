import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Ремонт брендовой одежды в Москве — Mary Belle | Ателье премиум-класса',
  description: 'Ремонт брендовой одежды в Москве — реставрация люксовых вещей: Moncler, Max Mara, Burberry и других брендов. Ателье Mary Belle, м. Войковская.',
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
      relatedServices={[
        { title: 'Ремонт пальто', href: '/uslugi/remont-palto' },
        { title: 'Ремонт кожи и дублёнок', href: '/uslugi/remont-kozhi' },
        { title: 'Химчистка', href: '/uslugi/himchistka' },
      ]}
    />
  )
}
