import type { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mary-belle.ru'

  // Статические страницы
  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/uslugi`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/uslugi/remont-shub`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/uslugi/remont-kozhi`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/uslugi/poshiv-shub`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/uslugi/mehovoj-holodilnik`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/uslugi/okrashivanie`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/uslugi/himchistka`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/uslugi/perekroj`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/uslugi/remont-palto`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/uslugi/remont-brendovoj-odezhdy`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/uslugi/remont-shub-vojkovskaya`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/magazin`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/magazin/shuby/norka`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/magazin/shuby/karakul`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/magazin/shuby/sobol`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/magazin/palto`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/magazin/kozha`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/trejd-in`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/ceny`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/o-fabrike`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/kontakty`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/kakoj-meh-samyj-teplyj`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/garantiya`, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${baseUrl}/politika-konfidencialnosti`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Динамические страницы товаров
  const productPages = products.map((product) => ({
    url: `${baseUrl}/magazin/product/${product.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages]
}
