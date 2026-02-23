/**
 * Componente Modal
 *
 * Janela modal sobreposta com backdrop.
 * Suporta diferentes tamanhos, animações e customizações.
 *
 * @module @rainersoft/ui/components/overlays/modal
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Modal
 */
declare const modalVariants: (props?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "screen" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
    variant?: "default" | "neon" | "glass" | "minimal";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Modal
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
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
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalHeader - Cabeçalho do modal
 */
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Título */
    title?: string;
    /** Descrição */
    description?: string;
}
export declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalContent - Conteúdo do modal
 */
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalFooter - Rodapé do modal
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ModalTrigger - Botão que abre o modal
 */
export interface ModalTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Callback para abrir o modal */
    onOpen?: () => void;
}
export declare const ModalTrigger: React.ForwardRefExoticComponent<ModalTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
