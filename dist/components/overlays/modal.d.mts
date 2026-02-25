import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Modal
 */
declare const modalVariants: (props?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "screen" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
    variant?: "default" | "neon" | "glass" | "minimal";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Modal
 */
interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
    /** Se está aberto */
    open: boolean;
    /** Callback quando muda o estado */
    onOpenChange: (open: boolean) => void;
    /** Título do modal */
    title?: string;
    /** Descrição do modal */
    description?: string;
    /** Se pode ser fechado */
    closable?: boolean;
    /** Se fecha ao clicar no backdrop */
    closeOnBackdrop?: boolean;
    /** Se fecha ao pressionar ESC */
    closeOnEscape?: boolean;
    /** Se mostra o backdrop */
    showBackdrop?: boolean;
    /** Se previne scroll do body */
    preventBodyScroll?: boolean;
    /** Se está carregando */
    loading?: boolean;
}
/**
 * Componente Modal
 *
 * Janela modal sobreposta.
 *
 * @example
 * ```tsx
 * // Básico
 * <Modal open={isOpen} onOpenChange={setIsOpen}>
 *   <div>Conteúdo do modal</div>
 * </Modal>
 *
 * // Com título e descrição
 * <Modal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Confirmar ação"
 *   description="Tem certeza que deseja continuar?
 * >
 *   <div>Conteúdo</div>
 * </Modal>
 *
 * // Grande e glass effect
 * <Modal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   size="2xl"
 *   variant="glass"
 * >
 *   <div>Conteúdo grande</div>
 * </Modal>
 * ```
 */
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalHeader - Cabeçalho do modal
 */
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Título */
    title?: string;
    /** Descrição */
    description?: string;
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalContent - Conteúdo do modal
 */
interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalFooter - Rodapé do modal
 */
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalTrigger - Botão que abre o modal
 */
interface ModalTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Callback para abrir o modal */
    onOpen?: () => void;
}
declare const ModalTrigger: React.ForwardRefExoticComponent<ModalTriggerProps & React.RefAttributes<HTMLButtonElement>>;

export { Modal, ModalContent, type ModalContentProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, ModalTrigger, type ModalTriggerProps };
