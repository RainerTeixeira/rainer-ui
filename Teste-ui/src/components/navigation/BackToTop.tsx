import React from 'react'

export default function BackToTop() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const onBackToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-3">
      <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Role a lista e use o botão para voltar ao topo.
      </p>

      <div
        ref={containerRef}
        className="relative h-56 overflow-auto rounded-lg border"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      >
        <div className="p-4 space-y-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border p-3"
              style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Item {i + 1}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                Conteúdo de exemplo para rolagem.
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="sticky bottom-3 ml-auto mr-3 mb-3 flex items-center justify-center rounded-md px-3 py-2 text-xs font-semibold"
          style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}
          onClick={onBackToTop}
        >
          Voltar ao topo
        </button>
      </div>
    </div>
  )
}
