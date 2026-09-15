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
  const { locale, m, config } = useLocale()
  const zh = locale.startsWith('zh')
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
    ? zh
      ? `当前最新 ${versionLabel}：`
      : `Latest ${versionLabel}: `
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
          {zh ? '下载 VistaRemote' : 'Download VistaRemote'}
        </Typography.Title>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 16 }}>
          {zh
            ? `${versionText}Agent（被控）与 Viewer（PC 主控）提供 Windows / macOS；Android 为主控侧载 APK。按钮始终指向最新安装包。`
            : `${versionText}Agent (host) and Viewer (PC controller) for Windows / macOS; Android controller APK. Buttons always download the latest build.`}
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 14 }}>
          {zh ? (
            <>
              安装包托管在{' '}
              <a href="https://github.com/VistaRemote/downloads/releases" style={{ color: '#1677ff' }}>
                VistaRemote/downloads
              </a>
              （源码仓私有）。
            </>
          ) : (
            <>
              Binaries on{' '}
              <a href="https://github.com/VistaRemote/downloads/releases" style={{ color: '#1677ff' }}>
                VistaRemote/downloads
              </a>{' '}
              (source stays private).
            </>
          )}
        </Typography.Paragraph>

        <Alert
          type="warning"
          showIcon
          style={{ marginBottom: 28 }}
          message={
            zh
              ? '安装包未代码签名 / 未公证。Windows SmartScreen 选「仍要运行」；macOS 对 App 右键 →「打开」。'
              : 'Unsigned / not notarized. Windows: Run anyway. macOS: right-click → Open.'
          }
        />

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <DesktopOutlined /> {zh ? 'Agent（被控端）' : 'Agent (host)'}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {zh
                ? '安装在被远程操控的电脑上。配置 VISTAREMOTE_API_URL 后窗口显示配对码。'
                : 'Install on the machine being controlled. Set VISTAREMOTE_API_URL; the window shows a pairing code.'}
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<WindowsOutlined />} href={AGENT_SETUP} size="large">
                {zh ? 'Windows 安装包' : 'Windows installer'}
              </Button>
              <Button icon={<WindowsOutlined />} href={AGENT_PORTABLE} size="large">
                {zh ? 'Windows 便携版' : 'Windows portable'}
              </Button>
              <Button icon={<AppleOutlined />} href={AGENT_MAC} size="large">
                macOS DMG
              </Button>
            </Space>
          </section>

          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <ControlOutlined /> {zh ? 'Viewer（PC 主控）' : 'Viewer (PC controller)'}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {zh
                ? '安装在运维 / 监控电脑上：登录后输入配对码，远程查看并操作 Agent。'
                : 'Install on the operator PC: sign in, enter a pairing code, view and control the Agent.'}
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<WindowsOutlined />} href={VIEWER_WIN} size="large">
                {zh ? 'Windows 便携版' : 'Windows portable'}
              </Button>
              <Button icon={<AppleOutlined />} href={VIEWER_MAC} size="large">
                macOS DMG
              </Button>
            </Space>
          </section>

          <section style={sectionStyle}>
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <AndroidOutlined /> {zh ? 'Android 主控' : 'Android controller'}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {zh
                ? '登录后输入配对码即可控制。需允许「未知来源」安装 APK。'
                : 'Sign in, then enter a pairing code. Allow installs from unknown sources.'}
            </Typography.Paragraph>
            <Button type="primary" icon={<DownloadOutlined />} href={ANDROID_APK} size="large">
              {zh ? '下载 APK' : 'Download APK'}
            </Button>
          </section>

          <Typography.Paragraph style={{ color: '#8b949e' }}>
            <Link href="/" style={{ color: '#1677ff' }}>
              {zh ? '← 返回首页' : '← Back home'}
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
