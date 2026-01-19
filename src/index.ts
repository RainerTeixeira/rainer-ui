/**
 * @rainersoft/ui - Biblioteca de Componentes UI Agnóstica
 * 
 * 📦 ESTRUTURA SIMPLIFICADA - 5 CATEGORIAS PRINCIPAIS:
 * 
 * 🎨 UI - Componentes Básicos
 *    Avatar, Button, Input, Badge, Slider, Toggle, Progress, Skeleton
 * 
 * 📝 FORMS - Formulários
 *    Form, Input, Textarea, Select, Checkbox, Radio, Switch, Label
 * 
 * 🏗️ LAYOUT - Layout
 *    Card, Sheet, Table, ScrollArea, Separator, AspectRatio
 * 
 * 💬 FEEDBACK - Feedback
 *    Alert, AlertDialog, Toast, Badge, Progress, Skeleton
 * 
 * 🧭 NAVIGATION - Navegação
 *    Accordion, Tabs, NavigationMenu, Collapsible, Command
 * 
 * Extras: Overlays, Data Display, Effects, Utilities, Providers
 * 
 * @module @rainersoft/ui
 * @author Rainer Teixeira
 * @version 2.3.0
 */

// ============================================================================
// DESIGN TOKENS (Re-exportados para conveniência)
// ============================================================================
export { tokens } from '@rainersoft/design-tokens';
export { lightTheme, darkTheme } from '@rainersoft/design-tokens';

// ============================================================================
// UTILITIES
// ============================================================================
export { cn, motion, motionSemantic, motionPresets, ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS } from './lib/utils';
export type { ClassValue } from 'clsx';

// Color Utilities
export {
  getTokenColor,
  overlayFromToken,
  isValidHex,
  getContrastColor,
} from './lib/color-utils';

// Theme Utilities (para uso sem hardcode)
export {
  getThemeColors,
  getSemanticColors,
  getSemanticColorsSimplified,
  getStatusColor,
  getButtonPrimaryColor,
  getButtonSecondaryColor,
  getButtonTertiaryColor,
  getButtonPrimaryTextColor,
  getColorFromTheme,
  getBrandColor,
  getSemanticColorConstants,
  generateTailwindClasses,
} from './lib/theme-utils';

// ============================================================================
// COMPONENTS - Nova Estrutura Profissional v2.0
// ============================================================================
export * from './components';

// Export direto para garantir compatibilidade
export { InlineLoader } from './components/ui/InlineLoader';

// Exportar funções de cor para compatibilidade
// hexToRgb movido para @rainersoft/utils/color

// Exportar componentes UI diretamente para compatibilidade
export { Badge, badgeVariants } from './components/ui/badge';
export { Progress } from './components/ui/progress';
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './components/ui/card';
export { Input } from './components/ui/input';
export { Textarea } from './components/ui/textarea';
export { Slider } from './components/ui/slider';
export { Switch } from './components/ui/switch';
export { Toggle } from './components/ui/toggle';
export * from './components/ui/button';
export * from './components/ui/avatar';
export * from './components/ui/icon-button';
export * from './components/ui/link-button';
export * from './components/ui/fab';
export * from './components/ui/segmented-control';

// Exportar Accordion diretamente para compatibilidade
export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './components/navigation/accordion';

// Exportar Tabs diretamente para compatibilidade
export { 
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from './components/navigation/tabs';

// ============================================================================
// HOOKS
// ============================================================================
export * from './hooks/use-pwa';
export * from './hooks/use-theme';
export * from './hooks/use-carousel-keyboard';
export * from './hooks/use-table-of-contents';

// ============================================================================
// PROVIDERS
// ============================================================================
export { ThemeProvider } from './components/providers/theme-provider';
