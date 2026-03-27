const STRAPI_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337'
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || ''

async function strapiGet<T>(endpoint: string): Promise<T[]> {
  try {
    const headers: Record<string, string> = {}
    if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`

    const res = await fetch(
      `${STRAPI_URL}/api/${endpoint}`,
      { headers, next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const json = await res.json()
    return json.data ?? []
  } catch {
    return []
  }
}

// ========== ОТЗЫВЫ ==========

export interface StrapiReview {
  name: string
  text: string
  rating: number
  service: string
  date: string | null
  visible: boolean
}

export async function getReviews() {
  const data = await strapiGet<StrapiReview>(
    'reviews?sort=date:desc&pagination%5BpageSize%5D=100&filters%5Bvisible%5D=true'
  )
  return data.map(r => ({
    name: r.name,
    text: r.text,
    rating: r.rating,
    service: r.service || '',
  }))
}

// ========== ПРАЙС ==========

export interface StrapiPrice {
  categoryName: string
  slug: string
  href: string | null
  sortOrder: number
  items: { label: string; price: string }[]
}

export async function getPrices() {
  return strapiGet<StrapiPrice>('prices?sort=sortOrder:asc&pagination%5BpageSize%5D=100&populate=items')
}

// ========== БЛОГ ==========

export interface StrapiBlogPost {
  title: string
  slug: string
  author: string | null
  excerpt: string
  content: any[] | null
  contentHtml: string | null
  imagePath: string | null
  readTime: string | null
  publishedDate: string | null
  publishedAt: string | null
}

export async function getBlogPosts() {
  return strapiGet<StrapiBlogPost>('blog-posts?sort=publishedDate:desc&pagination%5BpageSize%5D=100')
}

export async function getBlogPostBySlug(slug: string): Promise<StrapiBlogPost | null> {
  const data = await strapiGet<StrapiBlogPost>(
    `blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1`
  )
  return data[0] || null
}

// ========== ПОРТФОЛИО ==========

export interface StrapiPortfolio {
  title: string
  category: string
  description: string
  beforeImage: string | null
  afterImage: string | null
  singleImage: string | null
  duration: string | null
  sortOrder: number
}

export async function getPortfolio() {
  return strapiGet<StrapiPortfolio>('portfolios?sort=sortOrder:asc&pagination%5BpageSize%5D=100')
}

// ========== СТРАНИЦЫ (Dynamic Zones) ==========

export interface StrapiPage {
  title: string
  slug: string
  seoTitle: string | null
  seoDescription: string | null
  ogImage: any | null
  sections: any[]
}

export async function getPages() {
  return strapiGet<StrapiPage>('pages?pagination[pageSize]=100&populate=deep')
}

export async function getPageBySlug(slug: string): Promise<StrapiPage | null> {
  const data = await strapiGet<StrapiPage>(
    `pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&populate=deep`
  )
  return data[0] || null
}

// ========== ТОВАРЫ ==========

export interface StrapiProduct {
  title: string
  slug: string
  description: string | null
  category: 'shuby' | 'palto' | 'kozha'
  subcategory: string | null
  tags: string[] | null
  price: number | null
  oldPrice: number | null
  priceLabel: string | null
  images: any[] | null
  imagePaths: { path: string }[] | null
  details: { text: string }[] | null
  seoTitle: string | null
  seoDescription: string | null
}

export interface Product {
  slug: string
  title: string
  description: string
  category: 'shuby' | 'palto' | 'kozha'
  subcategory?: string
  tags?: string[]
  images: string[]
  price: string
  oldPrice?: string
  details?: string[]
}

function strapiProductToProduct(p: StrapiProduct): Product {
  // Images: prefer imagePaths (local files), fallback to Strapi media
  let images: string[] = []
  if (p.imagePaths && p.imagePaths.length > 0) {
    images = p.imagePaths.map(ip => ip.path)
  } else if (p.images && p.images.length > 0) {
    images = p.images
      .map((img: any) => {
        if (!img?.url) return null
        return img.url.startsWith('/uploads/') ? `${STRAPI_URL}${img.url}` : img.url
      })
      .filter(Boolean) as string[]
  }

  return {
    slug: p.slug,
    title: p.title,
    description: p.description || '',
    category: p.category,
    subcategory: p.subcategory || undefined,
    tags: p.tags || undefined,
    images,
    price: p.priceLabel || (p.price ? `${p.price.toLocaleString('ru-RU')} ₽` : 'Цена по запросу'),
    oldPrice: p.oldPrice ? `${p.oldPrice.toLocaleString('ru-RU')} ₽` : undefined,
    details: p.details?.map(d => d.text) || undefined,
  }
}

export async function getProducts(): Promise<Product[]> {
  const data = await strapiGet<StrapiProduct>(
    'products?sort=title:asc&pagination[pageSize]=200&populate[0]=imagePaths&populate[1]=details&populate[2]=images'
  )
  return data.map(strapiProductToProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await strapiGet<StrapiProduct>(
    `products?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&populate[0]=imagePaths&populate[1]=details&populate[2]=images`
  )
  if (!data[0]) return null
  return strapiProductToProduct(data[0])
}

export async function getProductsByCategory(category: string, subcategory?: string): Promise<Product[]> {
  let endpoint = `products?filters[category][$eq]=${category}&sort=title:asc&pagination[pageSize]=200&populate[0]=imagePaths&populate[1]=details&populate[2]=images`
  if (subcategory) {
    endpoint += `&filters[subcategory][$eq]=${subcategory}`
  }
  const data = await strapiGet<StrapiProduct>(endpoint)
  return data.map(strapiProductToProduct)
}

export async function getProductsByTag(tag: string): Promise<Product[]> {
  // multi-select stores tags as JSON array, use $containsi for partial match
  const data = await strapiGet<StrapiProduct>(
    `products?filters[tags][$containsi]=${encodeURIComponent(tag)}&sort=title:asc&pagination[pageSize]=200&populate[0]=imagePaths&populate[1]=details&populate[2]=images`
  )
  return data.map(strapiProductToProduct)
}

// ========== ФОРМАТИРОВАНИЕ ==========

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ]
  const d = new Date(dateStr)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}
