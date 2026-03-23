import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  href: string
  price?: string
}

export default function ProductCard({ title, description, image, href, price }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] bg-bg-light">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-4 pb-2">
        <h3 className="font-serif text-lg text-black group-hover:text-brand transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-text-muted text-sm mt-1 line-clamp-2">{description}</p>
        {price && (
          <p className="text-brand font-medium mt-2 tracking-wide">{price}</p>
        )}
      </div>
    </Link>
  )
}
