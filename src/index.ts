/**
 * @rainersoft/ui - Biblioteca de Componentes UI
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
 * @version 2.2.0
 */

// ============================================================================
// DESIGN TOKENS (Re-exportados para conveniência)
// ============================================================================
export { tokens } from '@rainersoft/design-tokens';
export { lightTheme, darkTheme } from '@rainersoft/design-tokens';

// ============================================================================
// IMAGE UTILITIES
// ============================================================================
export {
  isAcceptedFormat,
  isWebP,
  supportsWebP,
  getImageInfo,
  resizeImage,
  convertToWebP,
  prepareImageForUpload,
  generatePlaceholder,
} from './lib/image-utils';

// ============================================================================
// UTILITIES
// ============================================================================
export { cn, motion, motionSemantic, motionPresets, ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS } from './lib/utils';
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
  getSemanticColors,
  getSemanticColorsSimplified,
  getStatusColor,
  getButtonPrimaryColor,
  getButtonSecondaryColor,
  getButtonTertiaryColor,
  getButtonPrimaryTextColor,
  getColorFromTheme,
  getBrandColor,
  SEMANTIC_COLORS,
  generateTailwindClasses,
} from './lib/theme-utils';

// ============================================================================
// COMPONENTS - Nova Estrutura Profissional v2.0
// ============================================================================
export * from './components';

// ============================================================================
// HOOKS
// ============================================================================
export * from './hooks/use-mobile';
export * from './hooks/use-pwa';
export * from './hooks/use-theme';
export * from './hooks/use-carousel-keyboard';
export * from './hooks/use-table-of-contents';
