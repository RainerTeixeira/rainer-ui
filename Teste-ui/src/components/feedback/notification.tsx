import React from 'react'

import { Badge } from '../ui'

type NotificationTone = 'info' | 'success' | 'warning' | 'danger'

interface NotificationProps {
  title?: string
  message?: string
  tone?: NotificationTone
}

export default function Notification({
  title = 'Atualização disponível',
  message = 'Uma nova versão do sistema foi publicada. Atualize quando possível.',
  tone = 'info',
}: NotificationProps) {
  const badgeVariant = tone === 'success' ? 'success' : tone === 'warning' ? 'warning' : tone === 'danger' ? 'destructive' : 'secondary'

  return (
    <div
      className="rounded-lg border p-4"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {message}
          </p>
        </div>
        <Badge variant={badgeVariant as any} label={tone.toUpperCase()} />
      </div>
    </div>
  )
}
