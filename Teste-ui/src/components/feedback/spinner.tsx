import React from 'react'

export default function Spinner() {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className="inline-block h-5 w-5 rounded-full border-2"
        style={{
          borderColor: 'var(--color-border-default)',
          borderTopColor: 'var(--color-button-primary-default)',
          animation: 'feedbackSpin 1s linear infinite',
        }}
        aria-label="Carregando"
      />
      <style>{`
        @keyframes feedbackSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        Carregando...
      </span>
    </div>
  )
}
