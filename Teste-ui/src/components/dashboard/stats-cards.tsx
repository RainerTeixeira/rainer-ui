import React from 'react'

import { Badge, Card } from '../ui'

type Stat = {
  label: string
  value: string
  delta: string
  tone: 'success' | 'warning' | 'danger' | 'neutral'
}

const stats: Stat[] = [
  { label: 'Receita (30d)', value: 'R$ 48.920', delta: '+12%', tone: 'success' },
  { label: 'Pedidos', value: '1.284', delta: '+6%', tone: 'success' },
  { label: 'Taxa de conversão', value: '2,9%', delta: '-0,3%', tone: 'warning' },
  { label: 'Chamados abertos', value: '17', delta: '+4', tone: 'danger' },
]

const toneVariant: Record<Stat['tone'], React.ComponentProps<typeof Badge>['variant']> = {
  success: 'success',
  warning: 'warning',
  danger: 'destructive',
  neutral: 'secondary',
}

export default function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-0">
          <div className="p-5 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </p>
              <Badge variant={toneVariant[stat.tone]} label={stat.delta} />
            </div>
            <p className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              {stat.value}
            </p>
            <div
              className="h-1 rounded-full"
              style={{ backgroundColor: 'var(--color-background-tertiary)' }}
            >
              <div
                className="h-1 rounded-full"
                style={{
                  width: stat.tone === 'danger' ? '35%' : stat.tone === 'warning' ? '55%' : '75%',
                  backgroundColor:
                    stat.tone === 'danger'
                      ? 'var(--color-status-error-default)'
                      : stat.tone === 'warning'
                        ? 'var(--color-status-warning-default)'
                        : 'var(--color-status-success-default)',
                }}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
