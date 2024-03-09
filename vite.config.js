import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dev from 'vite-plugin-vue-devtools';
import components from 'unplugin-vue-components/vite';
import componentsConfig from '@tb-dev/vue-import-config';

export default defineConfig({
  plugins: [vue(), dev(), components(componentsConfig())],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: true,
    minify: true
  }
});
