'use client'

import { Tag } from 'antd'
import { CodeOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'
import styles from '@/app/architecture.module.css'

const LAYER_COLORS = ['#1677ff', '#00d296', '#79c0ff', '#f5a623', '#7b5cf0']
const LAYER_RGBS = ['22,119,255', '0,210,150', '121,192,255', '245,166,35', '123,92,240']

export default function ArchitectureSection() {
  const { m } = useLocale()
  const a = m.architecture

  return (
    <section id="architecture" className="vr-section" aria-labelledby="arch-title">
      <div className="vr-container">
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className="vr-eyebrow">
              <CodeOutlined />
              {a.eyebrow}
            </div>
            <h2 id="arch-title" className={`vr-title ${styles.title}`}>
              {a.title}
            </h2>
            <p className={`vr-subtitle ${styles.subtitle}`}>{a.subtitle}</p>
            <div className={styles.callout}>
              <div style={{ fontSize: 12, color: '#8b949e', lineHeight: 1.7 }}>
                <div style={{ color: '#c9d1d9', fontWeight: 600, marginBottom: 6 }}>
                  {a.vibeTitle}
                </div>
                {a.vibeDesc}
              </div>
            </div>
          </div>

          <div className={styles.stack}>
            {a.layers.map((layer, idx) => (
              <div
                key={layer.name}
                style={{
                  display: 'flex',
                  gap: 20,
                  marginBottom: idx < a.layers.length - 1 ? 0 : 0,
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: `rgba(${LAYER_RGBS[idx]},0.1)`,
                      border: `1.5px solid rgba(${LAYER_RGBS[idx]},0.35)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: 700,
                      color: LAYER_COLORS[idx],
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  {idx < a.layers.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 24,
                        background: 'linear-gradient(to bottom, #21334a, transparent)',
                        margin: '4px 0',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div
                  style={{
                    flex: 1,
                    background: '#161f2e',
                    border: '1px solid #21334a',
                    borderRadius: 10,
                    padding: '16px 20px',
                    marginBottom: idx < a.layers.length - 1 ? 12 : 0,
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = LAYER_COLORS[idx]
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#21334a'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 6,
                    }}
                  >
                    <div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#e6edf3' }}>
                        {layer.name}
                      </span>
                      <span
                        style={{
                          marginLeft: 10,
                          fontSize: 11,
                          color: LAYER_COLORS[idx],
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {layer.en}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.65, marginBottom: 12 }}>
                    {layer.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {layer.tags.map((t) => (
                      <Tag
                        key={t}
                        style={{
                          borderRadius: 4,
                          fontSize: 11,
                          borderColor: '#21334a',
                          color: LAYER_COLORS[idx],
                          background: `rgba(${LAYER_RGBS[idx]},0.05)`,
                        }}
                      >
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
