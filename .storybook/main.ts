import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  env: {
    STORYBOOK_DISABLE_TELEMETRY: 'true',
  },
  async viteFinal(config) {
    // garante os aliases utilizados no projeto
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias as Record<string, string>),
        '@': path.resolve(__dirname, '../src'),
      },
    };

    config.define = {
      ...config.define,
      global: 'globalThis',
    };

    return config;
  },
};

export default config;

