import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
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
