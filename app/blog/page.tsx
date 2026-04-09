import type { Metadata } from 'next'
import BlogPage from '@/views/BlogPage'

export const metadata: Metadata = {
  title: 'Blog | CURIA - Strategie, design a marketing',
  description: 'Poznatky z praxe. Strategie, taktiky a principy webdesignu, brandingu a marketingu. Bez buzzwordů.',
  alternates: { canonical: 'https://curia.cz/blog' },
  openGraph: {
    title: 'Blog | CURIA - Strategie, design a marketing',
    description: 'Poznatky z praxe. Strategie, taktiky a principy webdesignu, brandingu a marketingu. Bez buzzwordů.',
  },
}

export default function Page() {
  return <BlogPage />
}
