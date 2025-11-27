/**
 * @rainersoft/ui - Biblioteca de Componentes UI
 * 
 * Filosofia:
 * - Radix UI: Lógica + Acessibilidade
 * - ShadCN: Estilização + Design System
 * - Tailwind: Classes Utilitárias
 * - Design Tokens: Valores (sem redundância)
 * 
 * Exportações centralizadas de todos os componentes da biblioteca.
 * Organizados por categoria para facilitar a descoberta e uso.
 * 
 * @module @rainersoft/ui
 * @author Rainer Teixeira
 */

// ============================================================================
// DESIGN TOKENS (Re-exportados para conveniência)
// ============================================================================
export {
  tokens,
  darkTheme,
  lightTheme,
  darkThemeColors,
  lightThemeColors,
  BACKGROUND,
  GRADIENTS,
  GRADIENT_DIRECTIONS,
  MOTION,
} from '@rainersoft/design-tokens';
export type { Tokens } from '@rainersoft/design-tokens';

// ============================================================================
// UTILITIES
// ============================================================================
export { cn, motion, ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS } from './lib/utils';
export type { ClassValue } from 'clsx';

// Color Utilities
export {
  getTokenColor,
  hexToRGB,
  hexToRGBA,
  overlayFromToken,
  isValidHex,
  getContrastColor,
} from './lib/color-utils';

// Theme Utilities (para uso sem hardcode)
export {
  getThemeColors,
  getColorFromTheme,
  getSemanticColors,
  generateTailwindClasses,
  SEMANTIC_COLORS,
  getStatusColor,
  getBrandColor,
} from './lib/theme-utils';

// ============================================================================
// ACTIONS
// ============================================================================
export * from './components/actions/button/Button';
export * from './components/actions/slider/Slider';
export * from './components/actions/toggle/Toggle';

// ============================================================================
// FORMS
// ============================================================================
export * from './components/forms/checkbox/Checkbox';
export * from './components/forms/form/Form';
export * from './components/forms/input/Input';
export * from './components/forms/label/Label';
export * from './components/forms/radio-group/RadioGroup';
export * from './components/forms/select/Select';
export * from './components/forms/switch/Switch';
export * from './components/forms/textarea/Textarea';

// ============================================================================
// LAYOUT
// ============================================================================
export * from './components/layout/aspect-ratio/AspectRatio';
export * from './components/layout/card/Card';
export * from './components/layout/scroll-area/ScrollArea';
// export * from './components/layout/separator/Separator'; // TODO: Fix lib/utils import
export * from './components/layout/separator/Separator';
export * from './components/layout/sheet/Sheet';
export * from './components/layout/table/Table';

// ============================================================================
// FEEDBACK
// ============================================================================
export * from './components/feedback/alert/Alert';
export * from './components/feedback/alert-dialog/AlertDialog';
// export * from './components/feedback/badge/Badge'; // TODO: Fix lib/utils import
// export * from './components/feedback/progress/Progress'; // TODO: Fix lib/utils import
export * from './components/feedback/badge/Badge';
export * from './components/feedback/progress/Progress';
export * from './components/feedback/skeleton/Skeleton';
export * from './components/feedback/sonner/Sonner';

// ============================================================================
// OVERLAYS
// ============================================================================
export * from './components/overlays/context-menu/ContextMenu';
export * from './components/overlays/dialog/Dialog';
export * from './components/overlays/dropdown-menu/DropdownMenu';
export * from './components/overlays/hover-card/HoverCard';
export * from './components/overlays/popover/Popover';
export * from './components/overlays/tooltip/Tooltip';

// ============================================================================
// NAVIGATION
// ============================================================================
export * from './components/navigation/accordion/Accordion';
export * from './components/navigation/collapsible/Collapsible';
// export * from './components/navigation/command/Command'; // TODO: Fix circular dependency
export * from './components/navigation/command/Command';
export * from './components/navigation/navigation-menu/NavigationMenu';
export * from './components/navigation/tabs/Tabs';

// ============================================================================
// DATA DISPLAY
// ============================================================================
// export * from './components/data-display/avatar/Avatar'; // TODO: Fix lib/utils import
export * from './components/data-display/avatar/Avatar';
export * from './components/data-display/calendar/Calendar';
export * from './components/data-display/carousel/Carousel';

// ============================================================================
// EFFECTS
// ============================================================================
// export * from './components/effects/celestial-background/CelestialBackground'; // TODO: Fix color-utils import
// export * from './components/effects/floating-grid/FloatingGrid'; // TODO: Fix color-utils import
export * from './components/effects/particles-effect/ParticlesEffect';
export * from './components/effects/stars-background/StarsBackground';
export * from './components/effects/matrix-background/MatrixBackground';

// ============================================================================
// UTILITIES
// ============================================================================
export * from './components/utilities/back-to-top/BackToTop';
export * from './components/utilities/cookie-banner/CookieBanner';
export * from './components/utilities/install-prompt/InstallPrompt';
export * from './components/utilities/loading-screen/LoadingScreen';
export * from './components/utilities/page-header/PageHeader';
// export * from './components/utilities/tokens-demo/TokensDemo'; // TODO: Add missing tokens util
export * from './components/utilities/update-notification/UpdateNotification';
export * from './components/utilities/visually-hidden/VisuallyHidden';
export * from './components/utilities/theme-toggle/ThemeToggle';
export * from './components/utilities/error-boundary/ErrorBoundary';

// ============================================================================
// HOOKS
// ============================================================================
export * from './hooks/use-mobile';
export * from './hooks/use-pwa';

// ============================================================================
// SCROLL UTILITIES
// ============================================================================
export * from './lib/scroll-utils';


