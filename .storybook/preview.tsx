import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import React from 'react';
import {GlobalStyles} from '../src/common/styles/global';
import { CoreProvider } from '../src/contexts';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
  Story => (
    <CoreProvider>
      <Story />
    </CoreProvider>
  ),
];

export default preview;
