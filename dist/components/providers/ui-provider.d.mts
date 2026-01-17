import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { D as DesignTokens } from '../../tokens-B1TMkK7f.mjs';
import { A as AdapterConfig } from '../../adapter-Ao-UsVV1.mjs';

interface UIProviderProps {
    children: React.ReactNode;
    tokens?: DesignTokens;
    defaultTheme?: 'light' | 'dark' | 'system';
    enableSystem?: boolean;
    storageKey?: string;
    adapter?: AdapterConfig;
    disableThemeProvider?: boolean;
    disableTokensProvider?: boolean;
}
declare function UIProvider({ children, tokens, defaultTheme, enableSystem, storageKey, adapter, disableThemeProvider, disableTokensProvider, }: UIProviderProps): react_jsx_runtime.JSX.Element;

export { UIProvider, type UIProviderProps };
