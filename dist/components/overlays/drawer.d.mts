import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Drawer
 */
declare const drawerVariants: (props?: {
    position?: "top" | "bottom" | "left" | "right";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    variant?: "default" | "neon" | "glass";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Drawer
 */
interface DrawerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
    /** Se está aberto */
    open: boolean;
    /** Callback quando muda o estado */
    onOpenChange: (open: boolean) => void;
    /** Título do drawer */
    title?: string;
    /** Descrição do drawer */
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
 * Componente Drawer
 *
 * Gaveta deslizante.
 *
 * @example
 * ```tsx
 * // Lateral direito
 * <Drawer
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   position="right"
 *   title="Menu"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 *
 * // Inferior
 * <Drawer
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   position="bottom"
 *   size="lg"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 *
 * // Com glass effect
 * <Drawer
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   variant="glass"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 * ```
 */
declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DrawerHeader - Cabeçalho do drawer
 */
interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Título */
    title?: string;
    /** Descrição */
    description?: string;
}
declare const DrawerHeader: React.ForwardRefExoticComponent<DrawerHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DrawerContent - Conteúdo do drawer
 */
interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const DrawerContent: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DrawerFooter - Rodapé do drawer
 */
interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const DrawerFooter: React.ForwardRefExoticComponent<DrawerFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DrawerTrigger - Botão que abre o drawer
 */
interface DrawerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Callback para abrir o drawer */
    onOpen?: () => void;
}
declare const DrawerTrigger: React.ForwardRefExoticComponent<DrawerTriggerProps & React.RefAttributes<HTMLButtonElement>>;

export { Drawer, DrawerContent, type DrawerContentProps, DrawerFooter, type DrawerFooterProps, DrawerHeader, type DrawerHeaderProps, type DrawerProps, DrawerTrigger, type DrawerTriggerProps };
