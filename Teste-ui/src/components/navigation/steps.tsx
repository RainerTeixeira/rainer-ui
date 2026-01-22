import React from 'react'

const steps = ['Dados', 'Pagamento', 'Revisão', 'Concluído']

export default function Steps() {
  const [active, setActive] = React.useState(1)

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((label, idx) => {
          const state = idx < active ? 'done' : idx === active ? 'active' : 'todo'
          const dotBg =
            state === 'done'
              ? 'var(--color-status-success-default)'
              : state === 'active'
                ? 'var(--color-button-primary-default)'
                : 'var(--color-background-tertiary)'
          const textColor = state === 'todo' ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)'

          return (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-2 rounded-md px-2 py-1"
              onClick={() => setActive(idx)}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: dotBg }} aria-hidden="true" />
              <span className="text-sm font-semibold" style={{ color: textColor }}>
                {label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="h-2 w-full rounded-full" style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
        <div
          className="h-2 rounded-full"
          style={{
            width: `${Math.round(((active + 1) / steps.length) * 100)}%`,
            backgroundColor: 'var(--color-button-primary-default)',
          }}
        />
      </div>

      <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Passo atual: {steps[active]}
      </p>
    </div>
  )
}
