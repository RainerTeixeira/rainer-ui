import React, { useState } from 'react';

interface SwitchProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export default function Switch({ 
  checked = true,
  disabled = false,
  onChange
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)
  
  const handleToggle = () => {
    if (disabled) return
    
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }
  
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={
        `
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50
        ${isChecked ? '' : ''}
      `
      }
      style={{
        backgroundColor: isChecked ? 'var(--color-button-primary-default)' : 'var(--color-background-tertiary)',
        outlineColor: 'var(--color-interactive-focus-ring)',
      } as React.CSSProperties}
    >
      <span
        className={
          `
          pointer-events-none inline-block h-5 w-5 transform rounded-full shadow-lg ring-0 
          transition duration-200 ease-in-out
          ${isChecked ? 'translate-x-5' : 'translate-x-0'}
        `
        }
        style={{
          backgroundColor: 'var(--color-background-primary)',
        }}
      />
    </button>
  )
}
