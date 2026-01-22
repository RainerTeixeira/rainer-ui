import React from 'react'

export default function ContextMenu() {
  const [open, setOpen] = React.useState(false)
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setPos({ x: e.clientX, y: e.clientY })
    setOpen(true)
  }

  React.useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [])

  return (
    <div>
      <div
        className="rounded-lg border p-4"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
        onContextMenu={onContextMenu}
      >
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Clique com o botão direito
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Exemplo simples de menu de contexto.
        </p>
      </div>

      {open ? (
        <div
          className="fixed z-50 w-48 rounded-lg border p-2"
          style={{
            left: pos.x,
            top: pos.y,
            borderColor: 'var(--color-border-default)',
            backgroundColor: 'var(--color-background-primary)',
          }}
          role="menu"
        >
          {['Renomear', 'Duplicar', 'Excluir'].map((label) => (
            <button
              key={label}
              type="button"
              className="w-full text-left rounded-md px-3 py-2 text-sm"
              style={{ color: 'var(--color-text-primary)' }}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
