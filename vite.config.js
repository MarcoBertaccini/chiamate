import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sottodominio dedicato (chiamate.zenith-studio.it) → serve dalla root
export default defineConfig({
  base: '/',
  plugins: [react()],
})
