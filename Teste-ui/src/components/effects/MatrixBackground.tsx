import React from 'react'

const rows = [
  '01010101001001010100100101010101',
  '11001001010100101001001010100101',
  '00100101001010100101010100101010',
  '10100101010010101001001010100101',
]

export default function MatrixBackground() {
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
        @keyframes matrixScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }
      `}</style>

      <div
        className="absolute inset-0"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: 12,
          lineHeight: '16px',
          color: 'var(--color-status-success-default)',
          opacity: 0.55,
          padding: 12,
          animation: 'matrixScroll 3.5s linear infinite',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}>{rows[i % rows.length]}</div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent, var(--color-background-secondary) 80%), radial-gradient(700px circle at 30% 10%, var(--color-background-primary), transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          MatrixBackground
        </p>
        <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
          Texto animado + overlay (tokens)
        </p>
      </div>
    </div>
  )
}
