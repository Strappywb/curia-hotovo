import type { Metadata } from 'next'
import Script from 'next/script'
import StrategickyMarketingPage from '@/views/blog/StrategickyMarketingPage'

export const metadata: Metadata = {
  title: 'Síla strategického marketingu | CURIA Blog',
  description: 'Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.',
  keywords: 'strategický marketing, marketingová strategie, cílová skupina, positioning, marketing funnel, obsahový marketing, digitální marketing',
  alternates: { canonical: 'https://curia.cz/blog/strategicky-marketing' },
  openGraph: {
    title: 'Síla strategického marketingu | CURIA Blog',
    description: 'Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.',
    type: 'article',
    url: 'https://curia.cz/blog/strategicky-marketing',
    images: [{ url: '/og-image.webp' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Síla strategického marketingu",
  "description": "Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2024-01-10",
  "dateModified": "2026-03-10",
  "mainEntityOfPage": "https://curia.cz/blog/strategicky-marketing",
  "image": "https://curia.cz/og-image.webp",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <StrategickyMarketingPage />
    </>
  )
}
