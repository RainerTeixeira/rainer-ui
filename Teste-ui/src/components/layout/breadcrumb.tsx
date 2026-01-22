import React from 'react'

type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumb() {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Configurações', href: '/settings' },
    { label: 'Time' },
  ]

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={`${it.label}-${idx}`} className="flex items-center gap-2">
              {it.href && !isLast ? (
                <a
                  href={it.href}
                  className="text-sm underline-offset-4 hover:underline"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {it.label}
                </a>
              ) : (
                <span className="text-sm" style={{ color: isLast ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
                  {it.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true" style={{ color: 'var(--color-text-tertiary)' }}>/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
