'use client'

import { useCallback, useEffect, useState } from 'react'

const gallery = [
  { src: '/images/gov-import/remont-do-posle/remont-shub.jpg', alt: 'Ремонт шубы из норки — результат работы мастера' },
  { src: '/images/gov-import/remont-do-posle/remont-shub-1.jpg', alt: 'Реставрация меховой шубы — до и после' },
  { src: '/images/gov-import/remont-do-posle/remont061225.jpg', alt: 'Ремонт мехового изделия — восстановление мездры' },
  { src: '/images/gov-import/remont-do-posle/remont26.jpg', alt: 'Ремонт шубы — восстановление меха' },
  { src: '/images/gov-import/remont-do-posle/restovratsiya.jpg', alt: 'Реставрация шубы из норки — ателье Mary Belle' },
  { src: '/images/gov-import/proizvodstvo/s-ceh-s.jpg', alt: 'Цех ремонта меховых изделий — Mary Belle' },
  { src: '/images/gov-import/proizvodstvo/sh-ceh-sh.jpg', alt: 'Мастер за работой — ремонт норковой шубы' },
]

export default function RemontShubGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (lightbox === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev! + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev! - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox])

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev! + 1) % gallery.length)
  }, [])

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev! - 1 + gallery.length) % gallery.length)
  }, [])

  return (
    <>
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-8">Наши работы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors text-3xl z-10"
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            &times;
          </button>
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white/50 text-sm tracking-wider">
            {lightbox + 1} / {gallery.length}
          </div>
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors text-4xl z-10"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Предыдущее фото"
          >
            &#8249;
          </button>
          <img
            src={gallery[lightbox].src}
            alt={gallery[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors text-4xl z-10"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Следующее фото"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  )
}
