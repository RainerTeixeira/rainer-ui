'use client';

import * as React from 'react';
import type { DesignTokens, TokensContextValue } from '../../types/tokens';

const DEFAULT_TOKENS: DesignTokens = {
  primitives: {
    colors: {
      cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344',
      },
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
    },
    spacing: {
      0: '0',
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
    },
    radius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      none: 'none',
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    },
    motion: {
      duration: {
        instant: '0ms',
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
        slower: '700ms',
      },
      easing: {
        linear: 'linear',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      delay: {
        none: '0ms',
        short: '75ms',
        medium: '150ms',
        long: '300ms',
      },
    },
  },
  semantics: {
    text: {
      primary: '#0a0a0a',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#a3a3a3',
      inverse: '#fafafa',
      link: '#0891b2',
      linkHover: '#0e7490',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#e5e5e5',
      disabled: '#f5f5f5',
      overlay: 'rgba(0, 0, 0, 0.5)',
      inverse: '#0a0a0a',
      muted: '#f5f5f5',
    },
    border: {
      default: '#e5e5e5',
      light: '#f5f5f5',
      medium: '#d4d4d4',
      dark: '#a3a3a3',
      focus: '#0891b2',
      error: '#ef4444',
      success: '#22c55e',
      warning: '#f59e0b',
    },
    status: {
      success: { base: '#22c55e', text: '#ffffff', background: '#dcfce7' },
      error: { base: '#ef4444', text: '#ffffff', background: '#fee2e2' },
      warning: { base: '#f59e0b', text: '#000000', background: '#fef3c7' },
      info: { base: '#3b82f6', text: '#ffffff', background: '#dbeafe' },
    },
    surface: {
      primary: '#ffffff',
      elevated: '#ffffff',
      raised: '#fafafa',
      sunken: '#f5f5f5',
    },
  },
};

function getNestedValue(obj: unknown, path: string, fallback: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return fallback;
    }
  }
  
  return typeof current === 'string' ? current : fallback;
}

const TokensContext = React.createContext<TokensContextValue | null>(null);

export interface TokensProviderProps {
  tokens?: DesignTokens;
  children: React.ReactNode;
}

export function TokensProvider({ tokens: customTokens, children }: TokensProviderProps) {
  const tokens = React.useMemo(() => {
    if (!customTokens) return DEFAULT_TOKENS;
    return {
      ...DEFAULT_TOKENS,
      ...customTokens,
      primitives: {
        ...DEFAULT_TOKENS.primitives,
        ...customTokens.primitives,
      },
      semantics: {
        ...DEFAULT_TOKENS.semantics,
        ...customTokens.semantics,
      },
    };
  }, [customTokens]);

  const getColor = React.useCallback((path: string, fallback = '#000000') => {
    return getNestedValue(tokens.primitives?.colors, path, fallback) ||
           getNestedValue(tokens.semantics, path, fallback);
  }, [tokens]);

  const getSpacing = React.useCallback((key: string, fallback = '0') => {
    return tokens.primitives?.spacing?.[key] ?? fallback;
  }, [tokens]);

  const getRadius = React.useCallback((key: string, fallback = '0') => {
    return tokens.primitives?.radius?.[key] ?? fallback;
  }, [tokens]);

  const getShadow = React.useCallback((key: string, fallback = 'none') => {
    return tokens.primitives?.shadows?.[key] ?? fallback;
  }, [tokens]);

  const getMotion = React.useCallback((
    type: 'duration' | 'easing' | 'delay',
    key: string,
    fallback = ''
  ) => {
    return tokens.primitives?.motion?.[type]?.[key] ?? fallback;
  }, [tokens]);

  const value: TokensContextValue = React.useMemo(() => ({
    tokens,
    getColor,
    getSpacing,
    getRadius,
    getShadow,
    getMotion,
  }), [tokens, getColor, getSpacing, getRadius, getShadow, getMotion]);

  return (
    <TokensContext.Provider value={value}>
      {children}
    </TokensContext.Provider>
  );
}

export function useTokens(): TokensContextValue {
  const context = React.useContext(TokensContext);
  if (!context) {
    return {
      tokens: DEFAULT_TOKENS,
      getColor: (path: string, fallback = '#000000') => 
        getNestedValue(DEFAULT_TOKENS.primitives?.colors, path, fallback) ||
        getNestedValue(DEFAULT_TOKENS.semantics, path, fallback),
      getSpacing: (key: string, fallback = '0') => 
        DEFAULT_TOKENS.primitives?.spacing?.[key] ?? fallback,
      getRadius: (key: string, fallback = '0') => 
        DEFAULT_TOKENS.primitives?.radius?.[key] ?? fallback,
      getShadow: (key: string, fallback = 'none') => 
        DEFAULT_TOKENS.primitives?.shadows?.[key] ?? fallback,
      getMotion: (type: 'duration' | 'easing' | 'delay', key: string, fallback = '') => 
        DEFAULT_TOKENS.primitives?.motion?.[type]?.[key] ?? fallback,
    };
  }
  return context;
}

export { TokensContext, DEFAULT_TOKENS };
