import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Keep Rollup JS/CSS out of `dist/assets` so it never clashes with `public/assets`
  // (images copied from public). Same-folder builds on Linux/Vercel can otherwise 404 static files.
  build: {
    assetsDir: 'chunks',
  },
})
