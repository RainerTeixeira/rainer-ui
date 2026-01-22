import React from 'react'

import { Button } from '../ui'

interface PageHeaderProps {
  title?: string
  description?: string
}

export default function PageHeader({
  title = 'Página de exemplo',
  description = 'Cabeçalho com título, descrição e ações.',
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h2>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button label="Exportar" variant="outline" size="sm" />
        <Button label="Nova ação" variant="primary" size="sm" />
      </div>
    </div>
  )
}
