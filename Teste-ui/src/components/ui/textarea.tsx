import React from 'react'

interface TextareaProps {
  placeholder?: string
  value?: string
  rows?: number
  disabled?: boolean
  required?: boolean
  onChange?: (value: string) => void
}

export default function Textarea({ 
  placeholder = 'Digite seu texto aqui', 
  value = '',
  rows = 3,
  disabled = false,
  required = false,
  onChange
}: TextareaProps) {
  const baseClasses = 'flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value)
  }
  
  return (
    <textarea
      className={baseClasses}
      placeholder={placeholder}
      value={value}
      rows={rows}
      disabled={disabled}
      required={required}
      onChange={handleChange}
      style={{
        backgroundColor: 'var(--color-background-primary)',
        color: 'var(--color-text-primary)',
        borderColor: 'var(--color-border-default)',
        caretColor: 'var(--color-text-primary)',
        outlineColor: 'var(--color-interactive-focus-ring)',
      }}
    />
  )
}
