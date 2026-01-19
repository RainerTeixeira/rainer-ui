import React, { useState } from 'react'

// Banner simples para demonstrar compliance (aceitar/rejeitar cookies)
export function CookieBannerDemo() {
  const [visible, setVisible] = useState(true)
  const [choice, setChoice] = useState<'none' | 'accepted' | 'rejected'>('none')

  if (!visible) return null

  return (
    <div className="rounded-lg border border-[var(--color-gray-700)] bg-[var(--color-background-secondary)] p-4 shadow-lg">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-[var(--color-blue-600)]/15 text-[var(--color-blue-600)] flex items-center justify-center font-bold">
          🍪
        </div>
        <div className="space-y-2 text-[var(--color-text-primary)]">
          <div>
            <p className="font-semibold">Cookies & Privacidade</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Usamos cookies para melhorar a experiência. Você pode aceitar ou rejeitar.
            </p>
          </div>
          {choice !== 'none' && (
            <div className="text-xs text-[var(--color-text-secondary)]">
              Preferência salva: {choice === 'accepted' ? 'Aceitou' : 'Rejeitou'} cookies.
            </div>
          )}
          <div className="flex gap-2">
            <button
              className="rounded-md bg-[var(--color-blue-600)] px-3 py-2 text-sm font-medium text-white hover:bg-[var(--color-blue-700)]"
              onClick={() => {
                setChoice('accepted')
                setVisible(false)
              }}
            >
              Aceitar
            </button>
            <button
              className="rounded-md border border-[var(--color-gray-600)] px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-primary)]"
              onClick={() => {
                setChoice('rejected')
                setVisible(false)
              }}
            >
              Rejeitar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
