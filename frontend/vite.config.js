import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Only import Tailwind plugin if you actually use it here
// But usually Tailwind config goes in `tailwind.config.js`

export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
