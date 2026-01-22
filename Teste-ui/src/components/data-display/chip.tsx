import React from 'react'

type ChipTone = 'default' | 'success' | 'warning' | 'danger'

interface ChipProps {
  label?: string
  tone?: ChipTone
}

const toneStyle: Record<ChipTone, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--color-background-secondary)',
    color: 'var(--color-text-secondary)',
    borderColor: 'var(--color-border-default)',
  },
  success: {
    backgroundColor: 'var(--color-status-success-light)',
    color: 'var(--color-status-success-text)',
    borderColor: 'var(--color-status-success-default)',
  },
  warning: {
    backgroundColor: 'var(--color-status-warning-light)',
    color: 'var(--color-status-warning-text)',
    borderColor: 'var(--color-status-warning-default)',
  },
  danger: {
    backgroundColor: 'var(--color-status-error-light)',
    color: 'var(--color-status-error-text)',
    borderColor: 'var(--color-status-error-default)',
  },
}

export default function Chip({ label = 'Chip', tone = 'default' }: ChipProps) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
      style={toneStyle[tone]}
    >
      {label}
    </span>
  )
}
