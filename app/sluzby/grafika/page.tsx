import type { Metadata } from 'next'
import GrafikaSluzbaPage from '@/views/sluzby/GrafikaSluzbaPage'

export const metadata: Metadata = {
  title: 'Grafika & Vizuál | CURIA',
  description: 'Tvoříme vizuál, který prodává. Logo, firemní materiály, prezentace, sociální obsah i tiskové podklady.',
  alternates: { canonical: 'https://curia.cz/sluzby/grafika' },
  openGraph: {
    title: 'Grafika & Vizuál | CURIA',
    description: 'Tvoříme vizuál, který prodává. Logo, firemní materiály, prezentace, sociální obsah i tiskové podklady.',
  },
}

export default function Page() {
  return <GrafikaSluzbaPage />
}
