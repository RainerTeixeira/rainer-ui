import React from 'react'

import { Input } from '../ui'

const actions = [
  { label: 'Ir para Dashboard', hint: 'G D' },
  { label: 'Criar cliente', hint: 'C C' },
  { label: 'Abrir configurações', hint: 'G S' },
  { label: 'Sair', hint: 'L O' },
]

export default function Command() {
  const [q, setQ] = React.useState('')
  const filtered = actions.filter((a) => a.label.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="space-y-3">
      <Input placeholder="Digite um comando…" value={q} onChange={(e) => setQ(e.target.value)} />

      <div className="rounded-lg border" style={{ borderColor: 'var(--color-border-default)' }}>
        <div className="p-2 space-y-1">
          {filtered.length === 0 ? (
            <p className="text-xs p-2" style={{ color: 'var(--color-text-tertiary)' }}>
              Nenhum resultado.
            </p>
          ) : (
            filtered.map((a) => (
              <button
                key={a.label}
                type="button"
                className="w-full flex items-center justify-between rounded-md px-3 py-2 text-sm"
                style={{ backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-primary)' }}
                onClick={() => setQ('')}
              >
                <span className="font-semibold">{a.label}</span>
                <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                  {a.hint}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
