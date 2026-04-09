import type { Metadata } from 'next'
import NotFound from '@/views/NotFound'

export const metadata: Metadata = {
  title: '404 - Stránka nenalezena | CURIA',
  description: 'Stránka, kterou hledáte, neexistuje. Vraťte se na hlavní stránku CURIA.',
  robots: 'noindex, nofollow',
}

export default function NotFoundPage() {
  return <NotFound />
}
