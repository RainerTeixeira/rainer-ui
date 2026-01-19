import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Tipo de mídia
 */
type MediaType = 'image' | 'video';
/**
 * Item da lightbox
 */
interface LightboxItem {
    /** URL da mídia */
    url: string;
    /** Tipo da mídia */
    type: MediaType;
    /** Título */
    title?: string;
    /** Descrição */
    description?: string;
    /** URL de download */
    downloadUrl?: string;
    /** Thumbnail personalizado */
    thumbnailUrl?: string;
}
/**
 * Variantes do Lightbox
 */
declare const lightboxVariants: (props?: {
    variant?: "default" | "vignette" | "subtle";
    animation?: "none" | "fade" | "slideUp" | "slideDown";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Lightbox
 */
interface LightboxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof lightboxVariants> {
    /** Itens da lightbox */
    items: LightboxItem[];
    /** Índice do item atual */
    index: number;
    /** Callback quando muda o item */
    onIndexChange: (index: number) => void;
    /** Se está aberto */
    open: boolean;
    /** Callback quando muda o estado */
    onOpenChange: (open: boolean) => void;
    /** Se mostra controles */
    showControls?: boolean;
    /** Se mostra thumbnails */
    showThumbnails?: boolean;
    /** Se permite download */
    allowDownload?: boolean;
    /** Se permite zoom */
    allowZoom?: boolean;
    /** Se permite rotação */
    allowRotation?: boolean;
    /** Se fecha ao clicar no backdrop */
    closeOnBackdrop?: boolean;
    /** Se fecha ao pressionar ESC */
    closeOnEscape?: boolean;
    /** Se mostra indicador de progresso */
    showProgress?: boolean;
    /** Se ativa navegação por gestos */
    enableGestures?: boolean;
    /** Tempo de transição automática (ms) */
    autoPlayInterval?: number;
    /** Se inicia automático para vídeos */
    autoPlayVideos?: boolean;
    /** Tamanho máximo das thumbnails */
    thumbnailSize?: 'sm' | 'md' | 'lg';
    /** Posição das thumbnails */
    thumbnailsPosition?: 'bottom' | 'left' | 'right';
    /** Classe personalizada para o container da mídia */
    mediaContainerClassName?: string;
}
/**
 * Componente Lightbox Moderno
 *
 * Visualizador de mídia em tela cheia com recursos avançados.
 *
 * @example
 * ```tsx
 * // Galeria com todos os recursos
 * <Lightbox
 *   items={images}
 *   index={currentIndex}
 *   onIndexChange={setCurrentIndex}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   showThumbnails
 *   allowDownload
 *   allowZoom
 *   enableGestures
 *   autoPlayInterval={5000}
 *   variant="vignette"
 *   animation="slideUp"
 * />
 *
 * // Vídeo simples
 * <Lightbox
 *   items={[{ url: 'video.mp4', type: 'video' }]}
 *   index={0}
 *   onIndexChange={setIndex}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   autoPlayVideos
 * />
 * ```
 */
declare const Lightbox: React.ForwardRefExoticComponent<LightboxProps & React.RefAttributes<HTMLDivElement>>;

export { Lightbox, type LightboxItem, type LightboxProps, type MediaType };
