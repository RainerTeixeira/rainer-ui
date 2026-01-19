import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Proporções predefinidas
 */
declare const ASPECT_RATIOS: {
    readonly square: "1/1";
    readonly video: "16/9";
    readonly widescreen: "21/9";
    readonly cinema: "2.39/1";
    readonly portrait: "3/4";
    readonly golden: "1.618/1";
    readonly post: "4/5";
    readonly story: "9/16";
};
/**
 * Variantes do AspectRatioBox
 */
declare const aspectRatioBoxVariants: (props?: {
    variant?: "rounded" | "default" | "neon" | "glass" | "card" | "bordered";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do AspectRatioBox
 */
interface AspectRatioBoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof aspectRatioBoxVariants> {
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
declare const AspectRatioBox: React.ForwardRefExoticComponent<AspectRatioBoxProps & React.RefAttributes<HTMLDivElement>>;
/**
 * AspectRatioImage - Imagem com proporção fixa
 */
interface AspectRatioImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'as'> {
    /** Proporção */
    ratio?: string | keyof typeof ASPECT_RATIOS;
    /** Variant */
    variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}
declare const AspectRatioImage: React.ForwardRefExoticComponent<AspectRatioImageProps & React.RefAttributes<HTMLImageElement>>;
/**
 * AspectRatioVideo - Vídeo com proporção fixa
 */
interface AspectRatioVideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'as'> {
    /** Proporção */
    ratio?: string | keyof typeof ASPECT_RATIOS;
    /** Variant */
    variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}
declare const AspectRatioVideo: React.ForwardRefExoticComponent<AspectRatioVideoProps & React.RefAttributes<HTMLVideoElement>>;
/**
 * AspectRatioIframe - Iframe com proporção fixa
 */
interface AspectRatioIframeProps extends Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'as'> {
    /** Proporção */
    ratio?: string | keyof typeof ASPECT_RATIOS;
    /** Variant */
    variant?: VariantProps<typeof aspectRatioBoxVariants>['variant'];
}
declare const AspectRatioIframe: React.ForwardRefExoticComponent<AspectRatioIframeProps & React.RefAttributes<HTMLIFrameElement>>;

export { ASPECT_RATIOS, AspectRatioBox, type AspectRatioBoxProps, AspectRatioIframe, type AspectRatioIframeProps, AspectRatioImage, type AspectRatioImageProps, AspectRatioVideo, type AspectRatioVideoProps };
