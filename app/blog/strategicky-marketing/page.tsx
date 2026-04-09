import type { Metadata } from 'next'
import Script from 'next/script'
import StrategickyMarketingPage from '@/views/blog/StrategickyMarketingPage'

export const metadata: Metadata = {
  title: 'Síla strategického marketingu | CURIA Blog',
  description: 'Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.',
  alternates: { canonical: 'https://curia.cz/blog/strategicky-marketing' },
  openGraph: {
    title: 'Síla strategického marketingu | CURIA Blog',
    description: 'Efektivní marketing začíná pochopením vašeho publika. Jak vybudovat kampaň, která rezonuje a přináší výsledky.',
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
  "mainEntityOfPage": "https://curia.cz/blog/strategicky-marketing",
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
