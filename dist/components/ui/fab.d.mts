import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do FAB
 */
declare const fabVariants: (props?: {
    variant?: "secondary" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass";
    size?: "sm" | "md" | "lg" | "xl";
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "bottom-center" | "top-center";
    extended?: boolean;
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do FAB
 */
interface FABProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>, VariantProps<typeof fabVariants> {
    /** Ícone do botão */
    icon?: React.ReactNode;
    /** Texto quando estendido */
    text?: string;
    /** Se está ativo/expandido */
    active?: boolean;
    /** Callback ao clicar */
    onClick?: () => void;
    /** Se tem animação de entrada */
    animate?: boolean;
    /** Ações rápidas */
    actions?: Array<{
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    }>;
}
/**
 * Componente FAB
 *
 * Botão de ação flutuante.
 *
 * @example
 * ```tsx
 * // Básico
 * <FAB
 *   icon={<Plus />}
 *   onClick={handleClick}
 * />
 *
 * // Estendido
 * <FAB
 *   icon={<Edit />}
 *   text="Nova nota"
 *   extended
 *   onClick={handleClick}
 * />
 *
 * // Com ações
 * <FAB
 *   icon={<Share />}
 *   active={showActions}
 *   actions={[
 *     { icon: <Download />, label: 'Download', onClick: handleDownload },
 *     { icon: <Upload />, label: 'Upload', onClick: handleUpload },
 *   ]}
 *   onClick={toggleActions}
 * />
 *
 * // Customizado
 * <FAB
 *   icon={<Heart />}
 *   variant="secondary"
 *   size="lg"
 *   position="bottom-left"
 *   onClick={handleLike}
 * />
 * ```
 */
declare const FAB: React.ForwardRefExoticComponent<FABProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * FABGroup - Grupo de FABs
 */
interface FABGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** FAB principal */
    main: React.ReactElement;
    /** FABs secundários */
    secondary?: React.ReactElement[];
    /** Posição do grupo */
    position?: VariantProps<typeof fabVariants>['position'];
}
declare const FABGroup: React.ForwardRefExoticComponent<FABGroupProps & React.RefAttributes<HTMLDivElement>>;

export { FAB, FABGroup, type FABGroupProps, type FABProps };
