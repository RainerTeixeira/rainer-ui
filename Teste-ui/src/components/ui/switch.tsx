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
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50
        ${isChecked ? 'bg-blue-600' : 'bg-gray-200'}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 
          transition duration-200 ease-in-out
          ${isChecked ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  )
}
