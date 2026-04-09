import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/index.css'
import Providers from './providers'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://curia.cz'),
  title: {
    default: 'CURIA | Webdesign, Branding & Marketing Studio',
    template: '%s',
  },
  description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online.',
  authors: [{ name: 'CURIA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'CURIA | Webdesign, Branding & Marketing Studio',
    description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online.',
    type: 'website',
    url: 'https://curia.cz/',
    images: [{ url: '/og-image.webp' }],
    locale: 'cs_CZ',
    siteName: 'CURIA',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@curia',
    title: 'CURIA | Webdesign, Branding & Marketing Studio',
    description: 'Kreativní studio zaměřené na webdesign, budování značek a digitální marketing.',
    images: ['/og-image.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'theme-color': '#0057FF',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CURIA",
  "url": "https://curia.cz",
  "logo": "https://curia.cz/newsymbol.webp",
  "description": "Kreativní studio zaměřené na webdesign, budování značek a digitální marketing. Pomáháme firmám růst online.",
  "address": { "@type": "PostalAddress", "addressCountry": "CZ" },
  "sameAs": ["https://www.instagram.com/curia.studio/"],
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+420-606-237-743", "contactType": "sales", "email": "michal@curia.cz" },
    { "@type": "ContactPoint", "telephone": "+420-777-561-050", "contactType": "customer service", "email": "adam@curia.cz" },
  ],
  "areaServed": { "@type": "Country", "name": "Czech Republic" },
  "serviceType": ["Webdesign", "Branding", "Marketing", "Grafický design", "Vývoj aplikací"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CURIA",
  "url": "https://curia.cz",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jaké jsou vaše hlavní služby jako designové a brandingové studio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Naše studio se specializuje na tři hlavní oblasti: brandingové identity, webové platformy a strategický marketing. V oblasti brandingu vytváříme komplexní vizuální systémy od základní strategie značky přes logotypy až po kompletní design manuály. V oblasti webdesignu a vývoje stavíme moderní, výkonné weby a aplikace postavené na nejnovějších technologiích."
      }
    },
    {
      "@type": "Question",
      "name": "Co vás odlišuje od ostatních designových a brandingových agentur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nejsme typická kreativní agentura. Náš přístup je založený na strategickém myšlení a datově podložených rozhodnutích. Kombinujeme kreativní excelenci s technickou expertízou – náš tým tvoří designéři, vývojáři, stratégové a marketingoví specialisté."
      }
    },
    {
      "@type": "Question",
      "name": "Kolik stojí realizace designového nebo brandingového projektu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cena projektu se vždy odvíjí od jeho rozsahu, komplexity a vašich konkrétních požadavků. Základní brandingový projekt začíná na několika desítkách tisíc korun. Webové projekty obvykle startují kolem 100 000 Kč. Místo fixních ceníků preferujeme individuální nabídky šité na míru každému projektu."
      }
    },
    {
      "@type": "Question",
      "name": "Spolupracujete se startupy a menšími firmami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Určitě ano, rádi pracujeme se startupy a menšími firmami, které mají ambice růst. Nabízíme flexibilní přístupy včetně MVP verzí a speciálních balíčků zahrnujících základní vizuální identitu, webovou prezentaci a marketingové materiály."
      }
    },
    {
      "@type": "Question",
      "name": "Dokážete nám pomoci s redesignem naší B2B/enterprise platformy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Redesign B2B a enterprise softwarových řešení je jedna z našich specializací. Máme hluboké znalosti v oblasti UX designu pro komplexní systémy. Dodáváme kompletní design systémy a dokumentaci pro budoucí rozšíření platformy."
      }
    },
    {
      "@type": "Question",
      "name": "Pracujete s klienty z různých časových pásem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano, spolupracujeme s klienty po celém světě. Náš tým je flexibilní a využíváme moderní projektové nástroje pro plynulou asynchronní spolupráci bez ohledu na geografickou vzdálenost."
      }
    }
  ]
}

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CURIA",
  "image": "https://curia.cz/og-image.webp",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "addressCountry": "CZ" },
  "geo": { "@type": "GeoCoordinates", "latitude": "50.0755", "longitude": "14.4378" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Služby",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Webdesign", "description": "Profesionální tvorba webů na míru" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding", "description": "Budování silných značek a firemní identity" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing", "description": "Digitální marketing a reklamní kampaně" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grafický design", "description": "Grafické návrhy a vizuální materiály" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vývoj aplikací", "description": "Mobilní a webové aplikace na míru" } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
