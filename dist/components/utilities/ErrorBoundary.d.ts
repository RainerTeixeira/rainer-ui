import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, ErrorInfo, Component } from 'react';

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
    render(): string | number | boolean | Iterable<ReactNode> | react_jsx_runtime.JSX.Element;
}

export { ErrorBoundary, type ErrorBoundaryProps, type ErrorBoundaryState };
