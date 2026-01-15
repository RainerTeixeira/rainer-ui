import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { D as DesignTokens, T as TokensContextValue } from '../../tokens-A_UK8Q2r.mjs';

declare const DEFAULT_TOKENS: DesignTokens;
declare const TokensContext: React.Context<TokensContextValue>;
interface TokensProviderProps {
    tokens?: DesignTokens;
    children: React.ReactNode;
}
declare function TokensProvider({ tokens: customTokens, children }: TokensProviderProps): react_jsx_runtime.JSX.Element;
declare function useTokens(): TokensContextValue;

export { DEFAULT_TOKENS, TokensContext, TokensProvider, type TokensProviderProps, useTokens };
