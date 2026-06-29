'use client'

import { Row, Col, Tag } from 'antd'
import { GlobalOutlined, DesktopOutlined, MobileOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'

const ICONS = [
  <GlobalOutlined key="web" style={{ fontSize: 28, color: '#1677ff' }} />,
  <DesktopOutlined key="desk" style={{ fontSize: 28, color: '#00d296' }} />,
  <MobileOutlined key="mob" style={{ fontSize: 28, color: '#7b5cf0' }} />,
]

const ACCENTS = ['#1677ff', '#00d296', '#7b5cf0'] as const
const RGBS = ['22,119,255', '0,210,150', '123,92,240'] as const

export default function MultiplatformSection() {
  const { m } = useLocale()

  return (
    <section id="multiplatform" className="vr-section" aria-labelledby="multiplatform-title">
      <div className="vr-container">
        <div className="vr-section-head centered">
          <div className="vr-eyebrow">{m.multiplatform.eyebrow}</div>
          <h2 id="multiplatform-title" className="vr-title">
            {m.multiplatform.title}
          </h2>
          <p className="vr-subtitle">{m.multiplatform.subtitle}</p>
        </div>

        <Row gutter={[20, 20]}>
          {m.multiplatform.platforms.map((p, idx) => (
            <Col key={p.name} xs={24} md={8}>
              <div className="platform-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    marginBottom: 16,
                    paddingBottom: 16,
                    borderBottom: '1px solid #21334a',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `rgba(${RGBS[idx]},0.08)`,
                      border: `1px solid rgba(${RGBS[idx]},0.2)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {ICONS[idx]}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#e6edf3' }}>{p.name}</div>
                    <div
                      style={{
                        fontSize: 11,
                        color: ACCENTS[idx],
                        fontFamily: 'var(--font-mono)',
                        marginTop: 2,
                      }}
                    >
                      {p.label}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: '#8b949e', lineHeight: 1.7, marginBottom: 16 }}>
                  {p.desc}
                </p>

                <div style={{ marginBottom: 16 }}>
                  {p.feats.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: ACCENTS[idx],
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span style={{ fontSize: 13, color: '#c9d1d9' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map((t) => (
                    <Tag
                      key={t}
                      style={{
                        borderRadius: 5,
                        fontSize: 11,
                        borderColor: '#21334a',
                        color: ACCENTS[idx],
                        background: `rgba(${RGBS[idx]},0.05)`,
                      }}
                    >
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div
          style={{
            marginTop: 32,
            padding: '16px 20px',
            background: '#161f2e',
            border: '1px solid #21334a',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              color: '#1677ff',
              background: 'rgba(22,119,255,0.08)',
              border: '1px solid rgba(22,119,255,0.2)',
              borderRadius: 4,
              padding: '2px 8px',
              flexShrink: 0,
            }}
          >
            {m.common.sharedCodeLabel}
          </span>
          <span style={{ fontSize: 13, color: '#8b949e' }}>{m.common.sharedCodeDesc}</span>
        </div>
      </div>
    </section>
  )
}
