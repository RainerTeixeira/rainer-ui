import React from 'react'

interface ButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ 
  label = 'Continuar', 
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:opacity-90'
  
  const variantStyle: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-button-primary-default)',
      color: 'var(--color-button-primary-text)',
      borderColor: 'transparent',
    },
    secondary: {
      backgroundColor: 'var(--color-button-secondary-default)',
      color: 'var(--color-button-secondary-text)',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'var(--color-background-primary)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-default)',
    },
    destructive: {
      backgroundColor: 'var(--color-button-danger-default)',
      color: 'var(--color-button-danger-text)',
      borderColor: 'transparent',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
    },
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg'
  }
  
  const needsBorder = variant === 'outline'
  const classes = `${baseClasses} ${needsBorder ? 'border' : ''} ${sizeClasses[size]}`
  
  return (
    <button className={classes} style={variantStyle[variant]} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
