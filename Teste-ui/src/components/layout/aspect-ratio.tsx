import React from 'react'

interface AspectRatioProps {
  ratio?: number
}

export default function AspectRatio({ ratio = 16 / 9 }: AspectRatioProps) {
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div style={{ paddingTop: `${100 / ratio}%`, position: 'relative' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            {`AspectRatio ${ratio.toFixed(2)} (demo)`}
          </p>
        </div>
      </div>
    </div>
  )
}
