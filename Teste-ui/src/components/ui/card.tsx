import React from 'react'

interface CardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ 
  title = 'Card título',
  description,
  children,
  className = ''
}: CardProps) {
  return (
    <div
      className={`rounded-lg border p-6 shadow-sm ${className}`}
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-primary)',
      }}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </h3>
          {description && (
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              {description}
            </p>
          )}
        </div>
      )}
      {children && (
        <div className={title ? 'mt-4' : ''}>
          {children}
        </div>
      )}
    </div>
  )
}
