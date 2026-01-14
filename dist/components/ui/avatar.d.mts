import * as React from 'react';

/**
 * Avatar Component
 *
 * Componente universal de avatar com suporte a imagem, iniciais e fallback.
 * Totalmente acessível e customizável via design tokens.
 *
 * @module @rainersoft/ui/components/ui/avatar
 */

/**
 * Avatar component props
 */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** URL da imagem do avatar */
    src?: string;
    /** Texto alternativo para acessibilidade */
    alt?: string;
    /** Nome completo para gerar iniciais */
    name?: string;
    /** Tamanho do avatar */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Variante visual */
    variant?: 'circular' | 'rounded' | 'square';
    /** Cor de fundo customizada */
    fallbackColor?: string;
    /** Cor do texto customizada */
    textColor?: string;
    /** Número máximo de caracteres nas iniciais */
    maxInitials?: number;
    /** Callback quando imagem carrega com sucesso */
    onLoad?: () => void;
    /** Callback quando imagem falha ao carregar */
    onError?: () => void;
}
/**
 * Avatar Component
 *
 * Componente de avatar flexível que suporta:
 * - Imagem com fallback para iniciais
 * - Iniciais geradas automaticamente do nome
 * - Múltiplos tamanhos e variantes
 * - Cores customizáveis via design tokens
 * - Total acessibilidade com ARIA labels
 *
 * @example
 * ```tsx
 * // Com imagem
 * <Avatar src="/photo.jpg" alt="John Doe" size="lg" />
 *
 * // Com iniciais
 * <Avatar name="John Doe" size="xl" fallbackColor="bg-blue-500" />
 *
 * // Customizado
 * <Avatar
 *   name="Maria Silva"
 *   size="md"
 *   variant="rounded"
 *   maxInitials={1}
 * />
 * ```
 */
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

export { Avatar, AvatarFallback, AvatarImage, type AvatarProps };
