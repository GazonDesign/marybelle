import React from 'react'

interface TextChild {
  type: 'text'
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
}

interface LinkChild {
  type: 'link'
  url: string
  children: TextChild[]
}

type InlineNode = TextChild | LinkChild

interface ParagraphBlock {
  type: 'paragraph'
  children: InlineNode[]
}

interface HeadingBlock {
  type: 'heading'
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: InlineNode[]
}

interface ListBlock {
  type: 'list'
  format: 'ordered' | 'unordered'
  children: { type: 'list-item'; children: InlineNode[] }[]
}

interface ImageBlock {
  type: 'image'
  image: {
    url: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
  }
}

interface QuoteBlock {
  type: 'quote'
  children: InlineNode[]
}

interface CodeBlock {
  type: 'code'
  children: TextChild[]
}

type Block = ParagraphBlock | HeadingBlock | ListBlock | ImageBlock | QuoteBlock | CodeBlock

function renderInline(nodes: InlineNode[]): React.ReactNode[] {
  return nodes.map((node, i) => {
    if (node.type === 'link') {
      return (
        <a key={i} href={node.url} className="text-brand underline hover:no-underline">
          {renderInline(node.children)}
        </a>
      )
    }

    let el: React.ReactNode = node.text
    if (!el) return null
    if (node.bold) el = <strong key={`b${i}`}>{el}</strong>
    if (node.italic) el = <em key={`i${i}`}>{el}</em>
    if (node.underline) el = <u key={`u${i}`}>{el}</u>
    if (node.strikethrough) el = <s key={`s${i}`}>{el}</s>
    if (node.code) el = <code key={`c${i}`} className="bg-gray-100 px-1 rounded">{el}</code>
    return <React.Fragment key={i}>{el}</React.Fragment>
  })
}

export function renderBlocks(blocks: Block[]): React.ReactNode {
  if (!blocks || !Array.isArray(blocks)) return null

  return blocks.map((block, i) => {
    switch (block.type) {
      case 'paragraph': {
        const content = renderInline(block.children)
        // Skip empty paragraphs
        const text = block.children.map(c => ('text' in c ? c.text : '')).join('')
        if (!text.trim()) return null
        return <p key={i}>{content}</p>
      }

      case 'heading': {
        const Tag = `h${block.level}` as React.ElementType
        const cls = block.level === 2
          ? 'font-serif text-2xl text-black mt-12 mb-4'
          : block.level === 3
            ? 'font-serif text-xl text-black mt-8 mb-3'
            : 'font-serif text-lg text-black mt-6 mb-2'
        return <Tag key={i} className={cls}>{renderInline(block.children)}</Tag>
      }

      case 'list': {
        const Tag = block.format === 'ordered' ? 'ol' : 'ul'
        const cls = block.format === 'ordered' ? 'list-decimal pl-6' : 'list-disc pl-6'
        return (
          <Tag key={i} className={cls}>
            {block.children.map((item, j) => (
              <li key={j}>{renderInline(item.children)}</li>
            ))}
          </Tag>
        )
      }

      case 'image': {
        const img = block.image
        if (!img?.url) return null
        const strapiUrl = process.env.STRAPI_URL || 'http://127.0.0.1:1337'
        const src = img.url.startsWith('/uploads/') ? `${strapiUrl}${img.url}` : img.url
        return (
          <figure key={i} className="my-10">
            <img
              src={src}
              alt={img.alternativeText || ''}
              width={img.width}
              height={img.height}
              className="w-full object-cover"
            />
            {img.caption && (
              <figcaption
                className="text-xs text-text-muted text-center mt-2"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' } as React.CSSProperties}
              >
                {img.caption}
              </figcaption>
            )}
          </figure>
        )
      }

      case 'quote':
        return (
          <blockquote key={i} className="border-l-4 border-brand pl-6 italic text-text-muted my-6">
            {renderInline(block.children)}
          </blockquote>
        )

      case 'code':
        return (
          <pre key={i} className="bg-gray-50 p-4 overflow-x-auto text-sm rounded">
            <code>{block.children.map(c => c.text).join('')}</code>
          </pre>
        )

      default:
        return null
    }
  })
}
