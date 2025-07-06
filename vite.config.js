import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base: '/my-portfolio-website/',
>>>>>>> 9178ac2a372fe82da17b4a7c32893217f6e0025d
  server: {
    port: 3000,
    host: true
  }
}) 