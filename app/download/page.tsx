'use client'

import { useEffect, useState } from 'react'
import { ConfigProvider, theme, Button, Typography, Space, Alert } from 'antd'
import {
  DownloadOutlined,
  AndroidOutlined,
  WindowsOutlined,
  AppleOutlined,
  DesktopOutlined,
  ControlOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { LocaleProvider, useLocale } from '@/lib/i18n'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const TOKEN = {
  colorPrimary: '#1677ff',
  colorBgBase: '#0d1117',
  colorTextBase: '#e6edf3',
  borderRadius: 8,
  colorBgContainer: '#161f2e',
  colorBorder: '#21334a',
  fontFamily: "'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif",
}

/** Stable names — always resolve to the newest GitHub Release via /latest/download/ */
const RELEASE_BASE =
  process.env.NEXT_PUBLIC_RELEASE_BASE ??
  'https://github.com/VistaRemote/downloads/releases/latest/download'

const AGENT_SETUP = `${RELEASE_BASE}/VistaRemote-Agent-win-setup.exe`
const AGENT_PORTABLE = `${RELEASE_BASE}/VistaRemote-Agent-win.exe`
const AGENT_MAC = `${RELEASE_BASE}/VistaRemote-Agent-mac.dmg`
const VIEWER_WIN = `${RELEASE_BASE}/VistaRemote-Viewer-win.exe`
const VIEWER_MAC = `${RELEASE_BASE}/VistaRemote-Viewer-mac.dmg`
const ANDROID_APK =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? `${RELEASE_BASE}/VistaRemote.apk`

const DOWNLOADS_API =
  process.env.NEXT_PUBLIC_DOWNLOADS_API ??
  'https://api.github.com/repos/VistaRemote/downloads/releases/latest'

const sectionStyle = {
  background: '#161f2e',
  border: '1px solid #21334a',
  borderRadius: 12,
  padding: 24,
} as const

function DownloadInner() {
  const { m, config } = useLocale()
  const d = m.download
  const [versionLabel, setVersionLabel] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(DOWNLOADS_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { tag_name?: string } | null) => {
        if (cancelled || !data?.tag_name) return
        setVersionLabel(data.tag_name.replace(/^v/, ''))
      })
      .catch(() => {
        /* keep generic copy if API blocked */
      })
    return () => {
      cancelled = true
    }
  }, [])

  const versionText = versionLabel
    ? d.versionPrefix.replace('{{version}}', versionLabel)
    : ''

  return (
    <ConfigProvider
      locale={config.antd}
      theme={{ algorithm: theme.darkAlgorithm, token: TOKEN }}
    >
      <SiteHeader />
      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '120px 24px 80px',
          minHeight: '70vh',
        }}
      >
        <Typography.Title level={1} style={{ color: '#e6edf3', marginBottom: 8 }}>
          {d.title}
        </Typography.Title>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 16 }}>
          {versionText}
          {d.lead}
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 14 }}>
          {d.note}
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 14 }}>
          {d.hostedOn}{' '}
          <a href="https://github.com/VistaRemote/downloads/releases" style={{ color: '#1677ff' }}>
            VistaRemote/downloads
          </a>
          .
        </Typography.Paragraph>

        <Alert
          type="warning"
          showIcon
          style={{ marginBottom: 28 }}
          message={d.unsigned}
        />

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <DesktopOutlined /> {d.agentTitle}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {d.agentBlurb}
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<WindowsOutlined />} href={AGENT_SETUP} size="large">
                {d.winSetup}
              </Button>
              <Button icon={<WindowsOutlined />} href={AGENT_PORTABLE} size="large">
                {d.winPortable}
              </Button>
              <Button icon={<AppleOutlined />} href={AGENT_MAC} size="large">
                {d.macDmg}
              </Button>
            </Space>
          </section>

          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <ControlOutlined /> {d.viewerTitle}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {d.viewerBlurb}
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<WindowsOutlined />} href={VIEWER_WIN} size="large">
                {d.winPortable}
              </Button>
              <Button icon={<AppleOutlined />} href={VIEWER_MAC} size="large">
                {d.macDmg}
              </Button>
            </Space>
          </section>

          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <AndroidOutlined /> {d.androidTitle}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {d.androidBlurb}
            </Typography.Paragraph>
            <Button type="primary" icon={<DownloadOutlined />} href={ANDROID_APK} size="large">
              {d.apk}
            </Button>
          </section>

          <Typography.Paragraph style={{ color: '#8b949e' }}>
            <Link href="/" style={{ color: '#1677ff' }}>
              {d.backHome}
            </Link>
            {' · '}
            {m.footer.links.docs}
          </Typography.Paragraph>
        </Space>
      </main>
      <SiteFooter />
    </ConfigProvider>
  )
}

export default function DownloadPage() {
  return (
    <LocaleProvider>
      <DownloadInner />
    </LocaleProvider>
  )
}
