import type { Metadata } from 'next'
import AboutPage from '@/views/AboutPage'

export const metadata: Metadata = {
  title: 'O nás | CURIA - Kreativní studio Praha',
  description: 'CURIA je studio zaměřené na strategický design a technickou exekuci. Webdesign, branding, marketing a aplikace pro ambiciózní firmy.',
  alternates: { canonical: 'https://curia.cz/o-nas' },
  openGraph: {
    title: 'O nás | CURIA - Kreativní studio Praha',
    description: 'CURIA je studio zaměřené na strategický design a technickou exekuci. Webdesign, branding, marketing a aplikace pro ambiciózní firmy.',
  },
}

export default function Page() {
  return <AboutPage />
}
