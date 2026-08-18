import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import PoshivShubFAQ from './PoshivShubFAQ'
import { getSeasonalBanner } from '@/lib/strapi'

export const metadata = {
  title: 'Пошив шуб на заказ — Соболь и норка, Москва',
  description: 'Индивидуальный пошив шуб в Москве: шубы из соболя, норки, каракуля на заказ. Три примерки, срок 21 день. Пошив шуб на заказ в меховом ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/poshiv-shub',
  },
  openGraph: {
    title: 'Пошив шуб на заказ — Соболь и норка, Москва',
    description: 'Индивидуальный пошив шуб в Москве: шубы из соболя, норки, каракуля на заказ. Три примерки, срок 21 день. Пошив шуб на заказ в меховом ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/poshiv-shub',
    images: [{ url: '/images/og/poshiv-shub.jpg', width: 1200, height: 630 }],
  },
}

export default async function PoshivShubPage() {
  const sb = await getSeasonalBanner()
  return (
    <ServicePageTemplate
      title="Пошив шуб на заказ из натурального меха — Москва"
      subtitle="Лето — лучшее время для пошива"
      heroOffer="Сошьём шубу по вашим меркам — из вашего меха или нашего. Эскиз бесплатно."
      heroBadge="Эскиз бесплатно · 3 примерки · Гарантия 2 года"
      seasonalBanner={sb.enabled ? {
        eyebrow: sb.eyebrow,
        title: 'Лето — лучшее время сшить шубу',
        text: 'Успеете спокойно выбрать мех и пройти примерки к зиме. Эскиз бесплатно.',
        chips: ['Эскиз бесплатно', '3 примерки', 'Гарантия 2 года'],
        ctaLabel: 'Обсудить пошив',
        ctaHref: '#zapis',
      } : null}
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
        { label: 'Пошив шубы из норки', price: '~~от 185 500 ₽~~ от 130 000 ₽' },
        { label: 'Пошив шубы из соболя', price: '~~от 371 500 ₽~~ от 260 000 ₽' },
        { label: 'Пошив мехового жилета', price: '~~от 78 500 ₽~~ от 55 000 ₽' },
        { label: 'Пошив пальто с мехом', price: '~~от 128 500 ₽~~ от 90 000 ₽' },
        { label: 'Пошив аксессуаров (муфта, воротник)', price: '~~от 35 500 ₽~~ от 25 000 ₽' },
        { label: 'Изготовление макета с выкройкой', price: '~~от 21 500 ₽~~ от 15 000 ₽' },
        { label: 'Сборка и разборка шубы', price: '~~от 50 000 ₽~~ от 35 000 ₽' },
      ]}
      gallery={[
        { src: '/images/poshiv-gallery/poshiv-01-sobol-dlinnaya.jpg', alt: 'Длинная шуба из соболя — индивидуальный пошив Mary Belle' },
        { src: '/images/poshiv-gallery/poshiv-02-norka-poyas.jpg', alt: 'Норковая шуба с поясом — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-03-kurtka-soboly-otdelka.jpg', alt: 'Куртка с отделкой из соболя — авторская работа' },
        { src: '/images/poshiv-gallery/poshiv-04-sobol-gorizontalnaya.jpg', alt: 'Шуба из соболя горизонтальной раскладки' },
        { src: '/images/poshiv-gallery/poshiv-05-norka-bomber.jpg', alt: 'Норковый бомбер — молодёжный пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-06-zhilet-mehov.jpg', alt: 'Меховой жилет из норки — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/poshiv-07-norka-casualnaya.jpg', alt: 'Норковая шуба в стиле casual — пошив Mary Belle' },
        { src: '/images/poshiv-gallery/poshiv-08-norka-zolotistaya.jpg', alt: 'Золотистая норковая шуба — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-09-sobol-kaplet.jpg', alt: 'Соболиная шуба с каплетом — авторский дизайн' },
        { src: '/images/poshiv-gallery/poshiv-10-norka-bezhevaya.jpg', alt: 'Бежевая норковая шуба с поясом — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-11-norka-halat.jpg', alt: 'Норковая шуба-халат — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/poshiv-12-norka-kurtka-bezhevaya.jpg', alt: 'Бежевая норковая куртка — деловой стиль' },
        { src: '/images/poshiv-gallery/poshiv-13-norka-poncho.jpg', alt: 'Норковое пончо с капюшоном — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-14-norka-hudi.jpg', alt: 'Норковая куртка-худи — современный пошив' },
        { src: '/images/poshiv-gallery/poshiv-15-sobol-kinematograf.jpg', alt: 'Шуба из соболя — кинематографичный образ' },
        { src: '/images/poshiv-gallery/poshiv-16-sobol-vechernyaya-moskva.jpg', alt: 'Длинная соболиная шуба на вечерней улице — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-17-norka-shokolad-poyas.jpg', alt: 'Тёмно-коричневая шуба с поясом — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/poshiv-18-zhaket-kashemir-sobol-ulitsa.jpg', alt: 'Жакет из кашемира с отделкой соболем — авторская работа' },
        { src: '/images/poshiv-gallery/poshiv-19-sobol-gorizontalnyj-prospekt.jpg', alt: 'Соболиная шуба горизонтальной раскладки — пошив Mary Belle' },
        { src: '/images/poshiv-gallery/poshiv-20-norka-viski-kimono.jpg', alt: 'Норковый жакет-кимоно цвета виски — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-21-norka-manishka.jpg', alt: 'Норковая манишка с объёмным воротником — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/poshiv-22-shokoladnaya-shuba-sneg.jpg', alt: 'Шоколадная шуба в пол — пошив по меркам клиента' },
        { src: '/images/poshiv-gallery/poshiv-23-norka-karamel-stupeni.jpg', alt: 'Карамельная норковая шуба с поясом — авторский крой' },
        { src: '/images/poshiv-gallery/poshiv-24-lisa-keip-most.jpg', alt: 'Шуба из лисы с кейп-плечами — индивидуальный дизайн' },
        { src: '/images/poshiv-gallery/poshiv-25-norka-palomino-okno.jpg', alt: 'Норковая шуба паломино — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-26-norka-kemel-zerkalo.jpg', alt: 'Норковая шуба оттенка кэмел — работа ателье Mary Belle' },
        { src: '/images/poshiv-gallery/poshiv-27-kremovyj-zhaket-vecher.jpg', alt: 'Кремовый норковый жакет — вечерний образ' },
        { src: '/images/poshiv-gallery/poshiv-28-norka-bezhevaya-kapyushon-park.jpg', alt: 'Бежевая норковая куртка с капюшоном — пошив на заказ' },
        { src: '/images/poshiv-gallery/poshiv-29-medovyj-zhaket-atelye.jpg', alt: 'Медовый норковый жакет — примерка в ателье' },
        { src: '/images/poshiv-gallery/poshiv-30-zhemchuzhnaya-kapyushon-utro.jpg', alt: 'Жемчужная норковая куртка с капюшоном — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/0220022.jpg', alt: 'Длинная норковая шуба пастельного оттенка — пошив на заказ' },
        { src: '/images/poshiv-gallery/0220006.jpg', alt: 'Норковая шуба в пол — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/0220046.jpg', alt: 'Длинная шуба из норки — авторский крой' },
        { src: '/images/poshiv-gallery/0220039.jpg', alt: 'Белая норковая шуба — пошив в ателье' },
        { src: '/images/poshiv-gallery/0220004.jpg', alt: 'Пальто из каракуля в пол — пошив на заказ' },
        { src: '/images/poshiv-gallery/0220024.jpg', alt: 'Белая норковая шуба с поясом — индивидуальный дизайн' },
        { src: '/images/poshiv-gallery/0220018.jpg', alt: 'Норковая шуба молочного цвета — пошив на заказ' },
        { src: '/images/poshiv-gallery/0220030.jpg', alt: 'Шуба из каракуля с песцовым воротником — индивидуальный пошив' },
        { src: '/images/poshiv-gallery/0220032.jpg', alt: 'Норковая шуба пастельного оттенка — работа ателье' },
        { src: '/images/poshiv-gallery/0220044.jpg', alt: 'Норковая шуба с поясом — пошив на заказ' },
      ]}
      ctaText="Приходите на бесплатную консультацию — обсудим модель, подберём мех, снимем мерки и рассчитаем точную стоимость. Мы в 5 минутах от м. Войковская."
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
