import React from 'react'

import { ThemeToggle as CoreThemeToggle } from '@ui/components/utilities/ThemeToggle'

export default function ThemeToggle() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Alternar tema
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Este toggle altera os design tokens (claro/escuro).
        </p>
      </div>
      <CoreThemeToggle />
    </div>
  )
}
