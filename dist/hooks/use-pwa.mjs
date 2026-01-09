"use client"
"use client";
import { useState, useEffect, useCallback } from "react";
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [swRegistration, setSwRegistration] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      setSwRegistration(registration);
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1e3);
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isStandaloneiOS = window.navigator.standalone === true;
    const isStandaloneAndroid = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isStandaloneBrowser = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;
    const standalone = isStandaloneiOS || isStandaloneAndroid || isStandaloneBrowser;
    setIsStandalone(standalone);
    setIsInstalled(standalone);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = useCallback(() => {
    if (!swRegistration || !swRegistration.waiting) {
      return;
    }
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, [swRegistration]);
  return {
    isInstallable,
    isInstalled,
    isStandalone,
    updateAvailable,
    promptInstall,
    updateServiceWorker
  };
}
export {
  usePWA
};
//# sourceMappingURL=use-pwa.mjs.map