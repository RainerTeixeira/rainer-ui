/**
 * Tipos para Adaptadores de Design System
 * 
 * Interface para criar adaptadores que conectam diferentes design systems.
 * 
 * @module @rainersoft/ui/types/adapter
 * @author Rainer Teixeira
 */

import type { DesignTokens } from './tokens';
import type { ThemeColors } from './theme';

export interface AdapterConfig {
  name: string;
  version?: string;
  tokens: DesignTokens;
  lightColors: ThemeColors;
  darkColors: ThemeColors;
  cssVarsPath?: string;
  tailwindPreset?: Record<string, unknown>;
}

export interface AdapterOptions {
  injectCssVars?: boolean;
  enableThemeSync?: boolean;
  customTransforms?: Record<string, (value: unknown) => unknown>;
}

export type AdapterFactory = (options?: AdapterOptions) => AdapterConfig;
