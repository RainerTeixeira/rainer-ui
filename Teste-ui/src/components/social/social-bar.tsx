import React from 'react'

import { LinkButton } from '../ui'

type SocialItem = {
  label: string
  href: string
  icon: React.ReactNode
}

const items: SocialItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.75 5.63.75 12c0 5.12 3.29 9.46 7.86 10.99.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.57-3.87-1.57-.53-1.37-1.28-1.73-1.28-1.73-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.76.4-1.28.72-1.58-2.55-.3-5.23-1.3-5.23-5.79 0-1.28.45-2.33 1.2-3.16-.12-.3-.52-1.52.11-3.17 0 0 .98-.32 3.2 1.2a10.8 10.8 0 0 1 2.92-.4c.99 0 1.99.14 2.92.4 2.22-1.52 3.2-1.2 3.2-1.2.63 1.65.23 2.87.11 3.17.75.83 1.2 1.88 1.2 3.16 0 4.5-2.68 5.49-5.24 5.78.41.36.77 1.08.77 2.18v3.23c0 .31.21.68.8.57A11.55 11.55 0 0 0 23.25 12C23.25 5.63 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.09v9.43h-4v-8.36c0-2-.04-4.58-2.79-4.58-2.8 0-3.23 2.18-3.23 4.44v8.5h-4V7.98Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.78L23 22h-6.2l-4.86-6.19L6.6 22H3.5l7.29-8.34L1 2h6.35l4.4 5.66L18.9 2Zm-1.09 18h1.72L6.29 3.92H4.44L17.81 20Z" />
      </svg>
    ),
  },
]

export default function SocialBar() {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Social
        </p>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Links rápidos para perfis e compartilhamento.
        </p>
      </div>

      <div className="flex items-center gap-2">
        {items.map((it) => (
          <LinkButton key={it.label} href={it.href} external variant="outline" size="sm">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">{it.icon}</span>
              <span>{it.label}</span>
            </span>
          </LinkButton>
        ))}
      </div>
    </div>
  )
}
