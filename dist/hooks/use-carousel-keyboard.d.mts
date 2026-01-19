import React__default from 'react';

/**
 * Hook useCarouselKeyboard
 *
 * Hook para gerenciar navegação por teclado em carrosséis.
 *
 * @module @rainersoft/ui/hooks
 * @author Rainer Teixeira
 */
/**
 * Hook para controlar carrossel com teclado
 *
 * @param {Object} params - Parâmetros do hook
 * @param {number} params.totalItems - Total de itens no carrossel
 * @param {number} params.currentIndex - Índice atual
 * @param {Function} params.onIndexChange - Callback quando índice muda
 * @param {boolean} params.autoPlay - Se auto-play está ativo
 * @param {number} params.autoPlayInterval - Intervalo do auto-play em ms
 * @param {Object} params.options - Opções adicionais
 * @param {boolean} params.options.loop - Se deve voltar ao início quando chegar no fim
 * @param {boolean} params.options.pauseOnHover - Se deve pausar auto-play ao passar mouse
 * @param {string[]} params.options.keyMap - Mapeamento de teclas (default: ['ArrowLeft', 'ArrowRight'])
 *
 * @returns {Object} Objeto com funções de controle e estado
 */

declare function useCarouselKeyboard({ totalItems, currentIndex, onIndexChange, autoPlay, autoPlayInterval, options }: {
    totalItems: number;
    currentIndex?: number;
    onIndexChange?: (index: number) => void;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    options?: {
        loop?: boolean;
        pauseOnHover?: boolean;
        keyMap?: string[];
    };
}): {
    containerRef: React__default.RefObject<HTMLElement>;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    pause: () => void;
    resume: () => void;
    stop: () => void;
    isPaused: boolean;
    canGoNext: boolean;
    canGoPrev: boolean;
    isFirst: boolean;
    isLast: boolean;
    progress: number;
};

export { useCarouselKeyboard };
