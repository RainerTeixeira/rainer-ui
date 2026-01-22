import React from 'react'

import { Card, Progress } from '../ui'

type Kpi = {
  label: string
  value: string
  progress: number
}

const kpis: Kpi[] = [
  { label: 'Meta de vendas', value: 'R$ 48.920 / R$ 80.000', progress: 61 },
  { label: 'SLA (suporte)', value: '92% dentro do prazo', progress: 92 },
  { label: 'Retenção', value: '74% (coorte 30d)', progress: 74 },
]

export default function QuickStats() {
  return (
    <Card title="Resumo rápido" description="Indicadores do dia" className="p-0">
      <div className="p-5 space-y-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {kpi.label}
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                {kpi.value}
              </p>
            </div>
            <Progress value={kpi.progress} showLabel={false} />
          </div>
        ))}
      </div>
    </Card>
  )
}
