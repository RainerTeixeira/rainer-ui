import React from 'react';

const mockData = {
  title: 'Cookie Banner Mock',
  description: 'Mock data for CookieBanner',
  actions: [],
};

/**
 * Mock de banner de consentimento de cookies.
 * Exibe o JSON usado pelos demais mocks da pasta Teste-ui.
 */
export function CookieBanner() {
  return <pre>{JSON.stringify(mockData, null, 2)}</pre>;
}

/**
 * Mock de hook de consentimento de cookies.
 */
export function useCookieConsent() {
  return null;
}
