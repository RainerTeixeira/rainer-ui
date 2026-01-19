'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

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
    // Apply tokens to CSS variables
    if (tokens) {
      const root = document.documentElement;
      
      // Apply color tokens
      if (tokens.color) {
        Object.entries(tokens.color).forEach(([key, value]: [string, any]) => {
          if (typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subValue]) => {
              root.style.setProperty(`--color-${key}-${subKey}`, subValue as string);
            });
          } else {
            root.style.setProperty(`--color-${key}`, value as string);
          }
        });
      }

      // Apply other token categories
      Object.entries(tokens).forEach(([category, categoryTokens]) => {
        if (category !== 'color' && typeof categoryTokens === 'object') {
          Object.entries(categoryTokens).forEach(([key, value]) => {
            if (typeof value === 'string') {
              root.style.setProperty(`--${category}-${key}`, value);
            }
          });
        }
      });
    }
  }, [tokens]);

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