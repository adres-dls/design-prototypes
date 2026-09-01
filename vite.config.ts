import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths - each prototype publishes under its own GitHub
  // Pages subpath (/design-prototypes/<slug>/), and the default root-relative
  // base ("/assets/...") would 404 there.
  base: "./",
});
