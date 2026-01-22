import React from 'react'

import { Button, Card } from '../ui'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [event, setEvent] = React.useState<BeforeInstallPromptEvent | null>(null)
  const [status, setStatus] = React.useState<'idle' | 'prompted' | 'accepted' | 'dismissed'>('idle')

  React.useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setEvent(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const canInstall = Boolean(event)

  const onInstall = async () => {
    if (!event) return
    setStatus('prompted')
    await event.prompt()
    const choice = await event.userChoice
    setStatus(choice.outcome === 'accepted' ? 'accepted' : 'dismissed')
    setEvent(null)
  }

  return (
    <Card title="Instalação (PWA)" description="Exemplo de prompt de instalação (beforeinstallprompt)" className="p-0">
      <div className="p-5 space-y-4">
        <div
          className="rounded-lg border p-4"
          style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Status
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {canInstall
              ? 'O evento beforeinstallprompt está disponível neste navegador.'
              : 'O evento beforeinstallprompt não está disponível (modo demo).'}
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-tertiary)' }}>
            Resultado: {status}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button label="Instalar" variant="primary" onClick={onInstall} disabled={!canInstall || status === 'prompted'} />
          <Button
            label="Simular disponibilidade"
            variant="outline"
            onClick={() => setEvent({
              prompt: async () => {},
              userChoice: Promise.resolve({ outcome: 'accepted' }),
            } as unknown as BeforeInstallPromptEvent)}
          />
        </div>

        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Em produção, você normalmente exibiria esse CTA somente quando o evento existir.
        </p>
      </div>
    </Card>
  )
}
