import type { Metadata } from 'next'
import Script from 'next/script'
import TechnickeSeoPage from '@/views/blog/TechnickeSeoPage'

export const metadata: Metadata = {
  title: 'Technické SEO: Základ, bez kterého vás Google ignoruje | CURIA Blog',
  description: 'Core Web Vitals, HTTPS, mobile-first indexing, správná URL struktura, heading hierarchie a optimalizace obrázků. Kompletní průvodce technickým SEO pro rok 2026.',
  keywords: 'technické seo, core web vitals, lcp, inp, cls, mobile-first indexing, https, url struktura, heading struktura, optimalizace obrázků, seo audit, pagespeed',
  alternates: { canonical: 'https://curia.cz/blog/technicke-seo' },
  openGraph: {
    title: 'Technické SEO: Základ, bez kterého vás Google ignoruje | CURIA Blog',
    description: 'Core Web Vitals, HTTPS, mobile-first indexing, správná URL struktura a heading hierarchie. Kompletní průvodce technickým SEO.',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop'],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Technické SEO: Základ, bez kterého vás Google ignoruje",
  "description": "Core Web Vitals, HTTPS, mobile-first indexing, správná URL struktura, heading hierarchie a optimalizace obrázků. Kompletní průvodce technickým SEO.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2026-04-14",
  "mainEntityOfPage": "https://curia.cz/blog/technicke-seo",
  "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <TechnickeSeoPage />
    </>
  )
}
