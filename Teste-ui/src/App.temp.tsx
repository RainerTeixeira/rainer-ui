'use client'

import React, { useState } from 'react'
import { VisuallyHidden } from './components/accessibility'

// Simulação de componentes UI básicos para demonstração
const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button 
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    {...props}
  >
    {children}
  </button>
)

const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`p-4 border rounded-lg bg-white dark:bg-gray-900 ${className || ''}`}
    {...props}
  >
    {children}
  </div>
)

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'secondary' }) => (
  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
    variant === 'default' 
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }`}>
    {children}
  </span>
)

// Dados de exemplo para os componentes
const accessibilityExamples = [
  {
    id: 'screen-reader-only',
    title: 'Screen Reader Only Content',
    description: 'Conteúdo escondido visualmente mas acessível para leitores de tela',
    component: (
      <Button>
        Download PDF
        <VisuallyHidden>Baixar documento como PDF</VisuallyHidden>
      </Button>
    ),
    code: `<Button>
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
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Pular para conteúdo principal
          </a>
        </VisuallyHidden>
        <p className="text-sm text-gray-600">
          Pressione Tab para focar no link de skip navigation
        </p>
      </div>
    ),
    code: `<VisuallyHidden asChild>
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-500 text-white px-4 py-2 rounded">
    Pular para conteúdo principal
  </a>
</VisuallyHidden>`
  },
  {
    id: 'loading-indicator',
    title: 'Loading Indicator',
    description: 'Indicador de carregamento com descrição acessível',
    component: (
      <div className="flex items-center gap-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
        <span>Carregando...</span>
        <VisuallyHidden>Carregando dados, por favor aguarde</VisuallyHidden>
      </div>
    ),
    code: `<div className="flex items-center gap-2">
  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
  <span>Carregando...</span>
  <VisuallyHidden>Carregando dados, por favor aguarde</VisuallyHidden>
</div>`
  },
  {
    id: 'icon-button',
    title: 'Icon Button with Label',
    description: 'Botão de ícone com rótulo acessível',
    component: (
      <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <VisuallyHidden>Adicionar novo item</VisuallyHidden>
      </button>
    ),
    code: `<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-describedby="email-help"
        />
        <VisuallyHidden id="email-help">
          Digite seu endereço de email no formato nome@exemplo.com
        </VisuallyHidden>
      </div>
    ),
    code: `<input 
  type="email" 
  placeholder="seu@email.com"
  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-describedby="email-help"
/>
<VisuallyHidden id="email-help">
  Digite seu endereço de email no formato nome@exemplo.com
</VisuallyHidden>`
  }
]

function App() {
  const [selectedExample, setSelectedExample] = useState(accessibilityExamples[0])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                @rainersoft/ui - Accessibility Demo
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Demonstração do componente VisuallyHidden em cenários reais
              </p>
            </div>
            <Badge variant="secondary">Accessibility</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar - Navigation */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-8">
              <h2 className="text-lg font-semibold mb-4">Exemplos</h2>
              <nav className="space-y-2">
                {accessibilityExamples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setSelectedExample(example)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedExample.id === example.id
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
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
                  <h2 className="text-2xl font-bold mb-2">{selectedExample.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {selectedExample.description}
                  </p>
                </div>

                {/* Live Demo */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Demonstração</h3>
                  <div className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
                    {selectedExample.component}
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Código</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{selectedExample.code}</code>
                  </pre>
                </div>
              </Card>
            </section>

            {/* Component Info */}
            <section>
              <Card>
                <h2 className="text-2xl font-bold mb-4">Sobre o Componente</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold">VisuallyHidden</h3>
                  <p>
                    O componente <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">VisuallyHidden</code> 
                    esconde visualmente o conteúdo mas mantém acessível para leitores de tela e outros tecnologias assistivas.
                  </p>
                  
                  <h4 className="font-semibold mt-4">Quando usar:</h4>
                  <ul>
                    <li>Rótulos para botões que só têm ícones</li>
                    <li>Links de "pular para conteúdo principal"</li>
                    <li>Descrições adicionais para elementos</li>
                    <li>Feedback de status para leitores de tela</li>
                  </ul>

                  <h4 className="font-semibold mt-4">Acessibilidade:</h4>
                  <ul>
                    <li>Conteúdo permanece no DOM</li>
                    <li>Acessível para leitores de tela</li>
                    <li>Navegável por teclado quando configurado</li>
                    <li>Segue as WCAG 2.1 AA</li>
                  </ul>
                </div>
              </Card>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>@rainersoft/ui - Component Library</p>
            <p className="text-sm mt-2">Demonstração de acessibilidade com VisuallyHidden</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
