import React from 'react'

type AlertTone = 'info' | 'success' | 'warning' | 'danger'

interface AlertProps {
  title?: string
  description?: string
  tone?: AlertTone
}

const toneStyle: Record<AlertTone, React.CSSProperties> = {
  info: {
    backgroundColor: 'var(--color-background-secondary)',
    borderColor: 'var(--color-border-default)',
    titleColor: 'var(--color-text-primary)',
    textColor: 'var(--color-text-secondary)',
    dotColor: 'var(--color-button-primary-default)',
  } as React.CSSProperties & Record<string, string>,
  success: {
    backgroundColor: 'var(--color-status-success-light)',
    borderColor: 'var(--color-status-success-default)',
    titleColor: 'var(--color-status-success-text)',
    textColor: 'var(--color-status-success-text)',
    dotColor: 'var(--color-status-success-default)',
  } as React.CSSProperties & Record<string, string>,
  warning: {
    backgroundColor: 'var(--color-status-warning-light)',
    borderColor: 'var(--color-status-warning-default)',
    titleColor: 'var(--color-status-warning-text)',
    textColor: 'var(--color-status-warning-text)',
    dotColor: 'var(--color-status-warning-default)',
  } as React.CSSProperties & Record<string, string>,
  danger: {
    backgroundColor: 'var(--color-status-error-light)',
    borderColor: 'var(--color-status-error-default)',
    titleColor: 'var(--color-status-error-text)',
    textColor: 'var(--color-status-error-text)',
    dotColor: 'var(--color-status-error-default)',
  } as React.CSSProperties & Record<string, string>,
}

export default function Alert({
  title = 'Atenção',
  description = 'Uma informação importante para o usuário.',
  tone = 'info',
}: AlertProps) {
  const s = toneStyle[tone] as React.CSSProperties & {
    titleColor: string
    textColor: string
    dotColor: string
  }

  return (
    <div className="rounded-lg border p-4" style={{ backgroundColor: s.backgroundColor, borderColor: s.borderColor }}>
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: s.dotColor }} />
        <div>
          <p className="text-sm font-semibold" style={{ color: s.titleColor }}>
            {title}
          </p>
          <p className="text-xs mt-1" style={{ color: s.textColor }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
