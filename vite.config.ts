import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/modernisation-challenge-vue3/' : '/',
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
