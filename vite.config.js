import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const root = resolve(__dirname, './src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory: [resolve(root, 'partials')],
      reloadOnPartialChange: true,
    }),
    viteTsconfigPaths(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        login: resolve(root, 'login.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
})
