import type { Metadata } from 'next'
import HFStavbyPage from '@/views/projects/HFStavbyPage'

export const metadata: Metadata = {
  title: 'HF Stavby - Case study | CURIA Portfolio',
  description: 'Příběh spolupráce s HF Stavby. Kompletní webová realizace pro stavební firmu. Od strategie po spuštění.',
  alternates: { canonical: 'https://curia.cz/projekty/hf-stavby' },
  openGraph: {
    title: 'HF Stavby - Case study | CURIA Portfolio',
    description: 'Příběh spolupráce s HF Stavby. Kompletní webová realizace pro stavební firmu.',
  },
}

export default function Page() {
  return <HFStavbyPage />
}
