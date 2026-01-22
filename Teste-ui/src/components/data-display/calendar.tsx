import React from 'react'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function Calendar() {
  const [selected, setSelected] = React.useState(12)

  const days = Array.from({ length: 30 }).map((_, i) => i + 1)
  const offset = 3

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Janeiro 2026
        </p>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Selecionado: {selected}
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((d, idx) => (
          <div key={`${d}-${idx}`} className="text-[10px] text-center" style={{ color: 'var(--color-text-tertiary)' }}>
            {d}
          </div>
        ))}

        {Array.from({ length: offset }).map((_, i) => (
          <div key={`sp-${i}`} />
        ))}

        {days.map((day) => {
          const isSelected = day === selected
          return (
            <button
              key={day}
              type="button"
              className="h-9 w-9 rounded-md text-sm transition-opacity hover:opacity-90"
              style={
                isSelected
                  ? {
                      backgroundColor: 'var(--color-button-primary-default)',
                      color: 'var(--color-button-primary-text)',
                    }
                  : {
                      backgroundColor: 'var(--color-background-secondary)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border-default)',
                    }
              }
              onClick={() => setSelected(day)}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
