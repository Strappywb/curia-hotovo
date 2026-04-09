import type { Metadata } from 'next'
import Index from '@/views/Index'

export const metadata: Metadata = {
  title: 'CURIA | Webdesign, Branding & Marketing Studio',
  description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online.',
  keywords: 'webdesign, branding, marketing, tvorba webových stránek, firemní identita, digitální marketing Praha',
  alternates: { canonical: 'https://curia.cz/' },
  openGraph: {
    title: 'CURIA | Webdesign, Branding & Marketing Studio',
    description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online.',
    type: 'website',
    url: 'https://curia.cz/',
    images: [{ url: '/og-image.webp' }],
    locale: 'cs_CZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CURIA | Webdesign, Branding & Marketing Studio',
    description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing.',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return <Index />
}
