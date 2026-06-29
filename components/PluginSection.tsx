'use client'

import { Row, Col, Tag } from 'antd'
import { ApiOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'

const PLUGIN_META = [
  { num: '01', color: '#1677ff', bgRgb: '22,119,255', api: 'registerUIPlugin(config: UIPluginConfig)' },
  { num: '02', color: '#00d296', bgRgb: '0,210,150', api: 'registerWorkflowPlugin(config: WorkflowPluginConfig)' },
  { num: '03', color: '#7b5cf0', bgRgb: '123,92,240', api: 'registerAIPlugin(config: AIPluginConfig)' },
]

const PIPELINE_COLORS = ['#4a5568', '#1677ff', '#00d296', '#7b5cf0', '#4a5568']
const PIPELINE_BGS = ['transparent', 'rgba(22,119,255,0.05)', 'rgba(0,210,150,0.05)', 'rgba(123,92,240,0.05)', 'transparent']

export default function PluginSection() {
  const { m } = useLocale()
  const p = m.plugins

  return (
    <section id="plugins" className="vr-section" aria-labelledby="plugins-title">
      <div className="vr-container">
        <div className="vr-section-head">
          <div className="vr-eyebrow">
            <ApiOutlined />
            {p.eyebrow}
          </div>
          <h2 id="plugins-title" className="vr-title">
            {p.title}
          </h2>
          <p className="vr-subtitle">{p.subtitle}</p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            marginBottom: 32,
            background: '#161f2e',
            border: '1px solid #21334a',
            borderRadius: 10,
            overflow: 'hidden',
          }}
          role="img"
          aria-label={p.pipelineAria}
        >
          {p.pipeline.map((label, i, arr) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: '12px 0',
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'var(--font-mono)',
                color: PIPELINE_COLORS[i],
                background: PIPELINE_BGS[i],
                borderRight: i < arr.length - 1 ? '1px solid #21334a' : 'none',
                position: 'relative',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <Row gutter={[20, 20]}>
          {p.items.map((item, idx) => {
            const meta = PLUGIN_META[idx]
            return (
              <Col key={meta.num} xs={24} md={8}>
                <div className="plugin-card">
                  <div className="plugin-card-num">{meta.num}</div>
                  <div className="plugin-card-sub">{item.type}</div>
                  <h3 className="plugin-card-title">{item.title}</h3>
                  <p className="plugin-card-desc">{item.desc}</p>
                  <div style={{ margin: '16px 0 16px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.examples.map((ex) => (
                      <Tag
                        key={ex}
                        style={{
                          borderRadius: 5,
                          fontSize: 11,
                          borderColor: '#21334a',
                          color: meta.color,
                          background: `rgba(${meta.bgRgb},0.06)`,
                        }}
                      >
                        {ex}
                      </Tag>
                    ))}
                  </div>
                  <div
                    style={{
                      background: '#010409',
                      border: '1px solid #21334a',
                      borderRadius: 6,
                      padding: '8px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#4a5568',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ color: meta.color }}>{meta.api.split('(')[0]}</span>
                    <span>{'(' + meta.api.split('(')[1]}</span>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

        <div
          style={{
            marginTop: 32,
            padding: '20px 24px',
            background: 'rgba(22,119,255,0.04)',
            border: '1px solid rgba(22,119,255,0.15)',
            borderRadius: 10,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, color: '#e6edf3', marginBottom: 6 }}>
            {p.registryTitle}
          </div>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7 }}>{p.registryDesc}</p>
        </div>
      </div>
    </section>
  )
}
