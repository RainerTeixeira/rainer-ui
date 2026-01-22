import React from 'react'

import { Card, SegmentedControl } from '../ui'

const series = {
  Dia: [12, 18, 9, 22, 15, 28, 19],
  Semana: [38, 44, 52, 41, 60, 55, 49],
  Mês: [62, 71, 64, 78, 83, 75, 88],
}

type RangeKey = keyof typeof series

export default function StatsOverview() {
  const [range, setRange] = React.useState<RangeKey>('Semana')
  const values = series[range]
  const max = Math.max(...values)

  return (
    <Card title="Visão geral" description="Atividade e performance" className="p-0">
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <SegmentedControl
            segments={['Dia', 'Semana', 'Mês']}
            active={range}
            onChange={(v) => setRange(v as RangeKey)}
          />
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            Atualizado agora
          </p>
        </div>

        <div
          className="grid grid-cols-7 gap-2 items-end rounded-lg border p-4"
          style={{
            borderColor: 'var(--color-border-default)',
            backgroundColor: 'var(--color-background-secondary)',
          }}
        >
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md"
                style={{
                  height: `${Math.max(8, Math.round((v / max) * 84))}px`,
                  backgroundColor: 'var(--color-button-primary-default)',
                }}
              />
              <span className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
