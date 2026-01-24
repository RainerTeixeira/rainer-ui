import React from 'react';
interface TokensContextType {
    tokens: any;
    setTokens: (tokens: any) => void;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}
interface TokensProviderProps {
    tokens: any;
    children: React.ReactNode;
}
export declare function TokensProvider({ tokens: initialTokens, children }: TokensProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useTokens(): TokensContextType;
export {};
