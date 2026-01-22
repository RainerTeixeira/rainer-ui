import React from 'react'

type Step = {
  title: string
  description: string
  time: string
  tone: 'success' | 'warning' | 'danger'
}

const steps: Step[] = [
  { title: 'Pagamento aprovado', description: 'Cartão final 4242', time: '09:12', tone: 'success' },
  { title: 'Separação em andamento', description: 'Centro de distribuição SP', time: '10:03', tone: 'warning' },
  { title: 'Endereço inválido', description: 'Aguardando correção', time: '10:40', tone: 'danger' },
]

export default function Timeline() {
  const dotColor: Record<Step['tone'], string> = {
    success: 'var(--color-status-success-default)',
    warning: 'var(--color-status-warning-default)',
    danger: 'var(--color-status-error-default)',
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        Timeline
      </p>

      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={s.title} className="grid grid-cols-[16px_1fr] gap-3">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: dotColor[s.tone] }} />
              {idx !== steps.length - 1 && (
                <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'var(--color-border-default)' }} />
              )}
            </div>
            <div
              className="rounded-lg border p-4"
              style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {s.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {s.description}
                  </p>
                </div>
                <span className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                  {s.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
