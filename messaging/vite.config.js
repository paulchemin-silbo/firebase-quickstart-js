import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      // We use injectManifest to use a custom service worker because we need to inject the firebase config in it
      strategies: 'injectManifest',
      srcDir: '.',
      filename: 'sw.ts',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        display: 'standalone',
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: ['index.html', 'firebase-messaging-sw.js'],
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    port: 3001,
  },
});
