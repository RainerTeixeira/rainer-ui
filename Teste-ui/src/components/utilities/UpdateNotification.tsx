import React from 'react'

import { Button } from '../ui'

export default function UpdateNotification() {
  const [visible, setVisible] = React.useState(true)

  if (!visible) {
    return <Button label="Reexibir aviso" variant="outline" onClick={() => setVisible(true)} />
  }

  return (
    <div
      className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
      style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      role="status"
      aria-live="polite"
    >
      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Atualização disponível
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Uma nova versão foi instalada. Recarregue para aplicar melhorias.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button label="Recarregar" variant="primary" onClick={() => window.location.reload()} />
        <Button label="Dispensar" variant="ghost" onClick={() => setVisible(false)} />
      </div>
    </div>
  )
}
