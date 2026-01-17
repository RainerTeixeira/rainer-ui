import { D as DesignTokens } from './tokens-B1TMkK7f.mjs';

interface ThemeColors {
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

/**
 * Tipos para Adaptadores de Design System
 *
 * Interface para criar adaptadores que conectam diferentes design systems.
 *
 * @module @rainersoft/ui/types/adapter
 * @author Rainer Teixeira
 */

interface AdapterConfig {
    name: string;
    version?: string;
    tokens: DesignTokens;
    lightColors: ThemeColors;
    darkColors: ThemeColors;
    cssVarsPath?: string;
    tailwindPreset?: Record<string, unknown>;
}
interface AdapterOptions {
    injectCssVars?: boolean;
    enableThemeSync?: boolean;
    customTransforms?: Record<string, (value: unknown) => unknown>;
}
type AdapterFactory = (options?: AdapterOptions) => AdapterConfig;

export type { AdapterConfig as A, AdapterFactory as a };
