import React from 'react'

import { Button } from '../ui'

export default function Sonner() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (!visible) return
    const t = window.setTimeout(() => setVisible(false), 2500)
    return () => window.clearTimeout(t)
  }, [visible])

  return (
    <div className="space-y-3">
      <Button label="Mostrar toast" variant="primary" onClick={() => setVisible(true)} />

      <div className="relative" style={{ height: 90 }}>
        {visible && (
          <div
            className="absolute bottom-0 left-0 rounded-lg border px-4 py-3 shadow-sm"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-primary)',
              color: 'var(--color-text-primary)',
              width: 'min(420px, 100%)',
            }}
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-semibold">Salvo com sucesso</p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              As alterações foram registradas.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
