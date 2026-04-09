import type { Metadata } from 'next'
import Script from 'next/script'
import WebKteryProdavaPage from '@/views/blog/WebKteryProdavaPage'

export const metadata: Metadata = {
  title: 'Jak vytvořit web, který prodává | CURIA Blog',
  description: 'Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.',
  alternates: { canonical: 'https://curia.cz/blog/web-ktery-prodava' },
  openGraph: {
    title: 'Jak vytvořit web, který prodává | CURIA Blog',
    description: 'Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak vytvořit web, který prodává",
  "description": "Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2024-01-15",
  "mainEntityOfPage": "https://curia.cz/blog/web-ktery-prodava",
}

export default function Page() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <WebKteryProdavaPage />
    </>
  )
}
