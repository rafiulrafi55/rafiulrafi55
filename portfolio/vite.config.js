import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base lets the build work on any GitHub Pages path or custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
