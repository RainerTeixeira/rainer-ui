import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { tokens } from '@rainersoft/ui';
// Usar provider direto do código-fonte para evitar cache de prebundle sem export
import { TokensProvider, ThemeProvider } from '@rainersoft/ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TokensProvider tokens={tokens}>
        <App />
      </TokensProvider>
    </ThemeProvider>
  </React.StrictMode>
);
