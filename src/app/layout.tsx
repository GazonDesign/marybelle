import type { Metadata } from 'next'
import { DM_Serif_Display, Libre_Franklin } from 'next/font/google'

const dmSerif = DM_Serif_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-serif',
})

const libreFranklin = Libre_Franklin({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: {
    default: 'Mary Belle — Московская меховая фабрика с 1870 года',
    template: '%s | Mary Belle',
  },
  description:
    'Пошив, ремонт и хранение меховых изделий премиум-класса. Шубы из норки и соболя, пальто, кожаные изделия. Московская меховая фабрика с 1870 года.',
  metadataBase: new URL('https://mary-belle.ru'),
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-512.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Mary Belle',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${dmSerif.variable} ${libreFranklin.variable}`}>
      <head>
        {/* Preconnect для доменов, к которым точно будем обращаться (полный handshake заранее) */}
        <link rel="preconnect" href="//mc.yandex.ru" />
        {/* DNS prefetch для доменов, которые подключаются позже или условно */}
        <link rel="dns-prefetch" href="//script.marquiz.ru" />
        <link rel="dns-prefetch" href="//quiz.marquiz.ru" />
        <link rel="dns-prefetch" href="//cdn.envybox.io" />
        <link rel="dns-prefetch" href="//vk.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
