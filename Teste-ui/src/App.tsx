'use client'

import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import { VisuallyHidden } from './components/accessibility'
import { Quote, QuoteTestimonial } from './components/content/Quote'
import { Kbd, KbdCombo } from './components/content/Kbd'
import { ThemeToggle } from '@ui/components/utilities/ThemeToggle'
import { componentSections } from './sections'

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
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">{section}</h1>
      <p className="text-[var(--color-text-secondary)]">Conteúdo desta seção ainda não foi definido.</p>
    </div>
  )
}

function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Roteador de Componentes</h1>
      <p className="text-[var(--color-text-secondary)]">Escolha uma seção para ver os exemplos.</p>
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
            {componentSections.map((section) => (
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
  return <PlaceholderPage section={section} />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      ...componentSections.map((section) => ({
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
