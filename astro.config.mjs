import { defineConfig } from 'astro/config';
import onRequest from './src/middleware/redirect';

export default defineConfig({
  server: {
    middleware: [onRequest]
  },
  outDir: 'dist',
  base: '/',
});