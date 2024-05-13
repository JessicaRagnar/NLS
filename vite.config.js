import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/NLS/",
  build: {
    assetsDir: 'assets', // Det här bestämmer underkatalogen inuti 'dist' för hanterade resurser
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.woff', '**/*.woff2'] // Inkludera alla bild- och teckensnittsformat du använder
  },
  plugins: [react()]
});
