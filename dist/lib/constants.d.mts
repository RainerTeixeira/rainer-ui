/**
 * UI Constants
 *
 * Constants para UI components que não dependem de design tokens
 * Centraliza valores compartilhados entre componentes
 */
declare const Z_INDEX: {
    readonly BACKDROP: "999";
    readonly MODAL: "1000";
    readonly DROPDOWN: "1050";
    readonly TOOLTIP: "1100";
    readonly NAVIGATION: "1200";
    readonly OVERLAY: "1300";
    readonly STICKY: "1400";
    readonly FIXED: "1500";
};
declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: "transition-all duration-200 ease-in-out";
        readonly FAST: "transition-all duration-150 ease-in-out";
        readonly SLOW: "transition-all duration-300 ease-in-out";
        readonly COLOR: "transition-colors duration-200 ease-in-out";
        readonly TRANSFORM: "transition-transform duration-200 ease-in-out";
        readonly OPACITY: "transition-opacity duration-200 ease-in-out";
    };
    readonly DURATION: {
        readonly FAST: "150ms";
        readonly NORMAL: "200ms";
        readonly SLOW: "300ms";
    };
    readonly EASING: {
        readonly DEFAULT: "ease-in-out";
        readonly EASE_IN: "ease-in";
        readonly EASE_OUT: "ease-out";
    };
};
declare const GRADIENT_DIRECTIONS: {
    readonly TO_TOP: "to-t";
    readonly TO_RIGHT: "to-r";
    readonly TO_BOTTOM: "to-b";
    readonly TO_LEFT: "to-l";
    readonly TO_TOP_RIGHT: "to-tr";
    readonly TO_TOP_LEFT: "to-tl";
    readonly TO_BOTTOM_RIGHT: "to-br";
    readonly TO_BOTTOM_LEFT: "to-bl";
};

export { GRADIENT_DIRECTIONS, MOTION, Z_INDEX };
