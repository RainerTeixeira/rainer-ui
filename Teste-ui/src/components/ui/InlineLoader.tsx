import React from 'react'

interface InlineLoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  text?: string
}

export default function InlineLoader({ 
  size = 'sm',
  color = 'primary',
  text
}: InlineLoaderProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
  
  const colorStyle: Record<NonNullable<InlineLoaderProps['color']>, React.CSSProperties> = {
    primary: { borderColor: 'var(--color-button-primary-default)', borderTopColor: 'transparent' },
    secondary: { borderColor: 'var(--color-button-secondary-default)', borderTopColor: 'transparent' },
    success: { borderColor: 'var(--color-status-success-default)', borderTopColor: 'transparent' },
    warning: { borderColor: 'var(--color-status-warning-default)', borderTopColor: 'transparent' },
    error: { borderColor: 'var(--color-status-error-default)', borderTopColor: 'transparent' },
  }
  
  return (
    <div className="inline-flex items-center gap-2">
      <div 
        className={`animate-spin rounded-full border-2 ${sizeClasses[size]}`}
        style={colorStyle[color]}
      />
      {text && (
        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {text}
        </span>
      )}
    </div>
  )
}
