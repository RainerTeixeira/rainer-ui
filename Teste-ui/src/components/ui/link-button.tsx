import React from 'react';

interface LinkButtonProps {
  href?: string
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
}

export default function LinkButton({ 
  href = 'https://exemplo.com',
  children = 'Visitar link',
  variant = 'primary',
  size = 'md',
  external = false
}: LinkButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-opacity focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-90'

  const variantStyle: Record<NonNullable<LinkButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-button-primary-default)',
      color: 'var(--color-button-primary-text)',
      borderColor: 'transparent',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
    secondary: {
      backgroundColor: 'var(--color-button-secondary-default)',
      color: 'var(--color-button-secondary-text)',
      borderColor: 'transparent',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
    outline: {
      backgroundColor: 'var(--color-background-primary)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-default)',
      outlineColor: 'var(--color-interactive-focus-ring)',
    },
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg'
  }
  
  const classes = `${baseClasses} ${variant === 'outline' ? 'border' : ''} ${sizeClasses[size]}`
  
  const props = {
    href,
    className: classes,
    style: variantStyle[variant],
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer'
    })
  }
  
  return (
    <a {...props}>
      {children}
      {external && (
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  )
}
