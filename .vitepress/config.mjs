import { defineConfig } from 'vitepress'
import links from './Links.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id-ID',
  title: "JavaScript Docs",
  description: "JavaScript Dokumentasi Bahasa Indonesia",
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcDir: 'src',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'tokyo-night'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/favicon.ico',
    outline: 'deep',
    ...links,
  }
})
