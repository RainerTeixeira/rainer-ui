/**
 * Componente Lightbox
 *
 * Visualizador de mídia em tela cheia.
 * Suporta imagens, vídeos e galerias.
 *
 * @module @rainersoft/ui/components/overlays/lightbox
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { 
  X as XIcon, 
  ChevronLeft, 
  ChevronRight, 
  Download,
  Plus as PlusIcon,
  Minus as MinusIcon,
  RotateCw,
  Play,
  Pause
} from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Tipo de mídia
 */
export type MediaType = 'image' | 'video';

/**
 * Item da lightbox
 */
export interface LightboxItem {
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
}

/**
 * Variantes do Lightbox
 */
const lightboxVariants = cva(
  'fixed inset-0 z-50 bg-black/90 backdrop-blur-sm',
  {
    variants: {
      variant: {
        default: '',
        vignette: 'bg-gradient-to-b from-black/50 via-black/90 to-black/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Props do Lightbox
 */
export interface LightboxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lightboxVariants> {
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
  /** Se fecha ao clicar no backdrop */
  closeOnBackdrop?: boolean;
  /** Se fecha ao pressionar ESC */
  closeOnEscape?: boolean;
}

/**
 * Componente Lightbox
 *
 * Visualizador de mídia em tela cheia.
 *
 * @example
 * ```tsx
 * // Imagem única
 * <Lightbox 
 *   items={[{ url: 'image.jpg', type: 'image' }]}
 *   index={0}
 *   onIndexChange={setIndex}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 * />
 *
 * // Galeria de imagens
 * <Lightbox 
 *   items={images}
 *   index={currentIndex}
 *   onIndexChange={setCurrentIndex}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   showThumbnails
 *   allowDownload
 * />
 *
 * // Com vídeo
 * <Lightbox 
 *   items={[
 *     { url: 'video.mp4', type: 'video', title: 'Vídeo' }
 *   ]}
 *   index={0}
 *   onIndexChange={setIndex}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 * />
 * ```
 */
export const Lightbox = React.forwardRef<HTMLDivElement, LightboxProps>(
  (
    {
      className,
      variant = 'default',
      items,
      index,
      onIndexChange,
      open,
      onOpenChange,
      showControls = true,
      showThumbnails = false,
      allowDownload = false,
      allowZoom = false,
      closeOnBackdrop = true,
      closeOnEscape = true,
      ...props
    },
    ref
  ) => {
    const [zoom, setZoom] = React.useState(1);
    const [rotation, setRotation] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const currentItem = items[index];

    // Previnir scroll do body
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = '';
        };
      }
    }, [open]);

    // Fecha ao pressionar ESC
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onOpenChange(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, closeOnEscape, onOpenChange]);

    // Navegação com teclado
    React.useEffect(() => {
      if (!open) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
          handlePrevious();
        } else if (event.key === 'ArrowRight') {
          handleNext();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, index]);

    // Reseta zoom e rotação ao mudar de item
    React.useEffect(() => {
      setZoom(1);
      setRotation(0);
      setIsPlaying(false);
    }, [index]);

    // Manipuladores de navegação
    const handlePrevious = React.useCallback(() => {
      if (index > 0) {
        onIndexChange(index - 1);
      }
    }, [index, onIndexChange]);

    const handleNext = React.useCallback(() => {
      if (index < items.length - 1) {
        onIndexChange(index + 1);
      }
    }, [index, items.length, onIndexChange]);

    // Manipuladores de zoom
    const handleZoomIn = React.useCallback(() => {
      setZoom(prev => Math.min(prev + 0.25, 3));
    }, []);

    const handleZoomOut = React.useCallback(() => {
      setZoom(prev => Math.max(prev - 0.25, 0.5));
    }, []);

    const handleResetZoom = React.useCallback(() => {
      setZoom(1);
      setRotation(0);
    }, []);

    const handleRotate = React.useCallback(() => {
      setRotation(prev => (prev + 90) % 360);
    }, []);

    // Manipuladores de vídeo
    const handlePlayPause = React.useCallback(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }, [isPlaying]);

    // Download
    const handleDownload = React.useCallback(() => {
      if (currentItem?.downloadUrl || currentItem?.url) {
        const link = document.createElement('a');
        link.href = currentItem.downloadUrl || currentItem.url;
        link.download = currentItem.title || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, [currentItem]);

    if (!open || !currentItem) return null;

    // Estilo de transformação
    const transformStyle = {
      transform: `scale(${zoom}) rotate(${rotation}deg)`,
      transition: 'transform 0.3s ease',
    };

    return (
      <div
        ref={ref}
        className={cn(lightboxVariants({ variant }), className)}
        onClick={closeOnBackdrop ? () => onOpenChange(false) : undefined}
        {...props}
      >
        {/* Conteúdo principal */}
        <div className="relative flex items-center justify-center h-full">
          {/* Botões de navegação */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="lg"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 text-white hover:bg-white/20"
                onClick={handlePrevious}
                disabled={index === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 text-white hover:bg-white/20"
                onClick={handleNext}
                disabled={index === items.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Mídia */}
          <div className="max-w-[90vw] max-h-[90vh]">
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.url}
                alt={currentItem.title || ''}
                className="max-w-full max-h-full object-contain"
                style={transformStyle}
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={allowZoom ? handleResetZoom : undefined}
              />
            ) : (
              <video
                ref={videoRef}
                src={currentItem.url}
                className="max-w-full max-h-full"
                controls={showControls}
                onClick={(e) => e.stopPropagation()}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            )}
          </div>

          {/* Botão fechar */}
          <Button
            variant="ghost"
            size="lg"
            className="absolute right-4 top-4 h-12 w-12 p-0 text-white hover:bg-white/20"
            onClick={() => onOpenChange(false)}
          >
            <XIcon className="h-6 w-6" />
          </Button>
        </div>

        {/* Controles inferiores */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              {/* Informações */}
              <div className="max-w-md">
                {currentItem.title && (
                  <h3 className="text-lg font-semibold">{currentItem.title}</h3>
                )}
                {currentItem.description && (
                  <p className="text-sm opacity-90">{currentItem.description}</p>
                )}
                {items.length > 1 && (
                  <p className="text-xs opacity-75 mt-1">
                    {index + 1} de {items.length}
                  </p>
                )}
              </div>

              {/* Ações */}
              <div className="flex items-center gap-2">
                {currentItem.type === 'video' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                )}
                
                {allowZoom && currentItem.type === 'image' && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={handleRotate}
                    >
                      <RotateCw className="h-4 w-4" />
                    </Button>
                  </>
                )}
                
                {allowDownload && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Thumbnails */}
        {showThumbnails && items.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/60 rounded-lg">
            {items.map((item, itemIndex) => (
              <button
                key={itemIndex}
                className={cn(
                  'w-16 h-16 rounded overflow-hidden border-2 transition-all',
                  itemIndex === index ? 'border-white' : 'border-transparent hover:border-white/50'
                )}
                onClick={() => onIndexChange(itemIndex)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title || ''}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Play className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Lightbox.displayName = 'Lightbox';
