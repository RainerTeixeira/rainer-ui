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

// Importar React
import * as React from 'react';


/**
 * Implementação local de scrollToElement para evitar problemas de dependências
 */
function scrollToElement(
  element: string | Element,
  options: {
    smooth?: boolean;
    offset?: number;
    behavior?: ScrollBehavior;
  } = {}
): void {
  if (typeof window === 'undefined') return;
  
  const { smooth = false, offset = 0, behavior } = options;
  
  let targetElement: Element | null;
  
  if (typeof element === 'string') {
    targetElement = document.querySelector(element);
  } else {
    targetElement = element;
  }
  
  if (!targetElement) return;
  
  const rect = targetElement.getBoundingClientRect();
  const absoluteY = rect.top + window.scrollY - offset;
  
  window.scrollTo({
    left: 0,
    top: absoluteY,
    behavior: behavior || (smooth ? 'smooth' : 'auto')
  });
}

export function useTableOfContents({
  containerRef,
  headings = ['h2', 'h3'],
  options = {}
}: {
  containerRef: React.RefObject<HTMLElement>;
  headings?: string[];
  options?: {
    offset?: number;
    smoothScroll?: boolean;
    activeOnScroll?: boolean;
    nested?: boolean;
  };
}) {
  const {
    offset = 100,
    smoothScroll = true,
    activeOnScroll = true,
    nested = true
  } = options;

  // Estado para armazenar itens do TOC
  const [items, setItems] = React.useState<TocItem[]>([]);
  
  // Estado para item ativo
  const [activeId, setActiveId] = React.useState<string | null>(null);

  // Gerar TOC a partir dos headings no container
  const generateTOC = React.useCallback(() => {
    const container = containerRef?.current;
    if (!container) return [];

    const headingElements = container.querySelectorAll(headings.join(', '));
    const tocItems: TocItem[] = [];

    headingElements.forEach((element, index) => {
      const text = element.textContent?.trim() || '';
      const level = parseInt(element.tagName.substring(1)); // h2 = 2, h3 = 3, etc.

      // Se não tiver ID, cria um baseado no texto
      if (!(element as HTMLElement).id) {
        (element as HTMLElement).id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim() || `heading-${index}`;
      }

      tocItems.push({
        id: (element as HTMLElement).id,
        text,
        level,
        element: element as HTMLElement,
        index
      });
    });

    return tocItems;
  }, [containerRef, headings]);

  // Inicializar TOC quando container mudar
  React.useEffect(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);

  // Função para scroll até item específico
  const scrollToItem = React.useCallback((itemId: string) => {
    const element = document.getElementById(itemId);
    if (!element) return;

    // Usar scrollToElement da rainer-utils com offset
    scrollToElement(element, { 
      smooth: smoothScroll,
      offset: offset 
    });

    setActiveId(itemId);
  }, [offset, smoothScroll]);

  // Observer para detectar item ativo ao rolar
  React.useEffect(() => {
    if (!activeOnScroll || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`,
        threshold: 0
      }
    );

    // Observar todos os elementos do TOC
    items.forEach((item) => {
      if (item.element) {
        observer.observe(item.element);
      }
    });

    return () => {
      items.forEach((item) => {
        if (item.element) {
          observer.unobserve(item.element);
        }
      });
    };
  }, [activeOnScroll, items, offset]);

  // Gerar estrutura aninhada do TOC
  const nestedItems = React.useMemo(() => {
    if (!nested) return items as NestedTocItem[];

    const result: NestedTocItem[] = [];
    const stack: NestedTocItem[] = [];

    items.forEach((item) => {
      const tocItem = { ...item, children: [] };

      // Remove itens da stack que têm nível maior ou igual
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }

      if (stack.length === 0) {
        // Item de nível superior
        result.push(tocItem);
      } else {
        // Item filho do último item na stack
        stack[stack.length - 1].children.push(tocItem);
      }

      stack.push(tocItem);
    });

    return result;
  }, [items, nested]);

  // Função para renderizar item do TOC
  const renderItem = React.useCallback((item: TocItem | NestedTocItem, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = 'children' in item && item.children && item.children.length > 0;

    return {
      ...item,
      isActive,
      depth,
      hasChildren,
      scrollTo: () => scrollToItem(item.id)
    };
  }, [activeId, scrollToItem]);

  // Renderizar todos os itens (incluindo aninhados)
  const renderItems = React.useCallback(() => {
    const flatItems: RenderedTocItem[] = [];

    const flatten = (items: NestedTocItem[], depth = 0) => {
      items.forEach((item) => {
        flatItems.push(renderItem(item, depth));
        
        if (item.children && item.children.length > 0) {
          flatten(item.children, depth + 1);
        }
      });
    };

    flatten(nestedItems);
    return flatItems;
  }, [nestedItems, renderItem]);

  // Estatísticas do TOC
  const stats = React.useMemo(() => {
    const levelCounts: Record<number, number> = {};
    
    items.forEach((item) => {
      levelCounts[item.level] = (levelCounts[item.level] || 0) + 1;
    });

    return {
      totalItems: items.length,
      levels: Object.keys(levelCounts).map(Number).sort(),
      levelCounts,
      hasActive: !!activeId,
      activeIndex: items.findIndex(item => item.id === activeId)
    };
  }, [items, activeId]);

  // Função para atualizar TOC manualmente
  const refresh = React.useCallback(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);

  // Função para limpar estado
  const reset = React.useCallback(() => {
    setItems([]);
    setActiveId(null);
  }, []);

  return {
    // Dados do TOC
    items,
    nestedItems,
    renderItems: renderItems(),
    
    // Estado
    activeId,
    hasItems: items.length > 0,
    
    // Funções de controle
    scrollToItem,
    refresh,
    reset,
    
    // Estatísticas
    stats,
    
    // Utilitários
    generateTOC,
    renderItem
  };
}

// Tipos
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
