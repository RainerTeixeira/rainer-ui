import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

/**
 * Configuração de animação para o botão
 */
interface AnimationConfig {
    /** Tipo de animação */
    type?: 'scale' | 'bounce' | 'rotate' | 'pulse';
    /** Duração em segundos */
    duration?: number;
    /** Intensidade da animação */
    intensity?: 'subtle' | 'normal' | 'strong';
}
/**
 * Props do componente ActionButton
 */
interface ActionButtonProps {
    /** Ícone quando inativo */
    icon: React__default.ReactNode;
    /** Ícone quando ativo (opcional, usa icon se não fornecido) */
    activeIcon?: React__default.ReactNode;
    /** Se o botão está no estado ativo */
    isActive?: boolean;
    /** Callback executado ao clicar */
    onToggle?: (isActive: boolean) => void;
    /** Contador de interações */
    count?: number;
    /** Label quando inativo */
    inactiveLabel?: string;
    /** Label quando ativo */
    activeLabel?: string;
    /** Variante visual */
    variant?: 'default' | 'outline' | 'ghost' | 'link';
    /** Tamanho do botão */
    size?: 'sm' | 'default' | 'lg' | 'icon';
    /** Exibir contador */
    showCount?: boolean;
    /** Exibir label */
    showLabel?: boolean;
    /** Configuração de animação */
    animation?: AnimationConfig;
    /** Classes CSS adicionais */
    className?: string;
    /** Desabilitar animação */
    disabled?: boolean;
    /** Tooltip/Aria label customizado */
    ariaLabel?: string;
    /** Cor customizada quando ativo */
    activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}
/**
 * Componente ActionButton
 *
 * Botão de ação genérico com estado toggleável, animações e contador.
 * Perfeito para interações sociais como curtir, favoritar, seguir, etc.
 */
declare function ActionButton({ icon, activeIcon, isActive, onToggle, count, inactiveLabel, activeLabel, variant, size, showCount, showLabel, animation, className, disabled, ariaLabel, activeColor, }: ActionButtonProps): react_jsx_runtime.JSX.Element;
/**
 * Variantes pré-configuradas para casos de uso comuns
 */
declare const ActionButtonVariants: {
    /**
     * Botão de curtir (coração)
     */
    readonly Like: (props: Omit<ActionButtonProps, "activeColor">) => react_jsx_runtime.JSX.Element;
    /**
     * Botão de favorito (estrela)
     */
    readonly Favorite: (props: Omit<ActionButtonProps, "activeColor">) => react_jsx_runtime.JSX.Element;
    /**
     * Botão de follow/seguir
     */
    readonly Follow: (props: Omit<ActionButtonProps, "activeColor">) => react_jsx_runtime.JSX.Element;
    /**
     * Botão de save/salvar
     */
    readonly Save: (props: Omit<ActionButtonProps, "activeColor">) => react_jsx_runtime.JSX.Element;
};

export { ActionButton, type ActionButtonProps, ActionButtonVariants };
