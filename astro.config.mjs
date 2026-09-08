import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: "https://dinh-duong-viet.pages.dev",
  output: "static",
  redirects: {
    '/kien-thuc-dinh-duong/dung-tin-ngay-trai-cay-thay-com': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-trai-cay-thay-com' },
    '/kien-thuc-dinh-duong/dung-tin-ngay-nhin-an-giam-can': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-nhin-an-giam-can' },
    '/kien-thuc-dinh-duong/dung-tin-ngay-mat-ong-tieu-duong': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-mat-ong-tieu-duong' },
    '/kien-thuc-dinh-duong/dung-tin-ngay-gao-lut-tieu-duong': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-gao-lut-tieu-duong' },
    '/kien-thuc-dinh-duong/dung-tin-ngay-duong-phen': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-duong-phen' },
    '/kien-thuc-dinh-duong/dung-tin-ngay-chanh-giam-mo-mau': { status: 301, destination: '/dung-tin-ngay/dung-tin-ngay-chanh-giam-mo-mau' },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kien-thuc-dinh-duong/dung-tin-ngay-'),
    }),
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
