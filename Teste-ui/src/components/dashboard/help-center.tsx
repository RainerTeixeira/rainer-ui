import React from 'react'

import { Card, Input, LinkButton } from '../ui'

export default function HelpCenter() {
  return (
    <Card title="Central de ajuda" description="Encontre respostas rápidas" className="p-0">
      <div className="p-5 space-y-4">
        <Input placeholder="Pesquisar artigos e atalhos..." value="" onChange={() => {}} />

        <div className="grid gap-3 sm:grid-cols-2">
          <div
            className="rounded-lg border p-4"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-secondary)',
            }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Como usar design tokens
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              Padrões para cores semânticas e temas.
            </p>
          </div>
          <div
            className="rounded-lg border p-4"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-secondary)',
            }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Acessibilidade no dia a dia
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              Checklist de práticas e exemplos.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <LinkButton href="#" variant="primary" size="sm">
            Abrir documentação
          </LinkButton>
        </div>
      </div>
    </Card>
  )
}
