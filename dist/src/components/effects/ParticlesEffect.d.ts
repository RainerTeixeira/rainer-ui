/**
 * Particles Effect Component
 *
 * Efeito decorativo de partículas animadas para dark mode. Três pontos
 * coloridos pulsantes em posições configuráveis com animações suaves e
 * dessincronizadas. Não interfere com interações (pointer-events-none).
 *
 * @module components/ui/particles-effect
 * @fileoverview Partículas decorativas para dark mode com animações
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Variante padrão
 * <ParticlesEffect />
 *
 * // Variante alternativa 1
 * <ParticlesEffect variant="alt1" />
 *
 * // Variante alternativa 2
 * <ParticlesEffect variant="alt2" />
 * ```
 *
 * Características:
 * - Visível apenas no dark mode
 * - Não interfere com interações (pointer-events-none)
 * - Posição fixa durante scroll
 * - Variantes de posicionamento (default, alt1, alt2)
 * - Cores: cyan, purple, pink
 * - Animação de pulse dessincronizada
 * - Performance otimizada
 */
/**
 * Variantes de posicionamento disponíveis
 */
type ParticleVariant = 'default' | 'alt1' | 'alt2';
/**
 * Props do ParticlesEffect
 */
interface ParticlesEffectProps {
    /** Variante de posicionamento das partículas */
    readonly variant?: ParticleVariant;
}
/**
 * Componente principal do Particles Effect
 *
 * Renderiza três partículas decorativas animadas.
 * Posicionamento configurável via variante.
 *
 * Variantes:
 * - `default`: Padrão (top-20, top-40, bottom-40)
 * - `alt1`: Alternativo 1 (top-24, top-80, bottom-80)
 * - `alt2`: Alternativo 2 (top-32, top-60, bottom-60)
 *
 * @param variant - Variante de posicionamento
 * @returns Container com partículas animadas
 *
 * @example
 * ```tsx
 * // Variante padrão
 * <ParticlesEffect />
 *
 * // Variante alternativa
 * <ParticlesEffect variant="alt1" />
 * ```
 */
export declare function ParticlesEffect({ variant, }?: ParticlesEffectProps): import("react/jsx-runtime").JSX.Element;
export {};
