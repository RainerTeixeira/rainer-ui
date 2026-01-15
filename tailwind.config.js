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
  darkMode: 'class',
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      colors: {
        ...tailwindConfig.theme.extend.colors,
        // Cores semânticas para shadcn/ui
        border: 'var(--color-border-default)',
        input: 'var(--color-border-default)',
        ring: 'var(--color-interactive-focus-ring)',
        background: 'var(--color-background-primary)',
        foreground: 'var(--color-text-primary)',
        primary: {
          DEFAULT: 'var(--color-button-primary-default)',
          foreground: 'var(--color-button-primary-text)',
        },
        secondary: {
          DEFAULT: 'var(--color-button-secondary-default)',
          foreground: 'var(--color-button-secondary-text)',
        },
        destructive: {
          DEFAULT: 'var(--color-button-danger-default)',
          foreground: 'var(--color-button-danger-text)',
        },
        muted: {
          DEFAULT: 'var(--color-background-secondary)',
          foreground: 'var(--color-text-secondary)',
        },
        popover: {
          DEFAULT: 'var(--color-surface-elevated)',
          foreground: 'var(--color-text-primary)',
        },
        card: {
          DEFAULT: 'var(--color-surface-elevated)',
          foreground: 'var(--color-text-primary)',
        },
        // Cores neon cyberpunk
        neon: {
          cyan: 'var(--color-text-neon)',
          'cyan-glow': 'var(--color-text-neon-glow)',
          rose: 'var(--color-status-error-default)',
          'rose-glow': 'var(--color-status-error-glow)',
          emerald: 'var(--color-status-success-default)',
          'emerald-glow': 'var(--color-status-success-glow)',
          violet: 'var(--color-interactive-link-visited)',
        },
        // Gradientes cyberpunk
        'gradient-cyberpunk': {
          primary: 'var(--color-gradient-cyberpunk-primary)',
          secondary: 'var(--color-gradient-cyberpunk-secondary)',
          tertiary: 'var(--color-gradient-cyberpunk-tertiary)',
          background: 'var(--color-gradient-cyberpunk-background)',
        },
        'gradient-neon': {
          cyan: 'var(--color-gradient-neon-cyan)',
          rose: 'var(--color-gradient-neon-rose)',
          emerald: 'var(--color-gradient-neon-emerald)',
        },
        // Efeitos especiais
        'glass': 'var(--color-background-glass)',
        'hologram': 'var(--color-surface-hologram)',
        'neon-bg': 'var(--color-background-neon)',
      },
      boxShadow: {
        ...tailwindConfig.theme.extend.boxShadow,
        // Sombras neon cyberpunk
        'neon-cyan': 'var(--shadow-neon-cyan)',
        'neon-rose': 'var(--shadow-neon-rose)',
        'neon-emerald': 'var(--shadow-neon-emerald)',
        'neon-violet': 'var(--shadow-neon-violet)',
        // Efeitos de brilho
        'glow-soft': 'var(--shadow-glow-soft)',
        'glow-medium': 'var(--shadow-glow-medium)',
        'glow-strong': 'var(--shadow-glow-strong)',
      },
      backgroundImage: {
        ...tailwindConfig.theme.extend.backgroundImage,
        // Gradientes cyberpunk
        'cyberpunk-primary': 'var(--color-gradient-cyberpunk-primary)',
        'cyberpunk-secondary': 'var(--color-gradient-cyberpunk-secondary)',
        'cyberpunk-tertiary': 'var(--color-gradient-cyberpunk-tertiary)',
        'neon-cyan': 'var(--color-gradient-neon-cyan)',
        'neon-rose': 'var(--color-gradient-neon-rose)',
        'neon-emerald': 'var(--color-gradient-neon-emerald)',
      },
      animation: {
        ...tailwindConfig.theme.extend.animation,
        // Animações cyberpunk
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'cyberpunk-flicker': 'cyberpunk-flicker 4s ease-in-out infinite',
      },
      keyframes: {
        ...tailwindConfig.theme.extend.keyframes,
        'neon-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: 'var(--shadow-glow-soft)' },
          '50%': { boxShadow: 'var(--shadow-glow-strong)' },
        },
        'cyberpunk-flicker': {
          '0%, 100%': { opacity: 1 },
          '25%': { opacity: 0.95 },
          '50%': { opacity: 1 },
          '75%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
