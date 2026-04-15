import type { Metadata } from 'next'
import Script from 'next/script'
import GrafikaALogoPage from '@/views/blog/GrafikaALogoPage'

export const metadata: Metadata = {
  title: 'Grafický design a logo: Když forma následuje funkci | CURIA Blog',
  description: 'Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl. Jak na logo, které skutečně funguje.',
  keywords: 'grafický design, logo design, vizuální identita, branding, typografie',
  alternates: { canonical: 'https://curia.cz/blog/grafika-a-logo' },
  openGraph: {
    title: 'Grafický design a logo: Když forma následuje funkci | CURIA Blog',
    description: 'Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl.',
    type: 'article',
    url: 'https://curia.cz/blog/grafika-a-logo',
    images: [{ url: '/og-image.webp' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Grafický design a logo: Když forma následuje funkci",
  "description": "Grafický design není dekorace. Je to nástroj komunikace, který musí splnit konkrétní obchodní cíl.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2026-01-15",
  "dateModified": "2026-04-10",
  "mainEntityOfPage": "https://curia.cz/blog/grafika-a-logo",
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
      <GrafikaALogoPage />
    </>
  )
}
