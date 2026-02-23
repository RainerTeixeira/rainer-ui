/**
 * Input Component
 *
 * Componente de input base com suporte a múltiplos tipos,
 * estados de validação e acessibilidade completa.
 *
 * @module components/ui/input
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Estado de erro do input */
    error?: boolean;
    /** Mensagem de ajuda ou erro */
    helperText?: string;
    /** Label do input */
    label?: string;
    /** Obrigatório */
    required?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
