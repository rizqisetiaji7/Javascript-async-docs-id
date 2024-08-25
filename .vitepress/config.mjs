import { defineConfig } from 'vitepress'
import { NAV_LINKS, SIDEBAR_LINKS, SOCIAL_LINKS } from '../constants/Links.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id-ID',
  title: "Async Docs",
  description: "Javascript ASYNC Dokumentasi Bahasa Indonesia",
  cleanUrls: true,
  markdown: {
    theme: 'tokyo-night'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    logo: '/favicon.ico',
    
    nav: NAV_LINKS,
    sidebar: SIDEBAR_LINKS,
    socialLinks: SOCIAL_LINKS,

    footer: {
      copyright: `&copy Copyright ${new Date().getFullYear()} | Alrights reserved.`
    }
  }
})
