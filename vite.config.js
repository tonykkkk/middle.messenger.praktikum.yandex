import {resolve} from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
   plugins: [handlebars({
    partialDirectory: [resolve(__dirname, 'src/partials'),
                        resolve(__dirname, 'src/partials/pages'),
                        resolve(__dirname, 'src/partials/forms'),
                        resolve(__dirname, 'src/partials/elements'),
                        ]
  })],
  server: {
    port: 3000,
  },
}) 