import React from 'react'

import { Avatar, Badge, Card, LinkButton } from '../ui'

type Item = {
  title: string
  author: string
  status: 'Publicado' | 'Rascunho' | 'Revisão'
  time: string
}

const items: Item[] = [
  { title: 'Guia de tokens: do JSON ao CSS vars', author: 'Rainer', status: 'Publicado', time: 'há 2h' },
  { title: 'Checklist de acessibilidade (WCAG)', author: 'Equipe UI', status: 'Revisão', time: 'ontem' },
  { title: 'Padronizando botões e ícones', author: 'Design', status: 'Rascunho', time: 'há 3d' },
]

const statusVariant: Record<Item['status'], React.ComponentProps<typeof Badge>['variant']> = {
  Publicado: 'success',
  Revisão: 'warning',
  Rascunho: 'secondary',
}

export default function RecentPostsList() {
  return (
    <Card title="Atividade recente" description="Conteúdo e revisões" className="p-0">
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-3 rounded-lg border p-3"
              style={{
                borderColor: 'var(--color-border-default)',
                backgroundColor: 'var(--color-background-secondary)',
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Avatar fallback={item.author.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()} />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.author} • {item.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge variant={statusVariant[item.status]} label={item.status} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <LinkButton href="#" variant="outline" size="sm">
            Ver tudo
          </LinkButton>
        </div>
      </div>
    </Card>
  )
}
