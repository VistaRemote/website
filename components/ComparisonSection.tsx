'use client'

import { Table, Tag } from 'antd'
import { SwapOutlined, CheckOutlined, CloseOutlined, MinusOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import { useLocale } from '@/lib/i18n'
import type { ComparisonRow } from '@/lib/i18n/types'

const CHECK = <CheckOutlined style={{ color: '#00d296' }} />
const CROSS = <CloseOutlined style={{ color: '#ff4d4f' }} />
const DASH = <MinusOutlined style={{ color: '#4a5568' }} />

function renderCell(
  value: string,
  tags: {
    bidirectional: string
    unidirectional: string
    receiveAlert: string
    manualClose: string
    detectAnomaly: string
    emitSignal: string
  },
  side: 'remote' | 'cast',
) {
  if (value === 'check') return CHECK
  if (value === 'bidirectional')
    return <Tag color="blue" style={{ borderRadius: 4 }}>{tags.bidirectional}</Tag>
  if (value === 'unidirectional')
    return <Tag color="orange" style={{ borderRadius: 4 }}>{tags.unidirectional}</Tag>
  if (value === 'collab-remote')
    return (
      <span>
        <Tag color="green" style={{ borderRadius: 4 }}>{tags.receiveAlert}</Tag>
        <span style={{ color: '#8b949e', fontSize: 12 }}> {tags.manualClose}</span>
      </span>
    )
  if (value === 'collab-cast')
    return (
      <span>
        <Tag color="orange" style={{ borderRadius: 4 }}>{tags.detectAnomaly}</Tag>
        <span style={{ color: '#8b949e', fontSize: 12 }}> {tags.emitSignal}</span>
      </span>
    )
  if (side === 'remote' && value.includes('100ms'))
    return (
      <span style={{ color: '#00d296', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{value}</span>
    )
  if (value === 'Polyform-NC')
    return <span style={{ color: '#c9d1d9', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{value}</span>
  return <span style={{ color: '#c9d1d9' }}>{value}</span>
}

interface TableRow {
  key: string
  dim: string
  vistaremote: React.ReactNode
  vistacast: React.ReactNode
  highlight?: boolean
}

export default function ComparisonSection() {
  const { m } = useLocale()
  const c = m.comparison

  const dataSource: TableRow[] = c.rows.map((row: ComparisonRow, i) => ({
    key: String(i),
    dim: row.dim,
    vistaremote: renderCell(row.vistaremote, c.tags, 'remote'),
    vistacast: renderCell(row.vistacast, c.tags, 'cast'),
    highlight: row.highlight,
  }))

  const columns: ColumnsType<TableRow> = [
    {
      title: c.colDim,
      dataIndex: 'dim',
      key: 'dim',
      width: 140,
      render: (v) => (
        <span style={{ color: '#8b949e', fontSize: 13, fontWeight: 500 }}>{v}</span>
      ),
    },
    {
      title: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#1677ff',
              display: 'inline-block',
            }}
          />
          {c.colRemote}
          <Tag
            style={{
              borderRadius: 4,
              fontSize: 10,
              borderColor: 'rgba(22,119,255,0.3)',
              color: '#1677ff',
              background: 'rgba(22,119,255,0.06)',
            }}
          >
            {c.tagControl}
          </Tag>
        </span>
      ),
      dataIndex: 'vistaremote',
      key: 'vistaremote',
    },
    {
      title: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#f5a623',
              display: 'inline-block',
            }}
          />
          {c.colCast}
          <Tag
            style={{
              borderRadius: 4,
              fontSize: 10,
              borderColor: 'rgba(245,166,35,0.3)',
              color: '#f5a623',
              background: 'rgba(245,166,35,0.06)',
            }}
          >
            {c.tagView}
          </Tag>
        </span>
      ),
      dataIndex: 'vistacast',
      key: 'vistacast',
    },
  ]

  return (
    <section id="comparison" className="vr-section" aria-labelledby="comparison-title">
      <div className="vr-container">
        <div className="vr-section-head centered">
          <div className="vr-eyebrow">
            <SwapOutlined />
            {c.eyebrow}
          </div>
          <h2 id="comparison-title" className="vr-title">
            {c.title}{' '}
            <span style={{ color: '#1677ff' }}>{c.titleControl}</span>
            {' vs VistaCast '}
            <span style={{ color: '#f5a623' }}>{c.titleView}</span>
          </h2>
          <p className="vr-subtitle">{c.subtitle}</p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            marginBottom: 32,
            background: '#161f2e',
            border: '1px solid #21334a',
            borderRadius: 10,
            padding: '20px 28px',
            flexWrap: 'wrap',
            rowGap: 12,
          }}
          role="img"
          aria-label={c.flowAria}
        >
          {c.flow.map((node, i) => {
            const flowColors = ['#f5a623', '#4a5568', '#ff4d4f', '#4a5568', '#1677ff', '#4a5568', '#00d296']
            return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: node.label === '→' ? '0 8px' : '0 16px',
              }}
            >
              <span
                style={{
                  fontSize: node.label === '→' ? 20 : 14,
                  fontWeight: node.label === '→' ? 300 : 600,
                  color: flowColors[i] ?? '#c9d1d9',
                  fontFamily: node.label === '→' ? 'inherit' : 'var(--font-mono)',
                }}
              >
                {node.label}
              </span>
              {node.sub && (
                <span style={{ fontSize: 11, color: '#4a5568', marginTop: 2 }}>{node.sub}</span>
              )}
            </div>
            )
          })}
        </div>

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          size="small"
          rowClassName={(row) => (row.highlight ? 'comparison-highlight-row' : '')}
          style={{ borderRadius: 10, overflow: 'hidden' }}
        />

        <style>{`
          .comparison-highlight-row td {
            background: rgba(22,119,255,0.04) !important;
            border-left: 2px solid rgba(22,119,255,0.3) !important;
          }
        `}</style>
      </div>
    </section>
  )
}
