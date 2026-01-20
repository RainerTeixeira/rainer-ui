import React, { useState } from 'react';

interface SliderProps {
  min?: number
  max?: number
  value?: number
  disabled?: boolean
  onChange?: (value: number) => void
}

export default function Slider({ 
  min = 0,
  max = 100,
  value = 30,
  disabled = false,
  onChange
}: SliderProps) {
  const [currentValue, setCurrentValue] = useState(value)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    setCurrentValue(newValue)
    onChange?.(newValue)
  }
  
  const percentage = ((currentValue - min) / (max - min)) * 100
  
  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          backgroundColor: 'var(--color-background-tertiary)',
          accentColor: 'var(--color-button-primary-default)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-2 rounded-lg pointer-events-none"
        style={{
          width: `${percentage}%`,
          backgroundColor: 'var(--color-button-primary-default)',
        }}
      />
      <div className="mt-2 text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {currentValue}
      </div>
    </div>
  )
}
