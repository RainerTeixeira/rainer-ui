import React from 'react'

export default function Checkbox() {
  const [checked, setChecked] = React.useState(false)

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="h-4 w-4 rounded border"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: checked ? 'var(--color-interactive-primary-default)' : 'transparent' }}
      />
      <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>Aceitar termos</span>
    </label>
  )
}
