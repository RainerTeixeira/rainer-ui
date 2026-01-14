/**
 * Image Utilities
 *
 * Utilitários universais para processamento e otimização de imagens.
 *
 * @module @rainersoft/ui/lib/image-utils
 * @author Rainer Teixeira
 * @version 1.0.0
 */
/**
 * Verifica se formato de imagem é aceito
 *
 * @param mimeType - MIME type da imagem
 * @returns True se formato for aceito
 *
 * @example
 * ```ts
 * isAcceptedFormat('image/jpeg') // true
 * isAcceptedFormat('image/svg+xml') // false
 * ```
 */
declare function isAcceptedFormat(mimeType: string): boolean;
/**
 * Verifica se imagem está em formato WebP
 *
 * @param mimeType - MIME type da imagem
 * @returns True se for WebP
 *
 * @example
 * ```ts
 * isWebP('image/webp') // true
 * isWebP('image/jpeg') // false
 * ```
 */
declare function isWebP(mimeType: string): boolean;
/**
 * Verifica se navegador suporta WebP
 *
 * @returns Promise que resolve para true se suportar
 *
 * @example
 * ```ts
 * const supported = await supportsWebP();
 * if (supported) {
 *   // Usar WebP
 * }
 * ```
 */
declare function supportsWebP(): Promise<boolean>;
/**
 * Obtém informações da imagem
 *
 * @param file - Arquivo de imagem
 * @returns Promise com informações da imagem
 *
 * @example
 * ```ts
 * const info = await getImageInfo(file);
 * console.log(info.width, info.height, info.size);
 * ```
 */
declare function getImageInfo(file: File): Promise<{
    width: number;
    height: number;
    size: number;
    type: string;
}>;
/**
 * Redimensiona imagem para dimensões máximas
 *
 * @param file - Arquivo de imagem original
 * @param maxWidth - Largura máxima
 * @param maxHeight - Altura máxima
 * @param quality - Qualidade da compressão (0-1)
 * @param format - Formato de saída
 * @returns Promise com arquivo redimensionado
 *
 * @example
 * ```ts
 * const resized = await resizeImage(file, 1920, 1080, 0.8, 'image/jpeg');
 * ```
 */
declare function resizeImage(file: File, maxWidth: number, maxHeight: number, quality?: number, format?: 'image/jpeg' | 'image/png' | 'image/webp'): Promise<File>;
/**
 * Converte imagem para WebP
 *
 * @param file - Arquivo de imagem original
 * @param quality - Qualidade da conversão (0-1)
 * @returns Promise com arquivo em WebP
 *
 * @example
 * ```ts
 * const webpFile = await convertToWebP(file, 0.8);
 * ```
 */
declare function convertToWebP(file: File, quality?: number): Promise<File>;
/**
 * Prepara imagem para upload (otimiza e valida)
 *
 * @param file - Arquivo de imagem original
 * @param options - Opções de otimização
 * @returns Promise com imagem otimizada
 *
 * @example
 * ```ts
 * const optimized = await prepareImageForUpload(file, {
 *   maxWidth: 1920,
 *   maxHeight: 1080,
 *   quality: 0.8,
 *   convertToWebP: true
 * });
 * ```
 */
declare function prepareImageForUpload(file: File, options?: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    shouldConvertToWebP?: boolean;
    maxSizeBytes?: number;
}): Promise<File>;
/**
 * Gera URL de placeholder para imagem
 *
 * @param width - Largura do placeholder
 * @param height - Altura do placeholder
 * @param text - Texto opcional para exibir
 * @returns URL do placeholder
 *
 * @example
 * ```ts
 * const placeholder = generatePlaceholder(300, 200, 'Sample');
 * ```
 */
declare function generatePlaceholder(width: number, height: number, text?: string): string;

export { convertToWebP, generatePlaceholder, getImageInfo, isAcceptedFormat, isWebP, prepareImageForUpload, resizeImage, supportsWebP };
