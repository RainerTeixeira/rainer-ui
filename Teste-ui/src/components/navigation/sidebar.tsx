import React from 'react'

const items = [
  { label: 'Visão geral', active: true },
  { label: 'Clientes', active: false },
  { label: 'Faturamento', active: false },
  { label: 'Configurações', active: false },
]

export default function Sidebar() {
  return (
    <aside
      className="w-full max-w-xs rounded-lg border p-3"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <p className="text-xs font-semibold px-2 py-2" style={{ color: 'var(--color-text-tertiary)' }}>
        Navegação
      </p>
      <nav className="space-y-1" aria-label="Sidebar">
        {items.map((it) => (
          <a
            key={it.label}
            href="#"
            className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-semibold"
            style={
              it.active
                ? { backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }
                : { backgroundColor: 'transparent', color: 'var(--color-text-secondary)' }
            }
          >
            {it.label}
            {it.active ? (
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: 'var(--color-button-primary-default)' }}
                aria-hidden="true"
              />
            ) : null}
          </a>
        ))}
      </nav>
    </aside>
  )
}
