/**
 * Cookie Manager
 *
 * Gerenciamento de cookies e preferências do usuário
 *
 * @module @rainersoft/ui/lib/cookie-utils
 */
declare const COOKIE_CONSENT_KEY = "cookie-consent";
declare const COOKIE_PREFERENCES_KEY = "cookie-preferences";
declare const COOKIE_VERSION = "1.0.0";
interface CookiePreferences {
    essential: boolean;
    performance: boolean;
    functionality: boolean;
    analytics: boolean;
}
interface CookieConsent {
    version: string;
    consented: boolean;
    timestamp: number;
    preferences: CookiePreferences;
}
declare class CookieManager {
    private static instance;
    private constructor();
    static getInstance(): CookieManager;
    hasConsent(): boolean;
    getPreferences(): CookiePreferences | null;
    saveConsent(preferences: CookiePreferences): void;
    updatePreferences(preferences: CookiePreferences): void;
    revokeConsent(): void;
    isAllowed(type: keyof CookiePreferences): boolean;
    private loadScripts;
    private loadGoogleAnalytics;
    private unloadGoogleAnalytics;
    private clearAnalyticsCookies;
}
declare function getCookieManager(): CookieManager;
declare function hasCookieConsent(): boolean;
declare function getCookiePreferences(): CookiePreferences | null;
declare function saveCookieConsent(preferences: CookiePreferences): void;
declare function isCookieAllowed(type: keyof CookiePreferences): boolean;
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

export { COOKIE_CONSENT_KEY, COOKIE_PREFERENCES_KEY, COOKIE_VERSION, type CookieConsent, CookieManager, type CookiePreferences, getCookieManager, getCookiePreferences, hasCookieConsent, isCookieAllowed, saveCookieConsent };
