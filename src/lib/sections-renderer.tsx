import React from 'react'

const STRAPI_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337'

function strapiImg(img: any): string | null {
  if (!img?.url) return null
  return img.url.startsWith('/uploads/') ? `${STRAPI_URL}${img.url}` : img.url
}

// ========== HERO BANNER ==========
function HeroBanner({ data }: { data: any }) {
  const bg = strapiImg(data.backgroundImage)
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center text-center text-white"
      style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: '#1a1a1a' }}
    >
      {data.darkOverlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative z-10 max-w-[700px] px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">{data.title}</h1>
        {data.subtitle && <p className="text-lg md:text-xl opacity-90 mb-8">{data.subtitle}</p>}
        {data.buttonText && (
          <a
            href={data.buttonLink || '#'}
            className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
          >
            {data.buttonText}
          </a>
        )}
      </div>
    </section>
  )
}

// ========== TEXT WITH IMAGE ==========
function TextWithImage({ data }: { data: any }) {
  const img = strapiImg(data.image)
  const isRight = data.imagePosition !== 'left'
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className={`flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
          <div className="flex-1">
            {data.title && <h2 className="font-serif text-3xl text-black mb-6">{data.title}</h2>}
            <div
              className="text-text-body leading-relaxed text-lg space-y-4"
              dangerouslySetInnerHTML={{ __html: data.text || '' }}
            />
          </div>
          {img && (
            <div className="flex-1">
              <img src={img} alt={data.title || ''} className="w-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ========== PROMO BLOCK ==========
function PromoBlock({ data }: { data: any }) {
  const bg = strapiImg(data.backgroundImage)
  return (
    <section
      className="relative py-20 text-center text-white"
      style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' }}
    >
      {bg && <div className="absolute inset-0 bg-black/60" />}
      <div className="relative z-10 max-w-[600px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{data.title}</h2>
        {data.description && <p className="text-lg opacity-90 mb-6">{data.description}</p>}
        {data.discount && (
          <div className="text-5xl md:text-6xl font-serif text-brand mb-6">{data.discount}</div>
        )}
        {data.promoCode && (
          <div className="inline-block bg-white/10 border border-white/30 px-8 py-3 mb-6 tracking-widest text-lg font-mono">
            {data.promoCode}
          </div>
        )}
        {data.buttonText && (
          <div>
            <a
              href={data.buttonLink || '#'}
              className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
            >
              {data.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

// ========== GALLERY ==========
function Gallery({ data }: { data: any }) {
  const cols = data.columns || '3'
  const gridClass = cols === '2' ? 'grid-cols-2' : cols === '4' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'
  const images = Array.isArray(data.images) ? data.images : []
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        {data.title && <h2 className="font-serif text-3xl text-black text-center mb-10">{data.title}</h2>}
        <div className={`grid ${gridClass} gap-4`}>
          {images.map((img: any, i: number) => {
            const src = strapiImg(img)
            if (!src) return null
            return <img key={i} src={src} alt={img.alternativeText || ''} className="w-full h-64 object-cover" />
          })}
        </div>
      </div>
    </section>
  )
}

// ========== CTA BLOCK ==========
function CtaBlock({ data }: { data: any }) {
  const styleMap: Record<string, string> = {
    gold: 'bg-brand/10 border-brand',
    dark: 'bg-[#1a1a1a] border-[#1a1a1a] text-white',
    light: 'bg-bg-warm border-border-light',
  }
  const cls = styleMap[data.style] || styleMap.gold
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <div className={`p-10 md:p-16 border text-center ${cls}`}>
          <h2 className="font-serif text-2xl md:text-3xl mb-4">{data.title}</h2>
          {data.subtitle && <p className="text-text-muted mb-8">{data.subtitle}</p>}
          <a
            href={data.buttonLink || 'tel:+74952254444'}
            className="inline-block px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

// ========== RICHTEXT BLOCK ==========
function RichtextBlock({ data }: { data: any }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <div
          className="prose-article space-y-6 text-text-body leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: data.content || '' }}
        />
      </div>
    </section>
  )
}

// ========== FAQ BLOCK ==========
function FaqBlock({ data }: { data: any }) {
  const items = Array.isArray(data.items) ? data.items : []
  return (
    <section className="py-16 md:py-24 bg-bg-warm">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="font-serif text-3xl text-black text-center mb-10">{data.title || 'Частые вопросы'}</h2>
        <div className="space-y-4">
          {items.map((item: any, i: number) => (
            <details key={i} className="bg-white border border-border-light p-6 group">
              <summary className="font-medium text-black cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <span className="text-brand text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-text-muted leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== TESTIMONIALS BLOCK ==========
function TestimonialsBlock({ data }: { data: any }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-black mb-10">{data.title || 'Отзывы клиентов'}</h2>
        <p className="text-text-muted">Отзывы загружаются из CMS автоматически</p>
      </div>
    </section>
  )
}

// ========== COUNTDOWN BLOCK ==========
function CountdownBlock({ data }: { data: any }) {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white text-center">
      <div className="max-w-[600px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl mb-8">{data.title}</h2>
        <div
          className="text-brand text-lg"
          data-countdown={data.endDate}
          data-expired={data.expiredText || 'Акция завершена'}
        >
          {/* Client-side JS will populate the countdown */}
          До окончания акции
        </div>
      </div>
    </section>
  )
}

// ========== MAIN RENDERER ==========

const componentMap: Record<string, React.FC<{ data: any }>> = {
  'page.hero-banner': HeroBanner,
  'page.text-with-image': TextWithImage,
  'page.promo-block': PromoBlock,
  'page.gallery': Gallery,
  'page.cta-block': CtaBlock,
  'page.richtext-block': RichtextBlock,
  'page.faq-block': FaqBlock,
  'page.testimonials-block': TestimonialsBlock,
  'page.countdown-block': CountdownBlock,
}

export function renderSections(sections: any[]): React.ReactNode {
  if (!sections || !Array.isArray(sections)) return null

  return sections.map((section, i) => {
    const Component = componentMap[section.__component]
    if (!Component) return null
    return <Component key={i} data={section} />
  })
}
