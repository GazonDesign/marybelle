import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ru } from '@payloadcms/translations/languages/ru'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Services } from './src/collections/Services'
import { Products } from './src/collections/Products'
import { Portfolio } from './src/collections/Portfolio'
import { Prices } from './src/collections/Prices'
import { Reviews } from './src/collections/Reviews'
import { Blog } from './src/collections/Blog'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: (() => {
    const s = process.env.PAYLOAD_SECRET
    if (!s || s.length < 32) throw new Error('PAYLOAD_SECRET env var must be set (min 32 chars)')
    return s
  })(),

  i18n: {
    supportedLanguages: { ru },
    fallbackLanguage: 'ru',
  },

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Mary Belle CMS',
      icons: [{ url: '/favicon-512.png' }],
    },
    components: {
      graphics: {
        Logo: '/src/components/admin/Logo',
        Icon: '/src/components/admin/Icon',
      },
    },
  },

  editor: lexicalEditor(),

  db: sqliteAdapter({
    client: {
      url: `file:${path.resolve(dirname, 'payload.db')}`,
    },
  }),

  collections: [Users, Media, Services, Products, Portfolio, Prices, Reviews, Blog],

  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },

  sharp,

  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
})
