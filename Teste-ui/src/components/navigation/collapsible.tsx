import React from 'react'

export default function Collapsible() {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <button
        type="button"
        className="w-full px-4 py-3 flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {open ? 'Ocultar detalhes' : 'Mostrar detalhes'}
        </span>
        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }} aria-hidden="true">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open ? (
        <div className="px-4 pb-4">
          <div
            className="rounded-md border p-3"
            style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          >
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Conteúdo recolhível (collapsible) — útil para filtros, detalhes e seções auxiliares.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
