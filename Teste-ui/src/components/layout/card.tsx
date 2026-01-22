import React from 'react'

export default function Card() {
  return (
    <div
      className="rounded-lg border p-4"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        Card
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
        Um container simples com borda e preenchimento (demo).
      </p>
    </div>
  )
}
