import React from 'react'

interface RatingProps {
  value?: number
  max?: number
  readOnly?: boolean
}

export default function Rating({ value = 4, max = 5, readOnly = false }: RatingProps) {
  const [current, setCurrent] = React.useState(value)

  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-1" aria-label={`Avaliação ${current} de ${max}`}>
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < current
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (readOnly) return
                setCurrent(i + 1)
              }}
              disabled={readOnly}
              className="text-lg leading-none disabled:cursor-default"
              style={{
                color: filled ? 'var(--color-status-warning-default)' : 'var(--color-text-tertiary)',
              }}
              aria-label={`${i + 1} estrelas`}
            >
              ★
            </button>
          )
        })}
      </div>
      <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        {current}/{max}
      </span>
    </div>
  )
}
