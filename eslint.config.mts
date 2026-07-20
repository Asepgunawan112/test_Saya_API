// eslint.config.mts
// eslint.config.mts
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
  // 1. Global Ignores (must be in its own standalone object)
  {
    ignores: ['dist/', 'node_modules/', 'build/']
  },
  
  // ... (sisa kode Anda tetap sama)
  // 2. Base JavaScript Rules
  js.configs.recommended,
  
  // 3. TypeScript Rules
  ...tseslint.configs.recommended,
  
  // 4. Custom Projects Overrides / Rule Modifiers
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': ['error'], // Use TS specific rule
    },
  },
  Plugin: {
    '@typescript-eslint': tseslint
  },
);
