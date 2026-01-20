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
        className="
          w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
          disabled:cursor-not-allowed disabled:opacity-50
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-blue-600
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-blue-600
          [&::-moz-range-thumb]:cursor-pointer
          [&::-moz-range-thumb]:border-0
        "
      />
      <div 
        className="absolute top-0 left-0 h-2 bg-blue-600 rounded-lg pointer-events-none"
        style={{ width: `${percentage}%` }}
      />
      <div className="mt-2 text-center text-sm text-gray-600">
        {currentValue}
      </div>
    </div>
  )
}
