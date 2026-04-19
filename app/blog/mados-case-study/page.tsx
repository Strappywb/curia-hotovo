import type { Metadata } from 'next'
import Script from 'next/script'
import MadosCaseStudyPage from '@/views/blog/MadosCaseStudyPage'

export const metadata: Metadata = {
  title: 'MADOS: Jak jsme z produktového chaosu udělali prodejní stroj | CURIA',
  description: 'Case study — digitální transformace výrobce hliníkových fasád. Custom Product Engine, inteligentní kvalifikace poptávek, +217 % relevantních leadů.',
  keywords: 'case study webdesign, průmyslový web, digitální transformace výroby, B2B web, product configurator, hliníkové fasády, lead generation průmysl',
  alternates: { canonical: 'https://curia.cz/blog/mados-case-study' },
  openGraph: {
    title: 'MADOS: Jak jsme z produktového chaosu udělali prodejní stroj | CURIA',
    description: 'Case study — digitální transformace výrobce hliníkových fasád. Custom Product Engine, +217 % relevantních leadů.',
    type: 'article',
    url: 'https://curia.cz/blog/mados-case-study',
    images: [{ url: '/og-image.webp' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MADOS: Jak jsme z produktového chaosu udělali prodejní stroj",
  "description": "Case study — digitální transformace výrobce hliníkových fasád. Custom Product Engine, inteligentní kvalifikace poptávek, +217 % relevantních leadů.",
  "author": { "@type": "Organization", "name": "CURIA" },
  "publisher": { "@type": "Organization", "name": "CURIA", "logo": { "@type": "ImageObject", "url": "https://curia.cz/favicon.svg" } },
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-19",
  "mainEntityOfPage": "https://curia.cz/blog/mados-case-study",
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
      <MadosCaseStudyPage />
    </>
  )
}
