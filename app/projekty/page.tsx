import type { Metadata } from 'next'
import ProjektyPage from '@/views/ProjektyPage'

export const metadata: Metadata = {
  title: 'Projekty | CURIA',
  description: 'Naše vybrané projekty. Od vizuální identity po digitální platformy.',
  alternates: { canonical: 'https://curia.cz/projekty' },
  openGraph: {
    title: 'Projekty | CURIA',
    description: 'Naše vybrané projekty. Od vizuální identity po digitální platformy.',
    type: 'website',
    url: 'https://curia.cz/projekty',
    images: [{ url: '/og-image.webp' }],
    locale: 'cs_CZ',
    siteName: 'CURIA',
  },
}

export default function Page() {
  return <ProjektyPage />
}
