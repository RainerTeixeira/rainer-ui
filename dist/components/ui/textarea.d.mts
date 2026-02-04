import * as React from 'react';

/**
 * Textarea Component
 *
 * Componente de textarea com suporte a resize,
 * estados de validação e acessibilidade completa.
 *
 * @module components/ui/textarea
 * @author Rainer Teixeira
 * @version 1.0.0
 */

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Estado de erro do textarea */
    error?: boolean;
    /** Mensagem de ajuda ou erro */
    helperText?: string;
    /** Label do textarea */
    label?: string;
    /** Obrigatório */
    required?: boolean;
    /** Número máximo de caracteres */
    maxLength?: number;
    /** Mostrar contador de caracteres */
    showCount?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea, type TextareaProps };
