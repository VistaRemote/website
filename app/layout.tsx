import type { Metadata, Viewport } from 'next'
import {
  buildRootMetadata,
  buildWebsiteJsonLd,
} from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = buildRootMetadata()

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
    { media: '(prefers-color-scheme: light)', color: '#0d1117' },
  ],
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = buildWebsiteJsonLd()

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
