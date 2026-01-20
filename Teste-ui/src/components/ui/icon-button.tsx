import React from 'react'

interface IconButtonProps {
  icon?: string
  onClick?: () => void
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  tooltip?: string
}

export default function IconButton({ 
  icon = 'settings',
  onClick,
  variant = 'default',
  size = 'md',
  disabled = false,
  tooltip
}: IconButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-opacity focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:opacity-90'

  const variantStyle: Record<NonNullable<IconButtonProps['variant']>, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-background-secondary)',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
    outline: {
      backgroundColor: 'var(--color-background-primary)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-default)',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
  }
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const getIcon = () => {
    switch (icon) {
      case 'settings':
        return (
          <svg className={iconSizeClasses[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case 'edit':
        return (
          <svg className={iconSizeClasses[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      case 'delete':
        return (
          <svg className={iconSizeClasses[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        )
      case 'close':
        return (
          <svg className={iconSizeClasses[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )
      default:
        return (
          <svg className={iconSizeClasses[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
    }
  }
  
  const button = (
    <button
      className={`${baseClasses} ${variant === 'outline' ? 'border' : ''} ${sizeClasses[size]}`}
      style={variantStyle[variant]}
      disabled={disabled}
      onClick={onClick}
    >
      {getIcon()}
    </button>
  )
  
  if (tooltip) {
    return (
      <div className="relative inline-flex">
        {button}
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
          style={{
            backgroundColor: 'var(--color-background-inverse)',
            color: 'var(--color-text-inverse)',
          }}
        >
          {tooltip}
        </div>
      </div>
    )
  }
  
  return button
}
