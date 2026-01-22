import React from 'react'

export default function Separator() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Seção A
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border-default)' }} />
      <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Seção B
      </span>
    </div>
  )
}
