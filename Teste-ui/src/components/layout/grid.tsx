import React from 'react'

export default function Grid() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {['Col 1', 'Col 2', 'Col 3'].map((label) => (
        <div
          key={label}
          className="rounded-lg border p-4"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {label}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Item de grid
          </p>
        </div>
      ))}
    </div>
  )
}
