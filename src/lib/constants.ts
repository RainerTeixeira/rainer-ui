/**
 * UI Constants
 * 
 * Constants para UI components que não dependem de design tokens
 * Centraliza valores compartilhados entre componentes
 */

export const Z_INDEX = {
  BACKDROP: '999',
  MODAL: '1000',
  DROPDOWN: '1050',
  TOOLTIP: '1100',
  NAVIGATION: '1200',
  OVERLAY: '1300',
  STICKY: '1400',
  FIXED: '1500',
} as const;

export const MOTION = {
  TRANSITION: {
    DEFAULT: 'transition-all duration-200 ease-in-out',
    FAST: 'transition-all duration-150 ease-in-out',
    SLOW: 'transition-all duration-300 ease-in-out',
    COLOR: 'transition-colors duration-200 ease-in-out',
    TRANSFORM: 'transition-transform duration-200 ease-in-out',
    OPACITY: 'transition-opacity duration-200 ease-in-out',
  },
  DURATION: {
    FAST: '150ms',
    NORMAL: '200ms',
    SLOW: '300ms',
  },
  EASING: {
    DEFAULT: 'ease-in-out',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
  },
} as const;

export const GRADIENT_DIRECTIONS = {
  TO_TOP: 'to-t',
  TO_RIGHT: 'to-r',
  TO_BOTTOM: 'to-b',
  TO_LEFT: 'to-l',
  TO_TOP_RIGHT: 'to-tr',
  TO_TOP_LEFT: 'to-tl',
  TO_BOTTOM_RIGHT: 'to-br',
  TO_BOTTOM_LEFT: 'to-bl',
} as const;
