import React from 'react'

export default function Spacer() {
  return (
    <div className="space-y-2">
      <div className="rounded-md border p-3" style={{ borderColor: 'var(--color-border-default)' }}>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Bloco A
        </p>
      </div>
      <div style={{ height: 16 }} />
      <div className="rounded-md border p-3" style={{ borderColor: 'var(--color-border-default)' }}>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Bloco B
        </p>
      </div>
    </div>
  )
}
