/**
 * Hook PWA (Progressive Web App)
 *
 * Hook para gerenciar funcionalidades PWA como instalação e atualizações.
 *
 * @module @rainersoft/ui/hooks
 * @author Rainer Teixeira
 */
declare function usePWA(): {
    isInstallable: boolean;
    isInstalled: boolean;
    isStandalone: boolean;
    updateAvailable: boolean;
    promptInstall: () => Promise<void>;
    updateServiceWorker: () => void;
};

export { usePWA };
