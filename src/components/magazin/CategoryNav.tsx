import Link from 'next/link'

const categories = [
  { title: 'Все', href: '/magazin' },
  { title: 'Норка', href: '/magazin/shuby/norka' },
  { title: 'Каракуль', href: '/magazin/shuby/karakul' },
  { title: 'Соболь', href: '/magazin/shuby/sobol' },
  { title: 'Пальто', href: '/magazin/palto' },
  { title: 'Кожа', href: '/magazin/kozha' },
  { title: 'Большие размеры', href: '/magazin/bolshie-razmery' },
]

export default function CategoryNav({ active }: { active: string }) {
  return (
    <div className="border-b border-border-light">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-[60px] py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`px-4 py-2 text-sm tracking-wide border transition-all ${
                active === cat.href
                  ? 'bg-brand text-white border-brand'
                  : 'bg-white text-text-muted border-border-light hover:border-brand hover:text-brand'
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
