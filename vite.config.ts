import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { federation } from "@module-federation/vite";
import { ghPages } from "vite-plugin-gh-pages";
import vuetify from "vite-plugin-vuetify";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "https://knivek91.github.io/mf-remote-app/",
  plugins: [
    vue(),
    vuetify({
      autoImport: false, // import manually what you need, so we have full control of the components and directives we want to use
      styles: {
        configFile: "./src/styles/settings.scss",
      },
    }),
    ghPages({
      onBeforePublish: ({ outDir }: { outDir: string }) => {
        console.log(`📦 Starting deployment from ${outDir}...`);
      },
      onPublish: ({ branch }: { branch: string }) => {
        console.log(`🎉 Successfully deployed to ${branch}!`);
      },
      onError: (error: any) => {
        console.error("❌ Deployment failed:", error);
      },
    }),
    federation({
      name: "poc-remote",
      filename: "poc-remote.js",
      exposes: {
        "./Panel": "./src/components/Panel.vue",
      },
      shared: {
        vue: { singleton: true },
        vuetify: { singleton: true },
        "vuetify/lib/components": { singleton: true },
        "vuetify/lib/directives": { singleton: true },
      },
    }),
    //> need to go after `vuetify` plugin
    cssInjectedByJsPlugin({
      //> solution found in https://medium.com/@krishan101090/how-i-finally-got-my-vite-module-federation-styles-to-load-in-production-and-how-you-can-too-23ab3aab3f27
      jsAssetsFilterFunction: (outputChunk) => {
        console.log({ outputChunk });
        return outputChunk.fileName === "poc-remote.js";
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
