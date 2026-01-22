import React from 'react'

export default function TimePicker() {
  const [time, setTime] = React.useState('')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Horário
      </label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      />
    </div>
  )
}
