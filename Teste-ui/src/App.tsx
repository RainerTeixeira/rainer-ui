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
  // Novos componentes
  ActionButton,
  AspectRatio,
  AspectRatioBox,
  BackToTop,
  BookmarkButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CelestialBackground,
  Center,
  Chip,
  ChipGroup,
  Code,
  ContentCard,
  LoadingScreen,
  Quote,
  Rating,
  ReadingTime,
  ShareButton,
  ShareMenu,
  Timeline,
  TimelineItem,
  // Imports faltantes
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SegmentedControl,
  AnalyticsOverview,
  DatePicker,
  TimePicker,
  type StatsCardsProps,
  Drawer,
  Lightbox,
  Kbd,
  LikeButton,
  PhoneInput,
  Spacer,
  TokensDemo,
  type FileItem,
  EmptyState,
  KPI,
  BreadcrumbSeparator,
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
  MessageSquare,
  Share2,
  Upload,
  Users,
  Grid,
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
      'reading-time', 'share-button', 'share-menu'
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
            action={<Button>Adicionar Item</Button>}
          />
          <EmptyState
            title="Lista vazia"
            description="Comece adicionando seu primeiro item."
            variant="minimal"
            action={<Button variant="outline">Começar</Button>}
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

    case 'range-slider': {
      const [value, setValue] = useState([50])
      return (
        <div className="space-y-4">
          <RangeSlider
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">Valor: {value[0]}</p>
        </div>
      )
    }

    case 'date-picker': {
      const [date, setDate] = useState<Date | undefined>(new Date())
      return (
        <div className="space-y-4">
          <DatePicker
            value={date}
            onChange={setDate}
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
            value={time}
            onChange={setTime}
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
            mode="single"
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
          <FloatingGrid />
        </div>
      )
    }

    case 'matrix-background': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border">
          <MatrixBackground />
        </div>
      )
    }

    case 'particles-effect': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border">
          <ParticlesEffect />
        </div>
      )
    }

    case 'stars-background': {
      return (
        <div className="h-64 relative overflow-hidden rounded-md border">
          <StarsBackground />
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
        <CookieBanner
          onAccept={() => setAccepted(true)}
          onDecline={() => setAccepted(true)}
        />
      )
    }

    case 'error-boundary': {
      return (
        <ErrorBoundary
          fallback={
            <div className="p-4 border rounded-md bg-red-50 dark:bg-red-900/20">
              <p className="text-sm text-red-600 dark:text-red-400">
                Ocorreu um erro ao carregar este componente.
              </p>
            </div>
          }
        >
          <div className="p-4 border rounded-md">
            <p>Componente funcionando normalmente</p>
          </div>
        </ErrorBoundary>
      )
    }

    case 'install-prompt': {
      return (
        <InstallPrompt
          title="Instale nosso aplicativo"
          description="Tenha uma experiência melhor com nosso app instalado."
          onInstall={() => console.log('Install clicked')}
          onDismiss={() => console.log('Dismiss clicked')}
        />
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
          subtitle="Descrição opcional da página"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Atual', href: '#' }
          ]}
          actions={
            <Button size="sm">Ação</Button>
          }
        />
      )
    }

    case 'theme-toggle': {
      return (
        <ThemeToggle />
      )
    }

    case 'tokens-demo': {
      return (
        <TokensDemo />
      )
    }

    case 'update-notification': {
      return (
        <UpdateNotification
          version="2.0.0"
          onInstall={() => console.log('Update installed')}
          onDismiss={() => console.log('Update dismissed')}
        />
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
          <AspectRatioBox ratio={16 / 9}>
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
          <Code>console.log('Hello World')</Code>
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
          text="A simplicidade é o último grau de sofisticação."
          author="Leonardo da Vinci"
        />
      )
    }

    case 'action-button': {
      return (
        <div className="space-y-4">
          <ActionButton
            icon={<Heart />}
            label="Curtir"
            count={42}
            onClick={() => console.log('Liked')}
          />
          <ActionButton
            icon={<MessageSquare />}
            label="Comentar"
            count={8}
            variant="outline"
            onClick={() => console.log('Comment')}
          />
        </div>
      )
    }

    case 'bookmark-button': {
      const [bookmarked, setBookmarked] = useState(false)
      return (
        <BookmarkButton
          bookmarked={bookmarked}
          onToggle={setBookmarked}
          count={bookmarked ? 24 : 23}
        />
      )
    }

    case 'content-card': {
      return (
        <ContentCard
          title="Título do Conteúdo"
          description="Descrição breve do conteúdo sendo compartilhado."
          image="https://picsum.photos/400/200?random=1"
          url="#"
          onShare={() => console.log('Shared')}
        />
      )
    }

    case 'like-button': {
      const [liked, setLiked] = useState(false)
      return (
        <LikeButton
          liked={liked}
          onToggle={setLiked}
          count={liked ? 101 : 100}
        />
      )
    }

    case 'reading-time': {
      return (
        <ReadingTime
          text="Este é um exemplo de texto para calcular o tempo de leitura."
          wordsPerMinute={200}
        />
      )
    }

    case 'share-button': {
      return (
        <ShareButton
          url="#"
          title="Título para compartilhar"
          onShare={(platform) => console.log('Shared on:', platform)}
        />
      )
    }

    case 'share-menu': {
      return (
        <ShareMenu
          url="#"
          title="Título para compartilhar"
          description="Descrição do conteúdo"
        />
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