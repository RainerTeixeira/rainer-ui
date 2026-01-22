import React from 'react'

export default function Panel() {
  return (
    <div
      className="rounded-lg border p-5"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
    >
      <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        Panel
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
        Útil para áreas destacadas dentro de páginas.
      </p>
    </div>
  )
}
