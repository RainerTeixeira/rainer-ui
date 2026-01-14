/**
 * Scroll Utilities
 *
 * Utilitários de scroll acessíveis que respeitam automaticamente
 * as preferências de acessibilidade do usuário.
 *
 * @module @rainersoft/ui/scroll-utils
 * @author Rainer Teixeira
 */
/**
 * Verifica se o usuário prefere movimento reduzido
 */
declare function prefersReducedMotion(): boolean;
/**
 * Faz scroll suave para um elemento específico
 */
declare function smoothScrollTo(target: string | Element, options?: ScrollIntoViewOptions): void;
/**
 * Faz scroll para o topo da página
 */
declare function scrollToTop(): void;
/**
 * Faz scroll para uma posição específica
 */
declare function scrollToPosition(x: number, y: number, smooth?: boolean): void;
/**
 * Desabilita scroll da página
 */
declare function disableScroll(): void;
/**
 * Habilita scroll da página
 */
declare function enableScroll(): void;
/**
 * Observa mudanças na preferência de movimento reduzido
 */
declare function onReducedMotionChange(callback: (matches: boolean) => void): () => void;

export { disableScroll, enableScroll, onReducedMotionChange, prefersReducedMotion, scrollToPosition, scrollToTop, smoothScrollTo };
