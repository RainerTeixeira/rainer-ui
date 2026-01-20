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
    <div
      className="inline-flex items-center rounded-lg border p-1"
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-primary)',
      }}
    >
      {segments.map((segment) => (
        <button
          key={segment}
          onClick={() => handleSegmentClick(segment)}
          className={
            `
            px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
            ${activeSegment === segment ? 'shadow-sm' : ''}
          `
          }
          style={
            activeSegment === segment
              ? {
                  backgroundColor: 'var(--color-button-primary-default)',
                  color: 'var(--color-button-primary-text)',
                }
              : {
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)',
                }
          }
        >
          {segment}
        </button>
      ))}
    </div>
  )
}
