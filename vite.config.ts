import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ddnazzah.github.io is a GitHub Pages *user* site served from the domain
// root, so the base path is "/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        archive: "archive/index.html",
      },
    },
  },
});
