import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Treat `assets` as the public directory so static images are copied to `dist` on build
  publicDir: 'assets',
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
