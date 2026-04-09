import type { Metadata } from 'next'
import BrandingSluzbaPage from '@/views/sluzby/BrandingSluzbaPage'

export const metadata: Metadata = {
  title: 'Branding & Identita | CURIA',
  description: 'Budujeme identity značek, které dělají víc než jen dobře vypadají. Logo, vizuální identita, brand strategie, naming, rebranding.',
  alternates: { canonical: 'https://curia.cz/sluzby/branding' },
  openGraph: {
    title: 'Branding & Identita | CURIA',
    description: 'Budujeme identity značek, které dělají víc než jen dobře vypadají. Logo, vizuální identita, brand strategie, naming, rebranding.',
  },
}

export default function Page() {
  return <BrandingSluzbaPage />
}
