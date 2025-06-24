export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: false,
  target: 'static',
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/manifest.json" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Buse Şenöz - Computer Engineer' },
        { name: 'og:title', content: 'Buse Şenöz - Computer Engineer' },
        { name: 'og:description', content: 'Buse Şenöz - Computer Engineer' },
        { name: 'og:url', content: 'https://bssenoz.github.io/' },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: 'https://bssenoz.github.io/android-icon-96x96.png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },


  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/image'],

  css: ['~/assets/scss/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  i18n: {
    debug: false,
    strategy: 'prefix_except_default',
    parsePages: false,
    detectBrowserLanguage: {
      useCookie: true,
      onlyOnRoot: true
    },
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'tr',
        name: 'Türkçe'
      },
    ],
    defaultLocale: 'tr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config'
  }
 
});

