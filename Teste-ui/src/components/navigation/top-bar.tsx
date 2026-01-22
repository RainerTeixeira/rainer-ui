import React from 'react'

import { Button } from '../ui'

export default function TopBar() {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-lg border px-4 py-3"
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-secondary)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded-md flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}
          aria-hidden="true"
        >
          R
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Rainersoft
          </p>
          <p className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
            TopBar
          </p>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        {['Dashboard', 'Relatórios', 'Configurações'].map((label) => (
          <a key={label} href="#" className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button label="Entrar" variant="outline" size="sm" />
        <Button label="Criar conta" variant="primary" size="sm" />
      </div>
    </div>
  )
}
