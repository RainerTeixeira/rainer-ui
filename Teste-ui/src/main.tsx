import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { tokens } from '@rainersoft/design-tokens';
// Usar provider direto do código-fonte para evitar cache de prebundle sem export
import { TokensProvider } from '@ui/components/providers/tokens-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TokensProvider tokens={tokens}>
      <App />
    </TokensProvider>
  </React.StrictMode>
);
