/**
 * Componente Notification
 *
 * Notificações toast persistentes com ações.
 * Suporta múltiplas variantes, auto-dismiss e ações customizadas.
 *
 * @module @rainersoft/ui/components/feedback/notification
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes da Notification
 */
declare const notificationVariants: (props?: {
    variant?: "success" | "warning" | "error" | "info" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props da Notification
 */
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationVariants> {
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
export declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
/**
 * NotificationGroup - Container para múltiplas notificações
 */
export interface NotificationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Notificações filhas */
    children: React.ReactNode;
    /** Posição do grupo */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    /** Espaçamento entre notificações */
    spacing?: 'sm' | 'md' | 'lg';
}
export declare const NotificationGroup: React.ForwardRefExoticComponent<NotificationGroupProps & React.RefAttributes<HTMLDivElement>>;
/**
 * NotificationToast - Notificação estilo toast
 */
export interface NotificationToastProps extends Omit<NotificationProps, 'toast'> {
    /** ID única para o toast */
    id?: string;
}
export declare const NotificationToast: React.ForwardRefExoticComponent<NotificationToastProps & React.RefAttributes<HTMLDivElement>>;
/**
 * useNotification - Hook para gerenciar notificações
 */
export interface UseNotificationOptions {
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
export declare function useNotification(): {
    notifications: [string, UseNotificationOptions][];
    notify: (options: UseNotificationOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
};
/**
 * NotificationProvider - Provider para notificações globais
 */
export interface NotificationProviderProps {
    children: React.ReactNode;
}
export declare const NotificationProvider: React.FC<NotificationProviderProps>;
export {};
