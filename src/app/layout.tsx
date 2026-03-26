import type { Metadata } from 'next'

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
    <html lang="ru" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
