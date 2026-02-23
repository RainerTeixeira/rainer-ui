export interface MatrixBackgroundProps {
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
declare function MatrixBackgroundInner({ variant }: MatrixBackgroundProps): import("react/jsx-runtime").JSX.Element;
export declare const MatrixBackground: import("react").MemoExoticComponent<typeof MatrixBackgroundInner>;
export {};
