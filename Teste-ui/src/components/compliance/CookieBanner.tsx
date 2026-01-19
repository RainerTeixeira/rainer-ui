import React from 'react';
import data from './CookieBanner.json';

/**
 * Mock de banner de consentimento de cookies.
 * Exibe o JSON usado pelos demais mocks da pasta Teste-ui.
 */
export function CookieBanner() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

/**
 * Mock de hook de consentimento de cookies.
 */
export function useCookieConsent() {
  return null;
}
