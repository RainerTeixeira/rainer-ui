'use client';

import {
  onReducedMotionChange,
  prefersReducedMotion,
  scrollToPosition,
  scrollToTop,
  smoothScrollTo,
} from '../lib/scroll-utils';
import { useCallback, useEffect, useState } from 'react';

export function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());

    const cleanup = onReducedMotionChange((matches: boolean) => {
      setReducedMotion(matches);
    });

    return cleanup;
  }, []);

  const scrollTo = useCallback(
    (target: string | Element, options?: ScrollIntoViewOptions) => {
      smoothScrollTo(target, options);
    },
    []
  );

  const toTop = useCallback(() => {
    scrollToTop();
  }, []);

  const toPosition = useCallback((top: number, left: number = 0) => {
    scrollToPosition(left, top);
  }, []);

  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion,
  };
}

