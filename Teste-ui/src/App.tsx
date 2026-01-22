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
import { AnalyticsOverview, HelpCenter, QuickActions, QuickStats, RecentPostsList, StatsCards, StatsOverview } from './components/dashboard'
import { Code as ContentCode } from './components/content'
import { Calendar, Carousel, Chip, Masonry, Rating, Timeline } from './components/data-display'
import { TokensDemo } from './components/development'
import { CelestialBackground, FloatingGrid, MatrixBackground, ParticlesEffect, StarsBackground } from './components/effects'
import {
  AlertDialog as FeedbackAlertDialog,
  Alert as FeedbackAlert,
  Badge as FeedbackBadge,
  EmptyState as FeedbackEmptyState,
  Kpi as FeedbackKpi,
  Notification as FeedbackNotification,
  Progress as FeedbackProgress,
  Skeleton as FeedbackSkeleton,
  Sonner as FeedbackSonner,
  Spinner as FeedbackSpinner,
} from './components/feedback'
import { ErrorBoundary as InfrastructureErrorBoundary, LoadingScreen as InfrastructureLoadingScreen } from './components/infrastructure'
import {
  Accordion as NavigationAccordion,
  BackToTop as NavigationBackToTop,
  Collapsible as NavigationCollapsible,
  Command as NavigationCommand,
  Menu as NavigationMenu,
  NavigationMenu as NavigationNavigationMenu,
  Pagination as NavigationPagination,
  Sidebar as NavigationSidebar,
  Steps as NavigationSteps,
  Tabs as NavigationTabs,
  TopBar as NavigationTopBar,
} from './components/navigation'
import { InstallPrompt as PwaInstallPrompt } from './components/pwa'
import { SocialBar as SocialSocialBar } from './components/social'
import { ThemeToggle as UtilitiesThemeToggle, UpdateNotification as UtilitiesUpdateNotification } from './components/utilities'
import {
  ConfirmDialog as OverlaysConfirmDialog,
  ContextMenu as OverlaysContextMenu,
  Dialog as OverlaysDialog,
  Drawer as OverlaysDrawer,
  DropdownMenu as OverlaysDropdownMenu,
  HoverCard as OverlaysHoverCard,
  Lightbox as OverlaysLightbox,
  Modal as OverlaysModal,
  Popover as OverlaysPopover,
  Tooltip as OverlaysTooltip,
} from './components/overlays'
import {
  AspectRatio as LayoutAspectRatio,
  Breadcrumb as LayoutBreadcrumb,
  Card as LayoutCard,
  Container as LayoutContainer,
  Divider as LayoutDivider,
  Flex as LayoutFlex,
  Grid as LayoutGrid,
  PageHeader as LayoutPageHeader,
  Panel as LayoutPanel,
  ScrollArea as LayoutScrollArea,
  Separator as LayoutSeparator,
  Sheet as LayoutSheet,
  Spacer as LayoutSpacer,
  Table as LayoutTable,
} from './components/layout'
import {
  Checkbox as FormsCheckbox,
  DatePicker as FormsDatePicker,
  FileUpload as FormsFileUpload,
  Form as FormsForm,
  Input as FormsInput,
  Label as FormsLabel,
  PhoneInput as FormsPhoneInput,
  RadioGroup as FormsRadioGroup,
  RangeSlider as FormsRangeSlider,
  SearchInput as FormsSearchInput,
  Select as FormsSelect,
  Textarea as FormsTextarea,
  TimePicker as FormsTimePicker,
} from './components/forms'
import {
  AuthProvider as ProvidersAuthProvider,
  DataProvider as ProvidersDataProvider,
  ModalProvider as ProvidersModalProvider,
  NotificationProvider as ProvidersNotificationProvider,
  ThemeProvider as ProvidersThemeProvider,
} from './components/providers'
import { useTheme } from '@rainersoft/ui'
import { formatCurrency, formatDate } from '@rainersoft/utils'

/**
 * Configuração das seções do showcase
 * Cada seção representa uma categoria de componentes
 */
const showcaseSections = [
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
];

function SocialPage() {
  const examples = [
    {
      name: 'SocialBar',
      exportLine: "export { default as SocialBar } from './social-bar';",
      element: <SocialSocialBar />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Social</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes sociais.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function OverlaysPage() {
  const examples = [
    { name: 'ConfirmDialog', exportLine: "export { default as ConfirmDialog } from './confirm-dialog';", element: <OverlaysConfirmDialog /> },
    { name: 'ContextMenu', exportLine: "export { default as ContextMenu } from './context-menu';", element: <OverlaysContextMenu /> },
    { name: 'Dialog', exportLine: "export { default as Dialog } from './dialog';", element: <OverlaysDialog /> },
    { name: 'Drawer', exportLine: "export { default as Drawer } from './drawer';", element: <OverlaysDrawer /> },
    { name: 'DropdownMenu', exportLine: "export { default as DropdownMenu } from './dropdown-menu';", element: <OverlaysDropdownMenu /> },
    { name: 'HoverCard', exportLine: "export { default as HoverCard } from './hover-card';", element: <OverlaysHoverCard /> },
    { name: 'Lightbox', exportLine: "export { default as Lightbox } from './lightbox';", element: <OverlaysLightbox /> },
    { name: 'Modal', exportLine: "export { default as Modal } from './modal';", element: <OverlaysModal /> },
    { name: 'Popover', exportLine: "export { default as Popover } from './popover';", element: <OverlaysPopover /> },
    { name: 'Tooltip', exportLine: "export { default as Tooltip } from './tooltip';", element: <OverlaysTooltip /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Overlays</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de sobreposições.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function LayoutPage() {
  const examples = [
    { name: 'AspectRatio', exportLine: "export { default as AspectRatio } from './aspect-ratio';", element: <LayoutAspectRatio /> },
    { name: 'Breadcrumb', exportLine: "export { default as Breadcrumb } from './breadcrumb';", element: <LayoutBreadcrumb /> },
    { name: 'Card', exportLine: "export { default as Card } from './card';", element: <LayoutCard /> },
    { name: 'Container', exportLine: "export { default as Container } from './container';", element: <LayoutContainer /> },
    { name: 'Divider', exportLine: "export { default as Divider } from './divider';", element: <LayoutDivider /> },
    { name: 'Flex', exportLine: "export { default as Flex } from './flex';", element: <LayoutFlex /> },
    { name: 'Grid', exportLine: "export { default as Grid } from './grid';", element: <LayoutGrid /> },
    { name: 'PageHeader', exportLine: "export { default as PageHeader } from './PageHeader';", element: <LayoutPageHeader /> },
    { name: 'Panel', exportLine: "export { default as Panel } from './panel';", element: <LayoutPanel /> },
    { name: 'ScrollArea', exportLine: "export { default as ScrollArea } from './scroll-area';", element: <LayoutScrollArea /> },
    { name: 'Separator', exportLine: "export { default as Separator } from './separator';", element: <LayoutSeparator /> },
    { name: 'Sheet', exportLine: "export { default as Sheet } from './sheet';", element: <LayoutSheet /> },
    { name: 'Spacer', exportLine: "export { default as Spacer } from './spacer';", element: <LayoutSpacer /> },
    { name: 'Table', exportLine: "export { default as Table } from './table';", element: <LayoutTable /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Layout</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de layout.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormsPage() {
  const examples = [
    { name: 'Checkbox', exportLine: "export { default as Checkbox } from './checkbox';", element: <FormsCheckbox /> },
    { name: 'DatePicker', exportLine: "export { default as DatePicker } from './date-picker';", element: <FormsDatePicker /> },
    { name: 'FileUpload', exportLine: "export { default as FileUpload } from './file-upload';", element: <FormsFileUpload /> },
    { name: 'Form', exportLine: "export { default as Form } from './form';", element: <FormsForm /> },
    { name: 'Input', exportLine: "export { default as Input } from './input';", element: <FormsInput /> },
    { name: 'Label', exportLine: "export { default as Label } from './label';", element: <FormsLabel /> },
    { name: 'PhoneInput', exportLine: "export { default as PhoneInput } from './phone-input';", element: <FormsPhoneInput /> },
    { name: 'RadioGroup', exportLine: "export { default as RadioGroup } from './radio-group';", element: <FormsRadioGroup /> },
    { name: 'RangeSlider', exportLine: "export { default as RangeSlider } from './range-slider';", element: <FormsRangeSlider /> },
    { name: 'SearchInput', exportLine: "export { default as SearchInput } from './search-input';", element: <FormsSearchInput /> },
    { name: 'Select', exportLine: "export { default as Select } from './select';", element: <FormsSelect /> },
    { name: 'Textarea', exportLine: "export { default as Textarea } from './textarea';", element: <FormsTextarea /> },
    { name: 'TimePicker', exportLine: "export { default as TimePicker } from './time-picker';", element: <FormsTimePicker /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Forms</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de formulário.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProvidersPage() {
  const examples = [
    {
      name: 'ThemeProvider',
      exportLine: "export { default as ThemeProvider, useThemeProvider } from './theme-provider';",
      element: (
        <ProvidersThemeProvider>
          <div className="space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Tema atual: (useThemeProvider().theme)</p>
            <button className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>Toggle Theme</button>
          </div>
        </ProvidersThemeProvider>
      ),
    },
    {
      name: 'AuthProvider',
      exportLine: "export { default as AuthProvider, useAuthProvider } from './auth-provider';",
      element: (
        <ProvidersAuthProvider>
          <div className="space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Auth demo: (useAuthProvider().user?.name || &apos;Não autenticado&apos;)</p>
            <button className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>Login Demo</button>
          </div>
        </ProvidersAuthProvider>
      ),
    },
    {
      name: 'DataProvider',
      exportLine: "export { default as DataProvider, useDataProvider } from './data-provider';",
      element: (
        <ProvidersDataProvider>
          <div className="space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Itens: (useDataProvider().items.length)</p>
            <button className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>Add Item</button>
          </div>
        </ProvidersDataProvider>
      ),
    },
    {
      name: 'NotificationProvider',
      exportLine: "export { default as NotificationProvider, useNotificationProvider } from './notification-provider';",
      element: (
        <ProvidersNotificationProvider>
          <div className="space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Notificações: (useNotificationProvider().notifications.length)</p>
            <button className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>Add Notificação</button>
          </div>
        </ProvidersNotificationProvider>
      ),
    },
    {
      name: 'ModalProvider',
      exportLine: "export { default as ModalProvider, useModalProvider } from './modal-provider';",
      element: (
        <ProvidersModalProvider>
          <div className="space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Modal: (useModalProvider().openModal)</p>
            <button className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>Abrir Modal</button>
          </div>
        </ProvidersModalProvider>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Providers</h1>
        <p className="text-[var(--color-text-secondary)]">Provedores de contexto.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function UtilitiesPage() {
  const examples = [
    { name: 'ThemeToggle', exportLine: "export { default as ThemeToggle } from './ThemeToggle';", element: <UtilitiesThemeToggle /> },
    {
      name: 'UpdateNotification',
      exportLine: "export { default as UpdateNotification } from './UpdateNotification';",
      element: <UtilitiesUpdateNotification />,
    },
    {
      name: 'UtilsDemo',
      exportLine: "// Exemplo de uso de @rainersoft/utils",
      element: (
        <div className="space-y-2">
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Utils (formatCurrency, formatDate):</p>
          <p className="text-xs" style={{ color: 'var(--color-text-primary)' }}>{formatCurrency(1234.56)}</p>
          <p className="text-xs" style={{ color: 'var(--color-text-primary)' }}>{formatDate(new Date())}</p>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Utilities</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes utilitários.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function NavigationPage() {
  const examples = [
    { name: 'BackToTop', exportLine: "export { default as BackToTop } from './BackToTop';", element: <NavigationBackToTop /> },
    { name: 'Accordion', exportLine: "export { default as Accordion } from './accordion';", element: <NavigationAccordion /> },
    { name: 'Collapsible', exportLine: "export { default as Collapsible } from './collapsible';", element: <NavigationCollapsible /> },
    { name: 'Command', exportLine: "export { default as Command } from './command';", element: <NavigationCommand /> },
    { name: 'Menu', exportLine: "export { default as Menu } from './menu';", element: <NavigationMenu /> },
    {
      name: 'NavigationMenu',
      exportLine: "export { default as NavigationMenu } from './navigation-menu';",
      element: <NavigationNavigationMenu />,
    },
    { name: 'Pagination', exportLine: "export { default as Pagination } from './pagination';", element: <NavigationPagination /> },
    { name: 'Sidebar', exportLine: "export { default as Sidebar } from './sidebar';", element: <NavigationSidebar /> },
    { name: 'Steps', exportLine: "export { default as Steps } from './steps';", element: <NavigationSteps /> },
    { name: 'Tabs', exportLine: "export { default as Tabs } from './tabs';", element: <NavigationTabs /> },
    { name: 'TopBar', exportLine: "export { default as TopBar } from './top-bar';", element: <NavigationTopBar /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Navigation</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de navegação.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function PwaPage() {
  const examples = [
    {
      name: 'InstallPrompt',
      exportLine: "export { default as InstallPrompt } from './InstallPrompt';",
      element: <PwaInstallPrompt />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">PWA</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de Progressive Web App.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            {example.element}
          </div>
        ))}
      </div>
    </div>
  )
}

function InfrastructurePage() {
  const examples = [
    {
      name: 'ErrorBoundary',
      exportLine: "export { default as ErrorBoundary } from './ErrorBoundary';",
      element: <InfrastructureErrorBoundary />,
    },
    {
      name: 'LoadingScreen',
      exportLine: "export { default as LoadingScreen } from './LoadingScreen';",
      element: <InfrastructureLoadingScreen />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Infrastructure</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de infraestrutura e estados globais.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeedbackPage() {
  const examples = [
    {
      name: 'AlertDialog',
      exportLine: "export { default as AlertDialog } from './alert-dialog';",
      element: <FeedbackAlertDialog />,
    },
    {
      name: 'Alert',
      exportLine: "export { default as Alert } from './alert';",
      element: (
        <div className="space-y-3">
          <FeedbackAlert tone="info" title="Info" description="Mensagem informativa" />
          <FeedbackAlert tone="success" title="Sucesso" description="Operação concluída" />
          <FeedbackAlert tone="warning" title="Atenção" description="Revise os dados" />
          <FeedbackAlert tone="danger" title="Erro" description="Falha ao processar" />
        </div>
      ),
    },
    {
      name: 'Badge',
      exportLine: "export { default as Badge } from './badge';",
      element: <FeedbackBadge />,
    },
    {
      name: 'EmptyState',
      exportLine: "export { default as EmptyState } from './empty-state';",
      element: <FeedbackEmptyState />,
    },
    {
      name: 'Kpi',
      exportLine: "export { default as Kpi } from './kpi';",
      element: <FeedbackKpi />,
    },
    {
      name: 'Notification',
      exportLine: "export { default as Notification } from './notification';",
      element: <FeedbackNotification />,
    },
    {
      name: 'Progress',
      exportLine: "export { default as Progress } from './progress';",
      element: <FeedbackProgress />,
    },
    {
      name: 'Skeleton',
      exportLine: "export { default as Skeleton } from './skeleton';",
      element: <FeedbackSkeleton />,
    },
    {
      name: 'Sonner',
      exportLine: "export { default as Sonner } from './sonner';",
      element: <FeedbackSonner />,
    },
    {
      name: 'Spinner',
      exportLine: "export { default as Spinner } from './spinner';",
      element: <FeedbackSpinner />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Feedback</h1>
        <p className="text-[var(--color-text-secondary)]">Componentes de feedback e estados.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function EffectsPage() {
  const examples = [
    {
      name: 'CelestialBackground',
      exportLine: "export { default as CelestialBackground } from './CelestialBackground';",
      element: <CelestialBackground />,
    },
    {
      name: 'FloatingGrid',
      exportLine: "export { default as FloatingGrid } from './FloatingGrid';",
      element: <FloatingGrid />,
    },
    {
      name: 'MatrixBackground',
      exportLine: "export { default as MatrixBackground } from './MatrixBackground';",
      element: <MatrixBackground />,
    },
    {
      name: 'ParticlesEffect',
      exportLine: "export { default as ParticlesEffect } from './ParticlesEffect';",
      element: <ParticlesEffect />,
    },
    {
      name: 'StarsBackground',
      exportLine: "export { default as StarsBackground } from './StarsBackground';",
      element: <StarsBackground />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Effects</h1>
        <p className="text-[var(--color-text-secondary)]">Efeitos visuais usando tokens (CSS vars).</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            {example.element}
          </div>
        ))}
      </div>
    </div>
  )
}

function DevelopmentPage() {
  const examples = [
    {
      name: 'TokensDemo',
      exportLine: "export { default as TokensDemo } from './TokensDemo';",
      element: <TokensDemo />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Development</h1>
        <p className="text-[var(--color-text-secondary)]">Ferramentas e demos para desenvolvimento.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            {example.element}
          </div>
        ))}
      </div>
    </div>
  )
}

function DataDisplayPage() {
  const examples = [
    { name: 'Calendar', exportLine: "export { default as Calendar } from './calendar';", element: <Calendar /> },
    { name: 'Carousel', exportLine: "export { default as Carousel } from './carousel';", element: <Carousel /> },
    {
      name: 'Chip',
      exportLine: "export { default as Chip } from './chip';",
      element: (
        <div className="flex flex-wrap gap-2">
          <Chip label="Default" tone="default" />
          <Chip label="Success" tone="success" />
          <Chip label="Warning" tone="warning" />
          <Chip label="Danger" tone="danger" />
        </div>
      ),
    },
    { name: 'Masonry', exportLine: "export { default as Masonry } from './masonry';", element: <Masonry /> },
    { name: 'Rating', exportLine: "export { default as Rating } from './rating';", element: <Rating /> },
    { name: 'Timeline', exportLine: "export { default as Timeline } from './timeline';", element: <Timeline /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Data Display</h1>
        <p className="text-[var(--color-text-secondary)]">Exemplos de exibição de dados.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>

            <Card className="p-0">
              <div className="p-5">{example.element}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContentPage() {
  const examples = [
    {
      name: 'Code',
      exportLine: "export { default as Code } from './Code';",
      element: (
        <Card className="p-0">
          <div className="p-5">
            <ContentCode />
          </div>
        </Card>
      ),
    },
    {
      name: 'Kbd',
      exportLine: "export { Kbd, KbdCombo } from './Kbd';",
      element: (
        <Card className="p-0">
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>K</Kbd>
            </div>
            <div>
              <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                Combinação
              </p>
              <KbdCombo keys={['Ctrl', 'K']} />
            </div>
          </div>
        </Card>
      ),
    },
    {
      name: 'Quote',
      exportLine: "export { Quote, QuoteTestimonial } from './Quote';",
      element: (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-0">
            <div className="p-5">
              <Quote author="Equipe Rainersoft" source="UI Library" showIcon>
                Construímos componentes com foco em acessibilidade, consistência e tokens semânticos.
              </Quote>
            </div>
          </Card>
          <Card className="p-0">
            <div className="p-5">
              <QuoteTestimonial author="Designer de Produto" source="UI/UX" showIcon>
                A biblioteca Rainersoft UI acelera entregas mantendo padrão visual e qualidade.
              </QuoteTestimonial>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Content</h1>
        <p className="text-[var(--color-text-secondary)]">Exemplos de componentes de conteúdo.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">{example.exportLine}</p>
            </div>
            {example.element}
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardPage() {
  const examples = [
    { name: 'AnalyticsOverview', file: './analytics-overview', element: <AnalyticsOverview /> },
    { name: 'HelpCenter', file: './help-center', element: <HelpCenter /> },
    { name: 'QuickActions', file: './quick-actions', element: <QuickActions /> },
    { name: 'QuickStats', file: './quick-stats', element: <QuickStats /> },
    { name: 'RecentPostsList', file: './recent-posts-list', element: <RecentPostsList /> },
    { name: 'StatsCards', file: './stats-cards', element: <StatsCards /> },
    { name: 'StatsOverview', file: './stats-overview', element: <StatsOverview /> },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Dashboard</h1>
        <p className="text-[var(--color-text-secondary)]">Exemplo realista com cards, métricas e listas.</p>
      </div>

      <div className="space-y-6">
        {examples.map((example) => (
          <div key={example.name} className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{example.name}</h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {`export { default as ${example.name} } from '${example.file}';`}
              </p>
            </div>
            {example.element}
          </div>
        ))}
      </div>
    </div>
  )
}

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
const sectionsOrdered = [...showcaseSections]

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
              {['primary', 'secondary', 'tertiary', 'inverse'].map((tone) => (
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
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">{friendlyName}</h1>
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
  return <PlaceholderPage section="home" />
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
  if (section === 'content') return <ContentPage />
  if (section === 'dashboard') return <DashboardPage />
  if (section === 'data-display') return <DataDisplayPage />
  if (section === 'development') return <DevelopmentPage />
  if (section === 'effects') return <EffectsPage />
  if (section === 'feedback') return <FeedbackPage />
  if (section === 'forms') return <FormsPage />
  if (section === 'infrastructure') return <InfrastructurePage />
  if (section === 'layout') return <LayoutPage />
  if (section === 'navigation') return <NavigationPage />
  if (section === 'overlays') return <OverlaysPage />
  if (section === 'providers') return <ProvidersPage />
  if (section === 'pwa') return <PwaPage />
  if (section === 'social') return <SocialPage />
  if (section === 'ui') return <UiPage />
  if (section === 'utilities') return <UtilitiesPage />
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
