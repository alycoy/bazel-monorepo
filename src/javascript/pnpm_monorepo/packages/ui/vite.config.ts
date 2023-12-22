import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

module.exports = defineConfig({
  plugins: [
    react(),
    //   dts({
    //     insertTypesEntry: true,
    //   }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        // "react/jsx-runtime",
        "react-dom",
        "tailwindcss",
        // "react-router-dom",
      ],
      output: {
        globals: {
          react: "React",
        //   "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
        //   "react-router-dom": "reactRouterDom",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});