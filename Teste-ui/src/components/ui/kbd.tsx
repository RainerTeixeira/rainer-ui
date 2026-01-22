import React from 'react'

interface KbdProps {
  children: React.ReactNode
}

export default function Kbd({ children }: KbdProps) {
  return (
    <kbd className="px-2 py-1 text-xs font-mono rounded border" style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-primary)' }}>
      {children}
    </kbd>
  )
}
