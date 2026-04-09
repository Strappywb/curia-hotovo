import type { Metadata } from 'next'
import KarieraPage from '@/views/KarieraPage'

export const metadata: Metadata = {
  title: 'Kariéra | CURIA - Přidej se k nám',
  description: 'Hledáme designéry, developery a stratégy, kteří chtějí pracovat na prémiových projektech. Pošli nám své portfolio.',
  alternates: { canonical: 'https://curia.cz/kariera' },
  openGraph: {
    title: 'Kariéra | CURIA - Přidej se k nám',
    description: 'Hledáme designéry, developery a stratégy, kteří chtějí pracovat na prémiových projektech.',
  },
}

export default function Page() {
  return <KarieraPage />
}
