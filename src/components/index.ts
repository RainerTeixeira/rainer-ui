/**
 * @rainersoft/ui - Components Index
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

// ============================================================================
// UI - COMPONENTES BÁSICOS
// ============================================================================
export * from './ui';

// ============================================================================
// UTILITIES - EXPORTAR DIRETAMENTE PARA COMPATIBILIDADE
// ============================================================================
// Exportar funções de cor para compatibilidade
// Funções de cor movidas para @rainersoft/utils


// ============================================================================
// FORMS - COMPONENTES DE FORMULÁRIO
// ============================================================================
export * from './forms';

// ============================================================================
// 🏗️ LAYOUT - COMPONENTES DE LAYOUT
// ============================================================================
export * from './layout';

// ============================================================================
// FEEDBACK - COMPONENTES DE FEEDBACK
// ============================================================================
export * from './feedback';

// ============================================================================
// NAVIGATION - COMPONENTES DE NAVEGAÇÃO (reexport completo)
// ============================================================================
export * from './navigation';
// Exports diretos mantidos para compatibilidade
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './navigation/accordion';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './navigation/tabs';

// ============================================================================
// DASHBOARD - COMPONENTES DE DASHBOARD
// ============================================================================
export * from './dashboard';

// ============================================================================
// 🎭 OVERLAYS - COMPONENTES SOBREPOSTOS
// ============================================================================
export * from './overlays';

// ============================================================================
// 📊 DATA DISPLAY - VISUALIZAÇÃO DE DADOS
// ============================================================================
export * from './data-display';

// ============================================================================
// ✨ EFFECTS - EFEITOS VISUAIS
// ============================================================================
export * from './effects';

// ============================================================================
// 🛠️ UTILITIES - UTILITÁRIOS
// ============================================================================

// Novas categorias de utilities organizadas - exports específicos para evitar conflitos
export { CookieBanner, useCookieConsent } from './compliance';
export { ErrorBoundary, LoadingScreen } from './infrastructure';
export { InstallPrompt } from './pwa';
export { TokensDemo } from './development';
export { Kbd, KbdCombo, Code, CodeInline, CodeBlock, Quote, QuoteTestimonial, QuoteBlock } from './content';
export { VisuallyHidden } from './accessibility';

// Manter utilities existentes para compatibilidade
export * from './utilities';

// ============================================================================
// 🌐 SOCIAL - COMPONENTES DE INTERAÇÃO SOCIAL
// ============================================================================
export * from './social';

// ============================================================================
// UPLOAD - COMPONENTES DE UPLOAD
// ============================================================================
// Futuro: export * from './upload';

// ============================================================================
// PROVIDERS
// ============================================================================
export { ThemeProvider } from './providers/theme-provider';
export { TokensProvider } from './providers/tokens-provider';

// ============================================================================
// HOOKS
// ============================================================================
export * from '../hooks';
