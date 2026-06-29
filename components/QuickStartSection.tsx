'use client'

import { useState } from 'react'
import { Row, Col, Tag } from 'antd'
import {
  RocketOutlined,
  CopyOutlined,
  CheckOutlined,
  GithubOutlined,
  CloudOutlined,
  ApiOutlined,
} from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'

type TabKey = 'clone' | 'docker' | 'plugin'

const TAB_ICONS: Record<TabKey, React.ReactNode> = {
  clone: <GithubOutlined />,
  docker: <CloudOutlined />,
  plugin: <ApiOutlined />,
}

export default function QuickStartSection() {
  const { m } = useLocale()
  const q = m.quickstart
  const [activeTab, setActiveTab] = useState<TabKey>('clone')
  const [copied, setCopied] = useState(false)

  const lines = q.code[activeTab]
  const fullText = lines.map((l) => l.v).join('\n')

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const tabs: TabKey[] = ['clone', 'docker', 'plugin']

  return (
    <section id="quickstart" className="vr-section" aria-labelledby="quickstart-title">
      <div className="vr-container">
        <Row gutter={[48, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className="vr-eyebrow">
              <RocketOutlined />
              {q.eyebrow}
            </div>
            <h2 id="quickstart-title" className="vr-title">
              {q.title}
            </h2>
            <p className="vr-subtitle">{q.subtitle}</p>

            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {q.steps.map((step) => (
                <div
                  key={step.n}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '12px 16px',
                    background: '#161f2e',
                    border: '1px solid #21334a',
                    borderRadius: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: '#1677ff',
                      fontWeight: 700,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <div style={{ fontSize: 14, color: '#c9d1d9', fontWeight: 500 }}>{step.label}</div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#4a5568',
                        fontFamily: 'var(--font-mono)',
                        marginTop: 2,
                      }}
                    >
                      {step.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Node 20+', 'pnpm 9+', 'Docker 24+', 'Windows / macOS / Linux'].map((t) => (
                <Tag
                  key={t}
                  style={{
                    borderRadius: 4,
                    borderColor: '#21334a',
                    color: '#8b949e',
                    background: 'transparent',
                    fontSize: 11,
                  }}
                >
                  {t}
                </Tag>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <div
              style={{
                display: 'flex',
                gap: 0,
                background: '#161f2e',
                border: '1px solid #21334a',
                borderBottom: 'none',
                borderRadius: '10px 10px 0 0',
                overflow: 'hidden',
              }}
              role="tablist"
              aria-label={q.tabsAria}
            >
              {tabs.map((key) => {
                const active = key === activeTab
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '10px 18px',
                      background: active ? '#010409' : 'transparent',
                      border: 'none',
                      borderRight: '1px solid #21334a',
                      borderBottom: active ? '2px solid #1677ff' : '2px solid transparent',
                      color: active ? '#e6edf3' : '#4a5568',
                      fontSize: 13,
                      cursor: 'pointer',
                      transition: 'color 0.15s',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {TAB_ICONS[key]}
                    {q.tabs[key]}
                  </button>
                )
              })}
            </div>

            <div
              className="vr-code-wrap"
              style={{ borderRadius: '0 0 10px 10px' }}
              role="tabpanel"
            >
              <button className="vr-copy-btn" onClick={handleCopy} aria-label={q.copyAria}>
                {copied ? (
                  <>
                    <CheckOutlined /> {m.common.copied}
                  </>
                ) : (
                  <>
                    <CopyOutlined /> {m.common.copy}
                  </>
                )}
              </button>

              {lines.map((line, i) => {
                if (line.v === '') return <br key={i} />
                if (line.t === 'cmt') return <div key={i} className="c-cmt">{line.v}</div>
                if (line.t === 'cmd')
                  return (
                    <div key={i}>
                      <span className="c-cmt">$ </span>
                      <span className="c-cmd">{line.v}</span>
                    </div>
                  )
                if (line.t === 'arg') return <div key={i} className="c-arg">{line.v}</div>
                if (line.t === 'url') return <div key={i} className="c-url">{line.v}</div>
                return <div key={i} style={{ color: '#e6edf3' }}>{line.v}</div>
              })}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
