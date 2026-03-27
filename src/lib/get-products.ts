/**
 * Product data fetcher: tries Strapi first, falls back to static data.
 * Use these functions in server components instead of importing from @/data/products.
 */
import {
  getProducts as strapiGetProducts,
  getProductBySlug as strapiGetBySlug,
  getProductsByCategory as strapiGetByCategory,
  getProductsByTag as strapiGetByTag,
  type Product,
} from './strapi'

import {
  products as staticProducts,
  getProduct as staticGetProduct,
  getProductsByCategory as staticGetByCategory,
  getProductsByTag as staticGetByTag,
} from '@/data/products'

export type { Product }

export async function getAllProducts(): Promise<Product[]> {
  const data = await strapiGetProducts()
  if (data.length > 0) return data
  return staticProducts
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const product = await strapiGetBySlug(slug)
  if (product) return product
  return staticGetProduct(slug)
}

export async function getProductsByCategory(category: string, subcategory?: string): Promise<Product[]> {
  const data = await strapiGetByCategory(category, subcategory)
  if (data.length > 0) return data
  return staticGetByCategory(category, subcategory)
}

export async function getProductsByTag(tag: string): Promise<Product[]> {
  const data = await strapiGetByTag(tag)
  if (data.length > 0) return data
  return staticGetByTag(tag)
}
