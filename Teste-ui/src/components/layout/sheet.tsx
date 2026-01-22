import React from 'react'

import { Button } from '../ui'

export default function Sheet() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button label="Abrir sheet" variant="outline" onClick={() => setOpen(true)} />

      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Sheet">
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md border-l"
            style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          >
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Sheet
                </p>
                <Button label="Fechar" variant="ghost" onClick={() => setOpen(false)} />
              </div>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                Um painel lateral (sheet) para configurações e detalhes.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
