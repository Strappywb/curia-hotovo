import type { Metadata } from 'next'
import SluzbyPage from '@/views/SluzbyPage'

export const metadata: Metadata = {
  title: 'Webdesign, Branding, Marketing & Aplikace | CURIA Praha',
  description: 'Komplexní designové a digitální služby v Praze. Webdesign, branding, marketing, grafika a vývoj aplikací. Budujeme značky a weby, které definují standardy.',
  keywords: 'webdesign Praha, branding Praha, marketing Praha, grafika, aplikace, CURIA',
  alternates: { canonical: 'https://curia.cz/sluzby' },
  openGraph: {
    title: 'Webdesign, Branding, Marketing & Aplikace | CURIA Praha',
    description: 'Komplexní designové a digitální služby v Praze. Webdesign, branding, marketing, grafika a vývoj aplikací.',
  },
}

export default function Page() {
  return <SluzbyPage />
}
