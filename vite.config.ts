/// <reference types="vite/client" />
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import uno from 'unocss/vite';
import dev from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), uno(), dev()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
