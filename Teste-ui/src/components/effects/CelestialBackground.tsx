import React from 'react'

export default function CelestialBackground() {
  return (
    <div
      className="relative overflow-hidden rounded-lg border"
      style={{
        borderColor: 'var(--color-border-default)',
        height: 220,
        background:
          'radial-gradient(900px circle at 20% 20%, var(--color-button-primary-default), transparent 55%), radial-gradient(700px circle at 80% 60%, var(--color-status-success-default), transparent 55%), linear-gradient(180deg, var(--color-background-secondary), var(--color-background-primary))',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 70% 45%, rgba(255,255,255,0.12), transparent 50%)',
          mixBlendMode: 'overlay',
        }}
      />

      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          CelestialBackground
        </p>
        <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
          Gradiente “celestial” com tokens
        </p>
      </div>
    </div>
  )
}
