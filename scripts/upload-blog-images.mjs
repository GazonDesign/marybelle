/**
 * Upload blog images to Strapi media library and insert them into blog post content blocks.
 * Usage: node scripts/upload-blog-images.mjs
 */

import { readFileSync, createReadStream } from 'fs'
import { resolve, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = resolve(__dirname, '..', 'public')

const envPath = resolve(__dirname, '..', '.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = Object.fromEntries(
  envContent.split('\n').filter(l => l && !l.startsWith('#')).map(l => {
    const idx = l.indexOf('=')
    return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()]
  })
)

const STRAPI_URL = env.STRAPI_URL || 'http://127.0.0.1:1337'
const STRAPI_TOKEN = env.STRAPI_TOKEN || ''

const authHeaders = { 'Authorization': `Bearer ${STRAPI_TOKEN}` }

// ---- Image map: slug -> array of { path, alt, caption, insertAfterHeading } ----
// insertAfterHeading: 0-based index — insert image after the N-th block (before heading or at position)

const blogImages = {
  'meh-v-sovremennyh-kollekciyah': [
    { path: '/images/production/workshop-hands-sobol.jpg', alt: 'Меховые изделия в современных коллекциях', caption: 'profashion.ru', afterBlock: 0 },
    { path: '/images/hero-bg.jpg', alt: 'Современная меховая мода', caption: 'profashion.ru', afterBlock: 7 },
  ],
  'palto-s-membrannoj-tehnologiej': [
    { path: '/images/product-palto.jpg', alt: 'Элегантное пальто с мембранной технологией', caption: 'profashion.ru', afterBlock: 0 },
    { path: '/images/about-bg.jpg', alt: 'Процесс создания пальто в ателье', caption: 'profashion.ru', afterBlock: 7 },
  ],
  'novye-premialnye-brendy-meha': [
    { path: '/images/product-sobol.jpg', alt: 'Премиальные меховые изделия', caption: 'profashion.ru', afterBlock: 0 },
    { path: '/images/product-kozha.jpg', alt: 'Изделия из кожи премиум-класса', caption: 'profashion.ru', afterBlock: 6 },
  ],
  'ekomeh-v-vysokoj-mode': [
    { path: '/images/subhero-2.jpg', alt: 'Экомеховое пальто haute couture', caption: 'balenciaga.com', afterBlock: 0 },
    { path: '/images/subhero-1.jpg', alt: 'Детали кутюрной работы', caption: 'balenciaga.com', afterBlock: 6 },
  ],
  'rossijskie-mehovye-fabriki': [
    { path: '/images/production/workshop-table-01.jpg', alt: 'Производство меховых изделий', caption: 'profashion.ru', afterBlock: 0 },
    { path: '/images/product-norka.jpg', alt: 'Шуба из норки', caption: 'profashion.ru', afterBlock: 6 },
  ],
}

// ---- Upload image to Strapi media library ----

async function uploadImage(filePath) {
  const fullPath = resolve(PUBLIC_DIR, filePath.replace(/^\//, ''))
  const fileName = basename(fullPath)

  // Check if already uploaded (by name)
  const checkRes = await fetch(
    `${STRAPI_URL}/api/upload/files?filters[name][$eq]=${encodeURIComponent(fileName)}`,
    { headers: authHeaders }
  )
  if (checkRes.ok) {
    const existing = await checkRes.json()
    if (Array.isArray(existing) && existing.length > 0) {
      console.log(`   ⏭ "${fileName}" already in media library (id: ${existing[0].id})`)
      return existing[0]
    }
  }

  // Upload via multipart form
  const fileBuffer = readFileSync(fullPath)
  const blob = new Blob([fileBuffer], { type: 'image/jpeg' })

  const form = new FormData()
  form.append('files', blob, fileName)

  const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
    method: 'POST',
    headers: authHeaders,
    body: form,
  })

  if (!uploadRes.ok) {
    const err = await uploadRes.text()
    console.error(`   ✗ Upload failed for "${fileName}": ${uploadRes.status} ${err.slice(0, 200)}`)
    return null
  }

  const result = await uploadRes.json()
  const file = Array.isArray(result) ? result[0] : result
  console.log(`   ✓ Uploaded "${fileName}" (id: ${file.id}, ${file.width}x${file.height})`)
  return file
}

// ---- Build image block for Strapi Blocks ----

function makeImageBlock(mediaFile, alt, caption) {
  return {
    type: 'image',
    image: {
      name: mediaFile.name,
      alternativeText: alt || mediaFile.alternativeText || '',
      caption: caption || '',
      url: mediaFile.url,
      width: mediaFile.width,
      height: mediaFile.height,
      formats: mediaFile.formats || {},
      hash: mediaFile.hash,
      ext: mediaFile.ext,
      mime: mediaFile.mime,
      size: mediaFile.size,
      provider: mediaFile.provider || 'local',
      createdAt: mediaFile.createdAt,
      updatedAt: mediaFile.updatedAt,
      publishedAt: mediaFile.publishedAt,
      previewUrl: mediaFile.previewUrl || null,
      provider_metadata: mediaFile.provider_metadata || null,
    },
    children: [{ type: 'text', text: '' }],
  }
}

// ---- Main ----

async function main() {
  console.log('=== Uploading blog images to Strapi ===\n')

  // Fetch all blog posts
  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?pagination[pageSize]=100`,
    { headers: { ...authHeaders, 'Content-Type': 'application/json' } }
  )
  if (!res.ok) {
    console.error('Failed to fetch posts:', res.status)
    return
  }
  const data = await res.json()
  const posts = data.data || []

  for (const post of posts) {
    const slug = post.slug
    const images = blogImages[slug]
    if (!images) {
      console.log(`⏭ "${post.title}" — no images mapped\n`)
      continue
    }

    console.log(`📝 "${post.title}"`)

    // Get current content blocks
    let blocks = Array.isArray(post.content) ? [...post.content] : []

    // Remove old placeholder paragraphs (italic text starting with [Изображение:)
    blocks = blocks.filter(b => {
      if (b.type === 'paragraph' && b.children?.length === 1) {
        const child = b.children[0]
        if (child.italic && typeof child.text === 'string' && child.text.startsWith('[Изображение:')) {
          return false
        }
      }
      return true
    })

    // Upload each image and insert into blocks
    let insertOffset = 0
    for (const img of images) {
      const mediaFile = await uploadImage(img.path)
      if (!mediaFile) continue

      const imageBlock = makeImageBlock(mediaFile, img.alt, img.caption)
      const insertPos = img.afterBlock + 1 + insertOffset
      blocks.splice(Math.min(insertPos, blocks.length), 0, imageBlock)
      insertOffset++
    }

    // Update the post
    const docId = post.documentId || post.id
    const updateRes = await fetch(
      `${STRAPI_URL}/api/blog-posts/${docId}`,
      {
        method: 'PUT',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { content: blocks } }),
      }
    )

    if (updateRes.ok) {
      console.log(`   ✓ Content updated with ${blocks.length} blocks (${images.length} images added)`)

      // Publish
      const pubRes = await fetch(
        `${STRAPI_URL}/api/blog-posts/${docId}?status=published`,
        {
          method: 'PUT',
          headers: { ...authHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: {} }),
        }
      )
      console.log(`   ✓ Published: ${pubRes.ok}`)
    } else {
      const err = await updateRes.text()
      console.log(`   ✗ Update failed: ${updateRes.status} ${err.slice(0, 300)}`)
    }

    console.log()
  }

  console.log('=== Done! ===')
}

main()
