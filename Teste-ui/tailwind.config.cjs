/** Tailwind para o demo local com cores baseadas nos tokens (via CSS vars) */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border-primary)',
        input: 'var(--color-border-primary)',
        ring: 'var(--color-border-focus)',
        background: 'var(--color-background-primary)',
        foreground: 'var(--color-text-primary)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-status-error-base)',
          foreground: 'var(--color-status-error-text)',
        },
        muted: {
          DEFAULT: 'var(--color-background-muted)',
          foreground: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
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
      borderRadius: {
        lg: 'var(--radius-lg, 0.75rem)',
        md: 'var(--radius-md, 0.5rem)',
        sm: 'var(--radius-sm, 0.375rem)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
