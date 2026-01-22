import React from 'react'

import { Button } from '../ui'

export default function Form() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleSubmit = () => {
    alert(`Enviado: ${name} - ${email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Nome
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
        />
      </div>
      <div>
        <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          E-mail
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
        />
      </div>
      <Button label="Enviar" variant="primary" onClick={handleSubmit} />
    </form>
  )
}
