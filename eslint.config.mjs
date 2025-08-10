import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for import.meta.dirname in environments where it's not available
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', // Strict recommended rules for Next.js Core Web Vitals [^3]
      'next/typescript',      // TypeScript-specific lint rules [^3]
      'prettier',             // Integrates Prettier with ESLint to avoid conflicts [^3]
    ],
  }),
  {
    // Add custom rules or overrides here if needed
    // For example, to disable a specific rule:
    // rules: {
    //   '@next/next/no-img-element': 'off',
    // },
  },
];

export default eslintConfig;
