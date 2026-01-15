import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes da Notification
 */
declare const notificationVariants: (props?: {
    variant?: "default" | "success" | "warning" | "error" | "info";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props da Notification
 */
interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationVariants> {
    /** Título da notificação */
    title?: string;
    /** Descrição da notificação */
    description?: string;
    /** Se pode ser fechada */
    dismissible?: boolean;
    /** Callback ao fechar */
    onDismiss?: () => void;
    /** Ações da notificação */
    actions?: React.ReactNode;
    /** Ícone customizado */
    icon?: React.ReactNode;
    /** Data/hora da notificação */
    timestamp?: string;
    /** Se tem auto-dismiss */
    autoClose?: boolean;
    /** Tempo para auto-dismiss (ms) */
    autoCloseDelay?: number;
    /** Se está em modo toast */
    toast?: boolean;
}
/**
 * Componente Notification
 *
 * Notificação com ações e dismiss opcional.
 *
 * @example
 * ```tsx
 * // Básica
 * <Notification
 *   title="Sucesso!"
 *   description="Arquivo salvo com sucesso."
 *   variant="success"
 * />
 *
 * // Com ações
 * <Notification
 *   title="Atualização disponível"
 *   description="Uma nova versão está disponível."
 *   actions={
 *     <Button size="sm">Atualizar</Button>
 *   }
 * />
 *
 * // Com auto-dismiss
 * <Notification
 *   title="Notificação"
 *   description="Esta mensagem desaparecerá em 5 segundos."
 *   autoClose
 *   autoCloseDelay={5000}
 * />
 * ```
 */
declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
/**
 * NotificationGroup - Container para múltiplas notificações
 */
interface NotificationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Notificações filhas */
    children: React.ReactNode;
    /** Posição do grupo */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    /** Espaçamento entre notificações */
    spacing?: 'sm' | 'md' | 'lg';
}
declare const NotificationGroup: React.ForwardRefExoticComponent<NotificationGroupProps & React.RefAttributes<HTMLDivElement>>;
/**
 * NotificationToast - Notificação estilo toast
 */
interface NotificationToastProps extends Omit<NotificationProps, 'toast'> {
    /** ID única para o toast */
    id?: string;
}
declare const NotificationToast: React.ForwardRefExoticComponent<NotificationToastProps & React.RefAttributes<HTMLDivElement>>;
/**
 * useNotification - Hook para gerenciar notificações
 */
interface UseNotificationOptions {
    /** ID única */
    id?: string;
    /** Título */
    title?: string;
    /** Descrição */
    description?: string;
    /** Variante */
    variant?: VariantProps<typeof notificationVariants>['variant'];
    /** Auto dismiss */
    autoClose?: boolean;
    /** Tempo de auto dismiss */
    autoCloseDelay?: number;
    /** Ações */
    actions?: React.ReactNode;
}
declare function useNotification(): {
    notifications: [string, UseNotificationOptions][];
    notify: (options: UseNotificationOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
};
/**
 * NotificationProvider - Provider para notificações globais
 */
interface NotificationProviderProps {
    children: React.ReactNode;
}
declare const NotificationProvider: React.FC<NotificationProviderProps>;

export { Notification, NotificationGroup, type NotificationGroupProps, type NotificationProps, NotificationProvider, type NotificationProviderProps, NotificationToast, type NotificationToastProps, type UseNotificationOptions, useNotification };
