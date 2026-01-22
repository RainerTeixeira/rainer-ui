import React from 'react'

interface QuoteTestimonialProps {
  children: React.ReactNode
  author?: string
  role?: string
  avatar?: string
}

export default function QuoteTestimonial({ children, author, role, avatar }: QuoteTestimonialProps) {
  return (
    <blockquote className="flex gap-3 p-4 rounded-lg border" style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}>
      {avatar && (
        <img src={avatar} alt={author} className="w-10 h-10 rounded-full" style={{ backgroundColor: 'var(--color-background-tertiary)' }} />
      )}
      <div className="flex-1">
        <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{children}</p>
        {(author || role) && (
          <footer className="mt-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            {author && <strong>{author}</strong>}
            {author && role && ', '}
            {role}
          </footer>
        )}
      </div>
    </blockquote>
  )
}
