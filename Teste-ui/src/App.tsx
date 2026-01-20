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
import { useTheme } from '@rainersoft/ui'

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
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Botão com Ícone</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Botões que usam apenas ícones devem ter texto oculto para screen readers.</p>
        
        <div className="flex gap-4">
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-button-primary-text)] transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-button-primary-default)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <VisuallyHidden>Adicionar novo item</VisuallyHidden>
          </button>
          
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-button-danger-text)] transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-button-danger-default)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <VisuallyHidden>Excluir item</VisuallyHidden>
          </button>
          
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-button-secondary-text)] transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-button-secondary-default)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <VisuallyHidden>Notificações</VisuallyHidden>
          </button>
        </div>
      </div>

      {/* Exemplo 2: Skip Navigation */}
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Skip Navigation</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Links para pular diretamente ao conteúdo principal, visíveis apenas quando focados.</p>
        
        <div className="relative">
          <VisuallyHidden asChild>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 z-50"
              style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)', outlineColor: 'var(--color-interactive-focus-ring)' }}
            >
              Pular para conteúdo principal
            </a>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <a
              href="#navigation"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-64 px-4 py-2 rounded-md focus:outline-none focus:ring-2 z-50"
              style={{ backgroundColor: 'var(--color-button-success-default)', color: 'var(--color-button-success-text)', outlineColor: 'var(--color-interactive-focus-ring)' }}
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
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Status de Carregamento</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Informar screen readers sobre o status de operações assíncronas.</p>
        
        <div className="flex items-center gap-3">
          <div className="animate-spin w-5 h-5 border-2 border-t-transparent rounded-full" style={{ borderColor: 'var(--color-text-link)', borderTopColor: 'transparent' }}></div>
          <span className="text-[var(--color-text-primary)]">Carregando...</span>
          <VisuallyHidden role="status" aria-live="polite">
            Carregando dados, aguarde um momento
          </VisuallyHidden>
        </div>
      </div>

      {/* Exemplo 4: Indicadores Visuais */}
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Indicadores Visuais</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Cores e ícones devem ter descrições textuais para screen readers.</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-status-success-default)' }}></div>
            <span className="text-[var(--color-text-primary)]">Online</span>
            <VisuallyHidden>Status: conectado e disponível</VisuallyHidden>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-status-error-default)' }}></div>
            <span className="text-[var(--color-text-primary)]">Offline</span>
            <VisuallyHidden>Status: desconectado</VisuallyHidden>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-status-warning-default)' }}></div>
            <span className="text-[var(--color-text-primary)]">Ausente</span>
            <VisuallyHidden>Status: ausente temporariamente</VisuallyHidden>
          </div>
        </div>
      </div>

      {/* Exemplo 5: Formulários */}
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Formulários Acessíveis</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Campos obrigatórios e mensagens de erro devem ser anunciados.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              E-mail
              <span className="ml-1" style={{ color: 'var(--color-status-error-default)' }}>*</span>
              <VisuallyHidden>(campo obrigatório)</VisuallyHidden>
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-md bg-[var(--color-background-primary)] text-[var(--color-text-primary)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderColor: 'var(--color-border-default)', outlineColor: 'var(--color-interactive-focus-ring)' }}
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
      <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-lg p-4">
        <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">🎯 Boas Práticas</h3>
        <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
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
  const { resolvedTheme } = useTheme()
  const componentSamples = [
    { title: 'Button', element: <Button label="Primário" /> },
    { title: 'Badge', element: <Badge label="Beta" /> },
    { title: 'Input', element: <Input placeholder="Placeholder" /> },
    { title: 'Textarea', element: <Textarea rows={3} placeholder="Digite algo" /> },
    { title: 'Switch', element: <Switch /> },
    { title: 'Slider', element: <Slider /> },
    { title: 'Progress', element: <Progress value={55} /> },
    { title: 'Avatar', element: <Avatar /> },
    { title: 'Card', element: <Card /> },
    { title: 'Accordion', element: <Accordion /> },
    { title: 'Toggle', element: <Toggle>Toggle</Toggle> },
    { title: 'Fab', element: <Fab icon="plus" /> },
    { title: 'IconButton', element: <IconButton icon="settings" /> },
    { title: 'LinkButton', element: <LinkButton>Visitar</LinkButton> },
    { title: 'SegmentedControl', element: <SegmentedControl /> },
    { title: 'InlineLoader', element: <InlineLoader text="Carregando" /> },
    { title: 'Quote', element: <Quote author="UX Lead" role="Design System">A consistência vem dos tokens.</Quote> },
    { title: 'QuoteTestimonial', element: <QuoteTestimonial author="Engenharia" role="Frontend">Componentes tipados e prontos.</QuoteTestimonial> },
    { title: 'Kbd', element: <Kbd>⌘K</Kbd> },
    { title: 'KbdCombo', element: <KbdCombo keys={["Shift", "A"]} /> },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] shadow-sm overflow-hidden">
        <div className="p-6 bg-[var(--color-background-secondary)] border-b border-[var(--color-border-default)] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">Design Tokens</p>
            <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">UI Components com tema {resolvedTheme === 'dark' ? 'dark' : 'light'}</h1>
            <p className="text-[var(--color-text-secondary)]">Exemplo real de tela de produto usando a paleta, semântica e tipografia do design system.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['primary','secondary','tertiary','inverse'].map((tone) => (
                <span key={tone} className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--color-background-primary)]" style={{ backgroundColor: `var(--color-text-${tone === 'inverse' ? 'inverse' : 'primary'})` }} />
              ))}
            </div>
            <Badge label={`Theme: ${resolvedTheme ?? 'system'}`} />
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Ações principais</p>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Botões & Estados</h3>
                </div>
                <Badge variant="outline" label="CTA" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button label="Primário" />
                <Button label="Secundário" variant="secondary" />
                <Button label="Fantasma" variant="outline" />
                <Button label="Perigo" variant="destructive" />
                <IconButton icon="settings" />
                <Fab icon="plus" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs text-[var(--color-text-secondary)]">Progresso</p>
                  <Progress value={42} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[var(--color-text-secondary)]">Slider</p>
                  <Slider />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Formulário</p>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Campos com tokens</h3>
                </div>
                <Badge variant="secondary" label="A11y" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-text-primary)]">Email</label>
                  <Input placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-text-primary)]">Descrição</label>
                  <Textarea rows={3} placeholder="Conte-nos algo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-text-primary)]">Notificações</label>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-text-primary)]">Segmento</label>
                  <SegmentedControl />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Toggle>Ativar modo foco</Toggle>
                <InlineLoader text="Salvando rascunho" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Cards & listas</p>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Estado de usuário</h3>
                </div>
                <Badge variant="outline" label="Realtime" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar />
                  <div>
                    <p className="font-semibold text-[var(--color-text-primary)]">Camila Duarte</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Product Designer • Ativa</p>
                  </div>
                </div>
                <Card />
                <Accordion />
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Atalhos rápidos</p>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Links e ações</h3>
                </div>
                <Badge label="Favoritos" />
              </div>
              <div className="grid gap-3">
                <LinkButton>Documentação</LinkButton>
                <LinkButton variant="secondary">Guia de tokens</LinkButton>
                <div className="flex items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-[var(--color-background-secondary)] px-3 py-2">
                  <span className="text-sm text-[var(--color-text-secondary)]">Progresso de build</span>
                  <Progress value={72} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-[var(--color-text-secondary)]">Guia rápido</p>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Amostras de todos os componentes UI</h2>
          </div>
          <Badge variant="outline" label={`${componentSamples.length} componentes`} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {componentSamples.map((sample) => (
            <div key={sample.title} className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-background-secondary)] p-4 space-y-2 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{sample.title}</p>
              <div className="bg-[var(--color-background-primary)] rounded-lg border border-[var(--color-border-default)] p-3 flex items-center justify-center min-h-[64px]">
                {sample.element}
              </div>
            </div>
          ))}
        </div>
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
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Compliance</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de conformidade e boas práticas.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-default)] rounded-lg p-6 shadow-sm">
          <Quote author="Equipe Rainersoft" role="UI Library">
            Criamos componentes com foco em acessibilidade e consistência.
          </Quote>
        </div>
        
        <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-default)] rounded-lg p-6 shadow-sm">
          <QuoteTestimonial author="Designer de Produto" role="UI/UX">
            A biblioteca Rainersoft UI facilita criar interfaces consistentes e acessíveis.
          </QuoteTestimonial>
        </div>
      </div>
      
      <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-default)] rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Atalhos de Teclado</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--color-text-secondary)]">Buscar:</span>
            <KbdCombo keys={["Ctrl", "K"]} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--color-text-secondary)]">Cancelar:</span>
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
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)] capitalize">{friendlyName}</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes reais detectados na seção.</p>
      </div>

      {components.length ? (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Componentes ({components.length})</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((name) => (
              <li
                key={name}
                className="rounded-md border border-[var(--color-border-default)] bg-[var(--color-background-secondary)] px-3 py-2 text-sm capitalize text-[var(--color-text-secondary)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[var(--color-text-secondary)]">Nenhum componente encontrado para esta seção.</p>
      )}

      <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-background-secondary)] px-4 py-3 space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Exemplo para esta seção:</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span
            className="rounded-full px-2 py-1"
            style={{ backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-default)' }}
          >
            {friendlyName}
          </span>
          <span className="text-[var(--color-text-primary)] font-medium">Crie um card usando esses componentes.</span>
        </div>
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}
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
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Rainersoft UI Showcase</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">Biblioteca de componentes React com design moderno e acessível.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcaseSections.map((section) => (
          <Link
            key={section.id}
            to={`/${section.id}`}
            className="block group"
          >
            <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-default)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'var(--color-background-secondary)' }}
                  >
                    <span className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {section.label.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors">
                      {section.label}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">{section.description}</p>
                  </div>
                </div>
                
                {section.id === 'ui' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)' }}>15+ componentes</span>
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-status-success-light)', color: 'var(--color-status-success-text)' }}>Fully functional</span>
                  </div>
                )}
                
                {section.id === 'accessibility' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)' }}>WCAG 2.1</span>
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)' }}>Screen readers</span>
                  </div>
                )}
                
                {section.id === 'compliance' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)' }}>GDPR</span>
                    <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--color-status-success-light)', color: 'var(--color-status-success-text)' }}>Privacy</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="border border-[var(--color-border-default)] rounded-lg p-6" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>
            <span className="font-bold">R</span>
          </div>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Sobre a Rainersoft UI</h2>
        </div>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Uma biblioteca de componentes React moderna, acessível e totalmente customizável.
          Construída com TypeScript, Tailwind CSS e as melhores práticas de design.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-status-success-default)' }}></div>
            <span className="text-sm text-[var(--color-text-secondary)]">Acessibilidade WCAG 2.1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-button-primary-default)' }}></div>
            <span className="text-sm text-[var(--color-text-secondary)]">Design System Completo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-background-inverse)' }}></div>
            <span className="text-sm text-[var(--color-text-secondary)]">TypeScript First</span>
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
      <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">404</h1>
      <p className="text-[var(--color-text-secondary)]">Rota não encontrada.</p>
      <Link className="underline" style={{ color: 'var(--color-text-link)' }} to="/">Voltar para o início</Link>
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
    <div className="min-h-screen bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]">
      <header className="border-b border-[var(--color-border-default)] bg-[var(--color-background-primary)] shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold transition-colors" style={{ color: 'var(--color-text-primary)' }}>
            Rainersoft UI Showcase
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-text-secondary)] hidden sm:inline">Rotas separadas por seção</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-2">
          <h2 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-3">Componentes</h2>
          <nav className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md transition-colors text-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Home
            </Link>
            {sectionsOrdered.map((section) => (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className="block px-3 py-2 rounded-md transition-colors text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
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
