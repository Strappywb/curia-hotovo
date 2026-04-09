import type { Metadata } from 'next'
import MarketingSluzbaPage from '@/views/sluzby/MarketingSluzbaPage'

export const metadata: Metadata = {
  title: 'Strategický Marketing | CURIA',
  description: 'Budujeme marketingové strategie, které generují výsledky. Performance kampaně, obsahová strategie, SEO, analytika a optimalizace.',
  alternates: { canonical: 'https://curia.cz/sluzby/marketing' },
  openGraph: {
    title: 'Strategický Marketing | CURIA',
    description: 'Budujeme marketingové strategie, které generují výsledky. Performance kampaně, obsahová strategie, SEO, analytika a optimalizace.',
  },
}

export default function Page() {
  return <MarketingSluzbaPage />
}
