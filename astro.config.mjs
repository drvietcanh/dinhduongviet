import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

const canonicalOnlyFoodAliases = new Set([
  '/thuc-pham/ca-pha/',
  '/thuc-pham/ca-pha-sua-da/',
  '/thuc-pham/tom-sudo/',
  '/thuc-pham/sua-ong-tho/',
  '/thuc-pham/gao-nep/',
  '/thuc-pham/gao-lut-do/',
  '/thuc-pham/gao-lut-den/',
]);

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
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.includes('/kien-thuc-dinh-duong/dung-tin-ngay-')
          && !canonicalOnlyFoodAliases.has(path);
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: true
    }
  }
});
