import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dinh-duong-viet.pages.dev",
  output: "static",
  vite: {
    build: {
      cssMinify: false
    }
  }
});
