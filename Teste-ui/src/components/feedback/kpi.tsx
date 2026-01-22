import React from 'react'

export default function Kpi() {
  const items = [
    { label: 'Tempo de resposta', value: '420ms', helper: 'p95', trend: '+8%' },
    { label: 'Disponibilidade', value: '99,94%', helper: '30 dias', trend: 'OK' },
    { label: 'Erros', value: '0,3%', helper: 'requests', trend: '-12%' },
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-lg border p-4"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            {it.label}
          </p>
          <p className="text-xl font-semibold mt-2" style={{ color: 'var(--color-text-primary)' }}>
            {it.value}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
              {it.helper}
            </span>
            <span className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
              {it.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
