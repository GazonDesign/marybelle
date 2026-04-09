import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import HeroBannerCarousel from '@/components/ui/HeroBannerCarousel'
import ServicesSection from '@/components/sections/ServicesSection'
import { getReviews, getPortfolio } from '@/lib/strapi'

const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'))
const BeforeAfterSection = dynamic(() => import('@/components/sections/BeforeAfterSection'))
const GuaranteeSection = dynamic(() => import('@/components/sections/GuaranteeSection'))
const HowWeWorkSection = dynamic(() => import('@/components/sections/HowWeWorkSection'))
const ReviewsSection = dynamic(() => import('@/components/sections/ReviewsSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const SubHeroSection = dynamic(() => import('@/components/sections/SubHeroSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))

export const metadata: Metadata = {
  title: 'Меховое ателье — Ремонт шуб, пошив, хранение',
  description: 'Меховое ателье Mary Belle — ремонт шуб из норки и соболя, пошив на заказ, хранение в меховом холодильнике, химчистка меха. Москва, м. Войковская. Семейная фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru',
  },
  openGraph: {
    title: 'Меховое ателье — Ремонт шуб, пошив, хранение',
    description: 'Меховое ателье Mary Belle — ремонт шуб из норки и соболя, пошив на заказ, хранение в меховом холодильнике, химчистка меха. Москва, м. Войковская.',
    url: 'https://mary-belle.ru',
    images: [{ url: '/images/hero-bg.jpg' }],
  },
}

/*
  Homepage structure: Trust Ladder model
  ─────────────────────────────────────
  1. Hero         → КТО МЫ (3 секунды на понимание)
  2. Services     → ЧТО ДЕЛАЕМ (визуальные карточки с фото)
  3. WhyUs        → ДОВЕРИЕ (опыт, производство, гарантия, локация)
  4. Before/After → ДОКАЗЫВАЕМ (результаты работ)
  5. Guarantee    → УСИЛИВАЕМ ДОВЕРИЕ (гарантия + логистика)
  6. HowWeWork    → ОБЪЯСНЯЕМ (6 шагов процесса)
  7. Reviews      → ПОДТВЕРЖДАЕМ (отзывы клиентов)
  8. FAQ          → СНИМАЕМ ВОЗРАЖЕНИЯ (вопросы-ответы)
  9. SubHero      → УСИЛИВАЕМ (философия + цифры)
  10. Contact     → ДЕЙСТВИЕ (форма связи)
*/

export default async function HomePage() {
  const reviews = await getReviews()
  const portfolioData = await getPortfolio()
  const beforeAfterCases = portfolioData
    .filter(p => p.beforeImage && p.afterImage)
    .slice(0, 6)
    .map((p, i) => ({
      id: i + 1,
      title: p.title,
      description: p.description,
      image: p.beforeImage!.replace('-before', '').replace('portfolio-cases/', 'before-after/').replace('portfolio-new/', 'before-after/'),
    }))

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HeroBannerCarousel />
        <ServicesSection />
        <WhyUsSection />
        <BeforeAfterSection />
        <GuaranteeSection />
        <HowWeWorkSection />
        <ReviewsSection reviews={reviews} />
        <FAQSection />
        <SubHeroSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
