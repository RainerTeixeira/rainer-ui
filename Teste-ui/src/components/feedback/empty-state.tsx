import React from 'react'

import { Button } from '../ui'

export default function EmptyState() {
  return (
    <div
      className="rounded-lg border p-6 text-center"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div
        className="mx-auto h-10 w-10 rounded-lg border flex items-center justify-center"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
        aria-hidden="true"
      >
        <span style={{ color: 'var(--color-text-secondary)' }}>◎</span>
      </div>
      <p className="text-sm font-semibold mt-4" style={{ color: 'var(--color-text-primary)' }}>
        Nenhum resultado
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
        Tente ajustar os filtros ou criar um novo item.
      </p>
      <div className="mt-4 flex justify-center">
        <Button label="Criar item" variant="primary" />
      </div>
    </div>
  )
}
