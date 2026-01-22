import React from 'react'

import { Button } from '../ui'

export default function Popover() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-block">
      <Button label="Abrir popover" variant="outline" onClick={() => setOpen((v) => !v)} />

      {open ? (
        <div
          className="absolute z-10 mt-2 w-72 rounded-lg border p-4"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          role="dialog"
          aria-label="Popover"
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Popover
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Overlay contextual para ações rápidas.
          </p>
          <div className="mt-3 flex justify-end gap-2">
            <Button label="Fechar" variant="ghost" onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
