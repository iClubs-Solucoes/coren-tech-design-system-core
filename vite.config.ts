/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import coverageConfig from './coverage.json' assert { type: 'json' };
import packageJson from './package.json';

const getPackageName = () => {
  return packageJson.name.split('/')[1];
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase());
  } catch (err) {
    throw new Error('Name property in package.json is missing.');
  }
};

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: [
        'src/components/**/*.tsx',
        'src/containers/**/*.tsx',
        'src/primitives/components/**/*.tsx',

        'src/components/**/types.ts',
        'src/containers/**/types.ts',
        'src/primitives/components/**/types.ts',

        'src/components/**/index.ts',
        'src/containers/**/index.ts',
        'src/primitives/components/**/index.ts',
        'src/hooks',
        'src/contexts',
        'src/index.ts',
        'src/common/styles/index.ts',
        'src/common/styles/theme.ts',
      ],
      exclude: ['**/*.spec.tsx/**', '**/*.stories.tsx/**'],
    }),
    svgr({
      svgrOptions: {
        svgo: true,
        icon: 24,
        dimensions: true,
        svgoConfig: {
          plugins: [{ moveGroupAttrsToElems: true }, { convertPathData: true }],
        },
      },
    }),
    tsconfigPaths(),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: getPackageNameCamelCase(),
      formats,
      fileName: format => fileName[format],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 60 * 1000,
    setupFiles: './src/setupTests.ts',
    include: ['./src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      ...(coverageConfig as any),
    },
  },
});
