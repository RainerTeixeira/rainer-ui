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
  
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variantClasses = {
    default: isPressed ? 'bg-gray-900 text-gray-50 hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: isPressed ? 'bg-gray-900 text-gray-50 hover:bg-gray-800 border border-gray-300' : 'bg-transparent text-gray-900 hover:bg-gray-100 border border-gray-300'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} h-9 px-3`
  
  return (
    <button
      type="button"
      aria-pressed={isPressed}
      className={classes}
      onClick={handleToggle}
    >
      {children}
    </button>
  )
}
