'use client'

import { Button, Tag, Row, Col } from 'antd'
import { ThunderboltOutlined, BookOutlined } from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'
import styles from '@/app/hero.module.css'

const MOCK_LINES = [
  { type: 'dim', text: '# VistaRemote Agent v2.4.1 — session established' },
  { type: 'hi', text: 'remote@edge-gw-007:~$' },
  { type: 'norm', text: '' },
  { type: 'hi', text: '  peer: 192.168.10.42 → 10.0.0.5' },
  { type: 'norm', text: '  codec: H.264 / NVENC  fps: 60  kbps: 4200' },
  { type: 'norm', text: '  latency: ' },
  { type: 'warn', text: '  42 ms' },
  { type: 'norm', text: '  encrypt: AES-256-GCM  ✓ verified' },
  { type: 'norm', text: '' },
  { type: 'dim', text: '# AI session recorder → /data/sessions/s_20240628.mp4' },
  { type: 'norm', text: '  status: ' },
  { type: 'err', text: '  ● REC' },
  { type: 'norm', text: '  segment: 00:04:17  frames: 15,420' },
  { type: 'norm', text: '' },
  { type: 'dim', text: '# RBAC: operator@luminary · role: remote-admin' },
  { type: 'norm', text: '  permissions: [screen, input, file, restart]' },
]

export default function HeroSection() {
  const { m } = useLocale()

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.badge}>{m.common.luminaryBadge}</div>
          <h1 id="hero-title" className={styles.title}>
            {m.hero.title}
          </h1>
        </div>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <p className={styles.titleEn}>{m.hero.titleEn}</p>
            <p className={styles.desc}>{m.hero.desc}</p>

            <div className={styles.actions}>
              <Button
                type="primary"
                size="large"
                icon={<ThunderboltOutlined />}
                style={{ borderRadius: 8, fontWeight: 600 }}
              >
                {m.hero.ctaPrimary}
              </Button>
              <Button
                size="large"
                icon={<BookOutlined />}
                style={{
                  borderRadius: 8,
                  background: 'transparent',
                  borderColor: '#21334a',
                  color: '#8b949e',
                }}
              >
                {m.hero.ctaSecondary}
              </Button>
            </div>

            <div className={styles.stats}>
              {m.hero.stats.map((s) => (
                <div key={s.l} className={styles.statItem}>
                  <span className={styles.statValue}>{s.v}</span>
                  <span className={styles.statLabel}>{s.l}</span>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.mockCard} role="img" aria-label={m.hero.mockAria}>
              <div className={styles.mockBar}>
                <span className={`${styles.dot} ${styles.dotR}`} />
                <span className={`${styles.dot} ${styles.dotY}`} />
                <span className={`${styles.dot} ${styles.dotG}`} />
                <span className={styles.mockBarLabel}>edge-gw-007 — VistaRemote Session</span>
                <span className={styles.mockBarRight}>LIVE</span>
              </div>

              <div className={styles.mockBody}>
                <div className={styles.mockScreen} aria-hidden="true">
                  {MOCK_LINES.map((line, i) => {
                    if (line.type === 'dim')
                      return (
                        <div key={i} className="dim">
                          {line.text}
                        </div>
                      )
                    if (line.type === 'hi')
                      return (
                        <div key={i} className="hi">
                          {line.text}
                        </div>
                      )
                    if (line.type === 'warn')
                      return (
                        <span key={i} className="warn">
                          {line.text}
                        </span>
                      )
                    if (line.type === 'err')
                      return (
                        <span key={i} className="err">
                          {line.text}
                        </span>
                      )
                    return <span key={i}>{line.text}</span>
                  })}
                </div>

                <div className={styles.mockTags}>
                  {m.hero.tags.map((tag, i) => {
                    const colors = ['green', 'red', 'blue', 'purple'] as const
                    return (
                      <Tag key={tag} color={colors[i]} style={{ borderRadius: 5, fontSize: 12 }}>
                        {tag}
                      </Tag>
                    )
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
