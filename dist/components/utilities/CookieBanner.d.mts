import * as react_jsx_runtime from 'react/jsx-runtime';
import { CookiePreferences } from '../../lib/cookie-utils.mjs';

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
declare function CookieBanner(): react_jsx_runtime.JSX.Element;
/**
 * Hook para verificar consentimento de cookies
 *
 * @returns {CookiePreferences | null} Preferências de cookies ou nulo se não consentiu
 */
declare function useCookieConsent(): CookiePreferences | null;

export { CookieBanner, CookiePreferences, useCookieConsent };
