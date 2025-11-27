/**
 * Scroll Utils (cópia do frontend para a lib UI)
 */

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function smoothScrollTo(
  target: string | Element,
  options?: ScrollIntoViewOptions
): void {
  const element =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) {
    return;
  }

  const shouldAnimate = !prefersReducedMotion();

  element.scrollIntoView({
    behavior: shouldAnimate ? 'smooth' : 'auto',
    block: 'start',
    inline: 'nearest',
    ...options,
  });
}

export function scrollToTop(): void {
  const shouldAnimate = !prefersReducedMotion();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? 'smooth' : 'auto',
  });
}

export function scrollToPosition(top: number, left: number = 0): void {
  const shouldAnimate = !prefersReducedMotion();

  window.scrollTo({
    top,
    left,
    behavior: shouldAnimate ? 'smooth' : 'auto',
  });
}

export function onReducedMotionChange(
  callback: (matches: boolean) => void
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const handler = (event: MediaQueryListEvent | MediaQueryList) => {
    callback(event.matches);
  };

  handler(mediaQuery);

  if (
    mediaQuery.addEventListener &&
    typeof mediaQuery.addEventListener === 'function'
  ) {
    mediaQuery.addEventListener('change', handler);
    return () => {
      if (
        mediaQuery.removeEventListener &&
        typeof mediaQuery.removeEventListener === 'function'
      ) {
        mediaQuery.removeEventListener('change', handler);
      }
    };
  }

  if (mediaQuery.addListener && typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handler);
    return () => {
      if (
        mediaQuery.removeListener &&
        typeof mediaQuery.removeListener === 'function'
      ) {
        mediaQuery.removeListener(handler);
      }
    };
  }

  return () => {};
}
