import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  href: string
  price?: string
  oldPrice?: string
}

export default function ProductCard({ title, description, image, href, price, oldPrice }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] bg-bg-light">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {oldPrice && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2.5 py-1 font-medium tracking-wide">
            Скидка
          </div>
        )}
      </div>
      <div className="pt-4 pb-2">
        <h3 className="font-serif text-lg text-black group-hover:text-brand transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-text-muted text-sm mt-1 line-clamp-2">{description}</p>
        {price && (
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-brand font-medium tracking-wide">{price}</span>
            {oldPrice && (
              <span className="text-text-muted text-sm line-through">{oldPrice}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
