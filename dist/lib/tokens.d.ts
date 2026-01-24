/**
 * @fileoverview
 * Ponto único de entrada para os Design Tokens da UI (CSS + TypeScript).
 *
 * Este módulo faz a ponte entre o pacote `@rainersoft/design-tokens` e a
 * aplicação, oferecendo:
 *
 * - **Acesso tipado aos tokens** (primitives, themes, semantics)
 * - **Integração com CSS Variables** geradas pelo pacote de design tokens
 * - **Utilitário `cn`** para composição de classes (clsx + tailwind-merge)
 * - **Presets semânticos de motion** (animações, durações, easings)
 * - **Helpers de cores** (por tema, status, marca, variantes)
 * - **Geradores utilitários para Tailwind** (classes dinâmicas)
 * - **Constantes de layout** (z-index, classes semânticas, direções de gradiente)
 *
 * A ideia é que qualquer componente da UI consuma apenas este arquivo,
 * mantendo:
 *
 * - **Consistência visual** (tudo passa pelos mesmos tokens)
 * - **Segurança de tipos** (TypeScript em cima do JSON de tokens)
 * - **Isolamento da fonte de verdade** (o pacote de design tokens pode evoluir
 *   sem quebrar a API pública da UI)
 *
 * @remarks
 * Os tokens são importados do diretório `/formats` do pacote
 * `@rainersoft/design-tokens`, que expõe:
 *
 * - `tokens.json`: estrutura tipável consumida em TypeScript
 * - `css-vars.css`: variáveis CSS globais para uso direto em estilos
 *
 * @example
 * // Uso básico em um componente React com Tailwind:
 * import { cn } from '@rainersoft/ui/lib';
 *
 * function Button({ isActive }: { isActive?: boolean }) {
 *   return (
 *     <button
 *       className={cn(
 *         'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
 *         isActive
 *           ? 'bg-primary text-primary-foreground'
 *           : 'bg-muted text-muted-foreground'
 *       )}
 *     >
 *       Clique aqui
 *     </button>
 *   );
 * }
 *
 * @module src/lib/tokens
 * @author Rainer Teixeira <https://github.com/rainerteixeira>
 * @version 1.0.0
 */
import { type ClassValue } from 'clsx';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
/**
 * Estrutura semântica dos tokens
 */
interface SemanticsDefinition {
    motion?: MotionSemantic;
    layoutClasses?: {
        components?: Record<string, string>;
        sections?: Record<string, string>;
    };
    colors?: Record<string, CategoryColors>;
}
/**
 * Token primitivo de motion
 */
interface MotionPrimitives {
    delay?: Record<string, string>;
    duration?: Record<string, string>;
    easing?: Record<string, string>;
}
/**
 * Paleta de cores de uma categoria
 */
interface CategoryColors extends Record<string, string | undefined> {
    base?: string;
    light?: string;
    dark?: string;
    foreground?: string;
}
/**
 * Configuração de botão por tema
 */
interface ButtonPalette {
    default?: string;
    text?: string;
    hover?: string;
    disabled?: string;
}
/**
 * Definição completa de um tema
 */
interface ThemeDefinition {
    colors?: Record<string, CategoryColors>;
    button?: {
        primary?: ButtonPalette;
        secondary?: ButtonPalette;
        tertiary?: ButtonPalette;
        danger?: ButtonPalette;
    };
    spacing?: Record<string, string>;
    typography?: Record<string, string>;
    [key: string]: unknown;
}
/**
 * Estrutura de motion semântico
 */
interface MotionSemantic {
    transition?: {
        default?: {
            duration?: string;
            easing?: string;
        };
        fast?: {
            duration?: string;
            easing?: string;
        };
        slow?: {
            duration?: string;
            easing?: string;
        };
    };
    interaction?: {
        hover?: {
            duration?: string;
            easing?: string;
        };
        focus?: {
            duration?: string;
            easing?: string;
        };
        active?: {
            duration?: string;
            easing?: string;
        };
    };
    feedback?: {
        success?: {
            duration?: string;
            easing?: string;
        };
        error?: {
            duration?: string;
            easing?: string;
        };
        warning?: {
            duration?: string;
            easing?: string;
        };
    };
    navigation?: {
        page?: {
            duration?: string;
            easing?: string;
        };
        modal?: {
            duration?: string;
            easing?: string;
        };
    };
}
/**
 * Tipagem completa dos tokens
 */
export type Tokens = typeof tokensData & {
    semantics?: SemanticsDefinition;
};
/**
 * Temas suportados pelo design system
 */
export type ThemeKey = 'light' | 'dark';
/**
 * Status de cores semânticas
 */
export type StatusColor = 'success' | 'warning' | 'error' | 'info';
/**
 * Variantes de cor de marca
 */
export type BrandColorVariant = 'primary' | 'secondary' | 'tertiary';
/**
 * Tokens expostos de forma tipada
 * @constant
 */
export declare const tokens: Tokens;
/**
 * Combina classes CSS utilizando clsx + tailwind-merge
 *
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com classes CSS combinadas e otimizadas
 *
 * @example
 * cn('p-4', isActive && 'bg-primary', className)
 */
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Mapa semântico de z-index para layout e sobreposições
 * @constant
 */
export declare const Z_INDEX: {
    readonly base: string;
    readonly content: string;
    readonly overlay: string;
    readonly dropdown: string;
    readonly modal: string;
    readonly tooltip: string;
    readonly notification: string;
    readonly max: string;
};
/**
 * Tokens brutos de motion
 */
export declare const motionTokens: MotionPrimitives;
/**
 * Atalhos de motion
 */
export declare const animationDelays: Record<string, string>;
export declare const animationDurations: Record<string, string>;
export declare const animationEasings: Record<string, string>;
/**
 * Alias em MAIÚSCULAS para consumo externo
 */
export declare const ANIMATION_DELAYS: Record<string, string>;
export declare const ANIMATION_DURATIONS: Record<string, string>;
export declare const ANIMATION_EASINGS: Record<string, string>;
/**
 * Objeto consolidado de motion
 */
export declare const motion: {
    readonly duration: Record<string, string>;
    readonly easing: Record<string, string>;
    readonly delay: Record<string, string>;
};
/**
 * Presets semânticos para animações
 * @constant
 */
export declare const motionPresets: {
    readonly default: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly fast: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly slow: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly spring: {
        readonly duration: string;
        readonly easing: string;
    };
};
export declare const motionSemantic: MotionSemantic;
/**
 * Classes utilitárias de transição (Tailwind friendly)
 * @constant
 */
export declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: "transition-all duration-200 ease-in-out";
        readonly COLOR: "transition-colors duration-200 ease-in-out";
        readonly TRANSFORM: "transition-transform duration-200 ease-in-out";
        readonly OPACITY: "transition-opacity duration-200 ease-in-out";
    };
};
/**
 * Retorna o objeto completo do tema
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Definição completa do tema
 */
export declare function getTheme(theme: ThemeKey): ThemeDefinition;
/**
 * Retorna apenas as cores do tema
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Cores do tema organizadas por categoria
 */
export declare function getThemeColors(theme: ThemeKey): Record<string, CategoryColors>;
/**
 * Retorna cores semânticas simplificadas
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas do tema
 */
export declare function getSemanticColors(theme: ThemeKey): {
    colors: Record<string, CategoryColors>;
};
/**
 * Retorna a cor base de um status
 *
 * @param status - Status da cor ('success', 'warning', 'error', 'info')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do status ou fallback
 */
export declare function getStatusColor(status: StatusColor, theme?: ThemeKey): string;
/**
 * Retorna cor principal de botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão primário
 */
export declare function getButtonPrimaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor secundária de botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão secundário
 */
export declare function getButtonSecondaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor de texto do botão primário
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do texto do botão primário
 */
export declare function getButtonPrimaryTextColor(theme?: ThemeKey): string;
/**
 * Retorna cor da variante terciária do botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão terciário
 */
export declare function getButtonTertiaryColor(theme?: ThemeKey): string;
/**
 * Retorna uma cor específica do tema por categoria e tom
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @param category - Categoria da cor (ex: 'primary', 'secondary')
 * @param shade - Tom específico (ex: 'base', 'light', 'dark')
 * @returns Cor CSS ou undefined se não encontrada
 */
export declare function getColorFromTheme(theme: ThemeKey, category: string, shade: string): string | undefined;
/**
 * Retorna cores de marca por variante
 *
 * @param variant - Variante da marca ('primary', 'secondary', 'tertiary')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS da variante de marca
 */
export declare function getBrandColor(variant: BrandColorVariant, theme?: ThemeKey): string | undefined;
/**
 * Retorna cores semânticas simplificadas (subset comum)
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas principais
 */
export declare function getSemanticColorsSimplified(theme: ThemeKey): Record<string, CategoryColors | undefined>;
/**
 * Retorna constantes semânticas brutas dos tokens
 *
 * @returns Objeto com constantes de cores semânticas
 */
export declare function getSemanticColorConstants(): Record<string, CategoryColors>;
/**
 * Gera classes Tailwind dinamicamente a partir de opções
 *
 * @param options - Opções de classes Tailwind
 * @returns String de classes CSS Tailwind
 *
 * @example
 * generateTailwindClasses({ bg: 'primary', text: 'white', p: '4', rounded: 'lg' })
 * // Retorna: 'bg-primary text-white p-4 rounded-lg'
 */
export declare function generateTailwindClasses(options: Record<string, string | undefined>): string;
/**
 * Retorna uma variável CSS a partir de um nome de token
 *
 * @param tokenName - Nome do token (ex: 'color-primary')
 * @returns Variável CSS formatada
 */
export declare function getTokenColor(tokenName: string): string;
/**
 * Cria cor RGBA a partir de token CSS com transparência
 *
 * @param tokenName - Nome do token CSS
 * @param alpha - Valor de transparência (0-1, padrão: 0.08)
 * @returns String RGBA
 */
export declare function overlayFromToken(tokenName: string, alpha?: number): string;
/**
 * Valida se uma string é um hexadecimal válido
 *
 * @param hex - String hexadecimal a validar
 * @returns Verdadeiro se for hexadecimal válido
 */
export declare function isValidHex(hex: string): boolean;
/**
 * Retorna cor de contraste (preto ou branco) baseada na luminância
 *
 * @param hex - Cor hexadecimal
 * @returns 'var(--color-black)' ou 'var(--color-white)'
 */
export declare function getContrastColor(hex: string): string;
/**
 * Tokens do tema claro
 */
export declare const lightTokens: ThemeDefinition;
/**
 * Tokens do tema escuro
 */
export declare const darkTokens: ThemeDefinition;
/**
 * Classes CSS semânticas para componentes
 */
export declare const COMPONENT_CLASSES: Record<string, string>;
/**
 * Classes CSS semânticas para seções
 */
export declare const SECTION_CLASSES: Record<string, string>;
export declare const GRADIENT_DIRECTIONS: Record<string, string> | {
    readonly TO_R: "to-r";
    readonly TO_L: "to-l";
    readonly TO_T: "to-t";
    readonly TO_B: "to-b";
    readonly TO_BR: "to-br";
    readonly TO_BL: "to-bl";
    readonly TO_TR: "to-tr";
    readonly TO_TL: "to-tl";
};
/**
 * Objeto com todas as utilidades exportadas
 */
export declare const tokenUtils: {
    cn: typeof cn;
    getTheme: typeof getTheme;
    getThemeColors: typeof getThemeColors;
    getStatusColor: typeof getStatusColor;
    getBrandColor: typeof getBrandColor;
    getTokenColor: typeof getTokenColor;
    overlayFromToken: typeof overlayFromToken;
    isValidHex: typeof isValidHex;
    getContrastColor: typeof getContrastColor;
    generateTailwindClasses: typeof generateTailwindClasses;
    Z_INDEX: {
        readonly base: string;
        readonly content: string;
        readonly overlay: string;
        readonly dropdown: string;
        readonly modal: string;
        readonly tooltip: string;
        readonly notification: string;
        readonly max: string;
    };
    motion: {
        readonly duration: Record<string, string>;
        readonly easing: Record<string, string>;
        readonly delay: Record<string, string>;
    };
    motionPresets: {
        readonly default: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly fast: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly slow: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly spring: {
            readonly duration: string;
            readonly easing: string;
        };
    };
    motionSemantic: MotionSemantic;
    MOTION: {
        readonly TRANSITION: {
            readonly DEFAULT: "transition-all duration-200 ease-in-out";
            readonly COLOR: "transition-colors duration-200 ease-in-out";
            readonly TRANSFORM: "transition-transform duration-200 ease-in-out";
            readonly OPACITY: "transition-opacity duration-200 ease-in-out";
        };
    };
    COMPONENT_CLASSES: Record<string, string>;
    SECTION_CLASSES: Record<string, string>;
    GRADIENT_DIRECTIONS: Record<string, string> | {
        readonly TO_R: "to-r";
        readonly TO_L: "to-l";
        readonly TO_T: "to-t";
        readonly TO_B: "to-b";
        readonly TO_BR: "to-br";
        readonly TO_BL: "to-bl";
        readonly TO_TR: "to-tr";
        readonly TO_TL: "to-tl";
    };
    lightTokens: ThemeDefinition;
    darkTokens: ThemeDefinition;
};
/**
 * Exportação padrão para importações em lote
 */
export default tokenUtils;
