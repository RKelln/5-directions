// https://vitejs.dev/config/
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        foundations: resolve(__dirname, 'foundations/index.html'),
        past_present_future: resolve(__dirname, 'past_present_future/index.html'),
      }
    }
  },
  assetsInclude: ['/writing/*.md'],
})
