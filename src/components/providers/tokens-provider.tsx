'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface TokensContextType {
  tokens: any;
  setTokens: (tokens: any) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const TokensContext = createContext<TokensContextType | undefined>(undefined);

interface TokensProviderProps {
  tokens: any;
  children: React.ReactNode;
}

export function TokensProvider({ tokens: initialTokens, children }: TokensProviderProps) {
  const [tokens, setTokens] = useState(initialTokens);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      const isDark = root.classList.contains('dark') || root.dataset.theme === 'dark';
      setTheme(isDark ? 'dark' : 'light');
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-theme'] });

    return () => observer.disconnect();
  }, []);

  const themedTokens = useMemo(() => {
    if (!tokens) return undefined;
    return (tokens as any)?.themes?.[theme] ?? (tokens as any)?.[`${theme}Theme`] ?? tokens;
  }, [tokens, theme]);

  useEffect(() => {
    // Apply tokens to CSS variables
    if (themedTokens) {
      const root = document.documentElement;

      // Apply color tokens
      if (themedTokens.color) {
        const applyColorVars = (value: unknown, path: string[]) => {
          if (typeof value === 'string') {
            root.style.setProperty(`--color-${path.join('-')}`, value);
            return;
          }

          if (value && typeof value === 'object') {
            Object.entries(value as Record<string, unknown>).forEach(([k, v]) => {
              applyColorVars(v, [...path, k]);
            });
          }
        };

        Object.entries(themedTokens.color as Record<string, unknown>).forEach(([key, value]) => {
          applyColorVars(value, [key]);
        });
      }

      // Apply other token categories
      Object.entries(themedTokens).forEach(([category, categoryTokens]) => {
        if (category !== 'color' && typeof categoryTokens === 'object') {
          Object.entries(categoryTokens).forEach(([key, value]) => {
            if (typeof value === 'string') {
              root.style.setProperty(`--${category}-${key}`, value);
            }
          });
        }
      });
      // Sync color-scheme
      root.style.setProperty('color-scheme', theme);
    }
  }, [themedTokens, theme]);

  useEffect(() => {
    // Apply theme class to root
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const value = {
    tokens,
    setTokens,
    theme,
    setTheme,
  };

  return (
    <TokensContext.Provider value={value}>
      {children}
    </TokensContext.Provider>
  );
}

export function useTokens() {
  const context = useContext(TokensContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokensProvider');
  }
  return context;
}