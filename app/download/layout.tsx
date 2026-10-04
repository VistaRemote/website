import type { Metadata } from 'next'
import { buildDownloadMetadata } from '@/lib/seo'

export const metadata: Metadata = buildDownloadMetadata()

export default function DownloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
