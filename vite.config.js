import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this from './' to '/' (just a slash)
  build: {
    outDir: 'dist',
  }
})