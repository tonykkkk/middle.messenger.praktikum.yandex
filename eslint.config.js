// eslint.config.js
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        tsconfigRootDir: './',
      },
    },
  },
  {
    ignores: [
      'dist/**/*.ts',
      'dist/**/*.js',
      'dist/**',
      'dist/',
      'dist/*',
      'vite.config.js',
      'node_modules',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['src/**/*.{js,ts}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'no-var': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
        },
      ],
      'no-use-before-define': 'off',
      'no-this-before-super': 'off',
      'no-undef-init': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    },
  },
]
