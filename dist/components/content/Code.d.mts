import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Code
 */
declare const codeVariants: (props?: {
    variant?: "error" | "success" | "warning" | "ghost" | "neon" | "inline" | "block";
    size?: "xs" | "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Code
 */
interface CodeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof codeVariants> {
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
declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
/**
 * CodeInline - Atalho para código inline
 */
interface CodeInlineProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    color?: 'default' | Exclude<VariantProps<typeof codeVariants>['variant'], 'block'>;
}
declare const CodeInline: React.ForwardRefExoticComponent<CodeInlineProps & React.RefAttributes<HTMLElement>>;
/**
 * CodeBlock - Atalho para bloco de código
 */
interface CodeBlockProps extends Omit<CodeProps, 'variant'> {
}
declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLElement>>;

export { Code, CodeBlock, type CodeBlockProps, CodeInline, type CodeInlineProps, type CodeProps };
