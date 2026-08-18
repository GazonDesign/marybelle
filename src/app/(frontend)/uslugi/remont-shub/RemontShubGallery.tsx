'use client'

import { useCallback, useEffect, useState } from 'react'

const gallery = [
  { src: '/images/before-after/remont-razryv.jpg', alt: 'Ремонт разрыва норковой шубы — до и после' },
  { src: '/images/before-after/remont-banner-razryv.jpg', alt: 'Зашить разрыв на шубе — результат ремонта' },
  { src: '/images/before-after/remont-lokti.jpg', alt: 'Устранение потёртостей на локтях шубы — до и после' },
  { src: '/images/before-after/remont-borta.jpg', alt: 'Реставрация бортов каракулевой шубы — до и после' },
  { src: '/images/before-after/remont-podmyshki.jpg', alt: 'Ремонт подмышек шубы — до и после' },
  { src: '/images/before-after/remont-banner-furnitura.jpg', alt: 'Замена фурнитуры на шубе — до и после' },
  { src: '/images/before-after/remont-vorotnik.jpg', alt: 'Замена воротника на шубе — до и после' },
  { src: '/images/before-after/remont-banner-vorotnik.jpg', alt: 'Замена воротника норковой шубы — результат' },
  { src: '/images/before-after/remont-banner-perekroj.jpg', alt: 'Полный перекрой шубы — до и после' },
]

export default function RemontShubGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  // Первые 4 фото сразу, дальше — по кнопке «Смотреть ещё»: скрытые снимки
  // не попадают в DOM и не грузятся (см. такой же приём в ServicePageTemplate)
  const [visible, setVisible] = useState(4)

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
          {/* Мобайл: один снимок в ряд, десктоп: два (было 4 — кадры до/после
              слишком мелкие, деталей ремонта не разглядеть) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {gallery.slice(0, visible).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          {visible < gallery.length && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + 8)}
                className="px-10 py-3.5 border border-brand text-brand font-light tracking-widest text-sm hover:bg-brand hover:text-white transition-colors"
              >
                Смотреть ещё ({gallery.length - visible})
              </button>
            </div>
          )}
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
