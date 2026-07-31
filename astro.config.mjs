import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 唯一的正式站點 URL 設定處。網域確定後只需填寫下方 site 常數。
// 留空時仍可正常建置；canonical、Open Graph 絕對 URL 與 sitemap 會自動降級或停用。
const site = '';
const configuredSite = site.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: configuredSite
    ? [
        sitemap({
          namespaces: {
            news: false,
            xhtml: false,
            image: false,
            video: false,
          },
        }),
      ]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
