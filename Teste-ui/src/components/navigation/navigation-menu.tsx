import React from 'react'

export default function NavigationMenu() {
  const items = ['Produtos', 'Preços', 'Docs', 'Suporte']

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border p-1"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      role="navigation"
      aria-label="Navigation Menu"
    >
      {items.map((label, idx) => (
        <a
          key={label}
          href="#"
          className="rounded-md px-3 py-2 text-sm font-semibold"
          style={
            idx === 0
              ? { backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }
              : { backgroundColor: 'transparent', color: 'var(--color-text-secondary)' }
          }
        >
          {label}
        </a>
      ))}
    </div>
  )
}
