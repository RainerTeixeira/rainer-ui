import React from 'react'

interface QuoteProps {
  children: React.ReactNode
  author?: string
  role?: string
}

export default function Quote({ children, author, role }: QuoteProps) {
  return (
    <blockquote className="border-l-4 pl-4 italic" style={{ borderColor: 'var(--color-border-default)' }}>
      <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{children}</p>
      {(author || role) && (
        <footer className="mt-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {author && <strong>{author}</strong>}
          {author && role && ', '}
          {role}
        </footer>
      )}
    </blockquote>
  )
}
