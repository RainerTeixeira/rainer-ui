'use strict';

var react = require('react');

function useSmoothScroll() {
  const scrollToTop = react.useCallback(() => {
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

exports.useSmoothScroll = useSmoothScroll;
//# sourceMappingURL=useSmoothScroll.js.map
//# sourceMappingURL=useSmoothScroll.js.map