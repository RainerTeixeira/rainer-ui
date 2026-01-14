import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { D as DesignTokens } from '../../tokens-A_UK8Q2r.js';
import { A as AdapterConfig } from '../../adapter-C0BoFTMd.js';

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
