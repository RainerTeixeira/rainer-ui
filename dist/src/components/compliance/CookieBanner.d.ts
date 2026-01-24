/**
 * Cookie Banner Component
 *
 * Banner de consentimento de cookies conforme LGPD/GDPR.
 * Permite ao usuário aceitar, rejeitar ou personalizar cookies.
 * Salva preferências no localStorage.
 *
 * @module components/compliance/cookie-banner
 * @fileoverview Componente de banner de cookies LGPD compliant
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */
export interface CookiePreferences {
    essential: boolean;
    performance: boolean;
    functionality: boolean;
    analytics: boolean;
}
export interface CookieConsent {
    version: string;
    consented: boolean;
    timestamp: number;
    preferences: CookiePreferences;
}
/**
 * CookieBanner Component
 *
 * Banner de consentimento de cookies que aparece quando o usuário visita
 * o site pela primeira vez. Permite aceitar, rejeitar ou personalizar
 * preferências de cookies.
 *
 * @component
 * @returns {JSX.Element | null} Banner de cookies ou null se já consentiu
 */
export declare function CookieBanner(): import("react/jsx-runtime").JSX.Element;
/**
 * Hook para verificar consentimento de cookies
 *
 * @returns {CookiePreferences | null} Preferências de cookies ou nulo se não consentiu
 */
export declare function useCookieConsent(): CookiePreferences | null;
