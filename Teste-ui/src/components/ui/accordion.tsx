import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items?: AccordionItem[]
  allowMultiple?: boolean
}

export default function Accordion({ 
  items = [
    { title: 'Item 1', content: 'Conteúdo do primeiro item' },
    { title: 'Item 2', content: 'Conteúdo do segundo item' }
  ],
  allowMultiple = false
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      )
    }
  }
  
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              ['--tw-ring-color' as any]: 'var(--color-interactive-focus-ring)',
            } as React.CSSProperties}
          >
            <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {item.title}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`}
              style={{ color: 'var(--color-text-tertiary)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openItems.includes(index) && (
            <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--color-border-default)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
