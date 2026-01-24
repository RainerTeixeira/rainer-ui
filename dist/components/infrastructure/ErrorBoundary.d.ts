/**
 * Error Boundary Component
 *
 * Componente de tratamento de erros global para React. Captura erros em
 * componentes filhos e exibe UI de fallback elegante.
 *
 * @module @rainersoft/utils/error-boundary
 * @author Rainer Teixeira
 */
import { Component, ErrorInfo, ReactNode } from 'react';
export interface ErrorBoundaryProps {
    readonly children: ReactNode;
    readonly fallback?: ReactNode;
    readonly onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
export interface ErrorBoundaryState {
    readonly hasError: boolean;
    readonly error: Error | null;
    readonly errorInfo: ErrorInfo | null;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    handleReset: () => void;
    handleGoHome: () => void;
    render(): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element;
}
