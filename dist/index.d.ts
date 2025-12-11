export { BACKGROUND, GRADIENTS, GRADIENT_DIRECTIONS, MOTION, Tokens, darkTheme, darkThemeColors, lightTheme, lightThemeColors, tokens } from '@rainersoft/design-tokens';
import { ClassValue } from 'clsx';
export { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import * as React$1 from 'react';
import React__default, { ReactNode, ErrorInfo, Component } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { Toaster as Toaster$1 } from 'sonner';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { ThemeProviderProps } from 'next-themes';

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

/**
 * Utilitários da Biblioteca de Componentes UI
 *
 * Fonte única de verdade: @rainersoft/design-tokens
 * Usa tokens.json para valores build-time e CSS vars para runtime dinâmico
 *
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

/**
 * Combina e mescla classes CSS de forma inteligente
 *
 * Esta função é essencial para trabalhar com Tailwind CSS e componentes
 * dinâmicos. Ela resolve conflitos entre classes Tailwind e permite
 * composição condicional de estilos.
 *
 * @param inputs - Classes CSS para combinar
 * @returns String final com classes CSS mescladas
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500') // "px-4 py-2 bg-blue-500"
 * cn('px-4', 'px-2') // "px-2" (resolve conflitos)
 * cn('btn', { 'btn-active': isActive })
 * ```
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Motion tokens - Importados diretamente do @rainersoft/design-tokens
 *
 * @description
 * Única fonte de verdade para tokens de motion (duração, easing, delay).
 * Importados diretamente do pacote design-tokens via ES modules.
 */
declare const motion: {
    duration: {
        instant: string;
        fast: string;
        normal: string;
        slow: string;
        slower: string;
        slowest: string;
    };
    easing: {
        linear: string;
        easeIn: string;
        easeOut: string;
        easeInOut: string;
        easeInQuad: string;
        easeOutQuad: string;
        easeInOutQuad: string;
        easeInCubic: string;
        easeOutCubic: string;
        easeInOutCubic: string;
        spring: string;
    };
    delay: {
        none: string;
        short: string;
        medium: string;
        long: string;
    };
};
/**
 * Delays de animação importados dos design tokens
 *
 * @description
 * Usa motion.delay com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DELAYS: {
    none: string;
    short: string;
    medium: string;
    long: string;
};
/**
 * Durações de animação importadas dos design tokens
 *
 * @description
 * Usa motion.duration com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DURATIONS: {
    instant: string;
    fast: string;
    normal: string;
    slow: string;
    slower: string;
    slowest: string;
};
/**
 * Easings de animação importados dos design tokens
 *
 * @description
 * Usa motion.easing com fallback seguro para garantir
 * transições suaves e consistentes.
 */
declare const ANIMATION_EASINGS: {
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    easeInQuad: string;
    easeOutQuad: string;
    easeInOutQuad: string;
    easeInCubic: string;
    easeOutCubic: string;
    easeInOutCubic: string;
    spring: string;
};

/**
 * Utilitários de Cor
 *
 * Funções helper para conversão e manipulação de cores,
 * baseadas 100% nos design tokens do @rainersoft/design-tokens.
 *
 * Fonte única de verdade: @rainersoft/design-tokens (ES modules)
 *
 * @module @rainersoft/ui/lib/color-utils
 * @author Rainer Teixeira
 */
/**
 * Retorna o valor CSS do token (usa CSS var por padrão)
 *
 * @param tokenName - Nome do token (ex: 'color-primary' ou 'primary')
 * @param theme - Tema para buscar valor direto ('light' | 'dark'), opcional
 * @returns String CSS (var(--...) ou valor hex se theme especificado)
 *
 * @example
 * ```typescript
 * getTokenColor('primary') // "var(--color-primary)"
 * getTokenColor('primary', 'light') // "#0891b2" (valor direto do token)
 * ```
 */
declare function getTokenColor(tokenName: string, theme?: 'light' | 'dark'): string;
/**
 * Converte uma cor hexadecimal para RGB
 *
 * @param hex - Cor em formato hexadecimal (ex: "#0891b2" ou "0891b2")
 * @returns String RGB no formato "r, g, b" (ex: "8, 145, 178")
 *
 * @example
 * ```typescript
 * hexToRGB('#0891b2') // "8, 145, 178"
 * hexToRGB('0891b2')  // "8, 145, 178"
 * ```
 */
declare function hexToRGB(hex: string): string;
/**
 * Converte uma cor hexadecimal para RGBA com alpha
 *
 * @param hex - Cor em formato hexadecimal
 * @param alpha - Valor de opacidade entre 0 e 1 (padrão: 1)
 * @returns String RGBA no formato "rgba(r, g, b, alpha)"
 *
 * @example
 * ```typescript
 * hexToRGBA('#0891b2', 0.5) // "rgba(8, 145, 178, 0.5)"
 * hexToRGBA('#0891b2') // "rgba(8, 145, 178, 1)"
 * ```
 */
declare function hexToRGBA(hex: string, alpha?: number): string;
/**
 * Gera overlay com base no token
 *
 * @param tokenName - Nome do token de cor
 * @param alpha - Opacidade (padrão: 0.08)
 * @param theme - Tema para buscar valor direto ('light' | 'dark'), opcional
 * @returns String CSS rgba
 *
 * @description
 * Tenta buscar valor direto do token e converte hex → rgba.
 * Se não encontrar, retorna CSS var com formato RGB para uso em rgba().
 *
 * @example
 * ```typescript
 * overlayFromToken('primary', 0.08, 'light') // "rgba(8, 145, 178, 0.08)"
 * overlayFromToken('primary') // "rgba(var(--color-primary-rgb), 0.08)"
 * ```
 */
declare function overlayFromToken(tokenName: string, alpha?: number, theme?: 'light' | 'dark'): string;
/**
 * Verifica se uma string é uma cor hexadecimal válida
 *
 * @param hex - String para verificar
 * @returns true se for hexadecimal válido, false caso contrário
 *
 * @example
 * ```typescript
 * isValidHex('#0891b2')  // true
 * isValidHex('0891b2')   // true
 * isValidHex('#xyz')     // false
 * ```
 */
declare function isValidHex(hex: string): boolean;
/**
 * Obtém a cor de contraste (preto ou branco) baseado na luminosidade
 *
 * @param hex - Cor hexadecimal de fundo
 * @returns "#000000" para fundos claros, "#ffffff" para fundos escuros
 *
 * @example
 * ```typescript
 * getContrastColor('#0891b2') // "#ffffff"
 * getContrastColor('#f0f0f0') // "#000000"
 * ```
 */
declare function getContrastColor(hex: string): string;

/**
 * Theme Utilities
 *
 * Utilitários para trabalhar com temas e cores do design system,
 * facilitando o uso sem hardcode de valores.
 *
 * @module @rainersoft/ui/lib/theme-utils
 * @author Rainer Teixeira
 */
/**
 * Obtém todas as cores de um tema específico
 *
 * @param theme - Tema para buscar cores ('light' | 'dark')
 * @returns Objeto com todas as cores do tema
 *
 * @example
 * ```typescript
 * const lightColors = getThemeColors('light');
 * const primaryColor = lightColors.brand.primary;
 * ```
 */
declare function getThemeColors(theme: 'light' | 'dark'): {
    primary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    secondary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    accent: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        overlay: string;
        muted: string;
    };
    surface: {
        primary: string;
        secondary: string;
        tertiary: string;
        elevated: string;
        overlay: string;
        hover: string;
        active: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        disabled: string;
        link: string;
        linkHover: string;
        linkActive: string;
        linkVisited: string;
        onPrimary: string;
        onSecondary: string;
        onAccent: string;
        onBackground: string;
        onSurface: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiary: string;
        focus: string;
        focusRing: string;
        inverse: string;
        hover: string;
        active: string;
        disabled: string;
    };
    status: {
        success: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        warning: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        error: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        info: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
    };
    interactive: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        disabledText: string;
        focus: string;
        focusRing: string;
    };
    primitive: {
        cyan: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        purple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        pink: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        blue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        green: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        orange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        amber: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        emerald: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        neutral: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "950": string;
        };
    };
    effects: {
        matrixRain: {
            base: string;
        };
        stars: {
            base: string;
        };
    };
} | {
    primary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    secondary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    accent: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        overlay: string;
        muted: string;
    };
    surface: {
        primary: string;
        secondary: string;
        tertiary: string;
        elevated: string;
        overlay: string;
        glass: string;
        glassHover: string;
        hover: string;
        active: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        disabled: string;
        link: string;
        linkHover: string;
        linkActive: string;
        linkVisited: string;
        onPrimary: string;
        onSecondary: string;
        onAccent: string;
        onBackground: string;
        onSurface: string;
        glow: string;
        neonCyan: string;
        neonPink: string;
        neonPurple: string;
        neonGreen: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiary: string;
        focus: string;
        focusRing: string;
        inverse: string;
        neon: string;
        neonGlow: string;
        hover: string;
        active: string;
        disabled: string;
    };
    status: {
        success: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        warning: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        error: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        info: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
    };
    interactive: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        disabledText: string;
        focus: string;
        focusRing: string;
    };
    effects: {
        glowCyan: string;
        glowPink: string;
        glowPurple: string;
        glowGreen: string;
        shadowSm: string;
        shadowMd: string;
        shadowLg: string;
    };
    gradients: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    primitive: {
        cyan: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        purple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        pink: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        blue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        green: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        orange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        amber: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        emerald: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        neutral: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "950": string;
        };
    };
};
/**
 * Obtém uma cor específica de um tema
 *
 * @param theme - Tema para buscar ('light' | 'dark')
 * @param category - Categoria da cor (ex: 'brand', 'accent', 'neutral')
 * @param shade - Tom da cor (ex: 'primary', 'secondary', '50', '900')
 * @returns Valor hex da cor ou undefined se não encontrada
 *
 * @example
 * ```typescript
 * const primary = getColorFromTheme('light', 'brand', 'primary');
 * const cyan500 = getColorFromTheme('dark', 'accent', 'cyan');
 * ```
 */
declare function getColorFromTheme(theme: 'light' | 'dark', category: string, shade: string): string | undefined;
/**
 * Gera um objeto de cores semantic para uso em componentes
 *
 * @param theme - Tema base ('light' | 'dark')
 * @returns Objeto com cores semantic prontas para uso
 *
 * @example
 * ```typescript
 * const semantic = getSemanticColors('light');
 *
 * <div style={{ color: semantic.text.primary }}>
 *   Texto principal
 * </div>
 * ```
 */
declare function getSemanticColors(theme: 'light' | 'dark'): {
    text: {
        primary: any;
        secondary: any;
        muted: any;
        disabled: any;
    };
    background: {
        primary: any;
        secondary: any;
        tertiary: any;
    };
    border: {
        default: any;
        muted: any;
        strong: any;
    };
    brand: {
        primary: any;
        secondary: any;
        tertiary: any;
    };
    accent: any;
    status: {
        success: any;
        warning: any;
        error: any;
        info: any;
    };
};
/**
 * Gera classes Tailwind CSS baseadas em tokens
 *
 * @param options - Opções de geração
 * @returns String com classes Tailwind
 *
 * @example
 * ```typescript
 * const classes = generateTailwindClasses({
 *   bg: 'primary',
 *   text: 'primary-foreground',
 *   rounded: 'md',
 *   shadow: 'sm',
 * });
 * // "bg-primary text-primary-foreground rounded-md shadow-sm"
 * ```
 */
declare function generateTailwindClasses(options: {
    bg?: string;
    text?: string;
    border?: string;
    rounded?: string;
    shadow?: string;
    p?: string;
    m?: string;
    [key: string]: string | undefined;
}): string;
/**
 * Constantes de cores semantic para uso rápido
 * Baseadas nos tokens do design system
 */
declare const SEMANTIC_COLORS: {
    readonly light: {
        text: {
            primary: any;
            secondary: any;
            muted: any;
            disabled: any;
        };
        background: {
            primary: any;
            secondary: any;
            tertiary: any;
        };
        border: {
            default: any;
            muted: any;
            strong: any;
        };
        brand: {
            primary: any;
            secondary: any;
            tertiary: any;
        };
        accent: any;
        status: {
            success: any;
            warning: any;
            error: any;
            info: any;
        };
    };
    readonly dark: {
        text: {
            primary: any;
            secondary: any;
            muted: any;
            disabled: any;
        };
        background: {
            primary: any;
            secondary: any;
            tertiary: any;
        };
        border: {
            default: any;
            muted: any;
            strong: any;
        };
        brand: {
            primary: any;
            secondary: any;
            tertiary: any;
        };
        accent: any;
        status: {
            success: any;
            warning: any;
            error: any;
            info: any;
        };
    };
};
/**
 * Helper para obter cor de status sem hardcode
 *
 * @param status - Tipo de status
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor
 *
 * @example
 * ```typescript
 * const successColor = getStatusColor('success');
 * const errorColorDark = getStatusColor('error', 'dark');
 * ```
 */
declare function getStatusColor(status: 'success' | 'warning' | 'error' | 'info', theme?: 'light' | 'dark'): string;
/**
 * Helper para obter cor de marca sem hardcode
 *
 * @param variant - Variante da cor de marca
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor
 *
 * @example
 * ```typescript
 * const primaryBrand = getBrandColor('primary');
 * const secondaryBrandDark = getBrandColor('secondary', 'dark');
 * ```
 */
declare function getBrandColor(variant: 'primary' | 'secondary' | 'tertiary', theme?: 'light' | 'dark'): string | undefined;

declare const buttonVariants: (props?: ({
    variant?: "link" | "secondary" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

/**
 * Componente Slider
 *
 * @module @rainersoft/ui/components/actions/slider
 */

declare const Slider: React$1.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toggle: React$1.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Checkbox Component (shadcn/ui)
 *
 * Checkbox para seleção múltipla
 *
 * @fileoverview Checkbox component
 * @author Rainer Teixeira
 */

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

/**
 * Componente Input
 *
 * Campo de entrada (input) HTML com estilos consistentes.
 * Suporta todos os tipos HTML5: text, email, password, number, file, etc.
 *
 * Classes aplicadas:
 * - Base: altura 36px (h-9), bordas arredondadas, padding horizontal
 * - Focus: borda e ring coloridos para acessibilidade
 * - Invalid: borda e ring vermelhos quando aria-invalid
 * - Disabled: opacidade reduzida, cursor not-allowed
 * - File: estilos específicos para botão de seleção de arquivo
 * - Dark mode: background semi-transparente
 *
 * @param {React.ComponentProps<"input">} props - Props nativas do input
 * @param {string} [props.type="text"] - Tipo do input (text, email, etc)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {string} [props.placeholder] - Texto placeholder
 * @param {boolean} [props.disabled] - Se input está desabilitado
 * @returns {JSX.Element} Input estilizado
 *
 * @example
 * // Input de texto simples
 * <Input type="text" placeholder="Digite seu nome" />
 *
 * @example
 * // Input de email com validação
 * <Input
 *   type="email"
 *   placeholder="email@exemplo.com"
 *   aria-invalid={!isEmailValid}
 *   required
 * />
 *
 * @example
 * // Input de arquivo
 * <Input
 *   type="file"
 *   accept="image/*"
 *   onChange={handleFileChange}
 * />
 */
declare function Input({ className, type, ...props }: React$1.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

/**
 * Componente RadioGroup
 *
 * @module @rainersoft/ui/components/forms/radio-group
 */

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Select Component (shadcn/ui)
 *
 * Dropdown select com suporte a search e múltipla seleção
 *
 * @fileoverview Select component
 * @author Rainer Teixeira
 */

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Switch Component (shadcn/ui)
 *
 * Toggle switch para configurações on/off
 *
 * @fileoverview Switch component
 * @author Rainer Teixeira
 */

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Componente Textarea
 *
 * Textarea reutilizável com estilos consistentes.
 * Suporta estados, validação e estilos cyberpunk.
 *
 * @fileoverview Componente de textarea para formulários
 * @author Rainer Teixeira
 * @version 1.0.0
 */

declare const Textarea: React$1.ForwardRefExoticComponent<React$1.TextareaHTMLAttributes<HTMLTextAreaElement> & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const AspectRatio: React$1.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componentes de Card
 *
 * Sistema de cards composable para containers de conteúdo.
 * Fornece componentes base (Card) e subcomponentes (Header, Title, etc)
 * que podem ser combinados para criar layouts de cards flexíveis.
 *
 * Componentes disponíveis:
 * - Card: container principal com borda e sombra
 * - CardHeader: cabeçalho do card (geralmente título + descrição)
 * - CardTitle: título do card (renderizado como h3)
 * - CardDescription: descrição/subtítulo
 * - CardContent: conteúdo principal do card
 * - CardFooter: rodapé com ações/botões
 *
 * @fileoverview Sistema de cards composable
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * Componente Card (Container principal)
 *
 * Container base para cards. Fornece fundo, borda e sombra padrão.
 * Todos os outros componentes de card devem ser usados dentro deste.
 *
 * Usa React.forwardRef para permitir acesso ao DOM node.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada para o elemento div
 * @returns {JSX.Element} Div estilizado como card
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Título</CardTitle>
 *   </CardHeader>
 *   <CardContent>Conteúdo aqui</CardContent>
 * </Card>
 */
declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Componente CardHeader (Cabeçalho do card)
 *
 * Área de cabeçalho do card, geralmente contém título e descrição.
 * Usa layout flex vertical com espaçamento padrão.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Header do card
 *
 * @example
 * <CardHeader>
 *   <CardTitle>Meu Card</CardTitle>
 *   <CardDescription>Descrição do card</CardDescription>
 * </CardHeader>
 */
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Componente CardTitle (Título do card)
 *
 * Título principal do card, renderizado como h3 para semântica adequada.
 * Texto grande, negrito e com tracking ajustado.
 *
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - Props HTML do h3
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Título estilizado
 *
 * @example
 * <CardTitle>Título Principal</CardTitle>
 */
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
/**
 * Componente CardDescription (Descrição do card)
 *
 * Subtítulo ou descrição complementar ao título.
 * Texto menor em cor muted para hierarquia visual.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props HTML do p
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Descrição estilizada
 *
 * @example
 * <CardDescription>
 *   Esta é uma descrição do card
 * </CardDescription>
 */
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
/**
 * Componente CardContent (Conteúdo do card)
 *
 * Área de conteúdo principal do card.
 * Padding padrão exceto no topo (pt-0) para continuidade com header.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Conteúdo do card
 *
 * @example
 * <CardContent>
 *   <p>Conteúdo principal aqui</p>
 * </CardContent>
 */
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Componente CardFooter (Rodapé do card)
 *
 * Área de rodapé do card, tipicamente para ações/botões.
 * Layout flex horizontal para botões lado a lado.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Footer do card
 *
 * @example
 * <CardFooter>
 *   <Button>Cancelar</Button>
 *   <Button variant="default">Confirmar</Button>
 * </CardFooter>
 */
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Componente HighlightCard
 *
 * Variante de Card com estilo de destaque/glassmorphism, usando
 * tokens de gradiente e motion do design system.
 *
 * Útil para seções em destaque (ex.: formulários de perfil,
 * configurações, analytics, seções principais de dashboard).
 */
declare const HighlightCard: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Scroll Area Component (shadcn/ui)
 *
 * Área de scroll customizada
 *
 * @fileoverview Scroll area component
 * @author Rainer Teixeira
 */

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componente Separator (Separador)
 *
 * Linha divisória visual para separar seções de conteúdo.
 * Baseado em Radix UI Separator com suporte a orientação horizontal/vertical.
 *
 * Características:
 * - Orientação horizontal ou vertical
 * - Pode ser decorativo (não afeta leitores de tela)
 * - Altura/largura de 1px
 * - Cor baseada em --border do tema
 *
 * @fileoverview Componente de separador visual
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * Componente Separator
 *
 * Renderiza linha divisória horizontal ou vertical.
 *
 * Por padrão é decorativo (não anunciado por leitores de tela).
 * Para separadores semânticos, defina decorative={false}.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props - Props do Radix Separator
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"] - Orientação da linha
 * @param {boolean} [props.decorative=true] - Se é apenas decorativo (não semântico)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Linha separadora
 *
 * @example
 * // Separador horizontal (padrão)
 * <Separator />
 *
 * @example
 * // Separador vertical
 * <div className="flex h-20">
 *   <div>Esquerda</div>
 *   <Separator orientation="vertical" className="mx-4" />
 *   <div>Direita</div>
 * </div>
 *
 * @example
 * // Separador semântico (não decorativo)
 * <Separator decorative={false} />
 */
declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componente Sheet (Root)
 *
 * Container root que gerencia estado do sheet.
 * Controla se está aberto/fechado via prop `open` ou modo não controlado.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Root>} props - Props do Radix Dialog
 * @param {boolean} [props.open] - Estado aberto (modo controlado)
 * @param {Function} [props.onOpenChange] - Callback de mudança de estado
 * @returns {JSX.Element} Container do sheet
 */
declare function Sheet({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetTrigger (Gatilho)
 *
 * Elemento que abre o sheet quando clicado.
 * Pode ser botão, link ou qualquer elemento clicável.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Trigger>} props - Props do trigger
 * @returns {JSX.Element} Trigger do sheet
 */
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetClose (Fechar)
 *
 * Botão ou elemento que fecha o sheet quando clicado.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Close>} props - Props do close
 * @returns {JSX.Element} Botão de fechar
 */
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetContent (Conteúdo)
 *
 * Painel deslizante com conteúdo do sheet.
 * Pode deslizar de qualquer um dos 4 lados da tela.
 *
 * Inclui automaticamente:
 * - SheetOverlay
 * - Botão X para fechar (canto superior direito)
 * - Animações de entrada/saída baseadas no lado
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Content>} props - Props do content
 * @param {"top" | "right" | "bottom" | "left"} [props.side="right"] - Lado de entrada
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.ReactNode} props.children - Conteúdo do sheet
 * @returns {JSX.Element} Painel deslizante
 *
 * @example
 * <Sheet>
 *   <SheetTrigger>Abrir Menu</SheetTrigger>
 *   <SheetContent side="left">
 *     <SheetHeader>
 *       <SheetTitle>Menu</SheetTitle>
 *     </SheetHeader>
 *     <div>Conteúdo do sheet aqui</div>
 *   </SheetContent>
 * </Sheet>
 */
declare function SheetContent({ className, children, side, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetHeader (Cabeçalho)
 *
 * Área de cabeçalho do sheet, tipicamente contém título e descrição.
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Header do sheet
 */
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetFooter (Rodapé)
 *
 * Área de rodapé do sheet, tipicamente com botões de ação.
 * Posicionado no final do sheet (mt-auto).
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Footer do sheet
 */
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetTitle (Título)
 *
 * Título principal do sheet, renderizado com semântica apropriada
 * para leitores de tela (Radix adiciona acessibilidade).
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Title>} props - Props do title
 * @returns {JSX.Element} Título do sheet
 */
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetDescription (Descrição)
 *
 * Subtítulo ou descrição complementar ao título.
 * Texto menor em cor muted.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Description>} props - Props da description
 * @returns {JSX.Element} Descrição do sheet
 */
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

/**
 * Componente Table
 *
 * @module @rainersoft/ui/components/layout/table
 */

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "success" | "warning" | "info" | "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Variantes do badge usando CVA
 *
 * Define classes base e variantes para diferentes estilos.
 *
 * Classes base:
 * - inline-flex: layout flex inline
 * - items-center: centralização vertical
 * - rounded-full: bordas totalmente arredondadas (pill)
 * - border: borda de 1px
 * - px-2.5 py-0.5: padding pequeno
 * - text-xs: texto pequeno
 * - font-semibold: negrito
 * - transition-colors: transições suaves de cor
 * - focus:ring: anel de foco para acessibilidade
 *
 * @constant
 * @type {Function}
 */
declare const badgeVariants: (props?: ({
    variant?: "secondary" | "default" | "destructive" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Interface de props do Badge
 * Extende HTMLAttributes do div e inclui variantes do CVA
 *
 * @interface BadgeProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends VariantProps<typeof badgeVariants>
 */
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
/**
 * Componente Badge
 *
 * Renderiza uma etiqueta/tag pequena para destacar informações.
 * Ideal para status, categorias, contadores ou labels.
 *
 * @param {BadgeProps} props - Propriedades do componente
 * @param {string} [props.variant="default"] - Variante de estilo
 * @param {string} [props.className] - Classes CSS adicionais
 * @returns {JSX.Element} Badge estilizado
 *
 * @example
 * // Badge simples
 * <Badge>Novo</Badge>
 *
 * @example
 * // Badge secundário com ícone
 * <Badge variant="secondary">
 *   <Star className="w-3 h-3 mr-1" />
 *   Popular
 * </Badge>
 *
 * @example
 * // Badge destrutivo
 * <Badge variant="destructive">Erro</Badge>
 */
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

/**
 * Componente Progress (Barra de Progresso)
 *
 * Barra de progresso visual para indicar conclusão de tarefas ou processos.
 * Baseado em Radix UI Progress com animação suave.
 *
 * Características:
 * - Formato pill (rounded-full)
 * - Animação suave via transition-all
 * - Valor de 0 a 100 (porcentagem)
 * - Acessível (usa role="progressbar" do Radix)
 * - Responsivo (largura 100% por padrão)
 *
 * @fileoverview Componente de barra de progresso
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * Componente Progress
 *
 * Renderiza barra de progresso horizontal com indicador animado.
 * O indicador se move de forma suave usando transform: translateX.
 *
 * @param {React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>} props - Props do Radix Progress
 * @param {number} [props.value] - Valor atual (0-100)
 * @param {number} [props.max=100] - Valor máximo (padrão 100)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Barra de progresso
 *
 * @example
 * // Barra de progresso simples
 * <Progress value={50} />
 *
 * @example
 * // Barra de progresso com aria-label
 * <Progress
 *   value={uploadProgress}
 *   aria-label="Progresso do upload"
 * />
 *
 * @example
 * // Upload de arquivo
 * const [progress, setProgress] = useState(0)
 *
 * <Progress value={progress} className="w-full" />
 * <p>{progress}% concluído</p>
 */
declare const Progress: React$1.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componente Skeleton (Esqueleto de Loading)
 *
 * Placeholder animado para indicar carregamento de conteúdo.
 * Melhora a percepção de performance ao mostrar estrutura da UI
 * antes do conteúdo real carregar.
 *
 * Características:
 * - Animação de pulso (animate-pulse)
 * - Cor de fundo accent
 * - Bordas arredondadas
 * - Dimensões customizáveis
 *
 * @fileoverview Componente de skeleton loading
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */
/**
 * Componente Skeleton
 *
 * Div animada que serve como placeholder durante loading.
 * Usa animate-pulse do Tailwind para efeito de "respiração".
 *
 * @param {React.ComponentProps<"div">} props - Props nativas do div
 * @param {string} [props.className] - Classes para definir tamanho/forma
 * @returns {JSX.Element} Div de skeleton
 *
 * @example
 * // Skeleton de texto (linha)
 * <Skeleton className="h-4 w-[250px]" />
 *
 * @example
 * // Skeleton de avatar circular
 * <Skeleton className="h-12 w-12 rounded-full" />
 *
 * @example
 * // Skeleton de card completo
 * <div className="space-y-2">
 *   <Skeleton className="h-12 w-12 rounded-full" />
 *   <Skeleton className="h-4 w-[250px]" />
 *   <Skeleton className="h-4 w-[200px]" />
 * </div>
 */
declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

type ToasterProps = React.ComponentProps<typeof Toaster$1>;
declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const ContextMenu: React$1.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React$1.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React$1.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Componente HoverCard
 *
 * @module @rainersoft/ui/components/overlays/hover-card
 */

declare const HoverCard: React$1.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React$1.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React$1.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Popover Component (shadcn/ui)
 *
 * Popover para conteúdo contextual
 *
 * @fileoverview Popover component
 * @author Rainer Teixeira
 */

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componente TooltipProvider (Provedor)
 *
 * Provedor de contexto para tooltips. Deve envolver todos os tooltips
 * para compartilhar configurações globais como delay.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Provider>} props - Props do provider
 * @param {number} [props.delayDuration=0] - Delay em ms antes de mostrar tooltip
 * @returns {JSX.Element} Provider de tooltips
 *
 * @example
 * <TooltipProvider delayDuration={200}>
 *   <App />
 * </TooltipProvider>
 */
declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Provider>): react_jsx_runtime.JSX.Element;
/**
 * Componente Tooltip (Root)
 *
 * Container root do tooltip. Inclui TooltipProvider automaticamente,
 * então não é necessário envolver manualmente.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Root>} props - Props do root
 * @returns {JSX.Element} Container do tooltip
 */
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
/**
 * Componente TooltipTrigger (Gatilho)
 *
 * Elemento que dispara o tooltip ao hover ou focus.
 * Pode ser botão, link, ícone ou qualquer elemento interativo.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Trigger>} props - Props do trigger
 * @returns {JSX.Element} Trigger do tooltip
 */
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
/**
 * Componente TooltipContent (Conteúdo)
 *
 * Balão flutuante com conteúdo do tooltip.
 * Posiciona-se automaticamente próximo ao trigger.
 *
 * Inclui:
 * - Animações de fade e zoom
 * - Seta apontando para o trigger
 * - Slide baseado no lado posicionado
 * - Portal para renderizar fora do DOM tree
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Content>} props - Props do content
 * @param {number} [props.sideOffset=0] - Distância em px do trigger
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.ReactNode} props.children - Conteúdo do tooltip
 * @returns {JSX.Element} Balão do tooltip
 *
 * @example
 * <Tooltip>
 *   <TooltipTrigger asChild>
 *     <Button size="icon">
 *       <InfoIcon />
 *     </Button>
 *   </TooltipTrigger>
 *   <TooltipContent>
 *     <p>Informação útil aqui</p>
 *   </TooltipContent>
 * </Tooltip>
 *
 * @example
 * // Com sideOffset para afastar do trigger
 * <TooltipContent sideOffset={8}>
 *   Tooltip distante
 * </TooltipContent>
 */
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;

/**
 * Componente Accordion
 *
 * @module @rainersoft/ui/components/navigation/accordion
 */

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandDialog: ({ children, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React$1.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "value" | "disabled" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Tabs Component (shadcn/ui)
 *
 * Navegação em abas com animações suaves
 *
 * @fileoverview Tabs component
 * @author Rainer Teixeira
 */

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Componentes de Avatar
 *
 * Sistema composable para exibição de avatares de usuário.
 * Baseado em Radix UI Avatar com suporte a imagem e fallback automático.
 *
 * Componentes disponíveis:
 * - Avatar: container circular para imagem de perfil
 * - AvatarImage: componente de imagem com carregamento lazy
 * - AvatarFallback: conteúdo exibido quando imagem falha ou está carregando
 *
 * Características:
 * - Formato circular (rounded-full)
 * - Fallback automático se imagem não carregar
 * - Tamanho padrão 40x40px (customizável)
 * - Aspect ratio 1:1 mantido
 *
 * @fileoverview Sistema de avatares com fallback
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * Componente Avatar (Container)
 *
 * Container principal do avatar. Deve conter AvatarImage e AvatarFallback.
 * Renderizado como círculo com overflow hidden para manter formato.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} props - Props do Radix Avatar
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Container do avatar
 *
 * @example
 * <Avatar>
 *   <AvatarImage src="/foto.jpg" alt="João Silva" />
 *   <AvatarFallback>JS</AvatarFallback>
 * </Avatar>
 */
declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
/**
 * Componente AvatarImage (Imagem)
 *
 * Imagem do avatar. Carrega de forma lazy e exibe fallback se falhar.
 * Mantém aspect ratio 1:1 automaticamente.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} props - Props do Radix Avatar Image
 * @param {string} props.src - URL da imagem
 * @param {string} props.alt - Texto alternativo (acessibilidade)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Elemento de imagem
 *
 * @example
 * <AvatarImage
 *   src="https://exemplo.com/foto.jpg"
 *   alt="Foto de perfil de João Silva"
 * />
 */
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
/**
 * Componente AvatarFallback (Fallback)
 *
 * Conteúdo exibido quando a imagem não está disponível ou falha ao carregar.
 * Geralmente contém iniciais do nome ou um ícone.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} props - Props do Radix Avatar Fallback
 * @param {React.ReactNode} props.children - Conteúdo do fallback (ex: iniciais)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Elemento de fallback
 *
 * @example
 * // Fallback com iniciais
 * <AvatarFallback>JS</AvatarFallback>
 *
 * @example
 * // Fallback com ícone
 * <AvatarFallback>
 *   <UserIcon className="w-6 h-6" />
 * </AvatarFallback>
 */
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

/**
 * Componente Calendar (sem react-day-picker)
 *
 * Implementação própria baseada em React + Tailwind, usando
 * exclusivamente classes semânticas alinhadas aos design tokens.
 *
 * @module @rainersoft/ui/components/data-display/calendar
 */
type CalendarProps = {
    className?: string;
    /** Data selecionada (modo single). */
    selected?: Date;
    /** Callback disparado ao selecionar uma data. */
    onSelect?: (date: Date | undefined) => void;
    /** Função opcional para desabilitar dias. */
    disabled?: (date: Date) => boolean;
};
declare function Calendar({ className, selected, onSelect, disabled }: CalendarProps): react_jsx_runtime.JSX.Element;
type CalendarDayButtonProps = {
    date: Date;
    isOutside?: boolean;
    isSelected?: boolean;
    isToday?: boolean;
    disabled?: boolean;
    onSelect?: (date: Date) => void;
    className?: string;
};
declare function CalendarDayButton({ date, isOutside, isSelected, isToday, disabled, onSelect, className, }: CalendarDayButtonProps): react_jsx_runtime.JSX.Element;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & class_variance_authority.VariantProps<(props?: ({
    variant?: "link" | "secondary" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & class_variance_authority.VariantProps<(props?: ({
    variant?: "link" | "secondary" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Particles Effect Component
 *
 * Efeito decorativo de partículas animadas para dark mode. Três pontos
 * coloridos pulsantes em posições configuráveis com animações suaves e
 * dessincronizadas. Não interfere com interações (pointer-events-none).
 *
 * @module components/ui/particles-effect
 * @fileoverview Partículas decorativas para dark mode com animações
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Variante padrão
 * <ParticlesEffect />
 *
 * // Variante alternativa 1
 * <ParticlesEffect variant="alt1" />
 *
 * // Variante alternativa 2
 * <ParticlesEffect variant="alt2" />
 * ```
 *
 * Características:
 * - Visível apenas no dark mode
 * - Não interfere com interações (pointer-events-none)
 * - Posição fixa durante scroll
 * - Variantes de posicionamento (default, alt1, alt2)
 * - Cores: cyan, purple, pink
 * - Animação de pulse dessincronizada
 * - Performance otimizada
 */
/**
 * Variantes de posicionamento disponíveis
 */
type ParticleVariant = 'default' | 'alt1' | 'alt2';
/**
 * Props do ParticlesEffect
 */
interface ParticlesEffectProps {
    /** Variante de posicionamento das partículas */
    readonly variant?: ParticleVariant;
}
/**
 * Componente principal do Particles Effect
 *
 * Renderiza três partículas decorativas animadas.
 * Posicionamento configurável via variante.
 *
 * Variantes:
 * - `default`: Padrão (top-20, top-40, bottom-40)
 * - `alt1`: Alternativo 1 (top-24, top-80, bottom-80)
 * - `alt2`: Alternativo 2 (top-32, top-60, bottom-60)
 *
 * @param variant - Variante de posicionamento
 * @returns Container com partículas animadas
 *
 * @example
 * ```tsx
 * // Variante padrão
 * <ParticlesEffect />
 *
 * // Variante alternativa
 * <ParticlesEffect variant="alt1" />
 * ```
 */
declare function ParticlesEffect({ variant, }?: ParticlesEffectProps): react_jsx_runtime.JSX.Element;

/**
 * Stars Background Component
 *
 * Componente que renderiza um céu estrelado no fundo das páginas.
 * Cria uma atmosfera espacial com estrelas animadas.
 * Renderizado APENAS no modo dark
 */
declare function StarsBackground(): react_jsx_runtime.JSX.Element | null;

interface MatrixBackgroundProps {
    /**
     * Variante de posicionamento:
     * - 'global': fixed, cobre toda a tela (padrão)
     * - 'local': absolute, fica dentro do container pai
     */
    variant?: "global" | "local";
}
/**
 * MatrixBackground
 *
 * Componente autossuficiente que renderiza a chuva de caracteres binários
 * em background. Gerencia seu próprio estado e responsividade.
 * Pronto para usar em qualquer projeto sem dependências externas.
 *
 * @param variant - 'global' (fixed, tela toda) ou 'local' (absolute, container pai)
 */
declare function MatrixBackgroundInner({ variant }: MatrixBackgroundProps): react_jsx_runtime.JSX.Element | null;
declare const MatrixBackground: React$1.MemoExoticComponent<typeof MatrixBackgroundInner>;

/**
 * Back To Top Button Component
 *
 * Botão flutuante fixo para retornar ao topo da página. Aparece após scroll
 * (> 300px), respeita preferências de movimento do usuário e integra com
 * useSmoothScroll hook.
 *
 * @module components/ui/back-to-top
 * @fileoverview Botão de retorno ao topo acessível e responsivo
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Usado automaticamente no layout
 * <BackToTop />
 * ```
 *
 * Características:
 * - Visível apenas após scroll > 300px
 * - Posição fixa (bottom-right)
 * - Scroll suave ou instantâneo (prefers-reduced-motion)
 * - Totalmente acessível (keyboard + screen readers)
 * - ARIA label dinâmico
 * - Animações suaves
 * - Integração com useSmoothScroll hook
 */
/**
 * Componente principal do Back To Top Button
 *
 * Botão flutuante que permite retorno rápido ao topo.
 * Visibilidade controlada por scroll position.
 *
 * @returns Botão flutuante ou null se não visível
 *
 * @example
 * ```tsx
 * // Em qualquer página
 * <BackToTopButton />
 * ```
 */
declare function BackToTopButton(): react_jsx_runtime.JSX.Element | null;
/**
 * Alias BackToTop para compatibilidade com imports existentes
 */
declare function BackToTop(): react_jsx_runtime.JSX.Element;

interface CookiePreferences {
    essential: boolean;
    performance: boolean;
    functionality: boolean;
    analytics: boolean;
}
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

/**
 * CookieBanner Component
 *
 * Banner de consentimento de cookies que aparece quando o usuário visita
 * o site pela primeira vez. Permite aceitar, rejeitar ou personalizar
 * preferências de cookies.
 *
 * @component
 * @returns {JSX.Element | null} Banner de cookies ou null se já consentiu
 */
declare function CookieBanner(): react_jsx_runtime.JSX.Element | null;
/**
 * Hook para verificar consentimento de cookies
 *
 * @returns {CookiePreferences | null} Preferências de cookies ou null se não consentiu
 */
declare function useCookieConsent(): CookiePreferences | null;

/**
 * Install Prompt Component
 *
 * Prompt de instalação PWA que exibe banner convidando o usuário a instalar o
 * aplicativo como PWA. Persiste preferências do usuário (não mostra novamente
 * se fechado) e não aparece em modo standalone.
 *
 * @module components/ui/install-prompt
 * @fileoverview Componente de prompt de instalação PWA
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // No layout ou página principal
 * <InstallPrompt />
 * ```
 *
 * Características:
 * - Aparece apenas se app é instalável
 * - Pode ser fechado pelo usuário
 * - Design premium consistente
 * - Animação de entrada suave
 * - Persiste escolha (localStorage)
 * - Não mostra em modo standalone
 * - Integração com hook usePWA
 * - Suporte a tema claro/escuro
 * - Acessibilidade completa
 */
/**
 * Componente InstallPrompt
 *
 * Banner fixo no rodapé que convida usuário a instalar o PWA.
 * Aparece apenas se:
 * - App é instalável
 * - Usuário não fechou antes
 * - Não está em modo standalone
 *
 * @returns {JSX.Element | null} Banner de instalação ou null
 *
 * @example
 * // No layout ou página principal
 * <InstallPrompt />
 */
declare function InstallPrompt(): react_jsx_runtime.JSX.Element | null;

/**
 * Tamanhos de spinner disponíveis
 */
declare const SPINNER_SIZES: {
    readonly sm: "h-4 w-4";
    readonly md: "h-6 w-6";
    readonly lg: "h-8 w-8";
    readonly xl: "h-12 w-12";
};
type SpinnerSize = keyof typeof SPINNER_SIZES;
interface LoadingSpinnerProps {
    readonly size?: SpinnerSize;
    readonly className?: string;
    readonly label?: string;
}
interface FullPageLoaderProps {
    readonly message?: string;
}
interface InlineLoaderProps {
    readonly message?: string;
    readonly size?: SpinnerSize;
}
interface SkeletonGridProps {
    readonly count?: number;
    readonly columns?: 1 | 2 | 3 | 4;
    readonly className?: string;
}
interface LoadingScreenProps {
    readonly progress?: number;
    readonly currentStep?: string;
}
interface EmptyStateProps {
    readonly icon?: React.ComponentType<{
        className?: string;
    }>;
    readonly title?: string;
    readonly description?: string;
    readonly action?: ReactNode;
}
/**
 * Loading Spinner básico
 *
 * Ícone de loading animado customizável.
 *
 * @param size - Tamanho do spinner
 * @param className - Classes CSS adicionais
 * @param label - Label de acessibilidade
 */
declare function LoadingSpinner({ size, className, label, }: LoadingSpinnerProps): react_jsx_runtime.JSX.Element;
/**
 * Full Page Loader
 *
 * Loading que ocupa tela inteira.
 * Usado em transições de página e carregamento inicial.
 *
 * @param message - Mensagem opcional de carregamento
 */
declare function FullPageLoader({ message, }: FullPageLoaderProps): react_jsx_runtime.JSX.Element;
/**
 * Inline Loader
 *
 * Loading inline para seções ou componentes.
 * Não ocupa tela inteira.
 *
 * @param message - Mensagem de carregamento
 * @param size - Tamanho do spinner
 */
declare function InlineLoader({ message, size, }: InlineLoaderProps): react_jsx_runtime.JSX.Element;
/**
 * Skeleton Grid
 *
 * Grid de skeleton loaders para listas.
 * Usado em blog, dashboard, portfolio, etc.
 *
 * @param count - Número de skeletons
 * @param columns - Número de colunas
 * @param className - Classes CSS adicionais
 */
declare function SkeletonGrid({ count, columns, className, }: SkeletonGridProps): react_jsx_runtime.JSX.Element;
/**
 * Empty State Component
 *
 * Estado vazio padronizado para listas sem conteúdo.
 *
 * @param icon - Ícone a exibir
 * @param title - Título do estado vazio
 * @param description - Descrição
 * @param action - Ação opcional (botão)
 */
declare function EmptyState({ icon: Icon, title, description, action, }: EmptyStateProps): react_jsx_runtime.JSX.Element;
/**
 * LoadingScreen Component
 *
 * Tela de carregamento inicial com estilo cyberpunk profissional.
 * Exibe animações suaves, mensagens dinâmicas e progresso visual.
 * Otimizado para performance e uso eficiente de tokens.
 *
 * @param progress - Progresso de 0 a 100 (opcional)
 * @param currentStep - Etapa atual de inicialização (opcional)
 */
declare function LoadingScreen({ progress, currentStep }: LoadingScreenProps): react_jsx_runtime.JSX.Element;

/**
 * Page Header Component
 *
 * Header padronizado e reutilizável para páginas internas. Título centralizado,
 * linha decorativa com gradiente e descrição opcional. Suporta children para
 * conteúdo adicional (avatar, badges, etc).
 *
 * @module components/ui/page-header
 * @fileoverview Header padronizado para páginas com design premium
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Header simples
 * <PageHeader
 *   title="Blog"
 *   description="Artigos sobre desenvolvimento e tecnologia"
 * />
 *
 * // Header com avatar
 * <PageHeader title="Sobre Mim" description="Minha trajetória profissional">
 *   <Avatar src="/avatar.jpg" />
 * </PageHeader>
 * ```
 *
 * Características:
 * - Layout centralizado e responsivo
 * - Linha decorativa com gradiente
 * - Tipografia cyberpunk no dark mode
 * - Slot children para conteúdo adicional (avatar, ícone, etc)
 * - Padding consistente via SECTION_CLASSES
 * - Acessibilidade completa (semântica HTML5)
 */
/**
 * Props do PageHeader
 */
interface PageHeaderProps {
    /** Título principal da página */
    readonly title: string;
    /** Descrição/subtítulo opcional */
    readonly description?: string;
    /** Conteúdo adicional (avatar, ícone, etc) */
    readonly children?: React.ReactNode;
}
/**
 * Componente PageHeader
 *
 * Renderiza header centralizado e estilizado para páginas internas.
 *
 * Estrutura:
 * 1. Children (se fornecido) - ex: avatar, ícone
 * 2. Título principal (h1)
 * 3. Linha decorativa com gradiente
 * 4. Descrição (se fornecida)
 *
 * @param {PageHeaderProps} props - Propriedades do componente
 * @returns {JSX.Element} Header formatado da página
 *
 * @example
 * // Header simples
 * <PageHeader
 *   title="Blog"
 *   description="Artigos sobre desenvolvimento e tecnologia"
 * />
 *
 * @example
 * // Header com avatar
 * <PageHeader title="Sobre Mim" description="Minha trajetória profissional">
 *   <Avatar src="/avatar.jpg" />
 * </PageHeader>
 */
declare function PageHeader({ title, description, children }: PageHeaderProps): react_jsx_runtime.JSX.Element;

/**
 * Update Notification Component
 *
 * Notificação de atualização PWA que exibe toast quando há nova versão do app
 * disponível. Permite ao usuário atualizar o service worker e recarregar a
 * página com um clique.
 *
 * @module components/ui/update-notification
 * @fileoverview Componente de notificação de atualização PWA
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // No layout principal
 * <UpdateNotification />
 * ```
 *
 * Características:
 * - Aparece apenas quando há atualização
 * - Design premium consistente
 * - Ação de atualizar com um clique
 * - Posicionamento fixo no topo
 * - Animação de entrada suave
 * - Integração com hook usePWA
 * - Suporte a tema claro/escuro
 * - Acessibilidade completa
 */
/**
 * Componente UpdateNotification
 *
 * Toast fixo no topo que notifica sobre atualizações disponíveis.
 *
 * @returns {JSX.Element | null} Notificação de atualização ou null
 *
 * @example
 * // No layout principal
 * <UpdateNotification />
 */
declare function UpdateNotification(): react_jsx_runtime.JSX.Element | null;

/**
 * Componente VisuallyHidden
 *
 * Esconde visualmente o conteúdo mas mantém acessível para screen readers.
 *
 * @fileoverview Componente de acessibilidade
 * @author Rainer Teixeira
 */

declare const VisuallyHidden: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLSpanElement> & React$1.RefAttributes<HTMLSpanElement>>;

/**
 * Theme Toggle Component
 *
 * Botão para alternar entre tema claro e escuro. Ícones animados de sol/lua
 * com transição suave, prevenção de hydration mismatch e integração com
 * next-themes.
 *
 * @module @rainersoft/ui/theme-toggle
 * @author Rainer Teixeira
 */
interface ThemeToggleProps {
    className?: string;
}
declare function ThemeToggle({ className }: ThemeToggleProps): react_jsx_runtime.JSX.Element;

interface ErrorBoundaryProps {
    readonly children: ReactNode;
    readonly fallback?: ReactNode;
    readonly onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface ErrorBoundaryState {
    readonly hasError: boolean;
    readonly error: Error | null;
    readonly errorInfo: ErrorInfo | null;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    handleReset: () => void;
    handleGoHome: () => void;
    render(): string | number | bigint | boolean | react_jsx_runtime.JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | React$1.ReactPortal | React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
}

/**
 * ThemeProvider - Provider de Temas Universal
 *
 * Componente wrapper que configura o next-themes com valores padrão
 * otimizados para a biblioteca @rainersoft/ui.
 *
 * Configurações padrão:
 * - attribute="class": Aplica tema como classe no HTML
 * - defaultTheme="dark": Tema padrão escuro (cyberpunk)
 * - enableSystem=true: Detecta preferência do sistema
 * - storageKey="rainer-ui-theme": Chave customizada no localStorage
 *
 * @example
 * ```tsx
 * // Em app/layout.tsx
 * import { ThemeProvider } from '@rainersoft/ui';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <ThemeProvider>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
declare function ThemeProvider({ children, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * Hook para Detecção de Dispositivos Móveis
 *
 * Custom hook que detecta se o usuário está em um dispositivo móvel
 * baseado na largura da viewport.
 *
 * @module @rainersoft/ui/hooks
 * @author Rainer Teixeira
 */
/**
 * Hook useIsMobile
 *
 * Detecta se o viewport atual é considerado mobile (< 768px).
 * Utiliza matchMedia API para detecção eficiente e reativa.
 *
 * @returns {boolean} true se a viewport é mobile (< 768px), false caso contrário
 *
 * @example
 * import { useIsMobile } from '@rainersoft/ui'
 *
 * function MyComponent() {
 *   const isMobile = useIsMobile()
 *   return <div>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>
 * }
 */
declare function useIsMobile(): boolean;

/**
 * Hook de PWA (Progressive Web App)
 *
 * Copiado do frontend para dentro da biblioteca @rainersoft/ui,
 * permitindo que componentes utilitários que dependem de PWA
 * sejam compilados sem depender do app.
 */
declare function usePWA(): {
    isInstallable: boolean;
    isInstalled: boolean;
    isStandalone: boolean;
    updateAvailable: boolean;
    promptInstall: () => Promise<void>;
    updateServiceWorker: () => void;
};

/**
 * Hook para gerenciar tema com tipagem melhorada
 *
 * @returns {Object} Objeto com funções e estado do tema
 * @property {('light' | 'dark' | 'system')} theme - Tema atual
 * @property {('light' | 'dark')} resolvedTheme - Tema resolvido (sem system)
 * @property {(theme: 'light' | 'dark' | 'system') => void} setTheme - Define tema
 * @property {() => void} toggle - Alterna entre light e dark
 * @property {boolean} isDark - Se tema escuro está ativo
 * @property {boolean} isLight - Se tema claro está ativo
 * @property {boolean} isSystem - Se tema sistema está ativo
 *
 * @example
 * ```tsx
 * import { useTheme } from '@rainersoft/ui';
 *
 * function MyComponent() {
 *   const { theme, resolvedTheme, toggle, isDark } = useTheme();
 *
 *   return (
 *     <button onClick={toggle}>
 *       Tema atual: {theme}
 *       Modo escuro: {isDark ? 'Sim' : 'Não'}
 *     </button>
 *   );
 * }
 * ```
 */
declare function useTheme(): {
    theme: string | undefined;
    resolvedTheme: string | undefined;
    setTheme: React$1.Dispatch<React$1.SetStateAction<string>>;
    toggle: () => void;
    setLight: () => void;
    setDark: () => void;
    setSystem: () => void;
    isDark: boolean;
    isLight: boolean;
    isSystem: boolean;
};

/**
 * Hook para controlar carrossel com teclado
 *
 * @param {Object} params - Parâmetros do hook
 * @param {number} params.totalItems - Total de itens no carrossel
 * @param {number} params.currentIndex - Índice atual
 * @param {Function} params.onIndexChange - Callback quando índice muda
 * @param {boolean} params.autoPlay - Se auto-play está ativo
 * @param {number} params.autoPlayInterval - Intervalo do auto-play em ms
 * @param {Object} params.options - Opções adicionais
 * @param {boolean} params.options.loop - Se deve voltar ao início quando chegar no fim
 * @param {boolean} params.options.pauseOnHover - Se deve pausar auto-play ao passar mouse
 * @param {string[]} params.options.keyMap - Mapeamento de teclas (default: ['ArrowLeft', 'ArrowRight'])
 *
 * @returns {Object} Objeto com funções de controle e estado
 */

declare function useCarouselKeyboard({ totalItems, currentIndex, onIndexChange, autoPlay, autoPlayInterval, options }: {
    totalItems: number;
    currentIndex?: number;
    onIndexChange?: (index: number) => void;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    options?: {
        loop?: boolean;
        pauseOnHover?: boolean;
        keyMap?: string[];
    };
}): {
    containerRef: React__default.RefObject<HTMLElement | null>;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    pause: () => void;
    resume: () => void;
    stop: () => void;
    isPaused: boolean;
    canGoNext: boolean;
    canGoPrev: boolean;
    isFirst: boolean;
    isLast: boolean;
    progress: number;
};

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

declare function useTableOfContents({ containerRef, headings, options }: {
    containerRef: React__default.RefObject<HTMLElement>;
    headings?: string[];
    options?: {
        offset?: number;
        smoothScroll?: boolean;
        activeOnScroll?: boolean;
        nested?: boolean;
    };
}): {
    items: TocItem[];
    nestedItems: NestedTocItem[];
    renderItems: RenderedTocItem[];
    activeId: string | null;
    hasItems: boolean;
    scrollToItem: (itemId: string) => void;
    refresh: () => void;
    reset: () => void;
    stats: {
        totalItems: number;
        levels: number[];
        levelCounts: Record<number, number>;
        hasActive: boolean;
        activeIndex: number;
    };
    generateTOC: () => TocItem[];
    renderItem: (item: TocItem | NestedTocItem, depth?: number) => {
        isActive: boolean;
        depth: number;
        hasChildren: boolean;
        scrollTo: () => void;
        id: string;
        text: string;
        level: number;
        element: HTMLElement;
        index: number;
    } | {
        isActive: boolean;
        depth: number;
        hasChildren: boolean;
        scrollTo: () => void;
        children: NestedTocItem[];
        id: string;
        text: string;
        level: number;
        element: HTMLElement;
        index: number;
    };
};
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

/**
 * Scroll Utilities
 *
 * Utilitários de scroll acessíveis que respeitam automaticamente
 * as preferências de acessibilidade do usuário.
 *
 * @module @rainersoft/ui/scroll-utils
 * @author Rainer Teixeira
 */
/**
 * Verifica se o usuário prefere movimento reduzido
 */
declare function prefersReducedMotion(): boolean;
/**
 * Faz scroll suave para um elemento específico
 */
declare function smoothScrollTo(target: string | Element, options?: ScrollIntoViewOptions): void;
/**
 * Faz scroll para o topo da página
 */
declare function scrollToTop(): void;
/**
 * Faz scroll para uma posição específica
 */
declare function scrollToPosition(x: number, y: number, smooth?: boolean): void;
/**
 * Desabilita scroll da página
 */
declare function disableScroll(): void;
/**
 * Habilita scroll da página
 */
declare function enableScroll(): void;

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, BackToTop, BackToTopButton, Badge, type BadgeProps, Button, Calendar, CalendarDayButton, type CalendarProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, CookieBanner, type CookiePreferences, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, ErrorBoundary, type ErrorBoundaryProps, type ErrorBoundaryState, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, FullPageLoader, HighlightCard, HoverCard, HoverCardContent, HoverCardTrigger, InlineLoader, Input, InstallPrompt, Label, LoadingScreen, LoadingSpinner, MatrixBackground, type MatrixBackgroundProps, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageHeader, ParticlesEffect, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, SEMANTIC_COLORS, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, SkeletonGrid, Slider, StarsBackground, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeProvider, ThemeToggle, type ThemeToggleProps, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UpdateNotification, VisuallyHidden, badgeVariants, buttonVariants, cn, convertToWebP, disableScroll, enableScroll, generatePlaceholder, generateTailwindClasses, getBrandColor, getColorFromTheme, getContrastColor, getImageInfo, getSemanticColors, getStatusColor, getThemeColors, getTokenColor, hexToRGB, hexToRGBA, isAcceptedFormat, isValidHex, isWebP, motion, navigationMenuTriggerStyle, overlayFromToken, prefersReducedMotion, prepareImageForUpload, resizeImage, scrollToPosition, scrollToTop, smoothScrollTo, supportsWebP, toggleVariants, useCarouselKeyboard, useCookieConsent, useFormField, useIsMobile, usePWA, useTableOfContents, useTheme };
