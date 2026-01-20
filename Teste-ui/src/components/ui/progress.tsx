import React from 'react'

interface ProgressProps {
  value?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
}

export default function Progress({ 
  value = 45,
  max = 100,
  size = 'md',
  showValue = false
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }
  
  return (
    <div className="w-full">
      <div
        className={`w-full rounded-full ${sizeClasses[size]}`}
        style={{ backgroundColor: 'var(--color-background-tertiary)' }}
      >
        <div 
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{ backgroundColor: 'var(--color-interactive-link-default)', width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="mt-1 text-xs text-right" style={{ color: 'var(--color-text-secondary)' }}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  )
}
