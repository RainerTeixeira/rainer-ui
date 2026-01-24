/**
 * Inline Loader Component
 *
 * Loader inline para uso dentro de botões ou textos.
 * Animação suave com dots e acessibilidade completa.
 *
 * @module @rainersoft/ui/ui
 * @author Rainer Teixeira
 * @version 1.0.0
 */
interface InlineLoaderProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'dots' | 'spinner';
}
export declare function InlineLoader({ className, size, variant }: InlineLoaderProps): import("react/jsx-runtime").JSX.Element;
export {};
