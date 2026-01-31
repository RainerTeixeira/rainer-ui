import React__default from 'react';

/**
 * Hook para gerar e gerenciar índice de conteúdo (Table of Contents)
 *
 * @param {Object} params - Parâmetros do hook
 * @param {React.RefObject} params.containerRef - Ref do container com o conteúdo
 * @param {string[]} params.headings - Seletor dos títulos (default: ['h2', 'h3'])
 * @param {Object} params.options - Opções de configuração
 * @param {number} params.options.offset - Offset para scroll (default: 100)
 * @param {boolean} params.options.smoothScroll - Se usa scroll suave (default: true)
 * @param {boolean} params.options.activeOnScroll - Se destaca item ativo ao rolar (default: true)
 * @param {boolean} params.options.nested - Se gera TOC aninhado (default: true)
 *
 * @returns {Object} Objeto com TOC e funções de controle
 */

declare function useTableOfContents({ containerRef, headings, options }: {
    containerRef: React__default.RefObject<HTMLElement>;
    headings?: string[];
    options?: {
        offset?: number;
        smoothScroll?: boolean;
        activeOnScroll?: boolean;
        nested?: boolean;
    };
}): {
    items: TocItem[];
    nestedItems: NestedTocItem[];
    renderItems: RenderedTocItem[];
    activeId: string;
    hasItems: boolean;
    scrollToItem: (itemId: string) => void;
    refresh: () => void;
    reset: () => void;
    stats: {
        totalItems: number;
        levels: number[];
        levelCounts: Record<number, number>;
        hasActive: boolean;
        activeIndex: number;
    };
    generateTOC: () => TocItem[];
    renderItem: (item: TocItem | NestedTocItem, depth?: number) => {
        isActive: boolean;
        depth: number;
        hasChildren: boolean;
        scrollTo: () => void;
        id: string;
        text: string;
        level: number;
        element: HTMLElement;
        index: number;
    } | {
        isActive: boolean;
        depth: number;
        hasChildren: boolean;
        scrollTo: () => void;
        children: NestedTocItem[];
        id: string;
        text: string;
        level: number;
        element: HTMLElement;
        index: number;
    };
};
interface TocItem {
    id: string;
    text: string;
    level: number;
    element: HTMLElement;
    index: number;
}
interface NestedTocItem extends TocItem {
    children: NestedTocItem[];
}
interface RenderedTocItem extends TocItem {
    isActive: boolean;
    depth: number;
    hasChildren: boolean;
    scrollTo: () => void;
}

export { useTableOfContents };
