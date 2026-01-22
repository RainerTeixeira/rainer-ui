import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
}

class Boundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        this.props.fallback ?? (
          <div
            className="rounded-lg border p-6"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: 'var(--color-background-secondary)',
            }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              Ocorreu um erro
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
              {this.state.error.message}
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold"
              style={{
                backgroundColor: 'var(--color-button-primary-default)',
                color: 'var(--color-button-primary-text)',
              }}
              onClick={() => this.setState({ error: null })}
            >
              Tentar novamente
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}

function Crashy({ crash }: { crash: boolean }) {
  if (crash) throw new Error('Exemplo de erro capturado pelo ErrorBoundary.')
  return (
    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
      Clique no botão para simular uma exceção.
    </p>
  )
}

export default function ErrorBoundary() {
  const [crash, setCrash] = React.useState(false)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Demo
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold"
          style={{
            borderColor: 'var(--color-border-default)',
            backgroundColor: 'var(--color-background-primary)',
            color: 'var(--color-text-primary)',
          }}
          onClick={() => setCrash(true)}
        >
          Forçar erro
        </button>
      </div>

      <Boundary>
        <Crashy crash={crash} />
      </Boundary>
    </div>
  )
}
