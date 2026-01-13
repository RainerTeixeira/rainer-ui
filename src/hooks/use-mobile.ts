/**
 * Hook para Detecção de Dispositivos Móveis
 *
 * Custom hook que detecta se o usuário está em um dispositivo móvel
 * baseado na largura da viewport.
 *
 * @module @rainersoft/ui/hooks
 * @author Rainer Teixeira
 */

'use client';

import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

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
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

