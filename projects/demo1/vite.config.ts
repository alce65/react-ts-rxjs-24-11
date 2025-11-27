/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@hooks': '/src/hooks',
            '@types': '/src/types',
            '@assets': '/src/assets',
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/testConfig.ts'],
        include: ['**/*.test.ts', '**/*.test.tsx'],
        coverage: {
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['src/index.ts', 'src/**/types/*.ts'],
        },
    },
});
