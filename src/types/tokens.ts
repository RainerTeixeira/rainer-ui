/**
 * Tipos agnósticos para Design Tokens
 * 
 * Interface genérica que pode ser implementada por qualquer design system.
 * 
 * @module @rainersoft/ui/types/tokens
 * @author Rainer Teixeira
 */

export interface ColorScale {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
  [key: string]: string | undefined;
}

export interface ColorPalette {
  [colorName: string]: ColorScale | string;
}

export interface SemanticColors {
  text?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    disabled?: string;
    inverse?: string;
    link?: string;
    linkHover?: string;
    [key: string]: string | undefined;
  };
  background?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    disabled?: string;
    overlay?: string;
    inverse?: string;
    muted?: string;
    [key: string]: string | undefined;
  };
  border?: {
    default?: string;
    light?: string;
    medium?: string;
    dark?: string;
    focus?: string;
    error?: string;
    success?: string;
    warning?: string;
    [key: string]: string | undefined;
  };
  button?: {
    primary?: {
      default?: string;
      hover?: string;
      active?: string;
      disabled?: string;
      text?: string;
    };
    secondary?: {
      default?: string;
      hover?: string;
      active?: string;
      disabled?: string;
      text?: string;
    };
    [key: string]: Record<string, string | undefined> | undefined;
  };
  status?: {
    success?: { base?: string; text?: string; background?: string };
    error?: { base?: string; text?: string; background?: string };
    warning?: { base?: string; text?: string; background?: string };
    info?: { base?: string; text?: string; background?: string };
    [key: string]: Record<string, string | undefined> | undefined;
  };
  surface?: {
    primary?: string;
    elevated?: string;
    raised?: string;
    sunken?: string;
    [key: string]: string | undefined;
  };
  [key: string]: Record<string, unknown> | undefined;
}

export interface SpacingScale {
  0?: string;
  px?: string;
  0.5?: string;
  1?: string;
  1.5?: string;
  2?: string;
  2.5?: string;
  3?: string;
  3.5?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
  11?: string;
  12?: string;
  14?: string;
  16?: string;
  20?: string;
  24?: string;
  28?: string;
  32?: string;
  36?: string;
  40?: string;
  44?: string;
  48?: string;
  52?: string;
  56?: string;
  60?: string;
  64?: string;
  72?: string;
  80?: string;
  96?: string;
  [key: string]: string | undefined;
}

export interface RadiusScale {
  none?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  full?: string;
  [key: string]: string | undefined;
}

export interface ShadowScale {
  none?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  inner?: string;
  [key: string]: string | undefined;
}

export interface TypographyTokens {
  fontFamily?: {
    sans?: string | string[];
    serif?: string | string[];
    mono?: string | string[];
    [key: string]: string | string[] | undefined;
  };
  fontSize?: {
    xs?: string | [string, string];
    sm?: string | [string, string];
    base?: string | [string, string];
    lg?: string | [string, string];
    xl?: string | [string, string];
    '2xl'?: string | [string, string];
    '3xl'?: string | [string, string];
    '4xl'?: string | [string, string];
    '5xl'?: string | [string, string];
    [key: string]: string | [string, string] | undefined;
  };
  fontWeight?: {
    thin?: string;
    extralight?: string;
    light?: string;
    normal?: string;
    medium?: string;
    semibold?: string;
    bold?: string;
    extrabold?: string;
    black?: string;
    [key: string]: string | undefined;
  };
  lineHeight?: {
    none?: string;
    tight?: string;
    snug?: string;
    normal?: string;
    relaxed?: string;
    loose?: string;
    [key: string]: string | undefined;
  };
  letterSpacing?: {
    tighter?: string;
    tight?: string;
    normal?: string;
    wide?: string;
    wider?: string;
    widest?: string;
    [key: string]: string | undefined;
  };
}

export interface MotionTokens {
  duration?: {
    instant?: string;
    fast?: string;
    normal?: string;
    slow?: string;
    slower?: string;
    [key: string]: string | undefined;
  };
  easing?: {
    linear?: string;
    easeIn?: string;
    easeOut?: string;
    easeInOut?: string;
    bounce?: string;
    [key: string]: string | undefined;
  };
  delay?: {
    none?: string;
    short?: string;
    medium?: string;
    long?: string;
    [key: string]: string | undefined;
  };
}

export interface BreakpointTokens {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  [key: string]: string | undefined;
}

export interface ZIndexTokens {
  hide?: number;
  auto?: string;
  base?: number;
  docked?: number;
  dropdown?: number;
  sticky?: number;
  banner?: number;
  overlay?: number;
  modal?: number;
  popover?: number;
  skipLink?: number;
  toast?: number;
  tooltip?: number;
  [key: string]: number | string | undefined;
}

export interface DesignTokens {
  primitives?: {
    colors?: ColorPalette;
    spacing?: SpacingScale;
    radius?: RadiusScale;
    shadows?: ShadowScale;
    typography?: TypographyTokens;
    motion?: MotionTokens;
    breakpoints?: BreakpointTokens;
    zIndex?: ZIndexTokens;
    [key: string]: unknown;
  };
  semantics?: SemanticColors;
  themes?: {
    light?: SemanticColors;
    dark?: SemanticColors;
    [themeName: string]: SemanticColors | undefined;
  };
  [key: string]: unknown;
}

export interface TokensContextValue {
  tokens: DesignTokens;
  getColor: (path: string, fallback?: string) => string;
  getSpacing: (key: string, fallback?: string) => string;
  getRadius: (key: string, fallback?: string) => string;
  getShadow: (key: string, fallback?: string) => string;
  getMotion: (type: 'duration' | 'easing' | 'delay', key: string, fallback?: string) => string;
}
