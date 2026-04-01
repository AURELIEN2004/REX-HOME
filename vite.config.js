// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Cela force la génération de fichiers avec des extensions claires
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // Assure-toi que la base est correcte
  base: '/', 
})