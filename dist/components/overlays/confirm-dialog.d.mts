import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do ConfirmDialog
 */
declare const confirmDialogVariants: (props?: {
    variant?: "success" | "warning" | "info" | "default" | "destructive";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do ConfirmDialog
 */
interface ConfirmDialogProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof confirmDialogVariants> {
    /** Se está aberto */
    open: boolean;
    /** Callback quando muda o estado */
    onOpenChange: (open: boolean) => void;
    /** Título do diálogo */
    title: string;
    /** Descrição do diálogo */
    description?: string;
    /** Texto do botão de confirmação */
    confirmText?: string;
    /** Texto do botão de cancelamento */
    cancelText?: string;
    /** Callback ao confirmar */
    onConfirm?: () => void | Promise<void>;
    /** Callback ao cancelar */
    onCancel?: () => void;
    /** Se está carregando */
    loading?: boolean;
    /** Se fecha ao confirmar */
    closeOnConfirm?: boolean;
    /** Se fecha ao cancelar */
    closeOnCancel?: boolean;
    /** Se fecha ao clicar no backdrop */
    closeOnBackdrop?: boolean;
    /** Se fecha ao pressionar ESC */
    closeOnEscape?: boolean;
    /** Variante do botão de confirmação */
    confirmVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}
/**
 * Componente ConfirmDialog
 *
 * Diálogo de confirmação.
 *
 * @example
 * ```tsx
 * // Básico
 * <ConfirmDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Tem certeza?"
 *   description="Esta ação não pode ser desfeita."
 *   onConfirm={handleConfirm}
 * />
 *
 * // Destrutivo
 * <ConfirmDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   variant="destructive"
 *   title="Excluir item?"
 *   description="Isso removerá permanentemente o item."
 *   confirmText="Excluir"
 *   onConfirm={handleDelete}
 * />
 *
 * // Customizado
 * <ConfirmDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   variant="warning"
 *   title="Salvar alterações?"
 *   description="Você tem alterações não salvas."
 *   confirmText="Salvar"
 *   cancelText="Descartar"
 *   onConfirm={handleSave}
 *   onCancel={handleDiscard}
 * />
 * ```
 */
declare const ConfirmDialog: React.ForwardRefExoticComponent<ConfirmDialogProps & React.RefAttributes<HTMLDivElement>>;
/**
 * useConfirm - Hook para facilitar o uso do ConfirmDialog
 */
interface UseConfirmOptions {
    /** Título */
    title: string;
    /** Descrição */
    description?: string;
    /** Texto do botão de confirmação */
    confirmText?: string;
    /** Texto do botão de cancelamento */
    cancelText?: string;
    /** Variante */
    variant?: VariantProps<typeof confirmDialogVariants>['variant'];
    /** Variante do botão */
    confirmVariant?: ConfirmDialogProps['confirmVariant'];
}
declare function useConfirm(): {
    confirm: (options: UseConfirmOptions & {
        onConfirm?: () => void | Promise<void>;
    }) => void;
    ConfirmDialog: () => react_jsx_runtime.JSX.Element;
};

export { ConfirmDialog, type ConfirmDialogProps, type UseConfirmOptions, useConfirm };
