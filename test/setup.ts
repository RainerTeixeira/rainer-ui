import '@testing-library/jest-dom';
import React from 'react';

// Declarações globais para TypeScript
declare global {
  interface Window {
    matchMedia: any;
  }
}

// Mock para next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    resolvedTheme: 'dark',
    setTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock para design tokens completo
jest.mock('@rainersoft/design-tokens', () => ({
  tokens: {
    primitives: {
      motion: {
        duration: {
          fast: '150ms',
          normal: '250ms',
          slow: '400ms',
        },
        easing: {
          linear: 'linear',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        delay: {
          none: '0ms',
          short: '100ms',
          normal: '200ms',
          long: '400ms',
        },
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      typography: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
      },
    },
    semantics: {
      motion: {
        'fade-in': 'opacity 0.25s ease-in-out',
        'slide-up': 'transform 0.3s ease-out',
        transition: {
          default: 'all 0.25s ease-in-out',
          fast: 'all 0.15s ease-in-out',
          slow: 'all 0.4s ease-in-out',
        },
        interaction: {
          hover: 'transform 0.2s ease-out',
          focus: 'box-shadow 0.2s ease-in-out',
          active: 'transform 0.1s ease-in-out',
        },
        feedback: {
          success: 'opacity 0.3s ease-in-out',
          error: 'opacity 0.3s ease-in-out shake 0.5s',
          warning: 'opacity 0.3s ease-in-out',
        },
        navigation: {
          page: 'transform 0.3s ease-out',
          modal: 'opacity 0.3s ease-in-out',
        },
      },
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: '#000000',
        'primary-foreground': '#ffffff',
      },
    },
  },
  lightTheme: {
    colors: {
      background: '#ffffff',
      foreground: '#000000',
    },
  },
  darkTheme: {
    colors: {
      background: '#000000',
      foreground: '#ffffff',
    },
  },
  GRADIENT_DIRECTIONS: {
    TO_BR: 'to-br',
    TO_R: 'to-r',
    TO_B: 'to-b',
    TO_L: 'to-l',
    TO_TL: 'to-tl',
    TO_TR: 'to-tr',
    TO_BL: 'to-bl',
  },
  MOTION: {
    TRANSITION: {
      DEFAULT: 'transition-all duration-200 ease-in-out',
    },
  },
}));

// Mock para Radix UI components
jest.mock('@radix-ui/react-slot', () => ({
  Slot: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock para @radix-ui/react-primitive (base do Progress)
jest.mock('@radix-ui/react-primitive', () => ({
  createSlot: jest.fn(() => 'mock-slot'),
}));

// Mock para @radix-ui/react-progress
jest.mock('@radix-ui/react-progress', () => ({
  Progress: {
    Root: 'div',
    Indicator: 'div',
  },
  ProgressPrimitive: {
    Root: 'div',
    Indicator: 'div',
  },
}));

// Mock para hooks de tema
jest.mock('@/hooks/use-theme', () => ({
  useTheme: () => ({
    theme: 'dark',
    resolvedTheme: 'dark',
    setTheme: jest.fn(),
  }),
}));

// Mock para lucide-react icons (usando factory functions)
jest.mock('lucide-react', () => ({
  ChevronDown: () => 'chevron-down',
  ChevronUp: () => 'chevron-up',
  ChevronLeft: () => 'chevron-left',
  ChevronRight: () => 'chevron-right',
  Check: () => 'check',
  X: () => 'x',
  Plus: () => 'plus',
  Minus: () => 'minus',
  Search: () => 'search',
  Menu: () => 'menu',
  Close: () => 'close',
  AlertCircle: () => 'alert-circle',
  CheckCircle: () => 'check-circle',
  Info: () => 'info',
  AlertTriangle: () => 'alert-triangle',
  User: () => 'user',
  Settings: () => 'settings',
  Home: () => 'home',
}));

// Global setup para testes
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock para IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock para matchMedia
Object.defineProperty((global as any).window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock para crypto.randomUUID
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => 'test-uuid-' + Math.random().toString(36).substr(2, 9),
  },
});

// Mock para localStorage completo
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};
global.localStorage = localStorageMock;
