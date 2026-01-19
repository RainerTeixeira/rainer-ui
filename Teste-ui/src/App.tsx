'use client'

import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import { VisuallyHidden } from './components/accessibility'
import { Quote, QuoteTestimonial } from '@ui/components/content/Quote'
import { Kbd, KbdCombo } from '@ui/components/content/Kbd'
import { ThemeToggle } from '@ui/components/utilities/ThemeToggle'
import { Button } from '@ui/components/ui/button'
import { Badge } from '@ui/components/ui/badge'
import { Input } from '@ui/components/ui/input'
import { Textarea } from '@ui/components/ui/textarea'
import { Switch } from '@ui/components/ui/switch'
import { Slider } from '@ui/components/ui/slider'
import { Progress } from '@ui/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@ui/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/components/ui/card'
import { componentSections } from './sections'

type SectionComponentMap = Record<string, string[]>

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

const sectionsOrdered = [...componentSections].sort((a, b) => a.label.localeCompare(b.label))

function AccessibilityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Acessibilidade</h1>
      <p className="text-[var(--color-text-secondary)]">Exemplos usando VisuallyHidden.</p>
      <button className="inline-flex items-center gap-2 rounded-md bg-[var(--color-blue-600)] px-4 py-2 text-white">
        Download PDF
        <VisuallyHidden>Baixar documento como PDF</VisuallyHidden>
      </button>
      <div className="space-y-3">
        <div className="relative">
          <VisuallyHidden asChild>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[var(--color-blue-600)] text-white px-4 py-2 rounded-md"
            >
              Pular para conteúdo principal
            </a>
          </VisuallyHidden>
          <p className="text-[var(--color-text-secondary)] text-sm">Pressione Tab para focar no link de skip navigation</p>
        </div>
      </div>
    </div>
  )
}

function UiPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">UI Components</h1>
        <p className="text-[var(--color-text-secondary)]">Exemplos reais usando @ui com tokens e utilitários.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-text-primary)]">Botões & Badges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Perigo</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-text-primary)]">Form Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Buscar produtos" />
            <Textarea placeholder="Mensagem ao vendedor" />
            <div className="flex items-center gap-3">
              <Switch id="newsletter" />
              <label htmlFor="newsletter" className="text-sm text-[var(--color-text-secondary)]">Receber novidades</label>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-text-primary)]">Slider & Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-[var(--color-text-secondary)]">Faixa de preço</p>
              <Slider defaultValue={[40]} max={100} step={5} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[var(--color-text-secondary)]">Progresso de compra</p>
              <Progress value={70} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[var(--color-background-secondary)] border-[var(--color-gray-600)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-text-primary)]">Avatar & Ações</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80" alt="Cliente" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm text-[var(--color-text-primary)]">Cliente logado</p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">Ver perfil</Button>
                <Button size="sm" variant="link">Sair</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CompliancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Compliance</h1>
      <Quote author="Equipe Rainersoft" role="UI Library">
        Criamos componentes com foco em acessibilidade e consistência.
      </Quote>
      <QuoteTestimonial author="Designer de Produto" role="UI/UX">
        A biblioteca Rainersoft UI facilita criar interfaces consistentes e acessíveis.
      </QuoteTestimonial>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Atalhos</h2>
        <KbdCombo keys={["Ctrl", "K"]} />
        <Kbd>Esc</Kbd>
      </div>
    </div>
  )
}

function PlaceholderPage({ section }: { section: string }) {
  const components = [...(sectionComponentNames[section] || [])].sort((a, b) => a.localeCompare(b))
  const friendlyName = section.replace(/-/g, ' ')

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold capitalize">{friendlyName}</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes reais detectados na seção.</p>
      </div>

      {components.length ? (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Componentes ({components.length})</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((name) => (
              <li
                key={name}
                className="rounded-md border border-[var(--color-gray-600)] bg-[var(--color-background-secondary)] px-3 py-2 text-sm capitalize"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[var(--color-text-secondary)]">Nenhum componente encontrado para esta seção.</p>
      )}

      <div className="rounded-lg border border-[var(--color-gray-600)] bg-[var(--color-background-secondary)] px-4 py-3 space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Exemplo para esta seção:</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-800)] px-2 py-1">{friendlyName}</span>
          <span className="text-[var(--color-text-primary)] font-medium">Crie um card usando esses componentes.</span>
        </div>
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-[var(--color-blue-600)] px-3 py-2 text-xs font-semibold text-white hover:bg-[var(--color-blue-700)] transition-colors"
        >
          Ver outros exemplos
        </Link>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Roteador de Componentes</h1>
        <p className="text-[var(--color-text-secondary)]">Escolha uma seção para ver os exemplos.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Blog */}
        <article className="rounded-lg border border-[var(--color-gray-600)] bg-[var(--color-background-secondary)] p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Blog</p>
            <h2 className="text-lg font-semibold">Como elevar a UX com acessibilidade</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Post real com chamada para ação e uso de Kbd para indicar atalhos.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
            <span> para abrir busca</span>
          </div>
          <Link to="/accessibility" className="text-[var(--color-blue-600)] font-medium">Ler mais</Link>
        </article>

        {/* E-commerce */}
        <article className="rounded-lg border border-[var(--color-gray-600)] bg-[var(--color-background-secondary)] p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">E-commerce</p>
            <h2 className="text-lg font-semibold">Camisa Tech Minimal</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Produto com preço, badge de entrega e CTA direto.</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[var(--color-text-primary)]">R$ 129,00</span>
            <span className="rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-800)] px-2 py-1 text-xs">Entrega rápida</span>
          </div>
          <button className="w-full rounded-md bg-[var(--color-blue-600)] text-white py-2 font-medium hover:bg-[var(--color-blue-700)] transition-colors">
            Comprar agora
          </button>
        </article>

        {/* Vendas / SaaS */}
        <article className="rounded-lg border border-[var(--color-gray-600)] bg-[var(--color-background-secondary)] p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Vendas</p>
            <h2 className="text-lg font-semibold">Pipeline de oportunidades</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Resumo de leads qualificados e botão para abrir painel.</p>
          </div>
          <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
            <li>• 8 leads quentes</li>
            <li>• 15 em follow-up</li>
            <li>• Ticket médio: R$ 4.200</li>
          </ul>
          <Link to="/dashboard" className="inline-flex items-center justify-center rounded-md bg-[var(--color-green-600)] text-white px-3 py-2 text-sm font-semibold hover:bg-[var(--color-green-700)] transition-colors">
            Abrir painel
          </Link>
        </article>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-[var(--color-text-secondary)]">Rota não encontrada.</p>
      <Link className="text-[var(--color-blue-600)] underline" to="/">Voltar para o início</Link>
    </div>
  )
}

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <header className="border-b border-[var(--color-gray-600)] bg-[var(--color-background-secondary)]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold">Rainersoft UI Showcase</Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-text-secondary)] hidden sm:inline">Rotas separadas por seção</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-2">
          <h2 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">Componentes</h2>
          <nav className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-[var(--color-background-secondary)] transition-colors text-sm"
            >
              Home
            </Link>
            {sectionsOrdered.map((section) => (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className="block px-3 py-2 rounded-md hover:bg-[var(--color-background-secondary)] transition-colors text-sm"
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

function resolveSection(section: string) {
  if (section === 'accessibility') return <AccessibilityPage />
  if (section === 'compliance') return <CompliancePage />
  if (section === 'ui') return <UiPage />
  return <PlaceholderPage section={section} />
}

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

export default function App() {
  return <RouterProvider router={router} />
}
