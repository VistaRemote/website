'use client'

import { Divider } from 'antd'
import { GithubOutlined, BookOutlined, ApiOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'
import LogoMark from './LogoMark'

const ICON_LINKS = [
  { icon: <GithubOutlined />, key: 'github' as const, href: 'https://github.com/VistaRemote/vibeCode' },
  { icon: <BookOutlined />, key: 'docs' as const, href: '#' },
  { icon: <ApiOutlined />, key: 'sdk' as const, href: '#' },
]

export default function SiteFooter() {
  const { m } = useLocale()
  const f = m.footer

  const linkGroups = [
    {
      title: f.product,
      items: [
        { label: f.links.capabilities, href: '/#capabilities' },
        { label: f.links.multiplatform, href: '/#multiplatform' },
        { label: f.links.plugins, href: '/#plugins' },
        { label: f.links.architecture, href: '/#architecture' },
      ],
    },
    {
      title: f.resources,
      items: [
        { label: f.links.devDocs, href: '#' },
        { label: f.links.pluginSdk, href: '#' },
        { label: f.links.apiRef, href: '#' },
        { label: f.links.changelog, href: '#' },
      ],
    },
    {
      title: f.ecosystem,
      items: [
        { label: 'VistaCast', href: 'https://vistacast.dev' },
        { label: 'SyncroBrain', href: 'https://syncrobrain.com' },
        { label: 'DoerFlow', href: 'https://doerflow.dev' },
        { label: 'LuminaryWorks', href: 'https://luminaryworks.dev' },
      ],
    },
  ]

  const iconLabels: Record<(typeof ICON_LINKS)[number]['key'], string> = {
    github: 'GitHub',
    docs: f.links.docs,
    sdk: 'SDK',
  }

  return (
    <footer
      style={{
        background: '#0d1117',
        borderTop: '1px solid #21334a',
        padding: '56px 0 28px',
      }}
    >
      <div className="vr-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto auto',
            gap: 40,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <LogoMark size={26} />
              <span style={{ fontWeight: 700, fontSize: 15, color: '#e6edf3' }}>VistaRemote</span>
            </div>
            <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, maxWidth: 260 }}>{f.tagline}</p>
            <p style={{ fontSize: 12, color: '#4a5568', marginTop: 10 }}>
              {m.common.partOf}{' '}
              <a
                href="https://luminaryworks.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8b949e', textDecoration: 'none' }}
              >
                LuminaryWorks
              </a>{' '}
              · 「控」
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {ICON_LINKS.map((il) => (
                <a
                  key={il.key}
                  href={il.href}
                  aria-label={iconLabels[il.key]}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    fontSize: 13,
                    color: '#4a5568',
                    textDecoration: 'none',
                    padding: '5px 10px',
                    border: '1px solid #21334a',
                    borderRadius: 6,
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e6edf3'
                    e.currentTarget.style.borderColor = '#1677ff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#4a5568'
                    e.currentTarget.style.borderColor = '#21334a'
                  }}
                >
                  {il.icon}
                  <span>{iconLabels[il.key]}</span>
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a5568',
                  marginBottom: 14,
                }}
              >
                {group.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      style={{
                        fontSize: 13,
                        color: '#8b949e',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#e6edf3'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#8b949e'
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider style={{ margin: '0 0 20px', borderColor: '#21334a' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: '#4a5568' }}>
            © {new Date().getFullYear()} LuminaryWorks. Released under the{' '}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#8b949e', textDecoration: 'none' }}
            >
              {m.common.mitLicense}
            </a>
            .
          </p>
          <p style={{ fontSize: 12, color: '#4a5568' }}>{m.common.footerTagline}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
