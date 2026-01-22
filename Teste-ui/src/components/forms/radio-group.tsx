import React from 'react'

export default function RadioGroup() {
  const [selected, setSelected] = React.useState('a')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Opção
      </label>
      <div className="space-y-2">
        {['a', 'b', 'c'].map((value) => (
          <label key={value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="radio"
              value={value}
              checked={selected === value}
              onChange={(e) => setSelected(e.target.value)}
              className="h-4 w-4"
              style={{ accentColor: 'var(--color-interactive-primary-default)' }}
            />
            <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>Opção {value.toUpperCase()}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
