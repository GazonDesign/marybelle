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

export interface StrapiBlogPost {
  title: string
  slug: string
  excerpt: string
  content: string | null
  imagePath: string | null
  readTime: string | null
}

export async function getBlogPosts() {
  return strapiGet<StrapiBlogPost>('blog-posts?sort=createdAt:desc&pagination%5BpageSize%5D=100')
}

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
