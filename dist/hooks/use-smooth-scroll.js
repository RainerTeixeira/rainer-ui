'use strict';

var react = require('react');

// src/lib/scroll-utils.ts
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
    return;
  }
  const shouldAnimate = !prefersReducedMotion();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop() {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion();
  window.scrollTo({
    top: y,
    left: x,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function onReducedMotionChange(callback) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (event) => {
    callback(event.matches);
  };
  handler(mediaQuery);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  return () => {
  };
}
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = react.useState(false);
  react.useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = react.useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = react.useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = react.useCallback((top, left = 0) => {
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

exports.useSmoothScroll = useSmoothScroll;
//# sourceMappingURL=use-smooth-scroll.js.map
//# sourceMappingURL=use-smooth-scroll.js.map