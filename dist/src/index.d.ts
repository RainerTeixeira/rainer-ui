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
export { tokens, lightTokens as lightTheme, darkTokens as darkTheme } from './lib/tokens';
export interface ThemeColors {
    primary?: string;
    primaryForeground?: string;
    secondary?: string;
    secondaryForeground?: string;
    background?: string;
    foreground?: string;
    muted?: string;
    mutedForeground?: string;
    border?: string;
    input?: string;
    ring?: string;
}
export type ThemeMode = 'light' | 'dark' | 'system';
export type { Tokens as DesignTokens } from './lib/tokens';
export { cn, motion, motionSemantic, motionPresets, ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, SECTION_CLASSES, MOTION } from './lib/tokens';
export type { ClassValue } from 'clsx';
export { getTokenColor, overlayFromToken, isValidHex, getContrastColor, } from './lib/tokens';
export { getThemeColors, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getButtonPrimaryColor, getButtonSecondaryColor, getButtonTertiaryColor, getButtonPrimaryTextColor, getColorFromTheme, getBrandColor, getSemanticColorConstants, generateTailwindClasses, } from './lib/tokens';
export * from './components';
export { InlineLoader } from './components/ui/InlineLoader';
export { Badge, badgeVariants } from './components/ui/badge';
export { Progress } from './components/ui/progress';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';
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
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/navigation/accordion';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/navigation/tabs';
export * from './hooks/use-pwa';
export * from './hooks/use-theme';
export * from './hooks/use-carousel-keyboard';
export * from './hooks/use-table-of-contents';
export { ThemeProvider } from './components/providers/theme-provider';
