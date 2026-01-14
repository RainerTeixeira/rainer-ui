import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do TopBar
 */
declare const topBarVariants: (props?: {
    variant?: "default" | "transparent" | "neon" | "glass" | "floating";
    size?: "sm" | "md" | "lg";
    sticky?: boolean;
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do TopBar
 */
interface TopBarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof topBarVariants> {
    /** Título da barra */
    title?: string;
    /** Subtítulo */
    subtitle?: string;
    /** Seção esquerda customizada */
    left?: React.ReactNode;
    /** Seção central customizada */
    center?: React.ReactNode;
    /** Seção direita customizada */
    right?: React.ReactNode;
    /** Botão voltar */
    back?: {
        onClick: () => void;
        label?: string;
    };
    /** Botão menu */
    menu?: {
        onClick: () => void;
        label?: string;
    };
    /** Campo de busca */
    search?: {
        placeholder?: string;
        value?: string;
        onChange?: (value: string) => void;
        onSubmit?: (value: string) => void;
    };
    /** Notificações */
    notifications?: {
        count?: number;
        onClick?: () => void;
    };
}
/**
 * Componente TopBar
 *
 * Barra superior de navegação.
 *
 * @example
 * ```tsx
 * // Básico
 * <TopBar
 *   title="Minha Página"
 *   back={{ onClick: () => history.back() }}
 * />
 *
 * // Com busca e ações
 * <TopBar
 *   title="Produtos"
 *   search={{
 *     placeholder: "Buscar produtos...",
 *     onChange: setQuery,
 *   }}
 *   notifications={{ count: 5, onClick: openNotifications }}
 * />
 *
 * // Customizado
 * <TopBar
 *   left={<Button>Voltar</Button>}
 *   center={<h1>Título</h1>}
 *   right={<Button>Ação</Button>}
 * />
 * ```
 */
declare const TopBar: React.ForwardRefExoticComponent<TopBarProps & React.RefAttributes<HTMLDivElement>>;
/**
 * TopBarTitle - Título centralizado
 */
interface TopBarTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Título principal */
    title: string;
    /** Subtítulo */
    subtitle?: string;
}
declare const TopBarTitle: React.ForwardRefExoticComponent<TopBarTitleProps & React.RefAttributes<HTMLHeadingElement>>;
/**
 * TopBarActions - Container para ações
 */
interface TopBarActionsProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const TopBarActions: React.ForwardRefExoticComponent<TopBarActionsProps & React.RefAttributes<HTMLDivElement>>;

export { TopBar, TopBarActions, type TopBarActionsProps, type TopBarProps, TopBarTitle, type TopBarTitleProps };
