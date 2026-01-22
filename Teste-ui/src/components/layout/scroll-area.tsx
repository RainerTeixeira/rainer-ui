import React from 'react'

export default function ScrollArea() {
  return (
    <div
      className="h-48 overflow-auto rounded-lg border"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="p-4 space-y-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border p-3"
            style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Linha {i + 1}
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Conteúdo rolável
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
