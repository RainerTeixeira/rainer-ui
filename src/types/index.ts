/**
 * Exportações de tipos agnósticos
 * 
 * Tipos essenciais da biblioteca @rainersoft/ui
 * @module @rainersoft/ui/types
 * @author Rainer Teixeira
 */

// Tipos essenciais locais
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
