import React from 'react'

import { Badge, Card } from '../ui'

type Metric = {
  label: string
  value: string
  helper: string
  status: 'ok' | 'attention'
}

const metrics: Metric[] = [
  { label: 'Usuários ativos', value: '8.142', helper: 'últimas 24h', status: 'ok' },
  { label: 'Tempo médio', value: '03:12', helper: 'sessão', status: 'ok' },
  { label: 'Erros', value: '0,7%', helper: 'requests', status: 'attention' },
]

export default function AnalyticsOverview() {
  return (
    <Card title="Analytics" description="Visão rápida de produto" className="p-0">
      <div className="p-5 space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border p-4"
              style={{
                borderColor: 'var(--color-border-default)',
                backgroundColor: 'var(--color-background-secondary)',
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  {m.label}
                </p>
                <Badge variant={m.status === 'ok' ? 'success' : 'warning'} label={m.status === 'ok' ? 'OK' : 'Atenção'} />
              </div>
              <p className="text-xl font-semibold mt-2" style={{ color: 'var(--color-text-primary)' }}>
                {m.value}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                {m.helper}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg border p-4"
          style={{
            borderColor: 'var(--color-border-default)',
            backgroundColor: 'var(--color-background-secondary)',
          }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Funil (demo)
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Visitas → cadastro → compra (exemplo ilustrativo)
          </p>

          <div className="mt-4 space-y-2">
            {[{ label: 'Visitas', value: 100 }, { label: 'Cadastro', value: 38 }, { label: 'Compra', value: 12 }].map((row) => (
              <div key={row.label} className="grid grid-cols-[80px_1fr_40px] gap-3 items-center">
                <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  {row.label}
                </span>
                <div className="h-2 rounded-full" style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${row.value}%`, backgroundColor: 'var(--color-button-primary-default)' }}
                  />
                </div>
                <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  {row.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
