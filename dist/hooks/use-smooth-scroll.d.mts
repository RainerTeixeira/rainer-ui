declare function useSmoothScroll(): {
    scrollTo: (target: string | Element, options?: ScrollIntoViewOptions) => void;
    scrollToTop: () => void;
    scrollToPosition: (top: number, left?: number) => void;
    reducedMotion: boolean;
    shouldAnimate: boolean;
};

export { useSmoothScroll };
