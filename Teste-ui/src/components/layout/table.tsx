import React from 'react'

type Row = { name: string; role: string; status: string }

const rows: Row[] = [
  { name: 'Ana', role: 'Admin', status: 'Ativo' },
  { name: 'Bruno', role: 'Financeiro', status: 'Ativo' },
  { name: 'Carla', role: 'Suporte', status: 'Pendente' },
]

export default function Table() {
  return (
    <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--color-border-default)' }}>
      <table className="w-full text-sm">
        <thead style={{ backgroundColor: 'var(--color-background-secondary)' }}>
          <tr>
            <th className="text-left px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>Nome</th>
            <th className="text-left px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>Cargo</th>
            <th className="text-left px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>Status</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'var(--color-background-primary)' }}>
          {rows.map((r) => (
            <tr key={r.name} style={{ borderTop: '1px solid var(--color-border-default)' }}>
              <td className="px-4 py-3" style={{ color: 'var(--color-text-primary)' }}>{r.name}</td>
              <td className="px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>{r.role}</td>
              <td className="px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
