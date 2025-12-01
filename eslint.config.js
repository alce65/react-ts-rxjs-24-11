import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.strict,
            ...tseslint.configs.stylistic,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        plugins: {
            react
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            'react/prefer-read-only-props': 'warn',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
]);
