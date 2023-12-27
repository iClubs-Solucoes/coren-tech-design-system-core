/// <reference types="vitest" />
import { defineConfig } from 'vite';

import coverageConfig from './coverage.json';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 60 * 1000,
    setupFiles: './src/setupTests.ts',
    include: ['./src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: coverageConfig,
  },
});
