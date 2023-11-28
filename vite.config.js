import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]_[local]_[hash:base64:5]",
    },
  },
  resolve: {
    alias: {
      '@': '/src/',
      '@assets': '/src/assets/',
      _styles: '/src/styles',
      _theme: '/src/styles/theme',
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
