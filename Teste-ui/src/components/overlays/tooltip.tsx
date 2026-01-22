import React from 'react'

export default function Tooltip() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="rounded-md border px-3 py-2 text-sm font-semibold"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        Passe o mouse
      </button>

      {open ? (
        <div
          className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md px-2 py-1 text-xs"
          style={{ backgroundColor: 'var(--color-background-inverse)', color: 'var(--color-text-inverse)' }}
          role="tooltip"
        >
          Tooltip de exemplo
        </div>
      ) : null}
    </div>
  )
}
