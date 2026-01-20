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
  
  const colorClasses = {
    primary: 'border-blue-600 border-t-transparent',
    secondary: 'border-gray-600 border-t-transparent',
    success: 'border-green-600 border-t-transparent',
    warning: 'border-yellow-600 border-t-transparent',
    error: 'border-red-600 border-t-transparent'
  }
  
  return (
    <div className="inline-flex items-center gap-2">
      <div 
        className={`
          animate-spin rounded-full border-2 
          ${sizeClasses[size]} ${colorClasses[color]}
        `}
      />
      {text && (
        <span className="text-sm text-gray-600">{text}</span>
      )}
    </div>
  )
}
