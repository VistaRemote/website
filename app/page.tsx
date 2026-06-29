'use client'

import { ConfigProvider, theme, FloatButton } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

import { LocaleProvider, useLocale } from '@/lib/i18n'
import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import ScenariosSection from '@/components/ScenariosSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import MultiplatformSection from '@/components/MultiplatformSection'
import PluginSection from '@/components/PluginSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import ComparisonSection from '@/components/ComparisonSection'
import EcosystemSection from '@/components/EcosystemSection'
import QuickStartSection from '@/components/QuickStartSection'
import SiteFooter from '@/components/SiteFooter'

const TOKEN = {
  colorPrimary: '#1677ff',
  colorBgBase: '#0d1117',
  colorTextBase: '#e6edf3',
  borderRadius: 8,
  colorBgContainer: '#161f2e',
  colorBgElevated: '#1c2a3a',
  colorBorder: '#21334a',
  colorText: '#e6edf3',
  colorTextSecondary: '#8b949e',
  colorTextTertiary: '#4a5568',
  colorFillSecondary: 'rgba(255,255,255,0.05)',
  colorFill: 'rgba(255,255,255,0.03)',
  fontFamily: "'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif",
}

function VistaRemotePageInner() {
  const { m, config } = useLocale()

  return (
    <ConfigProvider
      locale={config.antd}
      theme={{
        algorithm: theme.darkAlgorithm,
        token: TOKEN,
        components: {
          Tag: { borderRadiusSM: 5 },
          Button: { borderRadius: 8 },
          Card: { borderRadius: 12 },
          Tabs: {
            itemColor: '#8b949e',
            itemHoverColor: '#e6edf3',
            itemSelectedColor: '#1677ff',
            inkBarColor: '#1677ff',
          },
          Table: {
            headerBg: '#1c2a3a',
            headerColor: '#8b949e',
            rowHoverBg: 'rgba(255,255,255,0.025)',
            borderColor: '#21334a',
          },
          Collapse: { headerBg: 'transparent' },
          Steps: { colorPrimary: '#1677ff' },
        },
      }}
    >
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: 9999,
          background: '#1677ff',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: 4,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '16px'
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px'
        }}
      >
        {m.common.skipToContent}
      </a>

      <SiteHeader />

      <main id="main-content" style={{ paddingTop: 60 }}>
        <HeroSection />
        <ScenariosSection />
        <CapabilitiesSection />
        <MultiplatformSection />
        <PluginSection />
        <ArchitectureSection />
        <ComparisonSection />
        <EcosystemSection />
        <QuickStartSection />
      </main>

      <SiteFooter />

      <FloatButton.BackTop
        icon={<ArrowUpOutlined />}
        visibilityHeight={400}
        tooltip={m.common.backToTop}
        style={{ bottom: 32, right: 32 }}
      />
    </ConfigProvider>
  )
}

export default function VistaRemotePage() {
  return (
    <LocaleProvider>
      <VistaRemotePageInner />
    </LocaleProvider>
  )
}
