/**
 * @fileoverview Ponto central de exportação dos componentes Rainersoft UI
 *
 * Estrutura organizada por categoria - 5 categorias principais:
 *
 * 🎨 UI: Componentes básicos (Avatar, Button, Slider, Toggle)
 * 📝 Forms: Componentes de formulário (Form, Input, Textarea, Select, Checkbox, Radio, Switch, Label)
 * 🏗️ Layout: Componentes de layout (Card, Sheet, Table, ScrollArea, Separator, AspectRatio)
 * 💬 Feedback: Componentes de feedback (Alert, AlertDialog, Toast, Badge, Progress, Skeleton)
 * 🧭 Navigation: Componentes de navegação (Accordion, Tabs, NavigationMenu, Collapsible, Command)
 *
 * Extras disponíveis:
 * - Overlays: Dialog, Popover, Tooltip, Dropdown, ContextMenu, HoverCard
 * - Data Display: Calendar, Carousel
 * - Effects: Particles, Stars, Matrix, Celestial, FloatingGrid
 * - Utilities: BackToTop, CookieBanner, InstallPrompt, LoadingScreen, etc.
 * - Providers: ThemeProvider
 *
 * @module @rainersoft/ui/components
 * @author Rainer Teixeira
 * @version 2.2.0
 */
/**
 * Exporta todos os componentes básicos de UI
 * Inclui: Avatar, Button, Slider, Toggle, Badge, Progress, etc.
 */
export * from './ui';
/**
 * Exporta todos os componentes de formulário
 * Inclui: Form, Input, Textarea, Select, Checkbox, Radio, Switch, Label
 */
export * from './forms';
/**
 * Exporta todos os componentes de layout
 * Inclui: Card, Sheet, Table, ScrollArea, Separator, AspectRatio
 */
export * from './layout';
/**
 * Exporta todos os componentes de feedback visual
 * Inclui: Alert, AlertDialog, Toast, Badge, Progress, Skeleton
 */
export * from './feedback';
/**
 * Exporta todos os componentes de navegação
 * Inclui: Accordion, Tabs, NavigationMenu, Collapsible, Command
 */
export * from './navigation';
/**
 * Exports diretos mantidos para compatibilidade com código existente
 * Evita quebras em aplicações que importam componentes diretamente
 */
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './navigation/accordion';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './navigation/tabs';
/**
 * Exporta componentes especializados para dashboards
 * Inclui: KPI cards, gráficos, métricas e widgets de dados
 */
export * from './dashboard';
/**
 * Exporta componentes que sobrepõem o conteúdo principal
 * Inclui: Dialog, Popover, Tooltip, Dropdown, ContextMenu, HoverCard
 */
export * from './overlays';
/**
 * Exporta componentes para exibição de dados complexos
 * Inclui: Calendar, Carousel e outros visualizadores de conteúdo
 */
export * from './data-display';
/**
 * Exporta componentes de efeitos visuais e animações
 * Inclui: Particles, Stars, Matrix, Celestial, FloatingGrid
 */
export * from './effects';
/**
 * Exporta componentes utilitários organizados por categoria
 * Exports específicos para evitar conflitos de nomes
 */
export { CookieBanner, useCookieConsent } from './compliance';
export { ErrorBoundary, LoadingScreen } from './infrastructure';
export { InstallPrompt } from './pwa';
export { TokensDemo } from './development';
export { Kbd, KbdCombo, Code, CodeInline, CodeBlock, Quote, QuoteTestimonial, QuoteBlock } from './content';
export { VisuallyHidden } from './accessibility';
/**
 * Mantém compatibilidade com utilities existentes
 * Exporta todos os componentes do diretório utilities
 */
export * from './utilities';
/**
 * Exporta componentes para integração social e compartilhamento
 * Inclui: botões de share, contadores, widgets sociais
 */
export * from './social';
/**
 * Futuro: Exportará componentes para upload de arquivos
 * Incluirá: FileUpload, DropZone, ProgressIndicator, etc.
 */
/**
 * Exporta provedores de contexto para gerenciamento de estado global
 * Inclui: ThemeProvider para temas, TokensProvider para design tokens
 */
export { ThemeProvider } from './providers/theme-provider';
export { TokensProvider } from './providers/tokens-provider';
/**
 * Exporta todos os hooks personalizados da biblioteca
 * Inclui hooks para UI, estado, efeitos e utilitários diversos
 */
export * from '../hooks';
