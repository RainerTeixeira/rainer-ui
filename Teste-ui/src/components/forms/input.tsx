import React from 'react'

export default function Input() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Input
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite algo..."
        className="w-full rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      />
    </div>
  )
}
