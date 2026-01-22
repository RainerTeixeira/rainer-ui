import React from 'react'

import { Button } from '../ui'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button label="Abrir confirmação" variant="outline" onClick={() => setOpen(true)} />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Confirmação"
        >
          <div
            className="w-full max-w-md rounded-lg border"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-primary)',
            }}
          >
            <div className="p-5">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Confirmar ação
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                Tem certeza que deseja continuar? Essa ação não pode ser desfeita.
              </p>
              <div className="mt-4 flex justify-end gap-2">
                <Button label="Cancelar" variant="ghost" onClick={() => setOpen(false)} />
                <Button label="Confirmar" variant="primary" onClick={() => setOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
