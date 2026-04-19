import type { Metadata } from 'next'
import Script from 'next/script'
import JakVybratWebovouAgenturuPage from '@/views/blog/JakVybratWebovouAgenturuPage'

export const metadata: Metadata = {
  title: 'Jak vybrat webovou agenturu: 10 kritérií, která rozhodují | CURIA Blog',
  description: 'Praktický návod, jak vybrat webovou agenturu v roce 2026. Portfolio, reference, cena, technologie, SEO, vlastnictví kódu a další kritéria. Checklist ke stažení.',
  keywords: 'jak vybrat webovou agenturu, výběr webové agentury, nejlepší webová agentura, webová agentura recenze, srovnání webových agentur, webdesign agentura, tvorba webu agentura, webová agentura česko, webová agentura praha',
  alternates: { canonical: 'https://curia.cz/blog/jak-vybrat-webovou-agenturu' },
  openGraph: {
    title: 'Jak vybrat webovou agenturu: 10 kritérií, která rozhodují | CURIA Blog',
    description: 'Praktický návod, jak vybrat webovou agenturu. Portfolio, reference, cena, technologie, SEO – kompletní checklist pro rok 2026.',
    type: 'article',
    url: 'https://curia.cz/blog/jak-vybrat-webovou-agenturu',
    images: [{ url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak vybrat webovou agenturu: 10 kritérií, která rozhodují",
  "description": "Praktický návod, jak vybrat webovou agenturu v roce 2026. Portfolio, reference, cena, technologie, SEO, vlastnictví kódu a další kritéria.",
  "author": { "@type": "Organization", "name": "CURIA" },
  "publisher": { "@type": "Organization", "name": "CURIA", "logo": { "@type": "ImageObject", "url": "https://curia.cz/favicon.svg" } },
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-19",
  "mainEntityOfPage": "https://curia.cz/blog/jak-vybrat-webovou-agenturu",
  "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <JakVybratWebovouAgenturuPage />
    </>
  )
}
