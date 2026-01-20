/**
 * Componente Lightbox Moderno
 *
 * Visualizador de mídia em tela cheia com recursos avançados.
 * Suporta imagens, vídeos, galerias, zoom, rotação e gestos.
 *
 * @module @rainersoft/ui/components/overlays/lightbox
 * @author Rainer Teixeira
 * @version 2.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Download from 'lucide-react/dist/esm/icons/download';
import Maximize2 from 'lucide-react/dist/esm/icons/maximize-2';
import Minimize2 from 'lucide-react/dist/esm/icons/minimize-2';
import Pause from 'lucide-react/dist/esm/icons/pause';
import Play from 'lucide-react/dist/esm/icons/play';
import RotateCw from 'lucide-react/dist/esm/icons/rotate-cw';
import X from 'lucide-react/dist/esm/icons/x';
import ZoomIn from 'lucide-react/dist/esm/icons/zoom-in';
import ZoomOut from 'lucide-react/dist/esm/icons/zoom-out';

import { Button } from '../ui/button';
import { cn } from '../../lib/tokens';

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
  /** Thumbnail personalizado */
  thumbnailUrl?: string;
}

/**
 * Configurações do zoom
 */
const ZOOM_CONFIG = {
  MIN: 0.5,
  MAX: 4,
  STEP: 0.25,
  DEFAULT: 1,
};

/**
 * Variantes do Lightbox
 */
const lightboxVariants = cva(
  'fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300',
  {
    variants: {
      variant: {
        default: '',
        vignette: 'bg-gradient-to-b from-black/60 via-black/95 to-black/60',
        subtle: 'bg-black/85 backdrop-blur-none',
      },
      animation: {
        none: '',
        fade: 'animate-in fade-in duration-300',
        slideUp: 'animate-in slide-in-from-bottom duration-300',
        slideDown: 'animate-in slide-in-from-top duration-300',
      },
    },
    defaultVariants: {
      variant: 'default',
      animation: 'fade',
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
export const Lightbox = React.forwardRef<HTMLDivElement, LightboxProps>(
  (
    {
      className,
      variant = 'default',
      animation = 'fade',
      items,
      index,
      onIndexChange,
      open,
      onOpenChange,
      showControls = true,
      showThumbnails = false,
      allowDownload = false,
      allowZoom = false,
      allowRotation = true,
      closeOnBackdrop = true,
      closeOnEscape = true,
      showProgress = true,
      enableGestures = true,
      autoPlayInterval,
      autoPlayVideos = false,
      thumbnailSize = 'md',
      thumbnailsPosition = 'bottom',
      mediaContainerClassName,
      ...props
    },
    ref
  ) => {
    const [zoom, setZoom] = React.useState(ZOOM_CONFIG.DEFAULT);
    const [rotation, setRotation] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(autoPlayVideos);
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const [touchStart, setTouchStart] = React.useState<{ x: number; y: number } | null>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 });
    
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const mediaRef = React.useRef<HTMLDivElement>(null);

    const currentItem = items[index];
    const hasMultipleItems = items.length > 1;
    const isImage = currentItem?.type === 'image';
    const isVideo = currentItem?.type === 'video';

    // Previnir scroll do body
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = '';
        };
      }
    }, [open]);

    // Controle de teclado
    React.useEffect(() => {
      if (!open) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'Escape':
            if (closeOnEscape) {
              onOpenChange(false);
            }
            break;
          case 'ArrowLeft':
            handlePrevious();
            break;
          case 'ArrowRight':
            handleNext();
            break;
          case ' ':
            if (isVideo) {
              event.preventDefault();
              handlePlayPause();
            }
            break;
          case '+':
          case '=':
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomIn();
            }
            break;
          case '-':
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomOut();
            }
            break;
          case '0':
            if (allowZoom && isImage) {
              event.preventDefault();
              handleResetZoom();
            }
            break;
          case 'r':
          case 'R':
            if (allowRotation && isImage) {
              event.preventDefault();
              handleRotate();
            }
            break;
          case 'f':
          case 'F':
            handleToggleFullscreen();
            break;
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, index, zoom, isVideo, allowZoom, allowRotation]);

    // Auto-play para vídeos
    React.useEffect(() => {
      if (isVideo && autoPlayVideos && videoRef.current && open) {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }, [index, isVideo, autoPlayVideos, open]);

    // Auto-play para galeria
    React.useEffect(() => {
      if (!autoPlayInterval || !hasMultipleItems || !open) return;

      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, [autoPlayInterval, hasMultipleItems, open, index]);

    // Reset ao mudar de item
    React.useEffect(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
      
      if (isVideo) {
        setIsPlaying(autoPlayVideos);
      }
    }, [index, isVideo, autoPlayVideos]);

    // Manipuladores de navegação
    const handlePrevious = React.useCallback(() => {
      if (index > 0) {
        onIndexChange(index - 1);
      } else if (hasMultipleItems) {
        onIndexChange(items.length - 1);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);

    const handleNext = React.useCallback(() => {
      if (index < items.length - 1) {
        onIndexChange(index + 1);
      } else if (hasMultipleItems) {
        onIndexChange(0);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);

    // Manipuladores de zoom
    const handleZoomIn = React.useCallback(() => {
      setZoom(prev => Math.min(prev + ZOOM_CONFIG.STEP, ZOOM_CONFIG.MAX));
    }, []);

    const handleZoomOut = React.useCallback(() => {
      setZoom(prev => Math.max(prev - ZOOM_CONFIG.STEP, ZOOM_CONFIG.MIN));
    }, []);

    const handleResetZoom = React.useCallback(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
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
          videoRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
      }
    }, [isPlaying]);

    // Fullscreen
    const handleToggleFullscreen = React.useCallback(() => {
      if (!containerRef.current) return;

      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        });
      } else {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }, []);

    React.useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Download
    const handleDownload = React.useCallback(() => {
      if (currentItem?.downloadUrl || currentItem?.url) {
        const link = document.createElement('a');
        link.href = currentItem.downloadUrl || currentItem.url;
        link.download = currentItem.title || 'download';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, [currentItem]);

    // Manipuladores de gestos
    const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
      if (!enableGestures || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;
      
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
      setIsDragging(true);
    }, [enableGestures, isImage, zoom]);

    const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
      if (!touchStart || !isDragging || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;

      const deltaX = e.touches[0].clientX - touchStart.x;
      const deltaY = e.touches[0].clientY - touchStart.y;

      setDragOffset({
        x: deltaX,
        y: deltaY,
      });
    }, [touchStart, isDragging, isImage, zoom]);

    const handleTouchEnd = React.useCallback(() => {
      if (!enableGestures || !isImage) return;
      
      // Swipe para navegação
      if (!isDragging && touchStart && zoom <= ZOOM_CONFIG.DEFAULT) {
        const swipeThreshold = 50;
        const deltaX = dragOffset.x;

        if (Math.abs(deltaX) > swipeThreshold) {
          if (deltaX > 0) {
            handlePrevious();
          } else {
            handleNext();
          }
        }
      }

      setTouchStart(null);
      setIsDragging(false);
    }, [enableGestures, isImage, zoom, dragOffset, handlePrevious, handleNext, isDragging, touchStart]);

    const handleDoubleClick = React.useCallback(() => {
      if (allowZoom && isImage) {
        if (zoom > ZOOM_CONFIG.DEFAULT) {
          handleResetZoom();
        } else {
          handleZoomIn();
        }
      }
    }, [allowZoom, isImage, zoom, handleResetZoom, handleZoomIn]);

    // Estilos dinâmicos
    const transformStyle = {
      transform: `scale(${zoom}) rotate(${rotation}deg) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
      transition: isDragging ? 'none' : 'transform 0.2s ease-out',
      cursor: zoom > ZOOM_CONFIG.DEFAULT ? 'grab' : 'default',
    };

    const thumbnailClasses = {
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-20 h-20',
    };

    const thumbnailsPositionClasses = {
      bottom: 'bottom-20 left-1/2 -translate-x-1/2 flex-row',
      left: 'left-4 top-1/2 -translate-y-1/2 flex-col',
      right: 'right-4 top-1/2 -translate-y-1/2 flex-col',
    };

    if (!open || !currentItem) return null;

    return (
      <div
        ref={ref}
        className={cn(lightboxVariants({ variant, animation }), className)}
        onClick={closeOnBackdrop ? () => onOpenChange(false) : undefined}
        {...props}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão fechar */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 h-10 w-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-label="Fechar lightbox"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Conteúdo principal */}
          <div className="flex items-center justify-center h-full px-4">
            {/* Botão anterior */}
            {hasMultipleItems && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
                onClick={handlePrevious}
                aria-label="Item anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {/* Container da mídia */}
            <div
              ref={mediaRef}
              className={cn(
                'relative max-w-[95vw] max-h-[85vh] overflow-hidden',
                mediaContainerClassName
              )}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDoubleClick={handleDoubleClick}
            >
              {isImage ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={currentItem.url}
                    alt={currentItem.title || ''}
                    className="max-w-full max-h-full object-contain select-none"
                    style={transformStyle}
                    draggable={false}
                  />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={currentItem.url}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  controls={showControls}
                  autoPlay={autoPlayVideos}
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              )}
            </div>

            {/* Botão próximo */}
            {hasMultipleItems && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
                onClick={handleNext}
                aria-label="Próximo item"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>

          {/* Barra de progresso */}
          {showProgress && hasMultipleItems && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    idx === index 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/70'
                  )}
                  onClick={() => onIndexChange(idx)}
                  aria-label={`Ir para item ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Controles inferiores */}
          {showControls && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              <div className="flex flex-col items-center gap-4 max-w-6xl mx-auto">
                {/* Informações */}
                <div className="text-center text-white max-w-3xl">
                  {currentItem.title && (
                    <h3 className="text-xl font-semibold mb-1">{currentItem.title}</h3>
                  )}
                  {currentItem.description && (
                    <p className="text-sm opacity-90">{currentItem.description}</p>
                  )}
                  {hasMultipleItems && (
                    <p className="text-xs opacity-75 mt-2">
                      {index + 1} de {items.length}
                    </p>
                  )}
                </div>

                {/* Ações */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                  {/* Controles de vídeo */}
                  {isVideo && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-white/20"
                        onClick={handlePlayPause}
                        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <div className="w-px h-4 bg-white/30" />
                    </>
                  )}

                  {/* Controles de zoom */}
                  {allowZoom && isImage && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-white/20"
                        onClick={handleZoomOut}
                        disabled={zoom <= ZOOM_CONFIG.MIN}
                        aria-label="Reduzir zoom"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-xs text-white min-w-[40px] text-center">
                        {Math.round(zoom * 100)}%
                      </span>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-white/20"
                        onClick={handleZoomIn}
                        disabled={zoom >= ZOOM_CONFIG.MAX}
                        aria-label="Aumentar zoom"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-white/20"
                        onClick={handleResetZoom}
                        disabled={zoom === ZOOM_CONFIG.DEFAULT && rotation === 0}
                        aria-label="Resetar zoom"
                      >
                        <Minimize2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="w-px h-4 bg-white/30" />
                    </>
                  )}

                  {/* Rotação */}
                  {allowRotation && isImage && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-white/20"
                      onClick={handleRotate}
                      aria-label="Rotacionar"
                    >
                      <RotateCw className="h-4 w-4" />
                    </Button>
                  )}

                  {/* Fullscreen */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={handleToggleFullscreen}
                    aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>

                  {/* Download */}
                  {allowDownload && (
                    <>
                      <div className="w-px h-4 bg-white/30" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:bg-white/20"
                        onClick={handleDownload}
                        aria-label="Download"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Thumbnails */}
          {showThumbnails && hasMultipleItems && (
            <div
              className={cn(
                'absolute z-10 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-lg',
                'overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent',
                thumbnailsPositionClasses[thumbnailsPosition]
              )}
            >
              {items.map((item, idx) => (
                <button
                  key={idx}
                  className={cn(
                    'relative flex-shrink-0 overflow-hidden rounded transition-all duration-200',
                    'border-2 focus:outline-none focus:ring-2 focus:ring-white/50',
                    idx === index 
                      ? 'border-white ring-2 ring-white/30' 
                      : 'border-transparent hover:border-white/50',
                    thumbnailClasses[thumbnailSize]
                  )}
                  onClick={() => onIndexChange(idx)}
                  aria-label={`Ver item ${idx + 1}`}
                  aria-current={idx === index}
                >
                  {item.thumbnailUrl || item.type === 'image' ? (
                    <img
                      src={item.thumbnailUrl || item.url}
                      alt={item.title || `Item ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Play className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Indicador de vídeo */}
                  {item.type === 'video' && (
                    <div className="absolute bottom-1 right-1 bg-black/60 rounded-full p-1">
                      <Play className="h-2 w-2 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Lightbox.displayName = 'Lightbox';