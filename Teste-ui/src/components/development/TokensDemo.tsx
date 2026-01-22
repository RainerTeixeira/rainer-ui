import React from 'react'

import { Badge, Button, Card, Input, Progress } from '../ui'

type Swatch = {
  label: string
  cssVar: string
}

const swatches: Swatch[] = [
  { label: 'Background / Primary', cssVar: '--color-background-primary' },
  { label: 'Background / Secondary', cssVar: '--color-background-secondary' },
  { label: 'Text / Primary', cssVar: '--color-text-primary' },
  { label: 'Text / Secondary', cssVar: '--color-text-secondary' },
  { label: 'Border / Default', cssVar: '--color-border-default' },
  { label: 'Button / Primary', cssVar: '--color-button-primary-default' },
  { label: 'Status / Success', cssVar: '--color-status-success-default' },
  { label: 'Status / Warning', cssVar: '--color-status-warning-default' },
  { label: 'Status / Error', cssVar: '--color-status-error-default' },
]

export default function TokensDemo() {
  return (
    <div className="space-y-6">
      <Card
        title="Design Tokens"
        description="Checklist rápido para validar que o tema está sendo aplicado via CSS vars"
        className="p-0"
      >
        <div className="p-5 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {swatches.map((s) => (
              <div
                key={s.cssVar}
                className="rounded-lg border p-3"
                style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                      {s.label}
                    </p>
                    <p className="text-[10px] mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                      var({s.cssVar})
                    </p>
                  </div>
                  <div
                    className="h-8 w-8 rounded-md border"
                    style={{
                      backgroundColor: `var(${s.cssVar})`,
                      borderColor: 'var(--color-border-default)',
                    }}
                    aria-label={s.label}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-lg border p-4" style={{ borderColor: 'var(--color-border-default)' }}>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Componentes usando tokens
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                Se o tema mudar, esses componentes devem acompanhar automaticamente.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button label="Ação primária" variant="primary" />
                <Button label="Outline" variant="outline" />
                <Button label="Ghost" variant="ghost" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="success" label="Success" />
                <Badge variant="warning" label="Warning" />
                <Badge variant="destructive" label="Error" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Input
                  </p>
                  <Input placeholder="Buscar..." />
                </div>
                <div>
                  <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Progresso
                  </p>
                  <Progress value={62} />
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border p-4"
              style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Dica
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                Use este painel para conferir rapidamente se existe algum componente ainda com cor hardcoded.
              </p>
              <div className="mt-3">
                <p className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                  Regra: todas as cores devem vir de var(--color-...)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
