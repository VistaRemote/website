'use client'

import { ConfigProvider, theme, Button, Typography, Space, Alert } from 'antd'
import { DownloadOutlined, AndroidOutlined, WindowsOutlined } from '@ant-design/icons'
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

/** Public binary bucket (source stays private). Override via env if needed. */
const RELEASE_VERSION = process.env.NEXT_PUBLIC_RELEASE_VERSION ?? '1.0.0'
const RELEASE_BASE =
  process.env.NEXT_PUBLIC_RELEASE_BASE ??
  'https://github.com/VistaRemote/downloads/releases/latest/download'

const AGENT_SETUP = `${RELEASE_BASE}/VistaRemote-Agent-${RELEASE_VERSION}-win-setup.exe`
const AGENT_PORTABLE = `${RELEASE_BASE}/VistaRemote-Agent-${RELEASE_VERSION}-win.exe`
const ANDROID_APK =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ??
  `${RELEASE_BASE}/VistaRemote-${RELEASE_VERSION}.apk`

function DownloadInner() {
  const { locale, m, config } = useLocale()
  const zh = locale.startsWith('zh')

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
            ? 'v1.0 软商用：Windows Agent 安装包 / 便携版，以及 Android 主控 APK（侧载）。'
            : 'v1.0 soft commercial: Windows Agent installer / portable, and Android controller APK (sideload).'}
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: '#8b949e', fontSize: 14 }}>
          {zh ? (
            <>
              安装包托管在公开仓库{' '}
              <a href="https://github.com/VistaRemote/downloads/releases" style={{ color: '#1677ff' }}>
                VistaRemote/downloads
              </a>
              （源码仓保持私有）。也可在{' '}
              <a href="https://github.com/VistaRemote/downloads/releases/latest" style={{ color: '#1677ff' }}>
                GitHub Releases
              </a>{' '}
              直接下载。
            </>
          ) : (
            <>
              Binaries are hosted on the public{' '}
              <a href="https://github.com/VistaRemote/downloads/releases" style={{ color: '#1677ff' }}>
                VistaRemote/downloads
              </a>{' '}
              repo (source stays private). Also available on{' '}
              <a href="https://github.com/VistaRemote/downloads/releases/latest" style={{ color: '#1677ff' }}>
                GitHub Releases
              </a>
              .
            </>
          )}
        </Typography.Paragraph>

        <Alert
          type="warning"
          showIcon
          style={{ marginBottom: 28 }}
          message={
            zh
              ? '安装包暂未代码签名，Windows SmartScreen 可能提示「未知发布者」。选择「仍要运行」即可。'
              : 'Builds are unsigned; Windows SmartScreen may warn. Choose “Run anyway”.'
          }
        />

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <section
            style={{
              background: '#161f2e',
              border: '1px solid #21334a',
              borderRadius: 12,
              padding: 24,
            }}
          >
            <Typography.Title level={3} style={{ color: '#e6edf3', marginTop: 0 }}>
              <WindowsOutlined /> {zh ? 'Windows Agent（被控端）' : 'Windows Agent (host)'}
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#8b949e' }}>
              {zh
                ? '安装后启动，确认已配置生产 API（VISTAREMOTE_API_URL），窗口将显示配对码。'
                : 'After install, set VISTAREMOTE_API_URL to your production API; the window shows a pairing code.'}
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<DownloadOutlined />} href={AGENT_SETUP} size="large">
                {zh ? '下载安装包 (NSIS)' : 'Download installer (NSIS)'}
              </Button>
              <Button icon={<DownloadOutlined />} href={AGENT_PORTABLE} size="large">
                {zh ? '便携版 Portable' : 'Portable'}
              </Button>
            </Space>
          </section>

          <section
            style={{
              background: '#161f2e',
              border: '1px solid #21334a',
              borderRadius: 12,
              padding: 24,
            }}
          >
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
