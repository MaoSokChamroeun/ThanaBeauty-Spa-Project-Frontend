import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  theme: {
    extend: {
      fontFamily: {
        // This adds 'font-josefin' as a utility class
        josefin: ["'Josefin Sans'", "sans-serif"],
        kantumruy: ["'Kantumruy Pro'", "sans-serif"]
      },
    },
  },
})
