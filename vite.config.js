import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  
  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, "src/partials")],
      reloadOnPartialChange: true,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
<<<<<<< HEAD
        main: resolve(root, 'index.html'),
=======
        main: resolve(__dirname,"index.html"),
        registration: resolve(__dirname, "registration.html"),
        chats: resolve(__dirname, "chats.html"),
        notfound: resolve(__dirname, "404.html"),
        error: resolve(__dirname, "500.html"),
        chatAnton: resolve(__dirname, "chatAnton.html"),
        passwordChange: resolve(__dirname, "passwordChange.html"),
        profile: resolve(__dirname, "profile.html"),
        profileEdit: resolve(__dirname, "profileEdit.html"),
>>>>>>> 04252825d63f7548903f2718291097d74bdb04bc
      },
    },
  },
  server: {
    port: 3000,
  },
});
