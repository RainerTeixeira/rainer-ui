import React from 'react'

interface BadgeProps {
  label?: string
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Badge({ 
  label = 'Novo', 
  variant = 'default',
  size = 'md'
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium'

  const variantStyle: Record<NonNullable<BadgeProps['variant']>, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-background-secondary)',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
    },
    secondary: {
      backgroundColor: 'var(--color-background-tertiary)',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
    },
    success: {
      backgroundColor: 'var(--color-status-success-light)',
      color: 'var(--color-status-success-text)',
      borderColor: 'transparent',
    },
    warning: {
      backgroundColor: 'var(--color-status-warning-light)',
      color: 'var(--color-status-warning-text)',
      borderColor: 'transparent',
    },
    destructive: {
      backgroundColor: 'var(--color-status-error-light)',
      color: 'var(--color-status-error-text)',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)',
      borderColor: 'var(--color-border-default)',
    },
  }
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  }

  const needsBorder = variant === 'outline'
  const classes = `${baseClasses} ${needsBorder ? 'border' : ''} ${sizeClasses[size]}`

  return (
    <span className={classes} style={variantStyle[variant]}>
      {label}
    </span>
  )
}
