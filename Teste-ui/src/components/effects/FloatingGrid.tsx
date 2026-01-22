import React from 'react'

export default function FloatingGrid() {
  return (
    <div
      className="relative overflow-hidden rounded-lg border"
      style={{
        borderColor: 'var(--color-border-default)',
        backgroundColor: 'var(--color-background-secondary)',
        height: 220,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border-default) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-default) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.35,
          transform: 'translate3d(-16px, -16px, 0)',
        }}
      />

      <div
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full"
        style={{ backgroundColor: 'var(--color-button-primary-default)', opacity: 0.12, filter: 'blur(18px)' }}
      />
      <div
        className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full"
        style={{ backgroundColor: 'var(--color-status-success-default)', opacity: 0.12, filter: 'blur(18px)' }}
      />

      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          FloatingGrid
        </p>
        <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
          Grade + glow usando CSS vars
        </p>
      </div>
    </div>
  )
}
