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
export declare function FloatingGrid({ variant, intensity, }?: FloatingGridProps): import("react/jsx-runtime").JSX.Element;
export default FloatingGrid;
