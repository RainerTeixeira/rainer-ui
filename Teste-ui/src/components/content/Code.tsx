import React from 'react'

interface CodeProps {
  language?: string
  code?: string
}

export default function Code({
  language = 'tsx',
  code = `import { Button } from '@rainersoft/ui'

export function Example() {
  return <Button label="Salvar" variant="primary" />
}`,
}: CodeProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
          Código
        </p>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full border"
          style={{
            borderColor: 'var(--color-border-default)',
            backgroundColor: 'var(--color-background-secondary)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {language}
        </span>
      </div>
      <pre
        className="rounded-lg border p-4 overflow-auto text-xs"
        style={{
          borderColor: 'var(--color-border-default)',
          backgroundColor: 'var(--color-background-secondary)',
          color: 'var(--color-text-primary)',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
