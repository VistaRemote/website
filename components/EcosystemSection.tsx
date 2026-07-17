'use client'

import { Row, Col } from 'antd'
import { ShareAltOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'

const ECO_NAMES = ['VistaCast', 'SyncroBrain', 'DoerFlow', 'DataLuminary', 'BlockyEdu'] as const
const ECO_URLS: Record<(typeof ECO_NAMES)[number], string> = {
  VistaCast: 'https://vistacast.dev',
  SyncroBrain: 'https://syncrobrain.com',
  DoerFlow: 'https://doerflow.dev',
  DataLuminary: 'https://dataluminary.dev',
  BlockyEdu: 'https://blockyedu.com',
}
const ECO_COLORS = ['#f5a623', '#00d296', '#1677ff', '#79c0ff', '#7b5cf0']
const ECO_RGBS = ['245,166,35', '0,210,150', '22,119,255', '121,192,255', '123,92,240']

export default function EcosystemSection() {
  const { m } = useLocale()
  const e = m.ecosystem

  return (
    <section id="ecosystem" className="vr-section" aria-labelledby="ecosystem-title">
      <div className="vr-container">
        <div className="vr-section-head centered">
          <div className="vr-eyebrow">
            <ShareAltOutlined />
            {e.eyebrow}
          </div>
          <h2 id="ecosystem-title" className="vr-title">
            {e.title}
          </h2>
          <p className="vr-subtitle">{e.subtitle}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 20,
              background: '#161f2e',
              border: '1px solid rgba(22,119,255,0.25)',
              borderRadius: 50,
              padding: '10px 24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: 8,
            }}
          >
            {ECO_NAMES.map((name, i) => (
              <span key={name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: ECO_COLORS[i],
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <a
                  href={ECO_URLS[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: '#c9d1d9', fontWeight: 500, textDecoration: 'none' }}
                >
                  {name}
                </a>
                {i < ECO_NAMES.length - 1 && (
                  <ArrowRightOutlined style={{ fontSize: 10, color: '#21334a' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <Row gutter={[16, 16]}>
          {ECO_NAMES.map((name, idx) => {
            const item = e.items[name]
            const color = ECO_COLORS[idx]
            const bgRgb = ECO_RGBS[idx]
            return (
              <Col key={name} xs={24} sm={12}>
                <a
                  href={ECO_URLS[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-card"
                  style={{ height: '100%', display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: `rgba(${bgRgb},0.08)`,
                        border: `1px solid rgba(${bgRgb},0.2)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: color,
                        }}
                      />
                    </div>
                    <div>
                      <div className="eco-card-name">{name}</div>
                      <div className="eco-card-role">{item.role}</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginBottom: 10,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        color: '#4a5568',
                        background: '#0d1117',
                        border: '1px solid #21334a',
                        borderRadius: 4,
                        padding: '2px 7px',
                      }}
                    >
                      {item.trigger}
                    </span>
                    <ArrowRightOutlined
                      style={{ fontSize: 10, color, flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color,
                        background: `rgba(${bgRgb},0.06)`,
                        border: `1px solid rgba(${bgRgb},0.18)`,
                        borderRadius: 4,
                        padding: '2px 7px',
                      }}
                    >
                      {item.action}
                    </span>
                  </div>

                  <p className="eco-card-desc">{item.desc}</p>
                </a>
              </Col>
            )
          })}
        </Row>
      </div>
    </section>
  )
}
