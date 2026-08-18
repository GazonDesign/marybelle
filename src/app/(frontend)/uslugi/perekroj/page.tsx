import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import PerekrojFAQ from './PerekrojFAQ'
import { getSeasonalBanner } from '@/lib/strapi'

export const metadata = {
  title: 'Перекрой шубы из норки — Перешить в Москве',
  description: 'Перекрой шубы из норки в Москве — перешив шубы из соболя, модернизация мехового изделия. Перешить шубу из норки: новый фасон из старой шубы. Ателье Mary Belle, м. Войковская.',
  alternates: {
    canonical: 'https://mary-belle.ru/uslugi/perekroj',
  },
  openGraph: {
    title: 'Перекрой шубы из норки — Перешить в Москве',
    description: 'Перекрой шубы из норки в Москве — перешив шубы из соболя, модернизация мехового изделия. Перешить шубу из норки: новый фасон из старой шубы. Ателье Mary Belle, м. Войковская.',
    url: 'https://mary-belle.ru/uslugi/perekroj',
    images: [{ url: '/images/og/perekroj.jpg', width: 1200, height: 630 }],
  },
}

export default async function PerekrojPage() {
  const sb = await getSeasonalBanner()
  return (
    <ServicePageTemplate
      title="Перекрой шубы из норки — Модернизация мехового изделия"
      subtitle="Лето — время обновить шубу"
      heroOffer="Из старой шубы сделаем новую: изменим фасон, длину и силуэт."
      heroBadge="Фабричный перекрой · Гарантия 2 года · Расчёт после бесплатной диагностики"
      seasonalBanner={sb.enabled ? {
        eyebrow: sb.eyebrow,
        title: 'Обновите шубу к новому сезону',
        text: 'Из старой шубы сделаем новую: фасон, длина, силуэт. Фабричный перекрой.',
        chips: ['Гарантия 2 года', 'Расчёт после диагностики'],
        ctaLabel: 'Рассчитать перекрой',
        ctaHref: '#zapis',
      } : null}
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
        { label: 'Полный перекрой', price: '~~136 000 ₽~~ 96 000 ₽' },
        { label: 'Частичный перекрой', price: '~~95 000 ₽~~ 67 000 ₽' },
        { label: 'Перекрой рукава', price: '~~от 10 500 ₽~~ от 7 200 ₽' },
        { label: 'Перекрой плечевого пояса', price: '~~от 21 500 ₽~~ от 15 000 ₽' },
        { label: 'Замена воротника', price: '~~от 18 500 ₽~~ от 13 000 ₽' },
        { label: 'Изготовить капюшон', price: '~~от 35 500 ₽~~ от 25 000 ₽' },
        { label: 'Укоротить / удлинить низ', price: '~~от 18 500 ₽~~ от 13 000 ₽' },
      ]}
      galleryAspect="16/9"
      gallery={[
        { src: '/images/perekroj-gallery/do-posle-01-sobol.jpg', alt: 'Перекрой соболиной шубы — до и после' },
        { src: '/images/perekroj-gallery/do-posle-02-norka-poyas.jpg', alt: 'Перешив тёмно-коричневой шубы: пояс и шалевый воротник — до и после' },
        { src: '/images/perekroj-gallery/do-posle-03-kashemir-sobol.jpg', alt: 'Перекрой соболиной шубы в жакет с кашемиром — до и после' },
        { src: '/images/perekroj-gallery/do-posle-04-sobol-paneli.jpg', alt: 'Перекрой шубы из соболя в горизонтальную раскладку — до и после' },
        { src: '/images/perekroj-gallery/do-posle-05-norka-kimono.jpg', alt: 'Перешив норковой шубы в жакет-кимоно — до и после' },
        { src: '/images/perekroj-gallery/do-posle-06-manishka.jpg', alt: 'Перешив норковой шубы в манишку с объёмным воротником — до и после' },
        { src: '/images/perekroj-gallery/do-posle-07-shokolad.jpg', alt: 'Перекрой шоколадной шубы: современный силуэт — до и после' },
        { src: '/images/perekroj-gallery/do-posle-08-karamel.jpg', alt: 'Перешив карамельной норковой шубы с поясом — до и после' },
        { src: '/images/perekroj-gallery/do-posle-11-kemel.jpg', alt: 'Перекрой норковой шубы кэмел — до и после' },
        { src: '/images/perekroj-gallery/do-posle-12-kremovyj-zhaket.jpg', alt: 'Перешив кремовой шубы в короткий жакет — до и после' },
        { src: '/images/perekroj-gallery/do-posle-13-bezhevaya-kapyushon.jpg', alt: 'Перекрой бежевой шубы в куртку с капюшоном — до и после' },
        { src: '/images/perekroj-gallery/do-posle-14-medovyj-zhaket-a.jpg', alt: 'Перешив медовой шубы в короткий жакет — до и после' },
        { src: '/images/perekroj-gallery/do-posle-14-medovyj-zhaket-b.jpg', alt: 'Перешив медовой норковой шубы: жакет с манжетами — до и после' },
        { src: '/images/perekroj-gallery/do-posle-15-zhemchug-a.jpg', alt: 'Перешив жемчужной шубы в куртку с капюшоном — до и после' },
        { src: '/images/perekroj-gallery/do-posle-15-zhemchug-b.jpg', alt: 'Перекрой жемчужной норковой шубы — до и после' },
        { src: '/images/perekroj-gallery/16x9001.jpg', alt: 'Перекрой шубы — до и после' },
        { src: '/images/perekroj-gallery/16x9009.jpg', alt: 'Перешив шубы — новый силуэт' },
        { src: '/images/perekroj-gallery/16x9011.jpg', alt: 'Полный перекрой шубы — до и после' },
        { src: '/images/perekroj-gallery/16x9015.jpg', alt: 'Перешив шубы — новая модель' },
        { src: '/images/perekroj-gallery/16x9016.jpg', alt: 'Перекрой и обновление шубы — до и после' },
        { src: '/images/perekroj-gallery/16x9019.jpg', alt: 'Перекрой шубы — результат работы фабрики' },
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
