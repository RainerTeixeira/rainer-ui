/**
 * @fileoverview Aplicação principal de demonstração dos componentes Rainersoft UI
 * @author Rainersoft Team
 * @version 1.0.0
 */

'use client'

import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import { VisuallyHidden } from './components/accessibility'
import { Quote, QuoteTestimonial } from '@ui/components/content/Quote'
import { Kbd, KbdCombo } from '@ui/components/content/Kbd'
import { ThemeToggle } from '@ui/components/utilities/ThemeToggle'
import { InlineLoader, Accordion, Avatar, Badge, Button, Card, Fab, IconButton, Input, LinkButton, Progress, SegmentedControl, Slider, Switch, Textarea, Toggle } from './components/ui'

/**
 * Configuração das seções do showcase
 * Cada seção representa uma categoria de componentes
 */
const showcaseSections = [
  { id: 'home', label: 'Home', description: 'Página inicial do showcase' },
  { id: 'accessibility', label: 'Accessibility', description: 'Componentes de acessibilidade' },
  { id: 'compliance', label: 'Compliance', description: 'Componentes de conformidade' },
  { id: 'content', label: 'Content', description: 'Componentes de conteúdo' },
  { id: 'dashboard', label: 'Dashboard', description: 'Componentes de dashboard' },
  { id: 'data-display', label: 'Data Display', description: 'Componentes de exibição de dados' },
  { id: 'development', label: 'Development', description: 'Componentes de desenvolvimento' },
  { id: 'effects', label: 'Effects', description: 'Componentes de efeitos visuais' },
  { id: 'feedback', label: 'Feedback', description: 'Componentes de feedback' },
  { id: 'forms', label: 'Forms', description: 'Componentes de formulário' },
  { id: 'infrastructure', label: 'Infrastructure', description: 'Componentes de infraestrutura' },
  { id: 'layout', label: 'Layout', description: 'Componentes de layout' },
  { id: 'navigation', label: 'Navigation', description: 'Componentes de navegação' },
  { id: 'overlays', label: 'Overlays', description: 'Componentes sobrepostos' },
  { id: 'providers', label: 'Providers', description: 'Provedores de contexto' },
  { id: 'pwa', label: 'PWA', description: 'Componentes PWA' },
  { id: 'social', label: 'Social', description: 'Componentes sociais' },
  { id: 'ui', label: 'UI Components', description: 'Componentes UI básicos' },
  { id: 'utilities', label: 'Utilities', description: 'Componentes utilitários' }
]

/**
 * Tipo que mapeia seções de componentes para lista de nomes de componentes
 */
type SectionComponentMap = Record<string, string[]>

/**
 * Mapeamento dinâmico dos componentes detectados no diretório ./components/
 */
const sectionComponentNames: SectionComponentMap = (() => {
  const entries = import.meta.glob('./components/*/*.tsx')
  return Object.keys(entries).reduce<SectionComponentMap>((acc, path) => {
    const match = path.match(/\.\/components\/([^/]+)\/([^/]+)\.tsx$/)
    if (!match) return acc
    const [, section, name] = match
    acc[section] = acc[section] ? [...acc[section], name] : [name]
    return acc
  }, {})
})()

/**
 * Lista ordenada das seções de componentes para navegação
 * Ordenada alfabeticamente pelo label para melhor experiência do usuário
 */
const sectionsOrdered = [...showcaseSections].sort((a, b) => a.label.localeCompare(b.label))

/**
 * Página de demonstração de componentes de acessibilidade
 * Exibe exemplos práticos e realistas do componente VisuallyHidden
 * Mostra casos de uso comuns em aplicações web
 * 
 * @returns {JSX.Element} Página com exemplos práticos de acessibilidade
 */
function AccessibilityPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Acessibilidade</h1>
        <p className="text-[var(--color-text-secondary)]">Exemplos práticos do componente VisuallyHidden para screen readers.</p>
      </div>

      {/* Exemplo 1: Botão com ícone e texto oculto */}
      <div className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Botão com Ícone</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Botões que usam apenas ícones devem ter texto oculto para screen readers.</p>
        
        <div className="flex gap-4">
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-blue-600)] text-white hover:bg-[var(--color-blue-700)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <VisuallyHidden>Adicionar novo item</VisuallyHidden>
          </button>
          
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-red-600)] text-white hover:bg-[var(--color-red-700)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <VisuallyHidden>Excluir item</VisuallyHidden>
          </button>
          
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-gray-600)] text-white hover:bg-[var(--color-gray-700)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <VisuallyHidden>Notificações</VisuallyHidden>
          </button>
        </div>
      </div>

      {/* Exemplo 2: Skip Navigation */}
      <div className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Skip Navigation</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Links para pular diretamente ao conteúdo principal, visíveis apenas quando focados.</p>
        
        <div className="relative">
          <VisuallyHidden asChild>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[var(--color-blue-600)] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)] z-50"
            >
              Pular para conteúdo principal
            </a>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <a
              href="#navigation"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-64 bg-[var(--color-green-600)] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-green-500)] z-50"
            >
              Pular para navegação
            </a>
          </VisuallyHidden>
          <p className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-background-primary)] p-2 rounded border">
            💡 Pressione Tab para focar nos links de skip navigation
          </p>
        </div>
      </div>

      {/* Exemplo 3: Status de Loading */}
      <div className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Status de Carregamento</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Informar screen readers sobre o status de operações assíncronas.</p>
        
        <div className="flex items-center gap-3">
          <div className="animate-spin w-5 h-5 border-2 border-[var(--color-blue-600)] border-t-transparent rounded-full"></div>
          <span className="text-[var(--color-text-primary)]">Carregando...</span>
          <VisuallyHidden role="status" aria-live="polite">
            Carregando dados, aguarde um momento
          </VisuallyHidden>
        </div>
      </div>

      {/* Exemplo 4: Indicadores Visuais */}
      <div className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Indicadores Visuais</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Cores e ícones devem ter descrições textuais para screen readers.</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--color-green-500)]"></div>
            <span className="text-[var(--color-text-primary)]">Online</span>
            <VisuallyHidden>Status: conectado e disponível</VisuallyHidden>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--color-red-500)]"></div>
            <span className="text-[var(--color-text-primary)]">Offline</span>
            <VisuallyHidden>Status: desconectado</VisuallyHidden>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--color-yellow-500)]"></div>
            <span className="text-[var(--color-text-primary)]">Ausente</span>
            <VisuallyHidden>Status: ausente temporariamente</VisuallyHidden>
          </div>
        </div>
      </div>

      {/* Exemplo 5: Formulários */}
      <div className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Formulários Acessíveis</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Campos obrigatórios e mensagens de erro devem ser anunciados.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              E-mail
              <span className="text-[var(--color-red-500)] ml-1">*</span>
              <VisuallyHidden>(campo obrigatório)</VisuallyHidden>
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-[var(--color-gray-600)] rounded-md bg-[var(--color-background-primary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
              placeholder="seu@email.com"
              aria-required="true"
              aria-describedby="email-help"
            />
            <VisuallyHidden id="email-help">
              Digite um endereço de e-mail válido. Este campo é obrigatório.
            </VisuallyHidden>
          </div>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="bg-[var(--color-blue-50)] border border-[var(--color-blue-200)] rounded-lg p-4">
        <h3 className="font-semibold text-[var(--color-blue-900)] mb-2">🎯 Boas Práticas</h3>
        <ul className="text-sm text-[var(--color-blue-800)] space-y-1">
          <li>• Use VisuallyHidden para texto que só screen readers precisam</li>
          <li>• Forneça contexto para ícones e elementos visuais</li>
          <li>• Anuncie mudanças de estado e carregamento</li>
          <li>• Não esconda informações importantes apenas visualmente</li>
          <li>• Teste com leitores de tela reais</li>
        </ul>
      </div>
    </div>
  )
}

/**
 * Página de demonstração dos componentes UI principais
 * Mostra todos os componentes UI disponíveis no diretório ./components/ui
 * Utiliza os componentes mock que exibem dados JSON estruturados
 * 
 * @returns {JSX.Element} Página com showcase de todos os componentes UI
 */
function UiPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">UI Components</h1>
        <p className="text-[var(--color-text-secondary)]">Todos os componentes UI disponíveis na biblioteca.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Button */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Button</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Button />
          </div>
        </div>

        {/* Badge */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Badge</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Badge />
          </div>
        </div>

        {/* Input */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Input</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Input />
          </div>
        </div>

        {/* Textarea */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Textarea</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Textarea />
          </div>
        </div>

        {/* Switch */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Switch</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Switch />
          </div>
        </div>

        {/* Slider */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Slider</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Slider />
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Progress</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Progress />
          </div>
        </div>

        {/* Avatar */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Avatar</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Avatar />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Card</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Card />
          </div>
        </div>

        {/* Accordion */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Accordion</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Accordion />
          </div>
        </div>

        {/* Toggle */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Toggle</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <Toggle>Toggle</Toggle>
          </div>
        </div>

        {/* Fab */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">Fab</h3>
          <div className="bg-gray-50 p-3 rounded-md relative h-24">
            <Fab icon="plus" />
          </div>
        </div>

        {/* IconButton */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">IconButton</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <IconButton icon="settings" />
          </div>
        </div>

        {/* LinkButton */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">LinkButton</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <LinkButton>Visitar link</LinkButton>
          </div>
        </div>

        {/* SegmentedControl */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">SegmentedControl</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <SegmentedControl />
          </div>
        </div>

        {/* InlineLoader */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-sm">
          <h3 className="font-semibold text-gray-900">InlineLoader</h3>
          <div className="bg-gray-50 p-3 rounded-md">
            <InlineLoader text="Carregando..." />
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-semibold text-green-900 mb-2">Componentes Reais Implementados</h3>
        <p className="text-sm text-green-800">
          Todos os componentes acima são implementações reais com React e Tailwind CSS.
          Cada componente é totalmente funcional, acessível e segue as melhores práticas de design.
          Nenhum mock JSON - apenas código React production-ready!
        </p>
      </div>
    </div>
  )
}

/**
 * Página de demonstração de componentes de compliance
 * Exibe citações, depoimentos e atalhos de teclado
 * Demonstra componentes de conteúdo e utilitários
 * 
 * @returns {JSX.Element} Página com exemplos de compliance
 */
function CompliancePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-gray-900">Compliance</h1>
        <p className="text-gray-600">Componentes de conformidade e boas práticas.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <Quote author="Equipe Rainersoft" role="UI Library">
            Criamos componentes com foco em acessibilidade e consistência.
          </Quote>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <QuoteTestimonial author="Designer de Produto" role="UI/UX">
            A biblioteca Rainersoft UI facilita criar interfaces consistentes e acessíveis.
          </QuoteTestimonial>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Atalhos de Teclado</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Buscar:</span>
            <KbdCombo keys={["Ctrl", "K"]} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Cancelar:</span>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Página placeholder para seções sem implementação específica
 * Detecta automaticamente os componentes disponíveis na seção
 * Exibe lista de componentes e exemplo de implementação
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.section - Nome da seção atual
 * @returns {JSX.Element} Página placeholder com lista de componentes
 */
function PlaceholderPage({ section }: { section: string }) {
  const components = [...(sectionComponentNames[section] || [])].sort((a, b) => a.localeCompare(b))
  const friendlyName = section.replace(/-/g, ' ')

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-gray-900 capitalize">{friendlyName}</h1>
        <p className="text-gray-600">Componentes reais detectados na seção.</p>
      </div>

      {components.length ? (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">Componentes ({components.length})</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((name) => (
              <li
                key={name}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm capitalize text-gray-700"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Nenhum componente encontrado para esta seção.</p>
      )}

      <div className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 space-y-2">
        <p className="text-sm text-gray-600">Exemplo para esta seção:</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-blue-100 text-blue-800 px-2 py-1">{friendlyName}</span>
          <span className="text-gray-900 font-medium">Crie um card usando esses componentes.</span>
        </div>
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Ver outros exemplos
        </Link>
      </div>
    </div>
  )
}

/**
 * Página inicial do aplicativo
 * Apresenta cards de exemplo para diferentes contextos (blog, e-commerce, vendas)
 * Serve como portal de navegação para as demais seções
 * 
 * @returns {JSX.Element} Página home com cards de exemplo
 */
function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Rainersoft UI Showcase</h1>
        <p className="text-lg text-gray-600">Biblioteca de componentes React com design moderno e acessível.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcaseSections.map((section) => (
          <Link
            key={section.id}
            to={`/${section.id}`}
            className="block group"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold text-sm">
                      {section.label.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {section.label}
                    </h2>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                </div>
                
                {section.id === 'ui' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">15+ componentes</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Fully functional</span>
                  </div>
                )}
                
                {section.id === 'accessibility' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">WCAG 2.1</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Screen readers</span>
                  </div>
                )}
                
                {section.id === 'compliance' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">GDPR</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Privacy</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <h2 className="text-xl font-semibold text-blue-900">Sobre a Rainersoft UI</h2>
        </div>
        <p className="text-blue-800 mb-4">
          Uma biblioteca de componentes React moderna, acessível e totalmente customizável.
          Construída com TypeScript, Tailwind CSS e as melhores práticas de design.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-blue-700">Acessibilidade WCAG 2.1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-blue-700">Design System Completo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-blue-700">TypeScript First</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Página de erro 404
 * Exibida quando o usuário tenta acessar uma rota inexistente
 * Oferece link para retornar à página inicial
 * 
 * @returns {JSX.Element} Página de erro 404
 */
function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-gray-900">404</h1>
      <p className="text-gray-600">Rota não encontrada.</p>
      <Link className="text-blue-600 underline hover:text-blue-700" to="/">Voltar para o início</Link>
    </div>
  )
}

/**
 * Layout principal da aplicação
 * Contém header com navegação, menu lateral e área de conteúdo
 * Implementa estrutura responsiva com grid layout
 * Utiliza tokens de design para tema consistente
 * 
 * @returns {JSX.Element} Layout estrutural da aplicação
 */
function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            Rainersoft UI Showcase
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:inline">Rotas separadas por seção</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-2">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Componentes</h2>
          <nav className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            {sectionsOrdered.map((section) => (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm text-gray-700 hover:text-gray-900"
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="space-y-6">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

/**
 * Função resolvedora de rotas para seções específicas
 * Mapeia IDs de seção para componentes correspondentes
 * Permite extensão fácil para novas seções
 * 
 * @param {string} section - ID da seção a ser renderizada
 * @returns {JSX.Element} Componente da seção solicitada
 */
function resolveSection(section: string) {
  if (section === 'accessibility') return <AccessibilityPage />
  if (section === 'compliance') return <CompliancePage />
  if (section === 'ui') return <UiPage />
  return <PlaceholderPage section={section} />
}

/**
 * Configuração do roteador React Router
 * Define estrutura de rotas aninhadas com layout compartilhado
 * Gera rotas dinamicamente para todas as seções de componentes
 * Inclui rota coringa para páginas não encontradas
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      ...sectionsOrdered.map((section) => ({
        path: `/${section.id}`,
        element: resolveSection(section.id),
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

/**
 * Componente principal da aplicação
 * Inicializa o provedor de roteamento React Router
 * Ponto de entrada para toda a estrutura de navegação
 * 
 * @returns {JSX.Element} Aplicação com roteamento configurado
 */
export default function App() {
  return <RouterProvider router={router} />
}
