import type { Metadata } from 'next'
import WebdesignSluzbaPage from '@/views/sluzby/WebdesignSluzbaPage'

export const metadata: Metadata = {
  title: 'Webdesign | CURIA - Weby, které prodávají',
  description: 'Navrhujeme a stavíme weby, které fungují jako systém. Landing pages, e-commerce, firemní weby, CMS řešení.',
  alternates: { canonical: 'https://curia.cz/sluzby/webdesign' },
  openGraph: {
    title: 'Webdesign | CURIA - Weby, které prodávají',
    description: 'Navrhujeme a stavíme weby, které fungují jako systém. Landing pages, e-commerce, firemní weby, CMS řešení.',
  },
}

export default function Page() {
  return <WebdesignSluzbaPage />
}
