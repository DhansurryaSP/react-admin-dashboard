import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production builds are served from GitHub Pages at /react-admin-dashboard/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/react-admin-dashboard/' : '/',
  plugins: [react()],
}))
