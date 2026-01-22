import React from 'react'

export default function HoverCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="rounded-md border px-3 py-2 text-sm font-semibold"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Passe o mouse
      </button>

      {open ? (
        <div
          className="absolute left-1/2 top-full z-10 mt-2 w-72 -translate-x-1/2 rounded-lg border p-4"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            HoverCard
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Informações rápidas sem tirar o foco do contexto.
          </p>
        </div>
      ) : null}
    </div>
  )
}
