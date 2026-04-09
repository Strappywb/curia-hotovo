import type { Metadata } from 'next'
import AplikaceSluzbaPage from '@/views/sluzby/AplikaceSluzbaPage'

export const metadata: Metadata = {
  title: 'Aplikace na míru | CURIA',
  description: 'Spojujeme precizní kód a intuitivní design do produktů s reálnou hodnotou. Mobilní i webové aplikace na míru.',
  alternates: { canonical: 'https://curia.cz/sluzby/aplikace' },
  openGraph: {
    title: 'Aplikace na míru | CURIA',
    description: 'Spojujeme precizní kód a intuitivní design do produktů s reálnou hodnotou.',
  },
}

export default function Page() {
  return <AplikaceSluzbaPage />
}
