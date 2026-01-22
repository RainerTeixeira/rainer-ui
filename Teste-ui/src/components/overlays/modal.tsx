import React from 'react'

import { Button, Input } from '../ui'

export default function Modal() {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')

  return (
    <div>
      <Button label="Abrir modal" variant="primary" onClick={() => setOpen(true)} />

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Modal"
        >
          <div
            className="w-full max-w-lg rounded-lg border"
            style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
          >
            <div className="p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Editar perfil
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    Exemplo de modal com formulário.
                  </p>
                </div>
                <Button label="×" variant="ghost" onClick={() => setOpen(false)} />
              </div>

              <div>
                <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                  Nome
                </p>
                <Input placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex justify-end gap-2">
                <Button label="Cancelar" variant="ghost" onClick={() => setOpen(false)} />
                <Button label="Salvar" variant="primary" onClick={() => setOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
