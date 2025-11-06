import { defineConfig } from "vite";
import path from "path";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/<name of the repository here>',
  plugins: [
    federation({
      name: "poc-remote",
      filename: "poc-remote.js",
      exposes: {
        "./Panel": "./src/components/Panel.vue",
      },
      shared: {
        vue: { singleton: true },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
