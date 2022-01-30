// https://vitejs.dev/config/
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        foundations: resolve(__dirname, 'foundations.html')
      }
    }
  },
  assetsInclude: ['writing/*.md']
})
