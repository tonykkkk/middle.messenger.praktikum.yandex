import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/partials"),
        resolve(__dirname, "src/partials/pages"),
        resolve(__dirname, "src/partials/forms"),
        resolve(__dirname, "src/partials/elements"),
      ],
      reloadOnPartialChange: true,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        registration: resolve(__dirname, "registration.html"),
        chats: resolve(__dirname, "chats.html"),
        notfound: resolve(__dirname, "404.html"),
        error: resolve(__dirname, "500.html"),
        chatAnton: resolve(__dirname, "chatAnton.html"),
        passwordChange: resolve(__dirname, "passwordChange.html"),
        profile: resolve(__dirname, "profile.html"),
        profileEdit: resolve(__dirname, "profileEdit.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});
