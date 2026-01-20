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
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openItems.includes(index) && (
            <div className="px-4 py-3 border-t border-gray-200">
              <p className="text-gray-600">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
