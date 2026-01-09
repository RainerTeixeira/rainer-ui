"use client"
import React from "react";
function useCarouselKeyboard({
  totalItems,
  currentIndex = 0,
  onIndexChange,
  autoPlay = false,
  autoPlayInterval = 3e3,
  options = {}
}) {
  const {
    loop = true,
    pauseOnHover = true,
    keyMap = ["ArrowLeft", "ArrowRight"]
  } = options;
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = React.useRef(null);
  const containerRef = React.useRef(null);
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
  const goTo = React.useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      onIndexChange?.(index);
    }
  }, [totalItems, onIndexChange]);
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
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (!keyMap.includes(event.key)) return;
      event.preventDefault();
      if (event.key === keyMap[0]) {
        prev();
      } else if (event.key === keyMap[1]) {
        next();
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
    } else {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [keyMap, next, prev]);
  React.useEffect(() => {
    if (!pauseOnHover || !autoPlay) return;
    const container = containerRef.current;
    if (!container) return;
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover, autoPlay]);
  const pause = React.useCallback(() => {
    setIsPaused(true);
  }, []);
  const resume = React.useCallback(() => {
    setIsPaused(false);
  }, []);
  const stop = React.useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
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
    progress: totalItems > 0 ? (currentIndex + 1) / totalItems * 100 : 0
  };
}
export {
  useCarouselKeyboard
};
//# sourceMappingURL=use-carousel-keyboard.mjs.map