'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [loadingVideo, setLoadingVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Fade-in on mount
  useState(() => { setIsVisible(true) })

  const handlePlayClick = () => {
    if (showVideo) return
    const video = videoRef.current
    if (!video) return

    setLoadingVideo(true)
    video.preload = 'auto'
    video.load()

    const onCanPlay = () => {
      video.removeEventListener('canplay', onCanPlay)
      setLoadingVideo(false)
      setShowVideo(true)
      video.play().catch(() => {
        setShowVideo(false)
      })
    }
    video.addEventListener('canplay', onCanPlay)
  }

  const handleVideoEnded = () => {
    setShowVideo(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Static Background Image — always visible first */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />

      {/* Video — loads only on click */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="none"
        onEnded={handleVideoEnded}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Play button — bottom right */}
      {!showVideo && (
        <button
          onClick={handlePlayClick}
          className="absolute bottom-24 right-6 md:right-12 z-20 w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Воспроизвести видео"
        >
          {loadingVideo ? (
            <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <svg width="18" height="22" viewBox="0 0 20 24" fill="white" className="ml-1">
              <path d="M0 0L20 12L0 24V0Z" />
            </svg>
          )}
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase">
            Московская меховая фабрика с 1870 года
          </span>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl max-w-5xl leading-none text-gold transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Mary Belle
          <span className="sr-only"> — Меховое ателье в Москве: ремонт шуб, пошив, хранение</span>
        </h1>

        {/* Sub-headline: what we do */}
        <p
          className={`mt-6 text-lg md:text-xl font-light tracking-wide max-w-2xl text-white/80 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          Пошив, ремонт, окрашивание и хранение шуб. Работаем с мехом и кожей.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
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

        {/* Quick trust line */}
        <div
          className={`mt-8 flex items-center gap-6 text-white/50 text-xs tracking-widest uppercase transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <span>150+ лет</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>5 мин от м. Войковская</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Гарантия</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-opacity duration-1000 ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </section>
  )
}
