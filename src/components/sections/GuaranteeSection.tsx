'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

const infoBlocks = [
  {
    num: 'P',
    title: 'Бесплатная парковка',
    description: 'Удобная парковка прямо у входа на фабрику',
  },
  {
    num: 'М',
    title: '5 минут от метро',
    description: 'м. Войковская, пешком',
  },
  {
    num: '→',
    title: 'Курьер по Москве',
    description: 'Заберём и доставим изделие',
  },
]

export default function GuaranteeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* Body scroll lock */
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    },
    []
  )

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, handleKeyDown])

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          {/* Guarantee banner */}
          <div
            className={`max-w-[900px] mx-auto mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="block w-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Image
                src="/images/gov-import/logotipy/ros-garant-1144h188.jpg"
                alt="Российская гарантия на изделия Mary Belle"
                width={1144}
                height={188}
                className="w-full h-auto"
                priority={false}
              />
            </button>
          </div>

          {/* Info blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoBlocks.map((block, i) => (
              <div
                key={block.title}
                className={`text-center p-8 bg-white border border-border-light transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <span className="font-serif text-4xl text-brand/20 block mb-4">
                  {block.num}
                </span>
                <h3 className="font-serif text-xl text-black mb-3">
                  {block.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guarantee-modal-title"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-lg bg-white p-8 shadow-2xl animate-fade-in-up">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Закрыть"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2
              id="guarantee-modal-title"
              className="font-serif text-2xl md:text-3xl text-black mb-6"
            >
              Российская гарантия — что это значит?
            </h2>

            <div className="space-y-4 text-text-body text-base leading-relaxed">
              <p>
                Мы даём гарантию на все виды работ по ремонту, перекрою и пошиву
                меховых изделий.
              </p>

              <p>Гарантия распространяется на:</p>

              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Качество швов и соединений</li>
                <li>Сохранность меха после обработки</li>
                <li>Фурнитуру и комплектующие</li>
              </ul>

              <p className="text-text-muted text-sm">
                Гарантия действует при соблюдении рекомендаций по уходу и
                хранению изделия.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Inline keyframe styles for modal animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out both;
        }
      `}</style>
    </>
  )
}
