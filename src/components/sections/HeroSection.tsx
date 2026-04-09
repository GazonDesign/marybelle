import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <div>
          <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase">
            Московская меховая фабрика с 1870 года
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl max-w-5xl leading-none text-gold">
          Mary Belle
          <span className="sr-only"> — Меховое ателье в Москве: ремонт шуб, пошив, хранение</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl font-light tracking-wide max-w-2xl text-white/80">
          Пошив, ремонт, окрашивание и хранение шуб. Работаем с мехом и кожей.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/uslugi"
            className="px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
          >
            Наши услуги
          </Link>
          <Link
            href="/magazin"
            className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm btn-shimmer-outline"
          >
            Каталог изделий
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-6 text-white/50 text-xs tracking-widest uppercase">
          <span>150+ лет</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>5 мин от м. Войковская</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Гарантия</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-70">
        <ChevronDown size={32} strokeWidth={1} aria-hidden="true" />
      </div>
    </section>
  )
}
