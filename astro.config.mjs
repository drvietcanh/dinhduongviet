import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: "https://dinh-duong-viet.pages.dev",
  output: "static",
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dinh Dưỡng Việt',
        short_name: 'DD Việt',
        description: 'Tra cứu dinh dưỡng thực phẩm và bệnh lý',
        theme_color: '#059669',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: [
          '_astro/*.{js,css}',
          '*.{html,svg,png,webmanifest}',
          'icons/*.{png,svg}',
          'api/search-index.json'
        ],
        globIgnores: ['api-foods.json', 'api-recipes.json', 'sitemap*.xml'],
        navigateFallback: '/index.html'
      }
    })
  ],
  vite: {
    build: {
      cssMinify: true
    }
  }
});
