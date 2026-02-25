import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Floating Grid Component
 *
 * Grid futurista cyberpunk que flutua no espaço
 * Cria profundidade e atmosfera futurista
 * Renderizado APENAS no modo dark
 */
interface FloatingGridProps {
    /** Variante do grid (default, dense, sparse) */
    variant?: 'default' | 'dense' | 'sparse';
    /** Intensidade da animação (0.1 a 1) */
    intensity?: number;
}
declare function FloatingGrid({ variant, intensity, }?: FloatingGridProps): react_jsx_runtime.JSX.Element;

export { FloatingGrid, FloatingGrid as default };
