import React from 'react'

export default function Flex() {
  return (
    <div className="flex flex-wrap gap-2">
      {['A', 'B', 'C', 'D'].map((t) => (
        <div
          key={t}
          className="rounded-md border px-3 py-2 text-sm font-semibold"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-primary)' }}
        >
          {t}
        </div>
      ))}
    </div>
  )
}
