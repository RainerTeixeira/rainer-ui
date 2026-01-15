/**
 * Hook para Detecção de Dispositivos Móveis
 *
 * Custom hook que detecta se o usuário está em um dispositivo móvel
 * baseado na largura da viewport.
 *
 * @module @rainersoft/ui/hooks
 * @author Rainer Teixeira
 */
/**
 * Hook useIsMobile
 *
 * Detecta se o viewport atual é considerado mobile (< 768px).
 * Utiliza matchMedia API para detecção eficiente e reativa.
 *
 * @returns {boolean} true se a viewport é mobile (< 768px), false caso contrário
 *
 * @example
 * import { useIsMobile } from '@rainersoft/ui'
 *
 * function MyComponent() {
 *   const isMobile = useIsMobile()
 *   return <div>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>
 * }
 */
declare function useIsMobile(): boolean;

export { useIsMobile };
