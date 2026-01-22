import React from 'react'

export default function RangeSlider() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Range: {value}
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: 'var(--color-interactive-primary-default)' }}
      />
    </div>
  )
}
