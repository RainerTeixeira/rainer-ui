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
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
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
