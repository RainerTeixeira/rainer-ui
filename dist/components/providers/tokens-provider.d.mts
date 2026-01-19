import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface TokensContextType {
    tokens: any;
    setTokens: (tokens: any) => void;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}
interface TokensProviderProps {
    tokens: any;
    children: React__default.ReactNode;
}
declare function TokensProvider({ tokens: initialTokens, children }: TokensProviderProps): react_jsx_runtime.JSX.Element;
declare function useTokens(): TokensContextType;

export { TokensProvider, useTokens };
