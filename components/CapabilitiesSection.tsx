'use client'

import { Tabs, Tag } from 'antd'
import {
  ThunderboltOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { useLocale } from '@/lib/i18n'
import type { CapGroup } from '@/lib/i18n/types'

const ITEM_STYLE = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  marginBottom: 16,
}

const DOT_STYLE: React.CSSProperties = {
  marginTop: 5,
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#1677ff',
  flexShrink: 0,
}

function CapItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={ITEM_STYLE}>
      <span style={DOT_STYLE} aria-hidden="true" />
      <span style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.65 }}>{children}</span>
    </div>
  )
}

function CapPanel({
  left,
  right,
  leftTagColor,
  rightTagColor,
}: {
  left: CapGroup
  right: CapGroup
  leftTagColor: string
  rightTagColor: string
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      {[left, right].map((group, gi) => {
        const color = gi === 0 ? leftTagColor : rightTagColor
        const bg =
          gi === 0 ? 'rgba(121,192,255,0.05)' : gi === 1 && rightTagColor === '#00d296'
            ? 'rgba(0,210,150,0.05)'
            : 'rgba(121,192,255,0.05)'
        return (
          <div key={group.title}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 16 }}>
              {group.title}
            </h3>
            {group.items.map((item) => (
              <CapItem key={item}>{item}</CapItem>
            ))}
            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {group.tags.map((t) => (
                <Tag
                  key={t}
                  style={{
                    borderRadius: 5,
                    fontSize: 11,
                    borderColor: '#21334a',
                    color,
                    background: bg,
                  }}
                >
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const PANEL_STYLE = {
  background: '#161f2e',
  border: '1px solid #21334a',
  borderRadius: 12,
  padding: '28px 28px 24px',
  marginTop: 4,
}

export default function CapabilitiesSection() {
  const { m } = useLocale()
  const { capabilities: c } = m

  return (
    <section id="capabilities" className="vr-section" aria-labelledby="capabilities-title">
      <div className="vr-container">
        <div className="vr-section-head">
          <div className="vr-eyebrow">
            <CheckCircleOutlined />
            {c.eyebrow}
          </div>
          <h2 id="capabilities-title" className="vr-title">
            {c.title}
          </h2>
          <p className="vr-subtitle">{c.subtitle}</p>
        </div>

        <Tabs
          defaultActiveKey="realtime"
          size="large"
          items={[
            {
              key: 'realtime',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ThunderboltOutlined />
                  {c.tabs.realtime}
                </span>
              ),
              children: (
                <div style={PANEL_STYLE}>
                  <CapPanel
                    left={c.realtime.conn}
                    right={c.realtime.control}
                    leftTagColor="#79c0ff"
                    rightTagColor="#00d296"
                  />
                </div>
              ),
            },
            {
              key: 'audit',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <VideoCameraOutlined />
                  {c.tabs.audit}
                </span>
              ),
              children: (
                <div style={PANEL_STYLE}>
                  <CapPanel
                    left={c.audit.record}
                    right={c.audit.ai}
                    leftTagColor="#79c0ff"
                    rightTagColor="#7b5cf0"
                  />
                </div>
              ),
            },
            {
              key: 'management',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <SettingOutlined />
                  {c.tabs.management}
                </span>
              ),
              children: (
                <div style={PANEL_STYLE}>
                  <CapPanel
                    left={c.management.device}
                    right={c.management.auth}
                    leftTagColor="#f5a623"
                    rightTagColor="#00d296"
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  )
}
