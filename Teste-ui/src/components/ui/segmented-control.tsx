import React, { useState } from 'react';

interface SegmentedControlProps {
  segments?: string[]
  active?: string
  onChange?: (segment: string) => void
}

export default function SegmentedControl({ 
  segments = ['Dia', 'Semana', 'Mês'],
  active = 'Semana',
  onChange
}: SegmentedControlProps) {
  const [activeSegment, setActiveSegment] = useState(active)
  
  const handleSegmentClick = (segment: string) => {
    setActiveSegment(segment)
    onChange?.(segment)
  }
  
  return (
    <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white p-1">
      {segments.map((segment) => (
        <button
          key={segment}
          onClick={() => handleSegmentClick(segment)}
          className={`
            px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
            ${activeSegment === segment
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }
          `}
        >
          {segment}
        </button>
      ))}
    </div>
  )
}
