import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Celestial Background Component
 *
 * Background sofisticado tipo espaço celestial para dark mode.
 * Combina múltiplas camadas de estrelas, nebulosas e gradientes sutis.
 *
 * Características:
 * - Apenas renderizado em dark mode (opacity: 0 em light mode)
 * - Estrelas geradas aleatoriamente com diferentes tamanhos e opacidades
 * - Gradientes sutis simulando nebulosas espaciais
 * - Efeitos de brilho sutis
 * - Performance otimizada (pointer-events-none, fixed)
 * - Não interfere com interações
 *
 * @fileoverview Background celestial para dark mode
 * @author Rainer Teixeira
 * @version 1.0.0
 */
interface CelestialBackgroundProps {
    /** Variante do background (default, dense, sparse) */
    variant?: 'default' | 'dense' | 'sparse';
    /** Permite sobrescrever as cores principais */
    colors?: {
        cyan?: string;
        purple?: string;
        pink?: string;
    };
}
/**
 * CelestialBackground - Background celestial para dark mode
 *
 * @param variant - Variante de densidade (default, dense, sparse)
 * @returns Container fixo com efeito celestial
 */
declare function CelestialBackground({ variant, }: CelestialBackgroundProps): react_jsx_runtime.JSX.Element;

export { CelestialBackground, CelestialBackground as default };
