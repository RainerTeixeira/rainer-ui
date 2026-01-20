'use client';

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return {
    scrollToTop,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}
