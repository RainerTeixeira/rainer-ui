'use client';

import * as React from 'react';
import { ThemeProvider } from './theme-provider';
import { TokensProvider } from './tokens-provider';
import type { DesignTokens } from '../../types/tokens';
import type { AdapterConfig } from '../../types/adapter';

export interface UIProviderProps {
  children: React.ReactNode;
  tokens?: DesignTokens;
  defaultTheme?: 'light' | 'dark' | 'system';
  enableSystem?: boolean;
  storageKey?: string;
  adapter?: AdapterConfig;
  disableThemeProvider?: boolean;
  disableTokensProvider?: boolean;
}

export function UIProvider({
  children,
  tokens,
  defaultTheme = 'dark',
  enableSystem = true,
  storageKey = 'rainer-ui-theme',
  adapter,
  disableThemeProvider = false,
  disableTokensProvider = false,
}: UIProviderProps) {
  const resolvedTokens = React.useMemo(() => {
    if (adapter?.tokens) return adapter.tokens;
    return tokens;
  }, [adapter, tokens]);

  let content = children;

  if (!disableTokensProvider) {
    content = (
      <TokensProvider tokens={resolvedTokens}>
        {content}
      </TokensProvider>
    );
  }

  if (!disableThemeProvider) {
    content = (
      <ThemeProvider
        defaultTheme={defaultTheme}
        enableSystem={enableSystem}
        storageKey={storageKey}
      >
        {content}
      </ThemeProvider>
    );
  }

  return <>{content}</>;
}
