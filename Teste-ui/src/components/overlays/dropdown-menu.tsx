import React from 'react'

import { Button } from '../ui'

export default function DropdownMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-block">
      <Button label="Ações" variant="outline" onClick={() => setOpen((v) => !v)} />
      {open ? (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border p-2"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          role="menu"
        >
          {['Editar', 'Duplicar', 'Arquivar'].map((label) => (
            <button
              key={label}
              type="button"
              className="w-full text-left rounded-md px-3 py-2 text-sm"
              style={{ color: 'var(--color-text-primary)' }}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
