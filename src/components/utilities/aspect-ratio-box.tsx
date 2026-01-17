/**
 * Componente AspectRatioBox
 *
 * Container com proporção de aspecto fixa.
 * Ideal para imagens, vídeos e iframes.
 *
 * @module @rainersoft/ui/components/utilities/aspect-ratio-box
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Proporções predefinidas
 */
export const ASPECT_RATIOS = {
  square: '1/1',
  video: '16/9',
  widescreen: '21/9',
  cinema: '2.39/1',
  portrait: '3/4',
  golden: '1.618/1',
  post: '4/5',
  story: '9/16',
} as const;

/**
 * Variantes do AspectRatioBox
 */
const aspectRatioBoxVariants = cva(
  'relative w-full overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border border-border rounded-md',
        rounded: 'rounded-lg',
        card: 'border border-border rounded-lg shadow-sm',
        glass: 'glass rounded-lg',
        neon: 'neon-border rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Props do AspectRatioBox
 */
export interface AspectRatioBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aspectRatioBoxVariants> {
  /** Proporção de aspecto (ex: "16/9") */
  ratio: string | keyof typeof ASPECT_RATIOS;
  /** Conteúdo a ser renderizado */
  children: React.ReactNode;
  /** Se o conteúdo deve preencher o container */
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Componente AspectRatioBox
 *
 * Container com proporção fixa.
 *
 * @example
 * ```tsx
 * // Video 16:9
 * <AspectRatioBox ratio="16/9">
 *   <iframe src="video-url" />
 * </AspectRatioBox>
 *
 * // Imagem quadrada
 * <AspectRatioBox ratio="square">
 *   <img src="image.jpg" alt="Imagem" />
 * </AspectRatioBox>
 *
 * // Com borda
 * <AspectRatioBox 
 *   ratio="4/5" 
 *   variant="card"
 *   objectFit="cover"
 * >
 *   <img src="photo.jpg" alt="Foto" />
 * </AspectRatioBox>
 *
 * // Proporção customizada
 * <AspectRatioBox ratio="2/1">
 *   <div>Conteúdo 2:1</div>
 * </AspectRatioBox>
 * ```
 */
export const AspectRatioBox = React.forwardRef<HTMLDivElement, AspectRatioBoxProps>(
  (
    {
      className,
      variant = 'default',
      ratio,
      children,
      objectFit = 'cover',
      ...props
    },
    ref
  ) => {
    // Resolve a proporção
    const resolvedRatio = React.useMemo(() => {
      if (typeof ratio === 'string' && ratio in ASPECT_RATIOS) {
        return ASPECT_RATIOS[ratio as keyof typeof ASPECT_RATIOS];
      }
      return ratio;
    }, [ratio]);

    // Calcula padding-bottom baseado na proporção
    const paddingBottom = React.useMemo(() => {
      const [width, height] = resolvedRatio.split('/').map(Number);
      return `${(height / width) * 100}%`;
    }, [resolvedRatio]);

    // Classes de object-fit
    const objectFitClasses = {
      cover: 'absolute inset-0 w-full h-full object-cover',
      contain: 'absolute inset-0 w-full h-full object-contain',
      fill: 'absolute inset-0 w-full h-full',
    };

    return (
      <div
        ref={ref}
        className={cn(aspectRatioBoxVariants({ variant }), className)}
        style={{ paddingBottom }}
        {...props}
      >
        <div className="absolute inset-0">
          {React.isValidElement(children) ? (
            React.cloneElement(children as React.ReactElement<{ className?: string }>, {
              className: cn(
                objectFitClasses[objectFit],
                children.props.className
              ),
            })
          ) : (
            <div className={cn(objectFitClasses[objectFit])}>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);

AspectRatioBox.displayName = 'AspectRatioBox';

/**
 * AspectRatioImage - Imagem com proporção fixa
 */
export interface AspectRatioImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'as'> {
  /** Proporção */
  ratio?: string | keyof typeof ASPECT_RATIOS;
  /** Variant */
  variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}

export const AspectRatioImage = React.forwardRef<HTMLImageElement, AspectRatioImageProps>(
  (
    {
      className,
      ratio = 'square',
      variant = 'default',
      src,
      alt,
      ...props
    },
    ref
  ) => {
    return (
      <AspectRatioBox ratio={ratio} variant={variant}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover', className)}
          {...props}
        />
      </AspectRatioBox>
    );
  }
);

AspectRatioImage.displayName = 'AspectRatioImage';

/**
 * AspectRatioVideo - Vídeo com proporção fixa
 */
export interface AspectRatioVideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'as'> {
  /** Proporção */
  ratio?: string | keyof typeof ASPECT_RATIOS;
  /** Variant */
  variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}

export const AspectRatioVideo = React.forwardRef<HTMLVideoElement, AspectRatioVideoProps>(
  (
    {
      className,
      ratio = 'video',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <AspectRatioBox ratio={ratio} variant={variant}>
        <video
          ref={ref}
          className={cn('w-full h-full object-cover', className)}
          {...props}
        />
      </AspectRatioBox>
    );
  }
);

AspectRatioVideo.displayName = 'AspectRatioVideo';

/**
 * AspectRatioIframe - Iframe com proporção fixa
 */
export interface AspectRatioIframeProps extends Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'as'> {
  /** Proporção */
  ratio?: string | keyof typeof ASPECT_RATIOS;
  /** Variant */
  variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}

export const AspectRatioIframe = React.forwardRef<HTMLIFrameElement, AspectRatioIframeProps>(
  (
    {
      className,
      ratio = 'video',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <AspectRatioBox ratio={ratio} variant={variant}>
        <iframe
          ref={ref}
          className={cn('w-full h-full', className)}
          {...props}
        />
      </AspectRatioBox>
    );
  }
);

AspectRatioIframe.displayName = 'AspectRatioIframe';
