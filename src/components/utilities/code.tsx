/**
 * Componente Code
 *
 * Exibição de código inline e em blocos.
 * Suporta syntax highlighting e cópia.
 *
 * @module @rainersoft/ui/components/utilities/code
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { Copy as CopyIcon, Check as CheckIcon } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Variantes do Code
 */
const codeVariants = cva(
  'rounded-md font-mono text-sm',
  {
    variants: {
      variant: {
        inline: 'bg-muted px-1.5 py-0.5 text-[13px]',
        block: 'bg-muted p-4 text-sm',
        ghost: 'bg-transparent px-1.5 py-0.5 text-[13px]',
        neon: 'bg-primary/10 text-primary px-1.5 py-0.5 text-[13px] dark:bg-primary/20',
        success: 'bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[13px] dark:bg-emerald-900/20 dark:text-emerald-400',
        warning: 'bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] dark:bg-amber-900/20 dark:text-amber-400',
        error: 'bg-red-100 text-red-800 px-1.5 py-0.5 text-[13px] dark:bg-red-900/20 dark:text-red-400',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'inline',
      size: 'sm',
    },
  }
);

/**
 * Props do Code
 */
export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {
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
export const Code = React.forwardRef<HTMLElement, CodeProps>(
  (
    {
      className,
      variant = 'inline',
      size = 'sm',
      language,
      showCopy = false,
      wrap = false,
      startLine = 1,
      showLineNumbers = false,
      children,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const codeRef = React.useRef<HTMLElement>(null);

    // Copia código
    const handleCopy = React.useCallback(async () => {
      if (codeRef.current) {
        const text = codeRef.current.textContent || '';
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }, []);

    // Se é inline
    if (variant === 'inline' || variant === 'ghost' || 
        variant === 'neon' || variant === 'success' || 
        variant === 'warning' || variant === 'error') {
      return (
        <code
          ref={ref}
          className={cn(codeVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </code>
      );
    }

    // Prepara o código
    const codeString = typeof children === 'string' ? children : String(children);
    const lines = codeString.split('\n');

    // Renderiza bloco de código
    return (
      <div className="relative group">
        {/* Header com linguagem e cópia */}
        {(language || showCopy) && (
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md">
            {language && (
              <span className="text-xs font-medium text-muted-foreground uppercase">
                {language}
              </span>
            )}
            {showCopy && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-3 w-3 mr-1" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3 w-3 mr-1" />
                    Copiar
                  </>
                )}
              </Button>
            )}
          </div>
        )}

        {/* Código */}
        <pre
          className={cn(
            codeVariants({ variant: 'block', size }),
            wrap && 'whitespace-pre-wrap break-all',
            !showLineNumbers && 'overflow-x-auto',
            language && !showCopy && 'rounded-t-md border-t border-border',
            className
          )}
        >
          <code ref={ref} {...props}>
            {showLineNumbers ? (
              <table className="w-full">
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50">
                        {startLine + index}
                      </td>
                      <td className="px-0 py-0">
                        <span className="block px-4 py-0">
                          {line || '\u00A0'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              children
            )}
          </code>
        </pre>
      </div>
    );
  }
);

Code.displayName = 'Code';

/**
 * CodeInline - Atalho para código inline
 */
export interface CodeInlineProps extends Omit<CodeProps, 'variant'> {
  /** Variante de cor */
  color?: 'default' | 'ghost' | 'neon' | 'success' | 'warning' | 'error';
}

export const CodeInline = React.forwardRef<HTMLElement, CodeInlineProps>(
  (
    {
      className,
      color = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <Code
        ref={ref}
        variant={color as any}
        className={className}
        {...props}
      />
    );
  }
);

CodeInline.displayName = 'CodeInline';

/**
 * CodeBlock - Atalho para bloco de código
 */
export interface CodeBlockProps extends Omit<CodeProps, 'variant'> {}

export const CodeBlock = React.forwardRef<HTMLElement, CodeBlockProps>(
  (
    {
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Code
        ref={ref}
        variant="block"
        className={className}
        {...props}
      />
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
