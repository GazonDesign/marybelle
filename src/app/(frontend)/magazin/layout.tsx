import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин шуб и пальто в Москве — Mary Belle | Каталог меховых изделий',
  description: 'Магазин меховых изделий Mary Belle: шубы из норки, соболя, каракуля, пальто и кожаные изделия. Московская фабрика с 1870 года.',
  alternates: {
    canonical: 'https://mary-belle.ru/magazin',
  },
}

export default function MagazinLayout({ children }: { children: React.ReactNode }) {
  return children
}
