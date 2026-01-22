import React from 'react'

export default function Skeleton() {
  return (
    <div className="space-y-3">
      <style>{`
        @keyframes feedbackShimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>

      <div
        className="h-4 w-40 rounded"
        style={{
          background:
            'linear-gradient(90deg, var(--color-background-tertiary), var(--color-background-secondary), var(--color-background-tertiary))',
          backgroundSize: '200% 100%',
          animation: 'feedbackShimmer 1.2s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="h-3 w-full rounded"
        style={{
          background:
            'linear-gradient(90deg, var(--color-background-tertiary), var(--color-background-secondary), var(--color-background-tertiary))',
          backgroundSize: '200% 100%',
          animation: 'feedbackShimmer 1.2s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="h-3 w-4/5 rounded"
        style={{
          background:
            'linear-gradient(90deg, var(--color-background-tertiary), var(--color-background-secondary), var(--color-background-tertiary))',
          backgroundSize: '200% 100%',
          animation: 'feedbackShimmer 1.2s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
    </div>
  )
}
