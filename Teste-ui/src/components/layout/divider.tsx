import React from 'react'

export default function Divider() {
  return (
    <div className="space-y-2">
      <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Divider
      </p>
      <div className="h-px" style={{ backgroundColor: 'var(--color-border-default)' }} />
    </div>
  )
}
