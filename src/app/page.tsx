import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import SubHeroSection from '@/components/sections/SubHeroSection'
import ContactSection from '@/components/sections/ContactSection'

/*
  Homepage structure: Trust Ladder model
  ─────────────────────────────────────
  1. Hero         → КТО МЫ (3 секунды на понимание)
  2. Services     → ЧТО ДЕЛАЕМ (визуальные карточки с фото)
  3. Before/After → ДОКАЗЫВАЕМ (результаты работ)
  4. HowWeWork    → ОБЪЯСНЯЕМ (6 шагов процесса)
  5. Reviews      → ПОДТВЕРЖДАЕМ (отзывы клиентов)
  6. SubHero      → УСИЛИВАЕМ (философия + цифры)
  7. Contact      → ДЕЙСТВИЕ (форма связи)
*/

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
        <HowWeWorkSection />
        <ReviewsSection />
        <SubHeroSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
