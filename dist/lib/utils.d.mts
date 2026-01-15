import { ClassValue } from 'clsx';
export { hexToRGB, hexToRGBA } from './color-utils.mjs';

/**
 * Biblioteca de Utilitários de Componentes UI
 *
 * Fonte única de verdade: @rainersoft/design-tokens
 * Usa tokens.json para valores de build-time e CSS vars para runtime dinâmico
 *
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

/**
 * Combina e mescla classes CSS de forma inteligente
 *
 * Esta função é essencial para trabalhar com Tailwind CSS e componentes
 * dinâmicos. Ela resolve conflitos entre classes Tailwind e permite
 * composição condicional de estilos.
 *
 * @param inputs - Classes CSS para combinar
 * @returns String final com classes CSS mescladas
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500') // "px-4 py-2 bg-blue-500"
 * cn('px-4', 'px-2') // "px-2" (resolve conflitos)
 * cn('btn', { 'btn-active': isActive })
 * ```
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Classes CSS para componentes responsivos
 */
declare const COMPONENT_CLASSES: {
    /** Container padrão com largura máxima e padding responsivo */
    readonly container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
    /** Espaçamento vertical responsivo */
    readonly spacing: "space-y-4 sm:space-y-6 md:space-y-8";
    /** Classes base para cards */
    readonly card: {
        readonly base: "rounded-lg border bg-card text-card-foreground shadow-sm";
        readonly hover: "transition-all duration-200 hover:shadow-lg";
    };
    /** Classes base para buttons */
    readonly button: {
        readonly base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    };
    /** Classes base para inputs */
    readonly input: {
        readonly base: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    };
};
/**
 * Classes utilitárias para seções de página
 * Usado por componentes de layout como PageHeader.
 */
declare const SECTION_CLASSES: {
    /** Container padrão de página com largura máxima e padding responsivo */
    readonly container: "w-full max-w-6xl mx-auto px-6 py-12";
};
/**
 * Motion tokens - Importados diretamente do @rainersoft/design-tokens
 *
 * @description
 * Única fonte de verdade para tokens de motion (duração, easing, delay).
 * Importados diretamente do pacote design-tokens via ES modules.
 */
declare const motion: any;
/**
 * Motion semântico - Importado dos tokens de motion
 *
 * @description
 * Animações organizadas semanticamente para uso em componentes.
 * Usa tokens.MOTION como fonte única de verdade.
 */
declare const motionSemantic: any;
/**
 * Delays de animação importados dos design tokens
 *
 * @description
 * Usa motion.delay com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DELAYS: any;
/**
 * Durações de animação importadas dos design tokens
 *
 * @description
 * Usa motion.duration com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DURATIONS: any;
/**
 * Easings de animação importados dos design tokens
 *
 * @description
 * Usa motion.easing com fallback seguro para garantir
 * transições suaves e consistentes.
 */
declare const ANIMATION_EASINGS: any;
/**
 * Motion presets prontos para uso
 *
 * @description
 * Combinações pre-configuradas de duration + easing para casos comuns
 *
 * @example
 * ```tsx
 * <motion.div
 *   transition={motionPresets.default}
 * />
 * ```
 */
declare const motionPresets: {
    default: {
        duration: any;
        easing: any;
    };
    fast: {
        duration: any;
        easing: any;
    };
    slow: {
        duration: any;
        easing: any;
    };
    spring: {
        duration: any;
        easing: any;
    };
    semantic: {
        transition: any;
        interaction: any;
        feedback: any;
        navigation: any;
    };
};

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, SECTION_CLASSES, cn, motion, motionPresets, motionSemantic };
