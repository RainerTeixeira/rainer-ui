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

// Importar React
import React from 'react';

export function useCarouselKeyboard({
  totalItems,
  currentIndex = 0,
  onIndexChange,
  autoPlay = false,
  autoPlayInterval = 3000,
  options = {}
}: {
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
}) {
  const {
    loop = true,
    pauseOnHover = true,
    keyMap = ['ArrowLeft', 'ArrowRight']
  } = options;

  // Estado para controlar se auto-play está pausado
  const [isPaused, setIsPaused] = React.useState(false);

  // Refs para controle do intervalo e elementos DOM
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const containerRef = React.useRef<HTMLElement | null>(null);

  // Função para ir para o próximo item
  const next = React.useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalItems) {
      if (loop) {
        onIndexChange?.(0);
      }
    } else {
      onIndexChange?.(nextIndex);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);

  // Função para ir para o item anterior
  const prev = React.useCallback(() => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      if (loop) {
        onIndexChange?.(totalItems - 1);
      }
    } else {
      onIndexChange?.(prevIndex);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);

  // Função para ir para um item específico
  const goTo = React.useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      onIndexChange?.(index);
    }
  }, [totalItems, onIndexChange]);

  // Configurar auto-play
  React.useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(next, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, next, autoPlayInterval]);

  // Configurar listeners de teclado
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!keyMap.includes(event.key)) return;

      // Previne comportamento padrão do navegador
      event.preventDefault();

      if (event.key === keyMap[0]) {
        prev(); // Primeira tecla (default: ArrowLeft)
      } else if (event.key === keyMap[1]) {
        next(); // Segunda tecla (default: ArrowRight)
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
    } else {
      // Se não tiver container, adiciona no document
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown);
      } else {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [keyMap, next, prev]);

  // Configurar pause on hover
  React.useEffect(() => {
    if (!pauseOnHover || !autoPlay) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover, autoPlay]);

  // Função para pausar manualmente
  const pause = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  // Função para resumir auto-play
  const resume = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  // Função para parar auto-play completamente
  const stop = React.useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Retornar funções de controle e estado
  return {
    // Refs
    containerRef,
    
    // Funções de navegação
    next,
    prev,
    goTo,
    
    // Controle de auto-play
    pause,
    resume,
    stop,
    
    // Estado
    isPaused,
    canGoNext: loop || currentIndex < totalItems - 1,
    canGoPrev: loop || currentIndex > 0,
    
    // Utilitários
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalItems - 1,
    progress: totalItems > 0 ? ((currentIndex + 1) / totalItems) * 100 : 0
  };
}
