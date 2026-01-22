import React from 'react'

const cards = [
  { title: 'Checklist', body: 'Acessibilidade e tokens em dia.' },
  { title: 'Observações', body: 'Padronizar estados hover/active.' },
  { title: 'Alertas', body: 'Adicionar erros e warnings semânticos.' },
  { title: 'Entrega', body: 'Release planejada para sexta.' },
  { title: 'Feedback', body: 'Coletar insights com time.' },
]

export default function Masonry() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        Masonry
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="break-inside-avoid mb-4 rounded-lg border p-4"
            style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              {c.title}
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
