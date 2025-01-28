import { defineConfig } from 'vite';

export default defineConfig({
  base: '/firebase-quickstart-js',
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
