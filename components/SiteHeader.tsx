'use client'

import { useState, useEffect } from 'react'
import { Button, Dropdown, Tooltip } from 'antd'
import {
  GlobalOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { LOCALE_MENU, useLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import LogoMark from './LogoMark'

const NAV_KEYS = [
  'capabilities',
  'multiplatform',
  'architecture',
  'ecosystem',
  'docs',
] as const
const loginUrl = 'https://admin.vistacast.dev/'

export default function SiteHeader() {
  const { locale, setLocale, m, config } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const headerBg = scrolled ? 'rgba(13,17,23,0.92)' : 'rgba(13,17,23,0.6)'

  const localeMenu: MenuProps['items'] = LOCALE_MENU

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: headerBg,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid #21334a' : '1px solid transparent',
        transition: 'background 0.25s, border-color 0.25s',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}
      >
        <a
          href="#"
          aria-label={m.header.homeAria}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            marginRight: 32,
            flexShrink: 0,
          }}
        >
          <LogoMark size={28} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: '#e6edf3',
                letterSpacing: '-0.01em',
              }}
            >
              VistaRemote
            </span>
            <span
              style={{
                fontSize: 10,
                color: '#8b949e',
                letterSpacing: '0.04em',
              }}
            >
              {m.common.brandSubtitle}
            </span>
          </span>
        </a>

        <nav
          role="navigation"
          aria-label={m.header.navAria}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flex: 1,
          }}
        >
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'docs' ? 'quickstart' : key)}
              style={{
                background: 'none',
                border: 'none',
                color: '#8b949e',
                fontSize: 14,
                padding: '6px 12px',
                borderRadius: 6,
                cursor: 'pointer',
                transition: 'color 0.15s, background 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e6edf3'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8b949e'
                e.currentTarget.style.background = 'none'
              }}
            >
              {m.header.nav[key]}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <Dropdown
            menu={{
              items: localeMenu,
              onClick: ({ key }) => setLocale(key as Locale),
              selectedKeys: [locale],
            }}
            trigger={['click']}
          >
            <button
              aria-label={m.header.toggleLangAria}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                background: 'none',
                border: '1px solid #21334a',
                borderRadius: 6,
                color: '#8b949e',
                fontSize: 13,
                padding: '4px 10px',
                cursor: 'pointer',
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1677ff'
                e.currentTarget.style.color = '#e6edf3'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#21334a'
                e.currentTarget.style.color = '#8b949e'
              }}
            >
              <GlobalOutlined style={{ fontSize: 13 }} />
              <span>{config.short}</span>
              <DownOutlined style={{ fontSize: 10, opacity: 0.6 }} />
            </button>
          </Dropdown>

          <Button
            size="small"
            href="/download"
            style={{ borderRadius: 6, fontSize: 13 }}
          >
            Download
          </Button>

          <Tooltip title={m.header.signInTooltip}>
            <Button
              type="primary"
              icon={<UserOutlined />}
              size="small"
              style={{ borderRadius: 6, fontSize: 13 }}
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {m.header.signIn}
            </Button>
          </Tooltip>

          <button
            aria-label={m.header.menuAria}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid #21334a',
              borderRadius: 6,
              color: '#8b949e',
              padding: '4px 8px',
              cursor: 'pointer',
            }}
            className="vr-mobile-menu-btn"
          >
            {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label={m.header.mobileNavAria}
          style={{
            background: '#0d1117',
            borderTop: '1px solid #21334a',
            padding: '12px 24px 16px',
          }}
        >
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'docs' ? 'quickstart' : key)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: '#8b949e',
                fontSize: 15,
                padding: '10px 0',
                borderBottom: '1px solid #21334a',
                cursor: 'pointer',
              }}
            >
              {m.header.nav[key]}
            </button>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav[role="navigation"] { display: none !important; }
          .vr-mobile-menu-btn   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
