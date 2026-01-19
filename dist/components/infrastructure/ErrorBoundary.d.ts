import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    readonly children: ReactNode;
    readonly fallback?: ReactNode;
    readonly onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface ErrorBoundaryState {
    readonly hasError: boolean;
    readonly error: Error | null;
    readonly errorInfo: ErrorInfo | null;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    handleReset: () => void;
    handleGoHome: () => void;
    render(): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<ReactNode>> | react_jsx_runtime.JSX.Element;
}

export { ErrorBoundary, type ErrorBoundaryProps, type ErrorBoundaryState };
