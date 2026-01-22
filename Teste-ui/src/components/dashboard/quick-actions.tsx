import React from 'react'

import { Button, Card, IconButton } from '../ui'

type Action = {
  title: string
  description: string
  tone: 'primary' | 'secondary' | 'outline'
}

const actions: Action[] = [
  { title: 'Novo pedido', description: 'Registrar venda manual', tone: 'primary' },
  { title: 'Gerar relatório', description: 'Exportar métricas do mês', tone: 'outline' },
  { title: 'Convidar usuário', description: 'Adicionar membro ao time', tone: 'secondary' },
]

export default function QuickActions() {
  return (
    <Card title="Ações rápidas" description="Atalhos para tarefas frequentes" className="p-0">
      <div className="p-5 space-y-3">
        {actions.map((action) => (
          <div
            key={action.title}
            className="flex items-start justify-between gap-3 rounded-lg border p-4"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-secondary)',
            }}
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {action.title}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                {action.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                label="Executar"
                variant={action.tone}
                size="sm"
                onClick={() => {
                  // demo
                }}
              />
              <IconButton icon="settings" variant="ghost" size="sm" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
