import type { Metadata } from 'next'
import Script from 'next/script'
import BudovaniZnackyPage from '@/views/blog/BudovaniZnackyPage'

export const metadata: Metadata = {
  title: 'Budování značky od základů | CURIA Blog',
  description: 'Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.',
  keywords: 'budování značky, branding, brand strategie, vizuální identita, firemní identita, logo design, značka od základů',
  alternates: { canonical: 'https://curia.cz/blog/budovani-znacky' },
  openGraph: {
    title: 'Budování značky od základů | CURIA Blog',
    description: 'Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.',
    type: 'article',
    url: 'https://curia.cz/blog/budovani-znacky',
    images: [{ url: '/og-image.webp' }],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Budování značky od základů",
  "description": "Silná značka je víc než logo. Je to příběh, hodnoty a emoce, které vytváříte u svých zákazníků.",
  "author": {"@type": "Organization", "name": "CURIA"},
  "publisher": {"@type": "Organization", "name": "CURIA", "logo": {"@type": "ImageObject", "url": "https://curia.cz/favicon.svg"}},
  "datePublished": "2024-01-05",
  "dateModified": "2026-03-10",
  "mainEntityOfPage": "https://curia.cz/blog/budovani-znacky",
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
      <BudovaniZnackyPage />
    </>
  )
}
