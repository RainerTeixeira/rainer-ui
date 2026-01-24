/**
 * Componente Code
 *
 * Exibição de código inline e em blocos.
 * Suporta syntax highlighting e cópia.
 *
 * @module @rainersoft/utils/content/code
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Code
 */
declare const codeVariants: (props?: {
    variant?: "success" | "warning" | "error" | "ghost" | "neon" | "inline" | "block";
    size?: "xs" | "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Code
 */
export interface CodeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof codeVariants> {
    /** Linguagem do código */
    language?: string;
    /** Se mostra o botão de copiar */
    showCopy?: boolean;
    /** Se deve quebrar linhas */
    wrap?: boolean;
    /** Linha inicial */
    startLine?: number;
    /** Se mostra números de linha */
    showLineNumbers?: boolean;
}
/**
 * Componente Code
 *
 * Exibição de código.
 *
 * @example
 * ```tsx
 * // Inline
 * <Code>npm install</Code>
 *
 * // Bloco de código
 * <Code variant="block" language="javascript">
 *   {`function hello() {
 *     console.log('Hello World');
 *   }`}
 * </Code>
 *
 * // Com cópia
 * <Code
 *   variant="block"
 *   showCopy
 *   language="typescript"
 *   showLineNumbers
 * >
 *   {codeString}
 * </Code>
 *
 * // Com variantes de cor
 * <Code variant="success">success</Code>
 * <Code variant="warning">warning</Code>
 * <Code variant="error">error</Code>
 * ```
 */
export declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
/**
 * CodeInline - Atalho para código inline
 */
export interface CodeInlineProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    color?: 'default' | Exclude<VariantProps<typeof codeVariants>['variant'], 'block'>;
}
export declare const CodeInline: React.ForwardRefExoticComponent<CodeInlineProps & React.RefAttributes<HTMLElement>>;
/**
 * CodeBlock - Atalho para bloco de código
 */
export interface CodeBlockProps extends Omit<CodeProps, 'variant'> {
}
export declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLElement>>;
export {};
