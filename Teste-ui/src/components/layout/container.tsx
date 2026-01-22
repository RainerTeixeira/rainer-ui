import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="rounded-lg border"
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-secondary)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-6">
        {children ?? (
          <div className="space-y-2">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Container
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Um wrapper centralizado (max-width) para páginas e seções.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
