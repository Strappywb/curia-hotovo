import type { Metadata } from 'next'
import Script from 'next/script'
import CenaWebuPage from '@/views/blog/CenaWebuPage'

export const metadata: Metadata = {
  title: 'Kolik stojí web v roce 2026: Reálné ceny a co za ně dostanete | CURIA Blog',
  description: 'Cena webu od 15 000 Kč po statisíce. Kompletní přehled cen webových stránek podle typu: vizitka, firemní web, e-shop, webová aplikace. Co ovlivňuje cenu a jak ušetřit.',
  keywords: 'kolik stojí web, cena webu, cena webových stránek, tvorba webu cena, kolik stojí webové stránky, cena webdesignu, web cena 2026, web na míru cena, firemní web cena, e-shop cena',
  alternates: { canonical: 'https://curia.cz/blog/cena-webu' },
  openGraph: {
    title: 'Kolik stojí web v roce 2026: Reálné ceny a co za ně dostanete | CURIA Blog',
    description: 'Cena webu od 15 000 Kč po statisíce. Kompletní přehled cen webových stránek podle typu — vizitka, firemní web, e-shop, aplikace.',
    type: 'article',
    url: 'https://curia.cz/blog/cena-webu',
    images: [{ url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kolik stojí web v roce 2026: Reálné ceny a co za ně dostanete",
  "description": "Cena webu od 15 000 Kč po statisíce. Kompletní přehled cen webových stránek podle typu: vizitka, firemní web, e-shop, webová aplikace.",
  "author": { "@type": "Organization", "name": "CURIA" },
  "publisher": { "@type": "Organization", "name": "CURIA", "logo": { "@type": "ImageObject", "url": "https://curia.cz/favicon.svg" } },
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-19",
  "mainEntityOfPage": "https://curia.cz/blog/cena-webu",
  "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CenaWebuPage />
    </>
  )
}
