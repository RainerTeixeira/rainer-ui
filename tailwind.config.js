/**
 * Configuração do Tailwind CSS para @rainersoft/ui
 * 
 * Single Source of Truth: @rainersoft/design-tokens
 * Todas as configurações são herdadas diretamente do design-tokens.
 * 
 * @type {import('tailwindcss').Config}
 */
const { tailwindConfig } = require('@rainersoft/design-tokens/formats/tailwind.config');

module.exports = {
  ...tailwindConfig,
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './stories/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      colors: {
        ...tailwindConfig.theme.extend.colors,
        // Cores semânticas para shadcn/ui
        border: 'var(--color-border-primary)',
        input: 'var(--color-border-primary)',
        ring: 'var(--color-border-focus)',
        background: 'var(--color-background-primary)',
        foreground: 'var(--color-text-primary)',
        destructive: {
          DEFAULT: 'var(--color-status-error-base)',
          foreground: 'var(--color-status-error-text)',
        },
        muted: {
          DEFAULT: 'var(--color-background-muted)',
          foreground: 'var(--color-text-tertiary)',
        },
        popover: {
          DEFAULT: 'var(--color-surface-elevated)',
          foreground: 'var(--color-text-primary)',
        },
        card: {
          DEFAULT: 'var(--color-surface-primary)',
          foreground: 'var(--color-text-primary)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
