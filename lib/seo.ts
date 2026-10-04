import type { Metadata } from 'next'

/** Production marketing site (Cloudflare Pages custom domain). */
export const SITE_URL = 'https://remote.vistacast.dev'

/** Public docs (GitHub Pages custom domain). */
export const DOCS_URL = 'https://docs.remote.vistacast.dev'

export const SITE_NAME = 'VistaRemote'
export const SITE_NAME_ZH = 'VistaRemote 视界远程'

export const DEFAULT_TITLE =
  'VistaRemote 视界远程 — 开源 WebRTC 远程桌面 · 私有化 AI 洞察'

export const DEFAULT_DESCRIPTION =
  '跨平台实时远程桌面控制。会话录制、AI 摘要、审计日志 — 开源可私有化。适配工控机、边缘网关、IT 桌面。'

export const DEFAULT_TITLE_EN =
  'VistaRemote — Open-Source WebRTC Remote Desktop · Self-Hosted AI Insights'

export const DEFAULT_DESCRIPTION_EN =
  'Cross-platform real-time remote desktop control. Session recording, AI summaries, audit logs — open source and fully self-hostable. Built for industrial PCs, edge gateways, and IT desktops.'

export const DOWNLOAD_TITLE =
  '下载 VistaRemote — Agent / Viewer / Android APK'

export const DOWNLOAD_DESCRIPTION =
  '下载 VistaRemote 被控端 Agent、主控 Viewer 与 Android APK。Windows / macOS 安装包与便携版，始终指向 GitHub Releases latest。'

export const OG_IMAGE_PATH = '/og-image.png'

export const KEYWORDS = [
  'VistaRemote',
  '视界远程',
  'WebRTC',
  '远程桌面',
  'remote desktop',
  '私有化部署',
  'self-hosted',
  'AI 远程操控',
  'computer use',
  '设备舰队',
  'fleet management',
  '开源远程控制',
  'LuminaryWorks',
] as const

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildRootMetadata(): Metadata {
  const ogImage = absoluteUrl(OG_IMAGE_PATH)

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s · ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [...KEYWORDS],
    authors: [{ name: 'LuminaryWorks', url: 'https://luminaryworks.dev' }],
    creator: 'LuminaryWorks',
    publisher: 'LuminaryWorks',
    category: 'technology',
    alternates: {
      canonical: '/',
      languages: {
        'zh-CN': '/',
        en: '/',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      url: SITE_URL,
      siteName: SITE_NAME_ZH,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — WebRTC remote desktop`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export function buildDownloadMetadata(): Metadata {
  const url = absoluteUrl('/download/')
  const ogImage = absoluteUrl(OG_IMAGE_PATH)

  return {
    title: DOWNLOAD_TITLE,
    description: DOWNLOAD_DESCRIPTION,
    alternates: {
      canonical: '/download/',
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url,
      siteName: SITE_NAME_ZH,
      title: DOWNLOAD_TITLE,
      description: DOWNLOAD_DESCRIPTION,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: DOWNLOAD_TITLE,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: DOWNLOAD_TITLE,
      description: DOWNLOAD_DESCRIPTION,
      images: [ogImage],
    },
  }
}

/** JSON-LD for Organization + SoftwareApplication + WebSite (Search / rich results). */
export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'LuminaryWorks',
        url: 'https://luminaryworks.dev',
        logo: absoluteUrl('/logo.svg'),
        sameAs: [
          'https://github.com/VistaRemote',
          'https://luminaryworks.dev',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME_ZH,
        description: DEFAULT_DESCRIPTION,
        inLanguage: ['zh-CN', 'en'],
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${DOCS_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: SITE_NAME,
        alternateName: ['视界远程', 'VistaRemote'],
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Remote Desktop',
        operatingSystem: 'Windows, macOS, Android, iOS, Linux, Web',
        url: SITE_URL,
        downloadUrl: absoluteUrl('/download/'),
        screenshot: absoluteUrl(OG_IMAGE_PATH),
        description: DEFAULT_DESCRIPTION_EN,
        inLanguage: ['zh-CN', 'en'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Polyform Noncommercial; commercial licensing available',
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        sameAs: [
          'https://github.com/VistaRemote',
          DOCS_URL,
        ],
      },
    ],
  }
}
