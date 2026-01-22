import React from 'react'

type Particle = {
  top: number
  left: number
  size: number
  delay: number
  duration: number
}

export default function ParticlesEffect() {
  const particles = React.useMemo<Particle[]>(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      top: (i * 29) % 100,
      left: (i * 53) % 100,
      size: 2 + (i % 4),
      delay: (i % 6) * 0.4,
      duration: 2.8 + (i % 5) * 0.6,
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
      <style>{`
        @keyframes floatParticle {
          0% { transform: translate3d(0, 8px, 0); opacity: 0.25; }
          50% { transform: translate3d(0, -10px, 0); opacity: 0.6; }
          100% { transform: translate3d(0, 8px, 0); opacity: 0.25; }
        }
      `}</style>

      {particles.map((p, idx) => (
        <span
          key={idx}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--color-text-primary)',
            opacity: 0.35,
            animationName: 'floatParticle',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ))}

      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          ParticlesEffect
        </p>
        <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
          Partículas animadas (tokens)
        </p>
      </div>
    </div>
  )
}
