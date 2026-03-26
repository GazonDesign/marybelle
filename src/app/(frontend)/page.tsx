import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import GuaranteeSection from '@/components/sections/GuaranteeSection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import { getReviews } from '@/lib/strapi'
import FAQSection from '@/components/sections/FAQSection'
import SubHeroSection from '@/components/sections/SubHeroSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Меховое ателье в Москве — Ремонт шуб, пошив, хранение | Mary Belle с 1870',
  description: 'Меховое ателье Mary Belle — ремонт шуб из норки и соболя, пошив на заказ, хранение в меховом холодильнике, химчистка меха. Москва, м. Войковская. Семейная фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru',
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

  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
