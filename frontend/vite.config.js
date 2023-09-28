import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const cssFileName = 'index.min.css'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: './public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/css/${cssFileName}`
        },
        entryFileNames: (file) => {
          return `assets/js/[name].min.js`
        },
      }
    }
  }
})
