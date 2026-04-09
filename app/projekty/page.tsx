import type { Metadata } from 'next'
import ProjektyPage from '@/views/ProjektyPage'

export const metadata: Metadata = {
  title: 'Projekty | CURIA',
  description: 'Naše vybrané projekty. Od vizuální identity po digitální platformy.',
  alternates: { canonical: 'https://curia.cz/projekty' },
}

export default function Page() {
  return <ProjektyPage />
}
