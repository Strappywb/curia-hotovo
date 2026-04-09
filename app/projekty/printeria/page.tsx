import type { Metadata } from 'next'
import PrinteriaPage from '@/views/projects/PrinteriaPage'

export const metadata: Metadata = {
  title: 'Printeria - Case study | CURIA Portfolio',
  description: 'Case study spolupráce s Printeria. Tiskové služby Praha. Marketingová strategie a akvizice klientů.',
  alternates: { canonical: 'https://curia.cz/projekty/printeria' },
  openGraph: {
    title: 'Printeria - Case study | CURIA Portfolio',
    description: 'Case study spolupráce s Printeria. Tiskové služby Praha. Marketingová strategie a akvizice klientů.',
  },
}

export default function Page() {
  return <PrinteriaPage />
}
