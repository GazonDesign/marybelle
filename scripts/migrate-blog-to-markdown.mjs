/**
 * Migrate blog contentHtml → content (Markdown) in Strapi
 * Usage: node scripts/migrate-blog-to-markdown.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
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
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${STRAPI_TOKEN}`,
}

function htmlToMarkdown(html) {
  if (!html) return ''
  let md = html
    // figcaption with user-select:none — convert to small italic with html for non-selectable
    .replace(/<figure>\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s+style="[^"]*"\s*\/?\s*>\s*<figcaption[^>]*>([^<]*)<\/figcaption>\s*<\/figure>/gi,
      (_, src, alt, caption) => `\n\n![${alt}](${src})\n<p style="font-size:12px;color:#999;text-align:center;user-select:none;-webkit-user-select:none">${caption}</p>\n\n`)
    // standalone images
    .replace(/<img\s+src="([^"]+)"\s+alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
    // h2
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    // h3
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    // paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    // bold
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b>(.*?)<\/b>/gi, '**$1**')
    // italic
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    // links
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // br
    .replace(/<br\s*\/?>/gi, '\n')
    // remaining figure/figcaption tags
    .replace(/<\/?figure[^>]*>/gi, '')
    .replace(/<figcaption[^>]*>.*?<\/figcaption>/gi, '')
    // cleanup extra newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return md
}

async function migrate() {
  console.log('Fetching blog posts from Strapi...\n')

  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?pagination[pageSize]=100&status=published`,
    { headers }
  )
  const { data: posts } = await res.json()
  console.log(`Found ${posts.length} posts\n`)

  for (const post of posts) {
    const html = post.contentHtml
    if (!html) {
      console.log(`⏭ ${post.title} — no contentHtml, skipping`)
      continue
    }

    const markdown = htmlToMarkdown(html)

    const updateRes = await fetch(
      `${STRAPI_URL}/api/blog-posts/${post.documentId}?status=published`,
      {
        method: 'PUT',
        headers,
        body: JSON.stringify({ data: { content: markdown } }),
      }
    )

    if (updateRes.ok) {
      console.log(`✓ ${post.title}`)
    } else {
      const err = await updateRes.json()
      console.log(`✗ ${post.title}: ${JSON.stringify(err.error?.message || err)}`)
    }
  }

  console.log('\nDone! Content migrated to Markdown.')
}

migrate()
