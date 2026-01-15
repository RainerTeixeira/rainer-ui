import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Bookmark Button Component
 *
 * Botão de bookmark/salvar genérico para qualquer tipo de conteúdo.
 * Inclui animação suave, estado persistente e múltiplas variantes visuais.
 *
 * @module components/social/bookmark-button
 * @fileoverview Botão de bookmark com animação e estado persistente
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Blog post
 * <BookmarkButton
 *   itemId="post-123"
 *   initialIsBookmarked={false}
 *   onBookmark={(itemId) => console.log('Post saved:', itemId)}
 * />
 *
 * // Produto favorito
 * <BookmarkButton
 *   itemId="product-456"
 *   initialIsBookmarked={true}
 *   variant="default"
 *   activeColor="warning"
 *   activeLabel="Favoritado"
 *   inactiveLabel="Favoritar"
 * />
 *
 * // Artigo para ler depois
 * <BookmarkButton
 *   itemId="article-789"
 *   showLabel={false}
 *   size="sm"
 * />
 * ```
 *
 * Características:
 * - Genérico: Funciona com qualquer tipo de conteúdo (posts, produtos, artigos)
 * - Animação suave ao salvar/remover
 * - Estado controlado externamente
 * - Múltiplas variantes (default, ghost, outline)
 * - Cores customizáveis
 * - Labels customizáveis
 * - Callbacks opcionais (onBookmark, onUnbookmark)
 * - Acessibilidade completa
 *
 * Casos de uso:
 * - Blogs: Salvar posts para ler depois
 * - E-commerce: Favoritar produtos
 * - Notícias: Salvar artigos importantes
 * - Educação: Salvar aulas/cursos
 * - Pesquisa: Salvar resultados
 */
interface BookmarkButtonProps {
    /** ID único do item (post, produto, artigo, etc) */
    itemId: string;
    /** Estado inicial de bookmark */
    initialIsBookmarked?: boolean;
    /** Variante visual */
    variant?: 'default' | 'ghost' | 'outline';
    /** Cor quando ativo */
    activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    /** Tamanho do botão */
    size?: 'sm' | 'default' | 'lg';
    /** Exibir label */
    showLabel?: boolean;
    /** Label customizado quando ativo */
    activeLabel?: string;
    /** Label customizado quando inativo */
    inactiveLabel?: string;
    /** Callback ao salvar/bookmark */
    onBookmark?: (itemId: string) => void;
    /** Callback ao remover bookmark */
    onUnbookmark?: (itemId: string) => void;
    /** Classes CSS adicionais */
    className?: string;
}
declare function BookmarkButton({ itemId, initialIsBookmarked, variant, activeColor, size, showLabel, activeLabel, inactiveLabel, onBookmark, onUnbookmark, className, }: BookmarkButtonProps): react_jsx_runtime.JSX.Element;

export { BookmarkButton, type BookmarkButtonProps };
