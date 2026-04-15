import type { Metadata } from 'next'
import Script from 'next/script'
import WebKteryProdavaPage from '@/views/blog/WebKteryProdavaPage'

export const metadata: Metadata = {
  title: 'Jak vytvořit web, který prodává | CURIA Blog',
  description: 'Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.',
  keywords: 'webdesign, web který prodává, konverzní web, UX design, tvorba webu, landing page, call to action, webová strategie',
  alternates: { canonical: 'https://curia.cz/blog/web-ktery-prodava' },
  openGraph: {
    title: 'Jak vytvořit web, který prodává | CURIA Blog',
    description: 'Moderní webdesign není jen o estetice. Úspěšný web kombinuje vizuální přitažlivost s funkčností a konverzní strategií.',
    type: 'article',
    url: 'https://curia.cz/blog/web-ktery-prodava',
    images: [{ url: '/og-image.webp' }],
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
  "dateModified": "2026-03-10",
  "mainEntityOfPage": "https://curia.cz/blog/web-ktery-prodava",
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
      <WebKteryProdavaPage />
    </>
  )
}
