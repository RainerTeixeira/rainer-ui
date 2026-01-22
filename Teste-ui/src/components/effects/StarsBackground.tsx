import React from 'react'

type Star = {
  top: number
  left: number
  size: number
  opacity: number
}

export default function StarsBackground() {
  const stars = React.useMemo<Star[]>(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      top: (i * 73) % 100,
      left: (i * 41) % 100,
      size: 1 + (i % 3),
      opacity: 0.25 + ((i % 7) / 10),
    }))
  }, [])

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
          background:
            'radial-gradient(800px circle at 30% 20%, var(--color-background-primary), transparent 55%), radial-gradient(700px circle at 80% 70%, var(--color-background-tertiary), transparent 55%)',
        }}
      />
      {stars.map((s, idx) => (
        <span
          key={idx}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            backgroundColor: 'var(--color-text-primary)',
          }}
        />
      ))}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 0 1px var(--color-border-default)' }} />
      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          StarsBackground
        </p>
        <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
          Exemplo de fundo com estrelas (tokens)
        </p>
      </div>
    </div>
  )
}
