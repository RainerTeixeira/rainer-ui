import React from 'react'

export default function PhoneInput() {
  const [phone, setPhone] = React.useState('')

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Telefone
      </label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(00) 00000-0000"
        className="w-full rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      />
    </div>
  )
}
