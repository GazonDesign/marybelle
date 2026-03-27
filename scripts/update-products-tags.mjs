/**
 * Update existing Strapi products with tags, oldPrice, and priceLabel.
 * These fields were added to the schema after the initial seed.
 * Usage: node scripts/update-products-tags.mjs
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337'
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || ''

const headers = { 'Content-Type': 'application/json' }
if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`

function parsePrice(priceStr) {
  if (!priceStr) return { oldPrice: null, priceLabel: null }
  const digits = priceStr.replace(/[^\d]/g, '')
  if (digits && !isNaN(Number(digits))) return { oldPrice: Number(digits), priceLabel: null }
  return { oldPrice: null, priceLabel: priceStr }
}

// Map: slug → { tags, oldPrice, priceLabel }
const updates = {
  'odeyalo-pudra': { tags: ['sobol'] },
  'kimono-bluejeans': { tags: ['norka'] },
  'zhanna-norka': { tags: ['norka'] },
  'rayusha-norka-black': { tags: ['norka'] },
  'dunyasha-scanblack': { tags: ['norka'] },
  'kozlik-norka-kashmir': { tags: ['karakul', 'norka'] },
  'norka-classic': { tags: ['norka'] },
  'afgan-karakul': { tags: ['karakul'] },
  // Новая коллекция
  'polushubok-norka-bezhevyj': { tags: ['norka'] },
  'shuba-karakul-seraya': { tags: ['karakul'] },
  'shuba-sobol-korichnevaya': { tags: ['sobol'] },
  'palto-norka-bezhevoe': { tags: ['norka'] },
  'polushubok-norka-korichnevyj': { tags: ['norka'] },
  'shuba-karakul-seraya-oversajz': { tags: ['karakul'] },
  'zhaket-karakul-kimono': { tags: ['karakul'] },
  'shuba-norka-korichnevaya-svobodnyj': { tags: ['norka'] },
  'zhaket-karakul-korichnevyj-norka': { tags: ['karakul', 'norka'] },
  'palto-karakul-korichnevoe': { tags: ['karakul'] },
  'polushubok-karakul-chernyj': { tags: ['karakul'] },
  'kurtka-mehovaya-zelenaya': { tags: ['norka'] },
  'shuba-karakul-sinyaya': { tags: ['karakul'] },
  'shuba-karakul-norka-vorotnik': { tags: ['karakul', 'norka'] },
  'shuba-norka-svetlo-seraya': { tags: ['norka'] },
  'zhaket-karakul-biryuzovyj': { tags: ['karakul'] },
  'zhaket-karakul-chernyj-kozha': { tags: ['karakul'] },
  // Большие размеры
  'br-norka-pepelno-rozovaya': { tags: ['bolshie-razmery', 'norka'], oldPrice: 215000 },
  'br-model-vishnya': { tags: ['bolshie-razmery', 'norka'], priceLabel: 'Только на заказ' },
  'br-pudrovaya-roza': { tags: ['bolshie-razmery', 'norka'], oldPrice: 220000 },
  'br-korotkovorsovaya-1': { tags: ['bolshie-razmery', 'norka'], priceLabel: 'Только на заказ' },
  'br-skandinavskaya-5557': { tags: ['bolshie-razmery', 'norka'] },
  'br-korotkovorsovaya-2': { tags: ['bolshie-razmery', 'norka'], oldPrice: 315000 },
  'br-skandinavskaya-5614': { tags: ['bolshie-razmery', 'norka'] },
  'br-skandinavskaya-5616': { tags: ['bolshie-razmery', 'norka'] },
  'br-rubashka': { tags: ['bolshie-razmery', 'norka'], oldPrice: 210000 },
  'br-skandinavskaya-5653': { tags: ['bolshie-razmery', 'norka'] },
  'br-pryamoj-siluet': { tags: ['bolshie-razmery', 'norka'] },
  'br-korotkovorsovaya-3': { tags: ['bolshie-razmery', 'norka'], oldPrice: 165000 },
  'br-skandinavskaya-5686': { tags: ['bolshie-razmery', 'norka'], oldPrice: 100000 },
  'br-skandinavskaya-5681': { tags: ['bolshie-razmery', 'norka'] },
  'br-korotkovorsovaya-roskoshnaya': { tags: ['bolshie-razmery', 'norka'] },
  'br-skandinavskaya-5697': { tags: ['bolshie-razmery', 'norka'], oldPrice: 210000 },
  'br-skandinavskaya-5701': { tags: ['bolshie-razmery', 'norka'] },
  'br-skandinavskaya-5699': { tags: ['bolshie-razmery', 'norka'] },
  'br-korotkovorsovaya-5702': { tags: ['bolshie-razmery', 'norka'] },
  'br-skandinavskaya-5705': { tags: ['bolshie-razmery', 'norka'] },
  'br-skandinavskaya-5707': { tags: ['bolshie-razmery', 'norka'], priceLabel: 'Только на заказ' },
  'br-model-fiona': { tags: ['bolshie-razmery', 'norka'], priceLabel: 'Только на заказ' },
}

async function main() {
  const slugs = Object.keys(updates)
  console.log(`Updating ${slugs.length} products...`)

  let ok = 0, fail = 0, skip = 0

  for (const slug of slugs) {
    // Find product by slug
    const res = await fetch(
      `${STRAPI_URL}/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1`,
      { headers }
    )
    if (!res.ok) { fail++; console.error(`  ❌ ${slug}: fetch error ${res.status}`); continue }
    const json = await res.json()
    const product = json.data?.[0]
    if (!product) { skip++; console.log(`  ⏭  ${slug}: not found`); continue }

    const upd = updates[slug]
    const body = { data: {} }
    if (upd.tags) body.data.tags = upd.tags
    if (upd.oldPrice) body.data.oldPrice = upd.oldPrice
    if (upd.priceLabel) body.data.priceLabel = upd.priceLabel

    const putRes = await fetch(
      `${STRAPI_URL}/api/products/${product.documentId}?status=published`,
      { method: 'PUT', headers, body: JSON.stringify(body) }
    )
    if (!putRes.ok) {
      fail++
      const err = await putRes.text()
      console.error(`  ❌ ${slug}: update error ${putRes.status} ${err}`)
    } else {
      ok++
      process.stdout.write(`\r  ${ok}/${slugs.length} updated`)
    }
  }

  console.log(`\n\n✅ Done: ${ok} updated, ${fail} failed, ${skip} not found`)
}

main().catch(console.error)
