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
  const baseClasses = 'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  
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
    />
  )
}
