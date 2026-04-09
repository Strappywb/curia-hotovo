import type { Metadata } from 'next'
import SturmPage from '@/views/projects/SturmPage'

export const metadata: Metadata = {
  title: 'Filip Šturm - Case study | CURIA Portfolio',
  description: 'Case study spolupráce s Filipem Šturmem. Finanční poradenství Praha. Osobní branding a web pro high-net-worth klienty.',
  alternates: { canonical: 'https://curia.cz/projekty/sturm' },
  openGraph: {
    title: 'Filip Šturm - Case study | CURIA Portfolio',
    description: 'Case study spolupráce s Filipem Šturmem. Finanční poradenství Praha. Osobní branding a web.',
  },
}

export default function Page() {
  return <SturmPage />
}
