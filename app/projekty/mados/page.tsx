import type { Metadata } from 'next'
import MadosPage from '@/views/projects/MadosPage'

export const metadata: Metadata = {
  title: 'MADOS - Digitální transformace výrobce fasád | CURIA Case Study',
  description: 'Komplexní digitální platforma pro MADOS - lídra v segmentu hliníkových fasád. Custom Product Engine, B2B rozhraní a 217% nárůst relevantních poptávek.',
  keywords: 'case study, webdesign, MADOS, digitální platforma, B2B, CURIA',
  alternates: { canonical: 'https://curia.cz/projekty/mados' },
  openGraph: {
    title: 'MADOS - Digitální transformace výrobce fasád | CURIA Case Study',
    description: 'Komplexní digitální platforma pro MADOS - lídra v segmentu hliníkových fasád. 217% nárůst relevantních poptávek.',
  },
}

export default function Page() {
  return <MadosPage />
}
