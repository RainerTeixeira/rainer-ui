'use client'

import React, { useState } from 'react'
import { VisuallyHidden } from './components/accessibility'
import { CookieBannerDemo } from './components/compliance/CookieBannerDemo'
import * as tokens from '@rainersoft/design-tokens'
import { PageHeader, ThemeToggle } from '@rainersoft/ui'

// Componentes UI usando design tokens
const Button = ({ children, variant = 'primary', size = 'md', ...props }: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-[var(--color-blue-600)] text-white hover:bg-[var(--color-blue-700)] focus:ring-[var(--color-blue-500)]',
    secondary: 'bg-[var(--color-gray-600)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-700)]',
    outline: 'border border-[var(--color-gray-600)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      style={{
        fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif'
      }}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`p-6 rounded-lg border bg-[var(--color-background-primary)] ${className || ''}`}
    style={{
        borderColor: 'var(--color-gray-600)',
        fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans ?? 'ui-sans-serif, system-ui, sans-serif'
      }}
    {...props}
  >
    {children}
  </div>
)

const Badge = ({ children, variant = 'default' }: { 
  children: React.ReactNode, 
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' 
}) => {
  const variants = {
    default: 'bg-[var(--color-blue-600)] text-white',
    secondary: 'bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)]',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}

// Secções dinâmicas para navegação superior: derivadas das pastas de componentes
const componentSections = [
  'accessibility',
  'compliance',
  'content',
  'dashboard',
  'data-display',
  'development',
  'effects',
  'feedback',
  'forms',
  'infrastructure',
  'layout',
  'navigation',
  'overlays',
  'providers',
  'pwa',
  'social',
  'ui',
  'utilities'
].map((folder) => ({
  id: folder,
  label: folder
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}))

// Dados de exemplo usando design tokens
const accessibilityExamples = [
  {
    id: 'screen-reader-only',
    title: 'Screen Reader Only Content',
    description: 'Conteúdo escondido visualmente mas acessível para leitores de tela',
    component: (
      <Button variant="primary" size="md">
        Download PDF
        <VisuallyHidden>Baixar documento como PDF</VisuallyHidden>
      </Button>
    ),
    code: `<Button variant="primary">
  Download PDF
  <VisuallyHidden>Baixar documento como PDF</VisuallyHidden>
</Button>`
  },
  {
    id: 'skip-navigation',
    title: 'Skip Navigation Link',
    description: 'Link para pular navegação, visível apenas com foco',
    component: (
      <div className="relative">
        <VisuallyHidden asChild>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[var(--color-blue-600)] text-white px-4 py-2 rounded-md"
          >
            Pular para conteúdo principal
          </a>
        </VisuallyHidden>
        <p className="text-[var(--color-text-secondary)] text-sm">
          Pressione Tab para focar no link de skip navigation
        </p>
      </div>
    ),
    code: `<VisuallyHidden asChild>
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[var(--color-blue-600)] text-white px-4 py-2 rounded-md">
    Pular para conteúdo principal
  </a>
</VisuallyHidden>`
  },
  {
    id: 'loading-indicator',
    title: 'Loading Indicator',
    description: 'Indicador de carregamento com descrição acessível',
    component: (
      <div className="flex items-center gap-3">
        <div 
          className="animate-spin rounded-full h-5 w-5 border-2 border-[var(--color-blue-600)] border-t-transparent"
          style={{ borderTopColor: 'transparent' }}
        ></div>
        <span className="text-[var(--color-text-primary)]">Carregando...</span>
        <VisuallyHidden>Carregando dados, por favor aguarde</VisuallyHidden>
      </div>
    ),
    code: `<div className="flex items-center gap-3">
  <div className="animate-spin rounded-full h-5 w-5 border-2 border-[var(--color-blue-600)] border-t-transparent"></div>
  <span className="text-[var(--color-text-primary)]">Carregando...</span>
  <VisuallyHidden>Carregando dados, por favor aguarde</VisuallyHidden>
</div>`
  },
  {
    id: 'icon-button',
    title: 'Icon Button with Label',
    description: 'Botão de ícone com rótulo acessível',
    component: (
      <button 
        className="p-2 rounded-md hover:bg-[var(--color-background-secondary)] transition-colors"
        aria-label="Adicionar novo item"
      >
        <svg className="w-5 h-5 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <VisuallyHidden>Adicionar novo item</VisuallyHidden>
      </button>
    ),
    code: `<button className="p-2 rounded-md hover:bg-[var(--color-background-secondary)] transition-colors">
  <svg className="w-5 h-5 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  <VisuallyHidden>Adicionar novo item</VisuallyHidden>
</button>`
  },
  {
    id: 'form-feedback',
    title: 'Form Feedback',
    description: 'Feedback de formulário acessível',
    component: (
      <div className="space-y-2">
        <input 
          type="email" 
          placeholder="seu@email.com"
          className="w-full px-3 py-2 border border-[var(--color-gray-600)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent"
          aria-describedby="email-help"
          style={{
            fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif'
          }}
        />
        <VisuallyHidden id="email-help">
          Digite seu endereço de email no formato nome@exemplo.com
        </VisuallyHidden>
      </div>
    ),
    code: `<input 
  type="email" 
  placeholder="seu@email.com"
  className="w-full px-3 py-2 border border-[var(--color-gray-600)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent"
  aria-describedby="email-help"
/>
<VisuallyHidden id="email-help">
  Digite seu endereço de email no formato nome@exemplo.com
</VisuallyHidden>`
  }
]

function App() {
  const [selectedExample, setSelectedExample] = useState(accessibilityExamples[0])

  // Debug para verificar tokens
  console.log('Tokens loaded:', !!tokens)
  console.log('TypographyPrimitive:', tokens.typographyPrimitive)
  console.log('FontFamily:', tokens.typographyPrimitive?.fontFamily)

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* Head com PageHeader e navegação por âncoras para cada categoria */}
      <div className="relative overflow-hidden border-b border-[var(--color-gray-700)] bg-[var(--color-background-secondary)]">
        {/* Glow de fundo usando tokens de cor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.12), transparent 35%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.12), transparent 35%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.10), transparent 40%)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PageHeader
              title="@rainersoft/ui — Catálogo"
              description="Selecione uma categoria para navegar até os exemplos."
            />
            <div className="flex items-center gap-3 justify-center sm:justify-end">
              <span className="text-sm text-[var(--color-text-secondary)]">Tema</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs font-medium">
            <span className="rounded-full border border-[var(--color-gray-700)] bg-[var(--color-background-primary)]/70 px-3 py-1 text-[var(--color-text-primary)]">
              @rainersoft/design-tokens
            </span>
            <span className="rounded-full border border-[var(--color-gray-700)] bg-[var(--color-background-primary)]/70 px-3 py-1 text-[var(--color-text-primary)]">
              @rainersoft/ui
            </span>
            <span className="rounded-full border border-[var(--color-gray-700)] bg-[var(--color-background-primary)]/70 px-3 py-1 text-[var(--color-text-primary)]">
              @rainersoft/utils
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {componentSections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="group rounded-xl border border-[var(--color-gray-700)] bg-[var(--color-background-primary)]/70 backdrop-blur px-4 py-3 transition-all hover:border-[var(--color-blue-500)] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-12px_rgba(59,130,246,0.45)]"
                style={{
                  fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif'
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{section.label}</h3>
                  <span className="text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-blue-200)] transition-colors">ver</span>
                </div>
                <div className="mt-2 h-1 w-12 rounded-full bg-linear-to-r from-primary/70 to-primary/30 group-hover:from-[var(--color-blue-400)] group-hover:to-[var(--color-cyan-400)] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[var(--color-background-secondary)] border-b border-[var(--color-gray-600)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-2"
                style={{
                  fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: tokens?.typographyPrimitive?.fontSize?.['3xl'] || '1.875rem',
                  fontWeight: tokens?.typographyPrimitive?.fontWeight?.bold || '700'
                }}
              >
                @rainersoft/ui - Accessibility Demo
              </h1>
              <p className="text-[var(--color-text-secondary)]">
                Demonstração do componente VisuallyHidden com design tokens
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Accessibility</Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ gap: tokens?.spacingPrimitive?.['8'] || '2rem' }}>
          
          {/* Sidebar - Navigation */}
          <aside className="lg:col-span-1" id="section-accessibility">
            <Card className="sticky top-8">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Exemplos
              </h2>
              <nav className="space-y-2">
                {accessibilityExamples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setSelectedExample(example)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedExample.id === example.id
                        ? 'bg-[var(--color-blue-600)] text-white'
                        : 'hover:bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
                    }`}
                    style={{
                      fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif'
                    }}
                  >
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm opacity-80 mt-1">
                      {example.description}
                    </div>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Example Demo */}
            <section>
              <Card>
                <div className="mb-6">
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
                    style={{
                      fontFamily: tokens.typographyPrimitive.fontFamily.sans,
                      fontSize: tokens.typographyPrimitive.fontSize['2xl'],
                      fontWeight: tokens.typographyPrimitive.fontWeight.bold
                    }}
                  >
                    {selectedExample.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {selectedExample.description}
                  </p>
                </div>

                {/* Live Demo */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                    Demonstração
                  </h3>
                  <div 
                    className="p-6 border-2 border-dashed border-[var(--color-gray-600)] rounded-lg bg-[var(--color-background-secondary)]"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-background-secondary)'
                    }}
                  >
                    {selectedExample.component}
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                    Código
                  </h3>
                  <pre 
                    className="border border-[var(--color-gray-600)] p-4 rounded-lg overflow-x-auto text-sm"
                    style={{
                      fontFamily: tokens?.typographyPrimitive?.fontFamily?.mono || 'ui-monospace, monospace',
                      backgroundColor: 'var(--color-background-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    <code>{selectedExample.code}</code>
                  </pre>
                </div>
              </Card>
            </section>

            {/* Component Info */}
            <section>
              <Card>
                <h2 
                  className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{
                    fontFamily: tokens?.typographyPrimitive?.fontFamily?.sans || 'ui-sans-serif, system-ui, sans-serif',
                    fontSize: tokens?.typographyPrimitive?.fontSize?.['2xl'] || '1.5rem',
                    fontWeight: tokens?.typographyPrimitive?.fontWeight?.bold || '700'
                  }}
                >
                  Sobre o Componente
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                      VisuallyHidden
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-4">
                      O componente <code className="bg-[var(--color-background-secondary)] px-2 py-1 rounded text-[var(--color-text-primary)]">VisuallyHidden</code> 
                      esconde visualmente o conteúdo mas mantém acessível para leitores de tela e outras tecnologias assistivas.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Design Tokens Utilizados:</h4>
                    <ul className="space-y-1 text-[var(--color-text-secondary)]">
                      <li>• <strong>Cores:</strong> var(--color-primary), var(--color-text-primary), var(--color-background-primary)</li>
                      <li>• <strong>Tipografia:</strong> Font family, sizes e weights dos tokens</li>
                      <li>• <strong>Spacing:</strong> Valores consistentes de espaçamento</li>
                      <li>• <strong>Bordas:</strong> Cores e raios dos border tokens</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Quando usar:</h4>
                    <ul className="space-y-1 text-[var(--color-text-secondary)]">
                      <li>• Rótulos para botões que só têm ícones</li>
                      <li>• Links de &quot;pular para conteúdo principal&quot;</li>
                      <li>• Descrições adicionais para elementos</li>
                      <li>• Feedback de status para leitores de tela</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Acessibilidade:</h4>
                    <ul className="space-y-1 text-[var(--color-text-secondary)]">
                      <li>• Conteúdo permanece no DOM</li>
                      <li>• Acessível para leitores de tela</li>
                      <li>• Navegável por teclado quando configurado</li>
                      <li>• Segue as WCAG 2.1 AA</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

          </div>
        </div>

        {/* Compliance */}
        <section id="section-compliance" className="mt-12 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">compliance</p>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Compliance</h2>
            <p className="text-[var(--color-text-secondary)]">Exemplo de banner de cookies com aceitar/rejeitar.</p>
          </div>
          <CookieBannerDemo />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-background-secondary)] border-t border-[var(--color-gray-600)] mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-[var(--color-text-secondary)]">
            <p>@rainersoft/ui - Component Library</p>
            <p className="text-sm mt-2">Demonstração com Design Tokens v{tokens.$version || '3.0.0'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
