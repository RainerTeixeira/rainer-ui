import React from 'react'

interface InputProps {
  placeholder?: string
  value?: string
  type?: 'text' | 'email' | 'password' | 'number'
  disabled?: boolean
  required?: boolean
  onChange?: (value: string) => void
}

export default function Input({ 
  placeholder = 'Digite aqui...',
  value = '',
  type = 'text',
  disabled = false,
  required = false,
  onChange
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={handleChange}
      className={baseClasses}
      style={{
        backgroundColor: 'var(--color-background-primary)',
        color: 'var(--color-text-primary)',
        borderColor: 'var(--color-border-default)',
        caretColor: 'var(--color-text-primary)',
      } as React.CSSProperties}
    />
  )
}
