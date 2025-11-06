import { defineConfig } from "vite";
import path from "path";
import { federation } from "@module-federation/vite";
import { ghPages } from "vite-plugin-gh-pages";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "/mf-remote-app/",
  plugins: [
    ghPages(),
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
