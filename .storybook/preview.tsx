import type { Preview } from '@storybook/react';
import React from 'react';

// Import CSS Variables
import '@rainersoft/design-tokens/formats/css-vars.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      return (
        <div 
          data-theme={theme} 
          className="min-h-screen bg-background text-foreground p-8"
        >
          <Story />
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light', icon: 'sun' },
          { value: 'dark', title: '🌙 Dark', icon: 'moon' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;

