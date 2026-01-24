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
 *
 * @version
 *   1.0.0
 */
import { type ClassValue } from 'clsx';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
/**
 * Tipagem base dos tokens importados
 */
export type Tokens = typeof tokensData;
/**
 * Temas suportados pelo design system
 */
export type ThemeKey = 'light' | 'dark';
/**
 * Tokens expostos de forma tipada
 */
export declare const tokens: Tokens;
/**
 * Combina classes CSS utilizando clsx + tailwind-merge
 *
 * @example
 * cn('p-4', isActive && 'bg-primary')
 */
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Mapa semântico de z-index para layout e sobreposições
 */
export declare const Z_INDEX: {
    readonly base: string;
    readonly navigation: string;
    readonly dropdown: string;
    readonly modal: string;
    readonly overlay: string;
    readonly sticky: string;
    readonly fixed: string;
    readonly tooltip: string;
};
/**
 * Tokens brutos de motion
 */
export declare const motionTokens: {};
/**
 * Atalhos de motion
 */
export declare const animationDelays: any;
export declare const animationDurations: any;
export declare const animationEasings: any;
/**
 * Alias em MAIÚSCULAS para consumo externo
 */
export declare const ANIMATION_DELAYS: any;
export declare const ANIMATION_DURATIONS: any;
export declare const ANIMATION_EASINGS: any;
/**
 * Objeto consolidado de motion
 */
export declare const motion: {
    readonly duration: any;
    readonly easing: any;
    readonly delay: any;
};
/**
 * Presets semânticos para animações
 */
export declare const motionPresets: {
    readonly default: {
        readonly duration: any;
        readonly easing: any;
    };
    readonly fast: {
        readonly duration: any;
        readonly easing: any;
    };
    readonly slow: {
        readonly duration: any;
        readonly easing: any;
    };
    readonly spring: {
        readonly duration: any;
        readonly easing: any;
    };
};
export declare const motionSemantic: any;
/**
 * Classes utilitárias de transição (Tailwind friendly)
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
 */
export declare function getTheme(theme: ThemeKey): {};
/**
 * Retorna apenas as cores do tema
 */
export declare function getThemeColors(theme: ThemeKey): any;
/**
 * Retorna cores semânticas simplificadas
 */
export declare function getSemanticColors(theme: ThemeKey): {
    colors: any;
};
/**
 * Retorna a cor base de um status
 */
export declare function getStatusColor(status: 'success' | 'warning' | 'error' | 'info', theme?: ThemeKey): string;
/**
 * Retorna cor principal de botão
 */
export declare function getButtonPrimaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor secundária de botão
 */
export declare function getButtonSecondaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor de texto do botão primário
 */
export declare function getButtonPrimaryTextColor(theme?: ThemeKey): string;
/**
 * Retorna uma cor específica do tema
 */
export declare function getColorFromTheme(theme: ThemeKey, category: string, shade: string): string | undefined;
/**
 * Retorna cores de marca por variante
 */
export declare function getBrandColor(variant: 'primary' | 'secondary' | 'tertiary', theme?: ThemeKey): string | undefined;
/**
 * Gera classes Tailwind dinamicamente
 */
export declare function generateTailwindClasses(options: {
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
 * Retorna uma variável CSS a partir de um token
 */
export declare function getTokenColor(tokenName: string): string;
/**
 * Cria overlay RGBA a partir de token CSS
 */
export declare function overlayFromToken(tokenName: string, alpha?: number): string;
/**
 * Valida hexadecimal
 */
export declare function isValidHex(hex: string): boolean;
/**
 * Retorna cor de contraste baseada na luminância
 */
export declare function getContrastColor(hex: string): string;
/**
 * Tokens diretos por tema
 */
export declare const lightTokens: {};
export declare const darkTokens: {};
/**
 * Classes semânticas de layout
 */
export declare const COMPONENT_CLASSES: any;
export declare const SECTION_CLASSES: any;
/**
 * Direções de gradiente
 */
export declare const GRADIENT_DIRECTIONS: any;
