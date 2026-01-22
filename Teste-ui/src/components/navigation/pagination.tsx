import React from 'react'

export default function Pagination() {
  const total = 12
  const [page, setPage] = React.useState(1)

  const prev = () => setPage((p) => Math.max(1, p - 1))
  const next = () => setPage((p) => Math.min(total, p + 1))

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="rounded-md border px-3 py-2 text-sm font-semibold"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
        onClick={prev}
        disabled={page === 1}
      >
        Anterior
      </button>

      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1
        const isActive = n === page
        return (
          <button
            key={n}
            type="button"
            className="h-9 w-9 rounded-md text-sm font-semibold"
            style={
              isActive
                ? { backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }
                : { border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)' }
            }
            onClick={() => setPage(n)}
          >
            {n}
          </button>
        )
      })}

      <span className="text-xs mx-1" style={{ color: 'var(--color-text-tertiary)' }}>
        …
      </span>

      <button
        type="button"
        className="h-9 w-9 rounded-md border text-sm font-semibold"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
        onClick={() => setPage(total)}
      >
        {total}
      </button>

      <button
        type="button"
        className="rounded-md border px-3 py-2 text-sm font-semibold"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
        onClick={next}
        disabled={page === total}
      >
        Próximo
      </button>

      <span className="text-xs ml-2" style={{ color: 'var(--color-text-secondary)' }}>
        Página {page} de {total}
      </span>
    </div>
  )
}
