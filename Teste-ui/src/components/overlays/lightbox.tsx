import React from 'react'

import { Button } from '../ui'

export default function Lightbox() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button label="Abrir lightbox" variant="outline" onClick={() => setOpen(true)} />

      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Lightbox">
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              className="w-full max-w-2xl rounded-lg border"
              style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
            >
              <div className="p-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Lightbox
                </p>
                <Button label="Fechar" variant="ghost" onClick={() => setOpen(false)} />
              </div>
              <div
                className="m-4 rounded-lg border h-64 flex items-center justify-center"
                style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
              >
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  Preview de imagem (placeholder)
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
