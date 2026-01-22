import React from 'react'

export default function Select() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Categoria
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      >
        <option value="">Selecione...</option>
        <option value="a">Opção A</option>
        <option value="b">Opção B</option>
        <option value="c">Opção C</option>
      </select>
    </div>
  )
}
