import type { Metadata } from 'next'
import Script from 'next/script'
import IndexaceGooglePage from '@/views/blog/IndexaceGooglePage'

export const metadata: Metadata = {
  title: 'Jak dostat web do Googlu: Kompletní průvodce indexací | CURIA Blog',
  description: 'Máte web, ale Google ho nezná? Indexace je první krok k viditelnosti ve vyhledávání. Kompletní průvodce: Search Console, sitemap, robots.txt, kanonické URL a řešení problémů s indexací.',
  keywords: 'indexace google, google search console, sitemap, robots.txt, crawling, kanonické url, seo indexace, jak dostat web do googlu, googlebot, crawl budget',
  alternates: { canonical: 'https://curia.cz/blog/indexace-google' },
  openGraph: {
    title: 'Jak dostat web do Googlu: Kompletní průvodce indexací | CURIA Blog',
    description: 'Máte web, ale Google ho nezná? Indexace je první krok k viditelnosti ve vyhledávání. Kompletní průvodce od Search Console po řešení problémů.',
    images: ['https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=630&fit=crop'],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak dostat web do Googlu: Kompletní průvodce indexací",
  "description": "Máte web, ale Google ho nezná? Indexace je první krok k viditelnosti ve vyhledávání. Kompletní průvodce: Search Console, sitemap, robots.txt, kanonické URL.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2026-04-14",
  "mainEntityOfPage": "https://curia.cz/blog/indexace-google",
  "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=630&fit=crop",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <IndexaceGooglePage />
    </>
  )
}
