import type { Metadata } from 'next'
import Script from 'next/script'
import AplikaceNaMiruPage from '@/views/blog/AplikaceNaMiruPage'

export const metadata: Metadata = {
  title: 'Aplikace na míru: Kdy se vyplatí a jak na to | CURIA Blog',
  description: 'Hotová řešení mají limity. Custom aplikace dávají kontrolu. Návod, kdy se vyplatí investovat do vlastního řešení a jak zajistit úspěch projektu.',
  keywords: 'aplikace na míru, custom software, vývoj aplikací, web aplikace, mobilní aplikace, business software, digitalizace, automatizace procesů',
  alternates: { canonical: 'https://curia.cz/blog/aplikace-na-miru' },
  openGraph: {
    title: 'Aplikace na míru: Kdy se vyplatí a jak na to | CURIA Blog',
    description: 'Hotová řešení mají limity. Custom aplikace dávají kontrolu. Návod, kdy se vyplatí investovat do vlastního řešení a jak zajistit úspěch projektu.',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Aplikace na míru: Kdy se vyplatí a jak na to",
  "description": "Hotová řešení mají limity. Custom aplikace dávají kontrolu. Návod, kdy se vyplatí investovat do vlastního řešení a jak zajistit úspěch projektu.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2026-01-20",
  "mainEntityOfPage": "https://curia.cz/blog/aplikace-na-miru",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <AplikaceNaMiruPage />
    </>
  )
}
