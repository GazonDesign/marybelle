'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, X, Search } from 'lucide-react'

const menuLinks = [
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Магазин', href: '/magazin' },
  { label: 'Цены', href: '/ceny' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Наша мастерская', href: '/nasha-masterskaya' },
  { label: 'Трейд-ин', href: '/trejd-in' },
  { label: 'Российская гарантия', href: '/garantiya' },
  { label: 'Блог', href: '/blog' },
  { label: 'О фабрике', href: '/o-fabrike' },
  { label: 'Контакты', href: '/kontakty' },
]

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(!isHomePage)

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-[70px] px-6 md:px-12 lg:px-[170px]">
          <Link href="/" className="relative h-[40px] w-[140px] block">
            <Image
              src="/images/logo-white.svg"
              alt="Mary Belle"
              fill
              className={`object-contain object-left transition-opacity duration-300 ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
            <Image
              src="/images/logo-dark.svg"
              alt="Mary Belle"
              fill
              className={`object-contain object-left transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
              priority
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Phones - desktop only */}
            <div className="hidden md:flex items-center gap-2" style={{ color: isScrolled ? '#8b6d4b' : '#fff' }}>
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" className="shrink-0" />
              <div className="flex flex-col text-sm leading-tight tracking-wide">
                <a href="tel:+74952254444" className="btn-hover">+7 (495) 225-44-44</a>
                <a href="tel:+79670555978" className="btn-hover" data-direct-call>+7 (967) 055-59-78</a>
              </div>
            </div>

            {/* Social icons — mobile + desktop */}
            <div className="flex items-center gap-2.5">
              <a href="https://t.me/JuliaDenisova71" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: isScrolled ? '#666' : '#fff' }} className="transition-colors duration-300"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.48-.428-.012-1.252-.242-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://wa.me/79670555978?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: isScrolled ? '#666' : '#fff' }} className="transition-colors duration-300"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a href="https://vk.com/marybelle.atelie" target="_blank" rel="noopener noreferrer" aria-label="VK" className="hover:opacity-70 transition-opacity">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: isScrolled ? '#666' : '#fff' }} className="transition-colors duration-300"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.048-2.763-5.339-2.763-5.806 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.473 2.272 4.64 2.865 4.64.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.746c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.153-3.574 2.153-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z"/></svg>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOLNyLNiujTPMSvqXxb7ycSKzOE8olWY_pbGEExpmyKrJmRV2yA" target="_blank" rel="noopener noreferrer" aria-label="Max" className="hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: isScrolled ? '#666' : '#fff' }} className="transition-colors duration-300"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>

            {/* Burger menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col gap-1.5 w-7 btn-hover"
              aria-label="Открыть меню"
            >
              <span
                className={`h-[2px] w-full transition-all duration-300 ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}
              />
              <span
                className={`h-[2px] w-full transition-all duration-300 ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-700 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex">
          <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-20">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 lg:right-20 p-2 hover:opacity-60 transition-opacity"
              aria-label="Закрыть меню"
            >
              <X size={40} strokeWidth={1.5} className="text-black" aria-hidden="true" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {menuLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl lg:text-[45px] text-black hover:text-brand transition-colors duration-300"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${index * 0.1}s`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12 text-center">
              <a
                href="tel:+74952254444"
                className="text-text-muted hover:text-brand transition-colors text-lg block"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="tel:+79670555978"
                className="text-text-muted hover:text-brand transition-colors text-lg block mt-1"
                data-direct-call
              >
                +7 (967) 055-59-78
              </a>
              <p className="text-text-muted text-sm mt-2">
                Пн–Пт 11:00–20:00, Сб–Вс 12:00–18:00
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div
            className="hidden lg:block w-[40%] bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/menu-bg.jpg)',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 0.7s ease 0.2s',
            }}
          />
        </div>
      </div>
    </>
  )
}
