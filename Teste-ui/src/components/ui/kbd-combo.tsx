import React from 'react'
import Kbd from './kbd'

interface KbdComboProps {
  keys: string[]
}

export default function KbdCombo({ keys }: KbdComboProps) {
  return (
    <div className="flex items-center gap-1">
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          <Kbd>{key}</Kbd>
          {index < keys.length - 1 && <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>+</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
