import React from 'react'

import { Spinner } from '../feedback'

interface LoadingScreenProps {
  title?: string
  description?: string
}

export default function LoadingScreen({
  title = 'Carregando',
  description = 'Estamos preparando tudo para você…',
}: LoadingScreenProps) {
  return (
    <div
      className="rounded-lg border p-8"
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-secondary)',
      }}
    >
      <div className="flex items-center gap-4">
        <Spinner />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
