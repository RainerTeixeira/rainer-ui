import React from 'react'

export default function SearchInput() {
  const [query, setQuery] = React.useState('')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Buscar
      </label>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar..."
        className="w-full rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      />
    </div>
  )
}
