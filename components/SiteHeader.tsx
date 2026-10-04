'use client'

import { useState, useEffect, type CSSProperties, type MouseEvent } from 'react'
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
const DOCS_URL = 'https://docs.remote.vistacast.dev'

const navBtnStyle: CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#8b949e',
  fontSize: 14,
  padding: '6px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'color 0.15s, background 0.15s',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
}

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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    // On /download (and other non-home pages) section anchors live on `/`.
    window.location.assign(`/#${id}`)
  }

  const headerBg = scrolled ? 'rgba(13,17,23,0.92)' : 'rgba(13,17,23,0.6)'

  const localeMenu: MenuProps['items'] = LOCALE_MENU

  const hoverIn = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#e6edf3'
    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
  }
  const hoverOut = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#8b949e'
    e.currentTarget.style.background = 'none'
  }

  return (
    <header
      className="vr-site-header"
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
      <div className="vr-site-header__inner">
        <a
          href="/"
          aria-label={m.header.homeAria}
          className="vr-site-header__brand"
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
          className="vr-site-header__nav"
        >
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => (key === 'docs' ? window.open(DOCS_URL, '_blank', 'noopener,noreferrer') : scrollTo(key))}
              style={navBtnStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              {m.header.nav[key]}
            </button>
          ))}
          <a
            href="/download"
            style={navBtnStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            {m.header.download}
          </a>
        </nav>

        <div className="vr-site-header__actions">
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
              className="vr-site-header__locale"
            >
              <GlobalOutlined style={{ fontSize: 13 }} />
              <span>{config.short}</span>
              <DownOutlined style={{ fontSize: 10, opacity: 0.6 }} />
            </button>
          </Dropdown>

          <Tooltip title={m.header.signInTooltip}>
            <Button
              icon={<UserOutlined />}
              size="small"
              className="vr-site-header__signin"
              style={{ borderRadius: 6, fontSize: 13 }}
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="vr-site-header__signin-label">{m.header.signIn}</span>
            </Button>
          </Tooltip>

          <button
            aria-label={m.header.menuAria}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="vr-mobile-menu-btn"
          >
            {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label={m.header.mobileNavAria}
          className="vr-site-header__drawer"
        >
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => (key === 'docs' ? window.open(DOCS_URL, '_blank', 'noopener,noreferrer') : scrollTo(key))}
              className="vr-site-header__drawer-link"
            >
              {m.header.nav[key]}
            </button>
          ))}
          <a
            href="/download"
            onClick={() => setMobileOpen(false)}
            className="vr-site-header__drawer-download"
          >
            {m.header.download}
          </a>
        </nav>
      )}
    </header>
  )
}
