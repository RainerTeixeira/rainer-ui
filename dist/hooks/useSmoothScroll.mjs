import { useCallback } from 'react';

function useSmoothScroll() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return {
    scrollToTop,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };
}

export { useSmoothScroll };
//# sourceMappingURL=useSmoothScroll.mjs.map
//# sourceMappingURL=useSmoothScroll.mjs.map