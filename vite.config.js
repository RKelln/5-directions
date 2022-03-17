// https://vitejs.dev/config/
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://github.com/hmsk/vite-plugin-markdown
import Markdown, {Mode} from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    Markdown({
      mode: Mode.HTML,
      // https://markdown-it.github.io/markdown-it/#MarkdownIt
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true
      }})
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        foundations: resolve(__dirname, 'foundations/index.html'),
        past_present_future: resolve(__dirname, 'past_present_future/index.html'),
        neural_nets: resolve(__dirname, 'neural_nets/index.html'),
        data_in_practice: resolve(__dirname, 'data_in_practice/index.html'),
      }
    }
  },
  assetsInclude: ['writing/*.md'],
})
