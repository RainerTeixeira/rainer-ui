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
  placeholder = 'Digite', 
  value = '',
  type = 'text',
  disabled = false,
  required = false,
  onChange
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  
  return (
    <input
      type={type}
      className={baseClasses}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={handleChange}
    />
  )
}
