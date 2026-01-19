/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect, createContext, useContext, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import {
  Alert,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FAB,
  FileUpload,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  IconButton,
  InlineLoader,
  Input,
  Label,
  LinkButton,
  Masonry,
  MasonryItem,
  Menu,
  Modal,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Notification,
  PageHeader,
  Pagination,
  Panel,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  QuickActions,
  QuickStats,
  RadioGroup,
  RadioGroupItem,
  RangeSlider,
  RecentPostsList,
  ScrollArea,
  SearchInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  Skeleton,
  Slider,
  Spinner,
  StatsCards,
  Steps,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopBar,
  VisuallyHidden,
  ActionButton,
  AspectRatio,
  AspectRatioBox,
  BackToTop,
  BookmarkButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  GenericToggleButton,
  ReusableLikeButton,
  ReusableFavoriteButton,
  ReusableFollowButton,
  Grid,
  CheckCircle,
  AlertCircle,
} from '@rainersoft/ui'

import {
  Sparkles,
  Sun,
  Moon,
  Layout,
  FileText,
  Grid as GridIcon,
  Compass,
  Bell,
  Layers,
  BarChart3,
  Zap,
  Settings,
  Shield,
  Palette,
  Plus,
  Heart,
  Bookmark,
  MessageSquare,
  Share2,
  Upload,
  Users,
  Grid,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

import { tokens, lightTheme, darkTheme, colorPrimitive, gradientPrimitive } from '@rainersoft/design-tokens'

// Dynamic component counts via Vite glob (executed at build time)
const globCounts = {
  forms: Object.keys(import.meta.glob('../../src/components/forms/*.tsx')).length,
  ui: Object.keys(import.meta.glob('../../src/components/ui/*.tsx')).length,
  layout: Object.keys(import.meta.glob('../../src/components/layout/*.tsx')).length,
  feedback: Object.keys(import.meta.glob('../../src/components/feedback/*.tsx')).length,
  navigation: Object.keys(import.meta.glob('../../src/components/navigation/*.tsx')).length,
  overlays: Object.keys(import.meta.glob('../../src/components/overlays/*.tsx')).length,
  dashboard: Object.keys(import.meta.glob('../../src/components/dashboard/*.tsx')).length,
  dataDisplay: Object.keys(import.meta.glob('../../src/components/data-display/*.tsx')).length,
  effects: Object.keys(import.meta.glob('../../src/components/effects/*.tsx')).length,
  utilities: Object.keys(import.meta.glob('../../src/components/utilities/*.tsx')).length,
  social: Object.keys(import.meta.glob('../../src/components/social/*.tsx')).length
}

const TOTAL_COMPONENTS = Object.values(globCounts).reduce((sum, value) => sum + value, 0)

const DASHBOARD_METRICS: StatsCardsProps['items'] = [
  {
    label: 'Receita Mensal',
    value: 132_450,
    change: 6.8,
    trend: 'up',
    icon: <BarChart3 className="h-4 w-4" />,
    accentKey: 'status.success.base',
    secondaryColor: 'status.success.background',
    description: 'Faturamento bruto do mês',
    formatValue: (v) => typeof v === 'number' ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : v
  },
  {
    label: 'Pedidos',
    value: 418,
    change: 4.2,
    trend: 'up',
    icon: <FileText className="h-4 w-4" />,
    accentKey: 'status.info.base',
    secondaryColor: 'status.info.background',
    description: 'Pedidos processados (30d)'
  },
  {
    label: 'Taxa de Conversão',
    value: 3.8,
    change: 0.6,
    trend: 'up',
    icon: <Zap className="h-4 w-4" />,
    accentKey: 'status.warning.base',
    secondaryColor: 'status.warning.background',
    description: 'Visitas para vendas',
    valueSuffix: '%'
  },
  {
    label: 'Clientes Ativos',
    value: 1412,
    change: -1.4,
    trend: 'down',
    icon: <Users className="h-4 w-4" />,
    accentKey: 'status.error.base',
    secondaryColor: 'status.error.background',
    description: 'Compras nos últimos 30 dias'
  }
];

/* -------------------------------------------------------------------------- */
/*                           SIMPLIFIED THEME PROVIDER                        */
/* -------------------------------------------------------------------------- */

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  primaryColor: string
  setPrimaryColor: (color: string) => void
  themeConfig: any
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [primaryColor, setPrimaryColor] = useState('blue')
  const [mounted, setMounted] = useState(false)

  const colorMapping = useMemo(() => ({
    blue: { primary: colorPrimitive.blue[500], secondary: colorPrimitive.cyan[500] },
    green: { primary: colorPrimitive.emerald[500], secondary: colorPrimitive.cyan[600] },
    purple: { primary: colorPrimitive.purple[500], secondary: colorPrimitive.purple[400] },
    pink: { primary: colorPrimitive.pink[500], secondary: colorPrimitive.pink[400] },
    orange: { primary: colorPrimitive.orange[500], secondary: colorPrimitive.orange[400] },
    red: { primary: colorPrimitive.red[500], secondary: colorPrimitive.red[400] }
  }), [])

  const themeConfig = useMemo(() => {
    const baseTheme = theme === 'light' ? lightTheme : darkTheme
    const colors = colorMapping[primaryColor as keyof typeof colorMapping]

    return {
      color: {
        background: baseTheme.color?.background || {},
        text: baseTheme.color?.text || {},
        button: baseTheme.color?.button || {},
        border: baseTheme.color?.border || {},
        status: baseTheme.color?.status || {},
        primary: colors.primary,
        secondary: colors.secondary,
        gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
      }
    }
  }, [theme, primaryColor, colorMapping])

  useEffect(() => {
    setMounted(true)
    // Aplicar tema inicial
    document.documentElement.classList.add(theme)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const colors = colorMapping[primaryColor as keyof typeof colorMapping]

    // Aplicar variáveis CSS simplificadas
    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-secondary', colors.secondary)
    root.style.setProperty('--color-gradient', `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`)

    // Aplicar tema claro/escuro
    root.classList.remove('light', 'dark')
    root.classList.add(theme)

  }, [theme, primaryColor, mounted, colorMapping])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    toggleTheme,
    primaryColor,
    setPrimaryColor,
    themeConfig
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <InlineLoader size="lg" />
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

/* -------------------------------------------------------------------------- */
/*                        CUSTOM THEME TOGGLE COMPONENT                       */
/* -------------------------------------------------------------------------- */

function CustomThemeToggle() {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme()

  const colorOptions = [
    { name: 'Azul', value: 'blue', colors: [colorPrimitive.blue[500], colorPrimitive.cyan[500]] },
    { name: 'Verde', value: 'green', colors: [colorPrimitive.emerald[500], colorPrimitive.cyan[600]] },
    { name: 'Roxo', value: 'purple', colors: [colorPrimitive.purple[500], colorPrimitive.purple[400]] },
    { name: 'Rosa', value: 'pink', colors: [colorPrimitive.pink[500], colorPrimitive.pink[400]] },
    { name: 'Laranja', value: 'orange', colors: [colorPrimitive.orange[500], colorPrimitive.orange[400]] },
    { name: 'Vermelho', value: 'red', colors: [colorPrimitive.red[500], colorPrimitive.red[400]] }
  ]

  const selectedColor = colorOptions.find(c => c.value === primaryColor) || colorOptions[0]

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 p-3 rounded-2xl border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-400">
            Cor
          </span>
          <div className="flex gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => setPrimaryColor(color.value)}
                className="relative group transition-transform hover:scale-110"
                title={color.name}
              >
                <div
                  className="w-8 h-8 rounded-full border-2 transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${color.colors[0]}, ${color.colors[1]})`,
                    borderColor: primaryColor === color.value ? color.colors[0] : 'transparent',
                    transform: primaryColor === color.value ? 'scale(1.15)' : 'scale(1)',
                    boxShadow: primaryColor === color.value
                      ? `0 0 10px ${color.colors[0]}`
                      : 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center rounded-lg p-2 bg-white dark:bg-gray-800 border hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                           CATEGORIAS DE COMPONENTES                        */
/* -------------------------------------------------------------------------- */

/**
 * 📚 Component Categories Library
 * 
 * Organização hierárquica dos componentes da biblioteca @rainersoft/ui.
 * Cada categoria representa uma área funcional específica com descrições detalhadas.
 * 
 * 🎨 Design System Integration:
 * - Cores e gradientes via design tokens (@rainersoft/design-tokens)
 * - Contadores automáticos de componentes por categoria
 * - Ícones temáticos para identificação visual
 * 
 * @module COMPONENT_CATEGORIES
 * @version 2.2.0
 */

const COMPONENT_CATEGORIES = {
  // 📝 Forms - Entrada de dados e interação do usuário
  forms: {
    title: 'Forms',
    description: 'Componentes de formulário e entrada de dados. Controles essenciais para coleta de informações do usuário com validação, acessibilidade e estados visuais.',
    icon: FileText,
    color: gradientPrimitive.categories.forms,
    count: globCounts.forms,
    items: [
      'checkbox', 'radio-group', 'select', 'label', 'input', 'textarea',
      'date-picker', 'phone-input', 'range-slider', 'search-input', 'time-picker', 'form'
    ]
  },

  // 🎨 UI Components - Blocos fundamentais de interface
  ui: {
    title: 'UI Components',
    description: 'Componentes básicos de interface. Elementos visuais fundamentais que compõem a experiência do usuário, desde botões até avatares, com variantes e estados.',
    icon: Layout,
    color: gradientPrimitive.categories.ui,
    count: globCounts.ui,
    items: [
      'avatar', 'badge', 'button', 'card', 'fab', 'icon-button',
      'link-button', 'progress', 'segmented-control', 'slider', 'switch',
      'toggle', 'accordion', 'InlineLoader', 'input', 'textarea'
    ]
  },

  // 🏗️ Layout - Estrutura e organização de conteúdo
  layout: {
    title: 'Layout',
    description: 'Componentes de estrutura e organização. Elementos para organizar conteúdo, criar grades, separar seções e estruturar layouts responsivos.',
    icon: GridIcon,
    color: gradientPrimitive.categories.layout,
    count: globCounts.layout,
    items: [
      'card', 'separator', 'aspect-ratio', 'breadcrumb', 'container', 'divider',
      'flex', 'grid', 'panel', 'scroll-area', 'sheet', 'spacer', 'table'
    ]
  },

  // 💬 Feedback - Comunicação de estado e resultado
  feedback: {
    title: 'Feedback',
    description: 'Componentes de resposta e notificação. Elementos para comunicar estados, resultados, alertas e progresso ao usuário de forma clara e acessível.',
    icon: Bell,
    color: gradientPrimitive.categories.feedback,
    count: globCounts.feedback,
    items: [
      'badge', 'progress', 'alert', 'alert-dialog', 'empty-state', 'kpi',
      'notification', 'skeleton', 'sonner', 'spinner'
    ]
  },

  // 🧭 Navigation - Navegação e exploração
  navigation: {
    title: 'Navigation',
    description: 'Componentes de navegação. Controles para guiar o usuário através da aplicação, menus, abas e sistemas de navegação hierárquica.',
    icon: Compass,
    color: gradientPrimitive.categories.navigation,
    count: globCounts.navigation,
    items: [
      'accordion', 'tabs', 'collapsible', 'command', 'menu', 'navigation-menu',
      'pagination', 'sidebar', 'steps', 'top-bar'
    ]
  },

  // 🌟 Overlays - Camadas sobrepostas e modais
  overlays: {
    title: 'Overlays',
    description: 'Componentes sobrepostos e modais. Elementos que aparecem sobre o conteúdo principal para diálogos, tooltips, menus contextuais e informações adicionais.',
    icon: Layers,
    color: gradientPrimitive.categories.overlays,
    count: globCounts.overlays,
    items: [
      'confirm-dialog', 'context-menu', 'dialog', 'drawer', 'dropdown-menu',
      'hover-card', 'lightbox', 'modal', 'popover', 'tooltip'
    ]
  },

  // 📊 Dashboard - Painéis e visualizações de dados
  dashboard: {
    title: 'Dashboard',
    description: 'Componentes de painel e métricas. Elementos especializados para exibir dados, estatísticas, gráficos e informações analíticas de forma organizada.',
    icon: BarChart3,
    color: gradientPrimitive.categories.dashboard,
    count: globCounts.dashboard,
    items: [
      'analytics-overview', 'quick-stats', 'stats-cards', 'quick-actions',
      'recent-posts-list', 'help-center', 'stats-overview'
    ]
  },

  // 📈 Data Display - Visualização de dados complexos
  dataDisplay: {
    title: 'Data Display',
    description: 'Componentes de visualização de dados. Elementos para apresentar informações complexas como tabelas, calendários, carrosseis e outras visualizações.',
    icon: GridIcon,
    color: gradientPrimitive.categories.dataDisplay,
    count: globCounts.dataDisplay,
    items: [
      'calendar', 'carousel', 'chip', 'masonry', 'rating', 'timeline'
    ]
  },

  // ✨ Effects - Animações e efeitos visuais
  effects: {
    title: 'Effects',
    description: 'Efeitos visuais e animações. Componentes decorativos e animações para enriquecer a experiência visual com partículas, gradientes animados e efeitos especiais.',
    icon: Sparkles,
    color: gradientPrimitive.categories.effects,
    count: globCounts.effects,
    items: [
      'CelestialBackground', 'FloatingGrid', 'MatrixBackground',
      'ParticlesEffect', 'StarsBackground'
    ]
  },

  // 🛠️ Utilities - Ferramentas e componentes auxiliares
  utilities: {
    title: 'Utilities',
    description: 'Utilitários e componentes auxiliares. Ferramentas funcionais como banners de cookies, prompts de instalação, botões voltar ao topo e outros componentes de suporte.',
    icon: Settings,
    color: gradientPrimitive.categories.utilities,
    count: globCounts.utilities,
    items: [
      'BackToTop', 'CookieBanner', 'ErrorBoundary', 'InstallPrompt', 'LoadingScreen',
      'PageHeader', 'ThemeToggle', 'TokensDemo', 'UpdateNotification', 'VisuallyHidden',
      'aspect-ratio-box', 'center', 'code', 'kbd', 'quote'
    ]
  },

  // 👥 Social - Interação e elementos sociais
  social: {
    title: 'Social',
    description: 'Componentes de interação social. Elementos para perfis de usuário, compartilhamento, comentários, curtidas e outras funcionalidades sociais.',
    icon: Users,
    color: gradientPrimitive.categories.social,
    count: globCounts.social,
    items: [
      'action-button', 'bookmark-button', 'content-card', 'like-button',
      'reading-time', 'share-button', 'share-menu', 'generic-toggle-button',
      'reusable-like-button', 'reusable-favorite-button', 'reusable-follow-button'
    ]
  }
}

/* -------------------------------------------------------------------------- */
/*                            SECTION COMPONENT                               */
/* -------------------------------------------------------------------------- */

function Section({ title, badge, children }: {
  title: string;
  badge?: string;
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {badge && (
          <span className="rounded-full px-3 py-1 text-xs font-medium text-white shadow"
            style={{
              background: theme === 'light'
                ? `linear-gradient(135deg, ${colorPrimitive.blue[500]}, ${colorPrimitive.cyan[500]})`
                : `linear-gradient(135deg, ${colorPrimitive.cyan[500]}, ${colorPrimitive.blue[500]})`
            }}
          >
            {badge}
          </span>
        )}
      </header>

      <div className="relative">{children}</div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                        COMPONENT EXAMPLES RENDERER                         */
/* -------------------------------------------------------------------------- */

function renderComponentExample(componentName: string) {
  const normalizedName = componentName.toLowerCase().replace(/[-_]/g, '')

  switch (normalizedName) {
    case 'avatar':
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&auto=format&fit=facearea&facepad=3" alt="Joana Duarte" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="absolute -right-1 -bottom-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white dark:border-gray-900 bg-green-500" title="Online" />
            </div>
            <div className="text-sm text-gray-800 dark:text-gray-100">
              <div className="font-semibold">Joana Duarte</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Design Lead · Disponível</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Badge variant="outline" className="text-xs">Equipe Design</Badge>
              <IconButton size="sm" aria-label="Mensagem" icon={<MessageSquare className="h-4 w-4" />} />
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=140&auto=format&fit=facearea&facepad=3" alt="Carlos Lima" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <div className="text-sm text-gray-800 dark:text-gray-100">
              <div className="font-medium">Carlos Lima</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Produto · Em reunião</div>
            </div>
            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remoto</div>
          </div>
        </div>
      )

    case 'button':
      return (
        <Button>Default</Button>
      )

    case 'input':
      return (
        <Input placeholder="Texto padrão" />
      )

    case 'card':
      return (
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Conteúdo do card</p>
          </CardContent>
        </Card>
      )

    case 'badge':
      return (
        <Badge>Default</Badge>
      )

    case 'progress':
      return (
        <div className="w-48">
          <Progress value={60} />
        </div>
      )

    case 'switch':
      return (
        <Switch defaultChecked />
      )

    case 'slider':
      return (
        <div className="w-48">
          <Slider defaultValue={[50]} />
        </div>
      )

    case 'textarea':
      return (
        <Textarea placeholder="Digite seu texto aqui..." className="w-48 h-24" />
      )

    case 'toggle':
      return (
        <Toggle aria-label="Alternar exemplo" className="px-4">
          Ativar
        </Toggle>
      )

    case 'accordion':
      return (
        <Accordion type="single" className="w-64">
          <AccordionItem value="item1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>
              Conteúdo do item 1
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )

    case 'tabs':
      return (
        <Tabs defaultValue="tab1" className="w-72">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Resumo</TabsTrigger>
            <TabsTrigger value="tab2">Atividade</TabsTrigger>
            <TabsTrigger value="tab3">Config.</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="p-4 border rounded-lg bg-white dark:bg-gray-900">
            <p className="text-sm text-gray-700 dark:text-gray-200">Métricas da conta nas últimas 24h.</p>
          </TabsContent>
          <TabsContent value="tab2" className="p-4 border rounded-lg bg-white dark:bg-gray-900">
            <p className="text-sm text-gray-700 dark:text-gray-200">Nenhuma atividade recente.</p>
          </TabsContent>
          <TabsContent value="tab3" className="p-4 border rounded-lg bg-white dark:bg-gray-900">
            <p className="text-sm text-gray-700 dark:text-gray-200">Preferências de notificação e segurança.</p>
          </TabsContent>
        </Tabs>
      )

    case 'fab':
      return (
        <FAB>
          <Plus className="w-5 h-5" />
        </FAB>
      )

    case 'iconbutton':
      return (
        <IconButton icon={<Heart className="w-5 h-5" />} aria-label="Curtir" />
      )

    case 'linkbutton':
      return (
        <LinkButton href="#">Link Interno</LinkButton>
      )

    case 'segmentedcontrol':
      return (
        <SegmentedControl
          options={[
            { value: 'opcao1', label: 'Opção 1' },
            { value: 'opcao2', label: 'Opção 2' },
            { value: 'opcao3', label: 'Opção 3' }
          ]}
          defaultValue="opcao1"
        />
      )

    case 'inlineloader':
      return (
        <InlineLoader size="md" />
      )

    case 'checkbox':
      return (
        <label className="flex items-center gap-2">
          <Checkbox defaultChecked />
          <span>Opção selecionada</span>
        </label>
      )

    case 'radiogroup':
      return (
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Opção A</label>
          </div>
        </RadioGroup>
      )

    case 'select':
      return (
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opção 1</SelectItem>
            <SelectItem value="option2">Opção 2</SelectItem>
            <SelectItem value="option3">Opção 3</SelectItem>
            <SelectItem value="option4" disabled>Desabilitado</SelectItem>
          </SelectContent>
        </Select>
      )

    case 'label':
      return (
        <div className="space-y-3">
          <div>
            <Label htmlFor="email-input">Email</Label>
            <Input id="email-input" placeholder="seu@email.com" className="mt-1" />
          </div>
        </div>
      )

    case 'analyticsoverview':
      return (
        <div className="w-full">
          <AnalyticsOverview metrics={DASHBOARD_METRICS} updatedAt={new Date()} />
        </div>
      )

    case 'quickstats':
      return (
        <div className="w-full">
          <QuickStats stats={DASHBOARD_METRICS} />
        </div>
      )

    case 'statscards':
      return (
        <div className="w-full">
          <StatsCards
            items={DASHBOARD_METRICS}
            showFooterDate
          />
        </div>
      )

    case 'quickactions':
      return (
        <div className="w-full">
          <QuickActions />
        </div>
      )

    case 'recentpostslist':
      return (
        <div className="w-full">
          <RecentPostsList />
        </div>
      )

    case 'helpcenter':
      return (
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <p className="text-sm font-semibold text-foreground">Help Center</p>
          <p className="text-xs text-muted-foreground">Componente de centro de ajuda</p>
        </div>
      )

    case 'empty-state': {
      return (
        <div className="space-y-4">
          <EmptyState
            title="Nenhum item encontrado"
            description="Não há itens para exibir no momento."
            actions={<Button>Adicionar Item</Button>}
          />
          <EmptyState
            title="Lista vazia"
            description="Comece adicionando seu primeiro item."
            variant="minimal"
            actions={<Button variant="outline">Começar</Button>}
          />
        </div>
      )
    }

    case 'notification': {
      return (
        <div className="space-y-4">
          <Notification
            title="Sucesso!"
            description="Sua operação foi concluída com sucesso."
            variant="success"
            dismissible
          />
          <Notification
            title="Atenção"
            description="Verifique os dados antes de continuar."
            variant="warning"
            dismissible
          />
          </div>
      )
    }

    case 'grid': {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">Item 1</div>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">Item 2</div>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">Item 3</div>
          </div>
        </div>
      )
    }

    case 'sheet': {
      return (
        <div className="space-y-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Abrir Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a sheet component example.
                </SheetDescription>
              </SheetHeader>
              <div className="p-4">
                <p>Conteúdo do sheet aqui.</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )
    }

    case 'spacer': {
      return (
        <div className="flex items-center gap-4">
          <span>Esquerda</span>
          <Spacer />
          <span>Direita</span>
        </div>
      )
    }

    case 'aspectratio': {
      return (
        <div className="w-64">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <img
              alt="Aspect"
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      )
    }

    case 'container': {
      return (
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <p className="text-sm font-semibold text-foreground">Container</p>
          <p className="text-xs text-muted-foreground">Componente de container</p>
        </div>
      )
    }

    case 'flex': {
      return (
        <div className="flex gap-4 items-center justify-between p-4 border rounded">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      )
    }

    case 'scrollarea': {
      return (
        <ScrollArea className="h-32 w-48 rounded-md border p-4">
          <div className="space-y-2">
            <p>Linha 1</p>
            <p>Linha 2</p>
            <p>Linha 3</p>
            <p>Linha 4</p>
            <p>Linha 5</p>
            <p>Linha 6</p>
            <p>Linha 7</p>
            <p>Linha 8</p>
          </div>
        </ScrollArea>
      )
    }

    case 'breadcrumb': {
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="font-medium text-foreground">Layout</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )
    }

    case 'date-picker': {
      const [date, setDate] = useState<Date | undefined>(new Date())
      return (
        <div className="space-y-4">
          <DatePicker
            value={date}
            onChange={(newDate) => setDate(newDate as Date)}
            placeholder="Selecione uma data"
          />
        </div>
      )
    }

    case 'phone-input': {
      const [phone, setPhone] = useState('')
      return (
        <div className="space-y-4">
          <PhoneInput
            value={phone}
            onChange={setPhone}
            placeholder="(00) 00000-0000"
          />
        </div>
      )
    }

    case 'search-input': {
      const [search, setSearch] = useState('')
      return (
        <div className="space-y-4">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Buscar..."
          />
        </div>
      )
    }

    case 'time-picker': {
      const [time, setTime] = useState('12:00')
      return (
        <div className="space-y-4">
          <TimePicker
            value={{ hours: 12, minutes: 0 }}
            onChange={(newTime) => setTime(`${newTime.hours}:${newTime.minutes}`)}
          />
        </div>
      )
    }

    case 'form': {
      return (
        <div className="space-y-4">
          <FormDemo />
        </div>
      )
    }

    case 'calendar': {
      const [date, setDate] = useState<Date | undefined>(new Date())
      return (
        <div className="space-y-4">
          <Calendar
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      )
    }

    case 'masonry': {
      const items = [
        { id: 1, height: 100, content: 'Item 1' },
        { id: 2, height: 150, content: 'Item 2' },
        { id: 3, height: 120, content: 'Item 3' },
        { id: 4, height: 180, content: 'Item 4' },
        { id: 5, height: 90, content: 'Item 5' },
      ]
      return (
        <div className="space-y-4">
          <Masonry columns={3} gap={16}>
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
                style={{ height: item.height }}
              >
                {item.content}
              </div>
            ))}
          </Masonry>
        </div>
      )
    }

    case 'floating-grid': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">FloatingGrid Component</p>
          </div>
        </div>
      )
    }

    case 'matrix-background': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border bg-black">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-green-400 text-sm font-mono">Matrix Background</p>
          </div>
        </div>
      )
    }

    case 'particles-effect': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white text-sm">Particles Effect</p>
          </div>
        </div>
      )
    }

    case 'stars-background': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border bg-gradient-to-b from-indigo-900 to-black">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white text-sm">Stars Background</p>
          </div>
        </div>
      )
    }

    case 'back-to-top': {
      return (
        <div className="space-y-4 h-32 relative">
          <p className="text-sm text-muted-foreground">Role para baixo para ver o botão</p>
          <BackToTop />
        </div>
      )
    }

    case 'cookie-banner': {
      const [accepted, setAccepted] = useState(false)
      if (accepted) return null
      return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <p className="text-sm">Usamos cookies para melhorar sua experiência.</p>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setAccepted(true)}>Aceitar</Button>
              <Button size="sm" variant="outline" onClick={() => setAccepted(true)}>Recusar</Button>
            </div>
          </div>
        </div>
      )
    }

    case 'error-boundary': {
      return (
        <div className="p-4 border rounded-md bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-600 dark:text-red-400">
            Exemplo de Error Boundary Component
          </p>
        </div>
      )
    }

    case 'install-prompt': {
      return (
        <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Instale nosso aplicativo</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">Tenha uma experiência melhor com nosso app instalado.</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => console.log('Install clicked')}>Instalar</Button>
              <Button size="sm" variant="outline" onClick={() => console.log('Dismiss clicked')}>Depois</Button>
            </div>
          </div>
        </div>
      )
    }

    case 'loading-screen': {
      const [loading, setLoading] = useState(true)
      return (
        <div className="space-y-4">
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Parar' : 'Iniciar'} Loading
          </Button>
          {loading && <LoadingScreen />}
        </div>
      )
    }

    case 'page-header': {
      return (
        <PageHeader
          title="Título da Página"
        />
      )
    }

    case 'theme-toggle': {
      return (
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5" />
          <Switch />
          <Moon className="w-5 h-5" />
        </div>
      )
    }

    case 'tokens-demo': {
      return (
        <TokensDemo />
      )
    }

    case 'update-notification': {
      return (
        <div className="p-4 border rounded-md bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Nova versão disponível</h4>
              <p className="text-sm text-green-700 dark:text-green-300">Versão 2.0.0 está pronta para instalar.</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => console.log('Update installed')}>Atualizar</Button>
              <Button size="sm" variant="outline" onClick={() => console.log('Update dismissed')}>Ignorar</Button>
            </div>
          </div>
        </div>
      )
    }

    case 'visually-hidden': {
      return (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Verifique o código fonte para ver o elemento oculto:
          </p>
          <VisuallyHidden>
            <span>Este elemento está oculto visualmente mas acessível para leitores de tela</span>
          </VisuallyHidden>
        </div>
      )
    }

    case 'aspect-ratio-box': {
      return (
        <div className="w-64">
          <AspectRatioBox ratio="16/9">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white">
              16:9
            </div>
          </AspectRatioBox>
        </div>
      )
    }

    case 'center': {
      return (
        <div className="h-32 border rounded-md">
          <Center>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
              Centralizado
            </div>
          </Center>
        </div>
      )
    }

    case 'code': {
      return (
        <div className="space-y-4">
          <Code>console.log(&quot;Hello World&quot;)</Code>
          <Code variant="inline">inline code</Code>
        </div>
      )
    }

    case 'kbd': {
      return (
        <div className="space-y-4">
          <p>
            Pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> para salvar
          </p>
          <p>
            Use <kbd>Enter</kbd> para confirmar
          </p>
        </div>
      )
    }

    case 'quote': {
      return (
        <Quote
          author="Leonardo da Vinci"
        >
          A simplicidade é o último grau de sofisticação.
        </Quote>
      )
    }

    case 'action-button': {
      const [liked, setLiked] = useState(false)
      const [followed, setFollowed] = useState(false)
      const [saved, setSaved] = useState(false)
      
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Curtir Post</h4>
            <ActionButton
              icon={<Heart />}
              activeIcon={<Heart className="fill-current text-red-500" />}
              count={liked ? 43 : 42}
              isActive={liked}
              onToggle={() => setLiked(!liked)}
              activeLabel="Curtido"
              inactiveLabel="Curtir"
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Seguir Usuário</h4>
            <ActionButton
              icon={<Users />}
              activeIcon={<Users className="text-blue-500" />}
              isActive={followed}
              onToggle={() => setFollowed(!followed)}
              variant={followed ? "outline" : "default"}
              activeLabel="Seguindo"
              inactiveLabel="Seguir"
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Salvar Conteúdo</h4>
            <ActionButton
              icon={<Bookmark />}
              activeIcon={<Bookmark className="text-yellow-500" />}
              isActive={saved}
              onToggle={() => setSaved(!saved)}
              variant="ghost"
              size="sm"
            />
          </div>
        </div>
      )
    }

    case 'bookmark-button': {
      const [bookmarked, setBookmarked] = useState(false)
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Salvar Post</h4>
            <BookmarkButton
              itemId="demo-bookmark"
              initialIsBookmarked={bookmarked}
              onBookmark={() => setBookmarked(!bookmarked)}
              activeLabel="Salvo"
              inactiveLabel="Salvar"
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Variante Compacta</h4>
            <BookmarkButton
              itemId="demo-bookmark-compact"
              showLabel={false}
              size="sm"
              variant="ghost"
            />
          </div>
        </div>
      )
    }

    case 'content-card': {
      return (
        <div className="space-y-6 max-w-md">
          <ContentCard
            title="Como Criar Componentes Reutilizáveis"
            description="Aprenda as melhores práticas para criar componentes React que podem ser reutilizados em diferentes projetos."
            image="https://picsum.photos/400/200?random=1"
            author="João Silva"
            date="2024-01-15"
            readTime={5}
          />
          
          <ContentCard
            title="Guia de Design Tokens"
            description="Descubra como usar design tokens para manter consistência visual em sua aplicação."
            image="https://picsum.photos/400/200?random=2"
            variant="compact"
          />
        </div>
      )
    }

    case 'like-button': {
      const [liked, setLiked] = useState(false)
      const [likes, setLikes] = useState(100)
      
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Curtir Post</h4>
            <LikeButton
              itemId="demo-like"
              initialLikes={likes}
              initialIsLiked={liked}
              onLike={(newLikes) => {
                setLikes(newLikes)
                setLiked(!liked)
              }}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Variante Compacta</h4>
            <LikeButton
              itemId="demo-like-compact"
              initialLikes={42}
              variant="compact"
              activeColor="error"
            />
          </div>
        </div>
      )
    }

    case 'reading-time': {
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Post de Blog</h4>
            <ReadingTime
              text="Este é um exemplo de texto para calcular o tempo de leitura. Ele contém aproximadamente 50 palavras, o que deve resultar em um tempo de leitura estimado de cerca de 15 segundos para um leitor médio."
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Artigo Longo</h4>
            <ReadingTime 
              readTime={8}
              text="min de leitura"
              showIcon={true}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Vídeo</h4>
            <ReadingTime 
              readTime={25}
              text="min de duração"
            />
          </div>
        </div>
      )
    }

    case 'share-button': {
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Compartilhar Post</h4>
            <ShareButton
              url="/blog/como-criar-componentes"
              title="Como Criar Componentes Reutilizáveis"
              description="Aprenda as melhores práticas para criar componentes React que podem ser reutilizados em diferentes projetos."
              onShare={(platform) => console.log('Shared on:', platform)}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Variante Minimalista</h4>
            <ShareButton
              url="/produto/123"
              title="Produto em Oferta"
              variant="ghost"
              size="sm"
              showLabel={false}
            />
          </div>
        </div>
      )
    }

    case 'share-menu': {
      return (
        <div className="space-y-6 max-w-md">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Compartilhar Artigo</h4>
            <ShareMenu
              url="/blog/guia-design-tokens"
              title="Guia Completo de Design Tokens"
              description="Descubra como usar design tokens para manter consistência visual em sua aplicação."
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Compartilhar Produto</h4>
            <ShareMenu
              url="/produto/123"
              title="Produto em Oferta - 50% OFF"
              description="Aproveite agora mesmo! Produto premium com 50% de desconto por tempo limitado."
            />
          </div>
        </div>
      )
    }

    case 'toast': {
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-md bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-green-900 dark:text-green-100">Sucesso!</p>
            <p className="text-sm text-green-700 dark:text-green-300">Operação concluída com sucesso.</p>
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-100">Sucesso!</p>
                <p className="text-sm text-green-700 dark:text-green-300">Operação concluída com sucesso.</p>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">Informação</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">Esta é uma mensagem informativa.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    case 'spinner': {
      return (
        <div className="flex items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
        </div>
      )
    }

    case 'divider': {
      return (
        <div className="space-y-4">
          <div className="border-t border-gray-300 dark:border-gray-600"></div>
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-600 dark:text-gray-400">OU</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="border-t-2 border-dashed border-gray-400 dark:border-gray-500"></div>
        </div>
      )
    }

    case 'chip': {
      return (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Vite</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Next.js</span>
        </div>
      )
    }

    case 'tag': {
      return (
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Frontend</Badge>
          <Badge variant="secondary">Backend</Badge>
          <Badge variant="outline">DevOps</Badge>
          <Badge variant="destructive">Bug</Badge>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Feature</span>
        </div>
      )
    }

    case 'tooltip': {
      return (
        <div className="flex items-center gap-4">
          <div className="group relative">
            <Button variant="outline">Hover me</Button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              This is a tooltip
            </div>
          </div>
          <div className="group relative">
            <Button>Click me</Button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Another tooltip
            </div>
          </div>
        </div>
      )
    }

    case 'dropdown': {
      return (
        <div className="space-y-4">
          <div className="relative inline-block text-left">
            <Button variant="outline" className="flex items-center gap-2">
              Options
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Option 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Option 3</a>
                <hr className="my-1 border-gray-200 dark:border-gray-600" />
                <a href="#" className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">Delete</a>
              </div>
            </div>
          </div>
        </div>
      )
    }

    case 'pagination': {
      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="px-2 text-sm text-gray-600 dark:text-gray-400">...</span>
          <Button variant="outline" size="sm">10</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      )
    }

    case 'rating': {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.0 out of 5</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= 2 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">2.0 out of 5</span>
          </div>
        </div>
      )
    }

    case 'steps': {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <span className="ml-2 text-sm font-medium">Step 1</span>
            </div>
            <div className="flex-1 h-1 bg-blue-600 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="ml-2 text-sm font-medium">Step 2</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="ml-2 text-sm text-gray-600">Step 3</span>
            </div>
          </div>
        </div>
      )
    }

    case 'timeline': {
      return (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div>
              <p className="font-medium">Project Started</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2024 - Initial planning and design</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div>
              <p className="font-medium">Development Phase</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2024 - Core features implemented</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <p className="font-medium">Launch</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2024 - Product released</p>
            </div>
          </div>
        </div>
      )
    }

    case 'carousel': {
      return (
        <div className="space-y-4">
          <div className="relative w-64 h-40 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-lg font-medium">Slide 1</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Content for slide 1</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }

    case 'tabs-vertical': {
      return (
        <div className="flex w-80">
          <div className="w-32 border-r border-gray-200 dark:border-gray-700">
            <div className="p-2 space-y-1">
              <button className="w-full text-left px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded">Tab 1</button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Tab 2</button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Tab 3</button>
            </div>
          </div>
          <div className="flex-1 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">Content for Tab 1</p>
          </div>
        </div>
      )
    }

    case 'accordion-multiple': {
      return (
        <div className="w-80 space-y-2">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <button className="w-full px-4 py-3 text-left flex items-center justify-between">
              <span className="font-medium">Section 1</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="px-4 pb-3 text-sm text-gray-600 dark:text-gray-400">
              Content for section 1 goes here.
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <button className="w-full px-4 py-3 text-left flex items-center justify-between">
              <span className="font-medium">Section 2</span>
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="hidden px-4 pb-3 text-sm text-gray-600 dark:text-gray-400">
              Content for section 2 goes here.
            </div>
          </div>
          <div className="w-20 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
            <div className="p-2 space-y-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">A</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-xs">B</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-xs">C</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <h4 className="font-medium mb-2">Sidebar Content</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Navigation content goes here.</p>
          </div>
        </div>
      )
    }

    case 'modal': {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <div className="space-y-4">
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold mb-4">Modal Title</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">This is a modal dialog example. You can add any content here.</p>
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    case 'sidebar': {
      return (
        <div className="flex w-80 h-64 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-20 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
            <div className="p-2 space-y-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">A</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-xs">B</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-xs">C</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <h4 className="font-medium mb-2">Sidebar Content</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Navigation content goes here.</p>
          </div>
        </div>
      )
    }

    default:
      return (
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <p className="text-sm font-semibold text-foreground">{componentName.replace(/[-_]/g, ' ')}</p>
          <p className="text-xs text-muted-foreground">Exemplo em desenvolvimento</p>
        </div>
      )
  }
}

/* -------------------------------------------------------------------------- */
/*                        COMPONENTS CATEGORIES SHOWCASE                      */
/* -------------------------------------------------------------------------- */

function ComponentCategoriesShowcase() {
  const { theme } = useTheme()

  return (
    <div className="space-y-8">
      <Section title="Categorias de Componentes" badge={`${Object.keys(COMPONENT_CATEGORIES).length} categorias`}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(COMPONENT_CATEGORIES).map(([categoryKey, category]) => {
            const IconComponent = category.icon

            return (
              <Card
                key={categoryKey}
                className="group relative overflow-hidden transition-all hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-105"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{
                    background: category.color || `linear-gradient(135deg, ${colorPrimitive.blue[500]}, ${colorPrimitive.cyan[500]})`
                  }}
                />

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform"
                      style={{
                        background: category.color || `linear-gradient(135deg, ${colorPrimitive.blue[500]}, ${colorPrimitive.cyan[500]})`
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <Badge variant="count" className="mt-1">
                      {category.count}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl font-bold mt-3">
                    {category.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                {category.items.length > 0 && (
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Exemplos disponíveis
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {category.items.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300"
                          >
                            {item.replace(/[-_]/g, ' ')}
                          </span>
                        ))}
                        {category.items.length > 4 && (
                          <span className="px-2 py-1 text-xs text-gray-500">
                            +{category.items.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Seção de exemplos detalhados apenas para categorias com items */}
      {Object.entries(COMPONENT_CATEGORIES).filter(([, cat]) => cat.items.length > 0 && cat !== COMPONENT_CATEGORIES.forms).map(([categoryKey, category]) => (
        <Section
          key={`${categoryKey}-examples`}
          title={`${category.title} - Exemplos`}
          badge={`${category.items.length} exemplos`}
        >
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {category.items.map((componentName) => (
              <Card
                key={componentName}
                className="transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg capitalize">
                    {componentName.replace(/[-_]/g, ' ')}
                  </CardTitle>
                  <CardDescription>
                    Exemplo do componente {componentName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="min-h-[100px] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    {renderComponentExample(componentName)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                     CATEGORY SHOWCASE WITH EXAMPLES                        */
/* -------------------------------------------------------------------------- */

function CategoryShowcaseBlock({
  categoryKey,
  category
}: {
  categoryKey: string;
  category: typeof COMPONENT_CATEGORIES[keyof typeof COMPONENT_CATEGORIES]
}) {
  const IconComponent = category.icon
  const { theme } = useTheme()

  return (
    <div className="space-y-4">
      {/* Category Header */}
      <div className="flex items-center gap-4 p-4 rounded-2xl border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-xl text-white shadow-lg"
          style={{
            background: category.color || `linear-gradient(135deg, ${colorPrimitive.blue[500]}, ${colorPrimitive.cyan[500]})`
          }}
        >
          <IconComponent className="w-7 h-7" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <Badge variant="count">{category.count}</Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {category.description}
          </p>
        </div>
      </div>

      {/* Components Examples */}
      {category.items.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {category.items.map((componentName) => (
            <Card
              key={componentName}
              className="transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize">
                  {componentName.replace(/[-_]/g, ' ')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="min-h-[100px] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                  {renderComponentExample(componentName)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center border border-dashed rounded-xl bg-gray-50 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {category.count} componentes disponíveis na biblioteca
          </p>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                        DESIGN TOKENS SHOWCASE                              */
/* -------------------------------------------------------------------------- */

function DesignTokensShowcase() {
  const { theme, primaryColor } = useTheme()

  const colorPalette = [
    { name: 'Blue', color: colorPrimitive.blue[500] },
    { name: 'Green', color: colorPrimitive.emerald[500] },
    { name: 'Purple', color: colorPrimitive.purple[500] },
    { name: 'Pink', color: colorPrimitive.pink[500] },
    { name: 'Orange', color: colorPrimitive.orange[500] },
    { name: 'Red', color: colorPrimitive.red[500] }
  ]

  return (
    <Section title="Design Tokens Aplicados" badge="Tokens em uso">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Cores do Sistema
            </CardTitle>
            <CardDescription>
              Paleta de cores baseada em design tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {colorPalette.map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg mb-2 mx-auto border"
                    style={{ backgroundColor: color.color }}
                  />
                  <p className="text-xs font-medium">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.color}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layout className="w-5 h-5" />
              Tema Atual
            </CardTitle>
            <CardDescription>
              Configurações do tema {theme}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Tema:</span>
                <span className="text-sm font-medium capitalize">{theme}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cor Primária:</span>
                <span className="text-sm font-medium capitalize">{primaryColor}</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded border"
                  style={{
                    backgroundColor: colorPalette.find(c => c.name.toLowerCase() === primaryColor)?.color
                  }}
                />
                <span className="text-sm">
                  {colorPalette.find(c => c.name.toLowerCase() === primaryColor)?.color}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de Demonstração</CardTitle>
          </CardHeader>
          <CardContent>
            <FormDemo />
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

function FormDemo() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = useForm<{ name: string; email: string; topic: string }>({
    defaultValues: { topic: 'ui' }
  })
  const [result, setResult] = useState<{ name: string; email: string; topic: string } | null>(null)

  const onSubmit = handleSubmit((data) => {
    setResult(data)
  })

  const topic = watch('topic', 'ui')

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Maria Silva" {...register('name', { required: 'Informe seu nome' })} />
        {errors.name && <p className="text-xs text-red-500">{String(errors.name.message)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="maria@email.com"
          {...register('email', {
            required: 'Informe seu email',
            pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Email inválido' }
          })}
        />
        {errors.email && <p className="text-xs text-red-500">{String(errors.email.message)}</p>}
      </div>

      <div className="space-y-2">
        <Label>Tópico</Label>
        <Select value={topic} onValueChange={(v) => setValue('topic', v, { shouldValidate: true })}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ui">UI Components</SelectItem>
            <SelectItem value="forms">Forms</SelectItem>
            <SelectItem value="tokens">Design Tokens</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </Button>

      {result && (
        <div className="rounded-md border border-primary/30 bg-primary/5 p-3 text-sm space-y-1">
          <p className="font-semibold">Dados enviados</p>
          <p>Nome: {result.name}</p>
          <p>Email: {result.email}</p>
          <p>Tópico: {result.topic}</p>
        </div>
      )}
    </form>
  )
}

function AppContent() {
  const [uploadFiles, setUploadFiles] = useState<FileItem[]>([])
  const formsCategory = COMPONENT_CATEGORIES.forms

  const handleFilesAdd = (newFiles: FileItem[]) => {
    setUploadFiles((prev) => [...prev, ...newFiles])
  }

  const handleFileRemove = (id: string) => {
    setUploadFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const handleClear = () => {
    setUploadFiles([])
  }

  return (
    <div className="space-y-10 p-6">
      <ComponentCategoriesShowcase />

      <Section title={`${formsCategory.title} - Exemplos`} badge={`${formsCategory.items.length + 1} exemplos`}>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload com tokens
              </CardTitle>
              <CardDescription>
                Área de drag & drop usando tokens de cor, espaço e raio.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <FileUpload
                files={uploadFiles}
                onFilesAdd={handleFilesAdd}
                onFileRemove={handleFileRemove}
                onClear={handleClear}
                placeholder="Arraste ou selecione até 5MB"
                accept="image/*,application/pdf"
                maxSize={5 * 1024 * 1024}
              />
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Gradient e bordas aplicados via tokens.</p>
                <p>Formatos: image/*, application/pdf.</p>
                <p>Tamanho máximo: 5 MB.</p>
              </div>
              {uploadFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-foreground">Arquivos selecionados</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {uploadFiles.map((f) => (
                      <li key={f.id} className="flex items-center justify-between rounded-md border border-border/50 bg-card/60 px-3 py-2">
                        <span className="truncate mr-2">{f.file.name}</span>
                        <span className="text-xs text-gray-500">{(f.file.size / 1024).toFixed(1)} KB</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {formsCategory.items.map((componentName) => (
            <Card
              key={componentName}
              className="transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg capitalize">
                  {componentName.replace(/[-_]/g, ' ')}
                </CardTitle>
                <CardDescription>
                  Exemplo do componente {componentName}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="min-h-[100px] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                  {renderComponentExample(componentName)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <DesignTokensShowcase />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}