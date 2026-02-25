import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface MatrixBackgroundProps {
    /**
     * Variante de posicionamento:
     * - 'global': fixed, cobre toda a tela (padrão)
     * - 'local': absolute, fica dentro do container pai
     */
    variant?: "global" | "local";
}
/**
 * MatrixBackground
 *
 * Componente autossuficiente que renderiza a chuva de caracteres binários
 * em background. Gerencia seu próprio estado e responsividade.
 * Pronto para usar em qualquer projeto sem dependências externas.
 *
 * @param variant - 'global' (fixed, tela toda) ou 'local' (absolute, container pai)
 */
declare function MatrixBackgroundInner({ variant }: MatrixBackgroundProps): react_jsx_runtime.JSX.Element;
declare const MatrixBackground: React.MemoExoticComponent<typeof MatrixBackgroundInner>;

export { MatrixBackground, type MatrixBackgroundProps };
