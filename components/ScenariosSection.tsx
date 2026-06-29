'use client'

import { Row, Col, Collapse } from 'antd'
import {
  ToolOutlined,
  CustomerServiceOutlined,
  LockOutlined,
  RobotOutlined,
  CheckCircleFilled,
  WarningOutlined,
} from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'

const ICONS = [
  <ToolOutlined key="tool" style={{ fontSize: 24, color: '#1677ff' }} />,
  <CustomerServiceOutlined key="cs" style={{ fontSize: 24, color: '#00d296' }} />,
  <LockOutlined key="lock" style={{ fontSize: 24, color: '#f5a623' }} />,
  <RobotOutlined key="robot" style={{ fontSize: 24, color: '#7b5cf0' }} />,
]

export default function ScenariosSection() {
  const { m } = useLocale()

  return (
    <section id="scenarios" className="vr-section" aria-labelledby="scenarios-title">
      <div className="vr-container">
        <div className="vr-section-head centered">
          <div className="vr-eyebrow">{m.scenarios.eyebrow}</div>
          <h2 id="scenarios-title" className="vr-title">
            {m.scenarios.title}
          </h2>
          <p className="vr-subtitle">{m.scenarios.subtitle}</p>
        </div>

        <Row gutter={[20, 20]}>
          {m.scenarios.cards.map((card, idx) => (
            <Col key={card.title} xs={24} sm={12} xl={6}>
              <div className="scenario-card">
                <CheckCircleFilled
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: '#1a3a2a',
                    fontSize: 18,
                  }}
                />
                <div style={{ marginBottom: 14 }}>{ICONS[idx]}</div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#e6edf3',
                    marginBottom: 8,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#8b949e',
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {card.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        color: '#4a5568',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid #21334a',
                        borderRadius: 4,
                        padding: '2px 8px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: 32, maxWidth: 680, margin: '32px auto 0' }}>
          <Collapse
            size="small"
            items={[
              {
                key: '1',
                label: (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: '#8b949e',
                      fontSize: 13,
                    }}
                  >
                    <WarningOutlined style={{ color: '#f5a623' }} />
                    {m.scenarios.notFitLabel}
                  </span>
                ),
                children: (
                  <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, padding: '4px 0' }}>
                    <strong style={{ color: '#e6edf3' }}>{m.scenarios.notFitBold}</strong>{' '}
                    {m.scenarios.notFitRest}
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
