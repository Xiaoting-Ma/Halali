import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://halali.co',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      // 其他可选配置：routes 等
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})