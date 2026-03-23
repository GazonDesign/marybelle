import Link from 'next/link'

const serviceLinks = [
  { label: 'Ремонт шуб', href: '/uslugi/remont-shub' },
  { label: 'Ремонт кожи', href: '/uslugi/remont-kozhi' },
  { label: 'Индивидуальный пошив', href: '/uslugi/poshiv-shub' },
  { label: 'Меховой холодильник', href: '/uslugi/mehovoj-holodilnik' },
  { label: 'Химчистка', href: '/uslugi/himchistka' },
  { label: 'Окрашивание', href: '/uslugi/okrashivanie' },
]

const catalogLinks = [
  { label: 'Шубы из норки', href: '/magazin/shuby/norka' },
  { label: 'Шубы из соболя', href: '/magazin/shuby/sobol' },
  { label: 'Пальто', href: '/magazin/palto' },
  { label: 'Большие размеры', href: '/magazin/bolshie-razmery' },
  { label: 'Изделия из кожи', href: '/magazin/kozha' },
]

const infoLinks = [
  { label: 'О фабрике', href: '/o-fabrike' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Цены', href: '/ceny' },
  { label: 'Трейд-ин', href: '/trejd-in' },
  { label: 'Контакты', href: '/kontakty' },
]

export default function Footer() {
  return (
    <footer className="bg-white py-16 md:py-24 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-6">Mary Belle</h3>
            <p className="text-text-muted font-light text-sm leading-relaxed mb-4">
              Семейная меховая фабрика с 1870 года. Пошив, ремонт и хранение
              меховых изделий премиум-класса.
            </p>
            <div className="space-y-2 text-sm text-text-muted">
              <a
                href="https://yandex.ru/maps/-/CLQ-yI2e"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand transition-colors"
              >
                Москва, 1-Новоподмосковный пер., д. 2/1
              </a>
              <a
                href="tel:+74952254444"
                className="block hover:text-brand transition-colors"
              >
                +7 (495) 225-44-44
              </a>
              <a
                href="tel:+79670555978"
                className="block hover:text-brand transition-colors"
              >
                +7 (967) 055-59-78
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">
              Услуги
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-base font-light link-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">
              Каталог
            </h4>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-base font-light link-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">
              Информация
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-base font-light link-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-body text-xs uppercase tracking-wider font-medium">
              &copy; {new Date().getFullYear()} Mary Belle. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/politika-konfidencialnosti"
                className="text-text-muted text-xs hover:text-black transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/oferta"
                className="text-text-muted text-xs hover:text-black transition-colors"
              >
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
