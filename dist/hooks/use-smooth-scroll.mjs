"use client"
"use client";
import {
  onReducedMotionChange,
  prefersReducedMotion,
  scrollToPosition,
  scrollToTop,
  smoothScrollTo
} from "../lib/scroll-utils";
import { useCallback, useEffect, useState } from "react";
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = useCallback((top, left = 0) => {
    scrollToPosition(left, top);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
export {
  useSmoothScroll
};
//# sourceMappingURL=use-smooth-scroll.mjs.map