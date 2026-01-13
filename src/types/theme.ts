/**
 * Tipos agnósticos para Temas
 * 
 * Interface genérica para configuração de temas.
 * 
 * @module @rainersoft/ui/types/theme
 * @author Rainer Teixeira
 */

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  accent?: string;
  accentForeground?: string;
  background?: string;
  foreground?: string;
  muted?: string;
  mutedForeground?: string;
  card?: string;
  cardForeground?: string;
  popover?: string;
  popoverForeground?: string;
  border?: string;
  input?: string;
  ring?: string;
  destructive?: string;
  destructiveForeground?: string;
  success?: string;
  successForeground?: string;
  warning?: string;
  warningForeground?: string;
  info?: string;
  infoForeground?: string;
  [key: string]: string | undefined;
}

export interface ThemeConfig {
  mode?: ThemeMode;
  colors?: ThemeColors;
  darkColors?: ThemeColors;
  cssVarsPrefix?: string;
  defaultTheme?: ThemeMode;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  resolvedTheme: 'light' | 'dark';
  colors: ThemeColors;
  isDark: boolean;
  isLight: boolean;
}

export const DEFAULT_LIGHT_COLORS: ThemeColors = {
  primary: '#0891b2',
  primaryForeground: '#ffffff',
  secondary: '#6366f1',
  secondaryForeground: '#ffffff',
  accent: '#f59e0b',
  accentForeground: '#000000',
  background: '#ffffff',
  foreground: '#0a0a0a',
  muted: '#f5f5f5',
  mutedForeground: '#737373',
  card: '#ffffff',
  cardForeground: '#0a0a0a',
  popover: '#ffffff',
  popoverForeground: '#0a0a0a',
  border: '#e5e5e5',
  input: '#e5e5e5',
  ring: '#0891b2',
  destructive: '#ef4444',
  destructiveForeground: '#ffffff',
  success: '#22c55e',
  successForeground: '#ffffff',
  warning: '#f59e0b',
  warningForeground: '#000000',
  info: '#3b82f6',
  infoForeground: '#ffffff',
};

export const DEFAULT_DARK_COLORS: ThemeColors = {
  primary: '#22d3ee',
  primaryForeground: '#0a0a0a',
  secondary: '#818cf8',
  secondaryForeground: '#0a0a0a',
  accent: '#fbbf24',
  accentForeground: '#0a0a0a',
  background: '#0a0a0a',
  foreground: '#fafafa',
  muted: '#262626',
  mutedForeground: '#a3a3a3',
  card: '#171717',
  cardForeground: '#fafafa',
  popover: '#171717',
  popoverForeground: '#fafafa',
  border: '#262626',
  input: '#262626',
  ring: '#22d3ee',
  destructive: '#dc2626',
  destructiveForeground: '#fafafa',
  success: '#16a34a',
  successForeground: '#fafafa',
  warning: '#d97706',
  warningForeground: '#fafafa',
  info: '#2563eb',
  infoForeground: '#fafafa',
};
