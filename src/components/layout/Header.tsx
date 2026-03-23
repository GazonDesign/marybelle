'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, X, Search } from 'lucide-react'

const menuLinks = [
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Магазин', href: '/magazin' },
  { label: 'Трейд-ин', href: '/trejd-in' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Цены', href: '/ceny' },
  { label: 'О фабрике', href: '/o-fabrike' },
  { label: 'Контакты', href: '/kontakty' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

          <div className="flex items-center gap-6">
            {/* Phone - desktop only */}
            <a
              href="tel:+74952254444"
              className="hidden md:flex items-center gap-2 text-sm tracking-wide btn-hover"
              style={{ color: isScrolled ? '#8b6d4b' : '#fff' }}
            >
              <Phone size={16} strokeWidth={1.5} />
              <span>+7 (495) 225-44-44</span>
            </a>

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
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex">
          <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-20">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 lg:right-20 p-2 hover:opacity-60 transition-opacity"
              aria-label="Закрыть меню"
            >
              <X size={28} strokeWidth={1.5} />
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
                className="text-text-muted hover:text-brand transition-colors text-lg"
              >
                +7 (495) 225-44-44
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
