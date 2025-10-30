import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: false,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    });
  },
};

export default config;
