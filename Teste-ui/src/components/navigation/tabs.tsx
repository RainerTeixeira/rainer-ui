import React from 'react'

type Tab = {
  id: string
  label: string
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Visão geral' },
  { id: 'activity', label: 'Atividade' },
  { id: 'settings', label: 'Configurações' },
]

export default function Tabs() {
  const [active, setActive] = React.useState<string>('overview')

  return (
    <div className="space-y-3">
      <div
        className="inline-flex items-center rounded-lg border p-1"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      >
        {tabs.map((t) => {
          const isActive = t.id === active
          return (
            <button
              key={t.id}
              type="button"
              className="px-3 py-2 text-sm font-semibold rounded-md"
              style={
                isActive
                  ? { backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }
                  : { backgroundColor: 'transparent', color: 'var(--color-text-secondary)' }
              }
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <div
        className="rounded-lg border p-4"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      >
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Conteúdo: {tabs.find((t) => t.id === active)?.label}
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Este bloco troca conforme a aba selecionada.
        </p>
      </div>
    </div>
  )
}
