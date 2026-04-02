import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-warm px-6 text-center">
      <Link href="/" className="mb-12">
        <img src="/images/logo-dark.svg" alt="Mary Belle" className="h-10" />
      </Link>

      <h1 className="font-serif text-5xl md:text-7xl text-black mb-4">404</h1>
      <p className="text-text-muted text-lg mb-10 max-w-md">
        Страница не найдена. Возможно, она была перемещена или удалена.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-10 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
        >
          На главную
        </Link>
        <Link
          href="/uslugi"
          className="px-10 py-4 border border-brand/30 text-brand font-light tracking-widest text-sm btn-shimmer-outline"
        >
          Наши услуги
        </Link>
      </div>

      <a
        href="tel:+74952254444"
        className="mt-12 text-text-muted hover:text-brand transition-colors"
      >
        +7 (495) 225-44-44
      </a>
    </div>
  )
}
