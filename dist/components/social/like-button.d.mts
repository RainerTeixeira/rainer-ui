import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Like Button Component
 *
 * Botão de curtir/like genérico para qualquer tipo de conteúdo.
 * Suporta animação suave, estado persistente e callbacks customizáveis.
 *
 * @module components/social/like-button
 * @fileoverview Botão de curtir com animação e estado persistente
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Blog post
 * <LikeButton
 *   itemId="post-123"
 *   initialLikes={10}
 *   initialIsLiked={false}
 *   onLike={(likes) => console.log('Post liked:', likes)}
 * />
 *
 * // Produto
 * <LikeButton
 *   itemId="product-456"
 *   initialLikes={42}
 *   initialIsLiked={true}
 *   variant="compact"
 *   activeColor="error"
 * />
 *
 * // Comentário
 * <LikeButton
 *   itemId="comment-789"
 *   initialLikes={5}
 *   showLabel={false}
 *   size="sm"
 * />
 * ```
 *
 * Características:
 * - Genérico: Funciona com qualquer tipo de conteúdo (posts, produtos, comentários)
 * - Animação suave ao curtir/descurtir
 * - Estado controlado externamente
 * - Múltiplas variantes (default, compact)
 * - Cores customizáveis
 * - Callbacks opcionais (onLike, onUnlike)
 * - Acessibilidade completa
 *
 * Casos de uso:
 * - Blogs: Curtir posts, artigos
 * - E-commerce: Curtir produtos, avaliações
 * - Social Media: Curtir posts, comentários
 * - Fóruns: Curtir respostas, tópicos
 * - Dashboards: Favoritar itens
 */
/**
 * Propriedades do componente LikeButton
 *
 * @interface LikeButtonProps
 * @property {string} itemId - ID único do item (post, produto, comentário, etc)
 * @property {number} initialLikes - Número inicial de curtidas
 * @property {boolean} [initialIsLiked=false] - Estado inicial de curtida
 * @property {'default' | 'compact'} [variant='default'] - Variante visual do botão
 * @property {'primary' | 'success' | 'warning' | 'error' | 'info'} [activeColor='primary'] - Cor quando ativo
 * @property {'sm' | 'default' | 'lg'} [size='default'] - Tamanho do botão
 * @property {boolean} [showLabel=true] - Exibir label
 * @property {boolean} [showCount=true] - Exibir contador
 * @property {string} [activeLabel='Curtido'] - Label customizado quando ativo
 * @property {string} [inactiveLabel='Curtir'] - Label customizado quando inativo
 * @property {(likes: number, itemId: string) => void} [onLike] - Callback ao curtir
 * @property {(likes: number, itemId: string) => void} [onUnlike] - Callback ao descurtir
 * @property {string} [className] - Classes CSS adicionais
 */
interface LikeButtonProps {
    /** ID único do item (post, produto, comentário, etc) */
    itemId: string;
    /** Número inicial de curtidas */
    initialLikes: number;
    /** Estado inicial de curtida */
    initialIsLiked?: boolean;
    /** Variante visual */
    variant?: 'default' | 'compact';
    /** Cor quando ativo */
    activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    /** Tamanho do botão */
    size?: 'sm' | 'default' | 'lg';
    /** Exibir label */
    showLabel?: boolean;
    /** Exibir contador */
    showCount?: boolean;
    /** Label customizado quando ativo */
    activeLabel?: string;
    /** Label customizado quando inativo */
    inactiveLabel?: string;
    /** Callback ao curtir */
    onLike?: (likes: number, itemId: string) => void;
    /** Callback ao descurtir */
    onUnlike?: (likes: number, itemId: string) => void;
    /** Classes CSS adicionais */
    className?: string;
}
/**
 * Componente de botão de curtir com animação
 *
 * Renderiza um botão interativo para curtir/descurtir conteúdo.
 * Inclui animação de escala e rotação ao interagir.
 *
 * @param {LikeButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Elemento do botão de curtir
 */
declare function LikeButton({ itemId, initialLikes, initialIsLiked, variant, activeColor, size, showLabel, showCount, activeLabel, inactiveLabel, onLike, onUnlike, className, }: LikeButtonProps): react_jsx_runtime.JSX.Element;

export { LikeButton, type LikeButtonProps };
