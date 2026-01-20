import React, { useState } from 'react';

interface ToggleProps {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  children?: React.ReactNode
  variant?: 'default' | 'outline'
}

export default function Toggle({ 
  pressed = true,
  onPressedChange,
  children,
  variant = 'default'
}: ToggleProps) {
  const [isPressed, setIsPressed] = useState(pressed)
  
  const handleToggle = () => {
    const newPressed = !isPressed
    setIsPressed(newPressed)
    onPressedChange?.(newPressed)
  }
  
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-opacity focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90'

  const buttonStyle: React.CSSProperties = {
    outlineColor: 'var(--color-interactive-focus-ring)',
    borderColor: variant === 'outline' ? 'var(--color-border-default)' : 'transparent',
    backgroundColor: isPressed
      ? 'var(--color-background-inverse)'
      : variant === 'outline'
        ? 'transparent'
        : 'var(--color-background-secondary)',
    color: isPressed ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
  }

  const classes = `${baseClasses} ${variant === 'outline' ? 'border' : ''} h-9 px-3`
  
  return (
    <button
      type="button"
      aria-pressed={isPressed}
      className={classes}
      style={buttonStyle}
      onClick={handleToggle}
    >
      {children}
    </button>
  )
}
