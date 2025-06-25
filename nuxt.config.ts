export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,
  app: {
    baseURL: '/',
    head: {
      title: 'Buse Şenöz - Frontend Developer & Computer Engineer',
      htmlAttrs: {
        lang: 'tr'
      },
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
        { rel: "manifest", href: "/manifest.json" },
        { rel: "canonical", href: "https://bssenoz.github.io/" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'description', content: 'Buse Şenöz - Frontend Developer specializing in JavaScript, Vue.js, Nuxt.js, React, and TypeScript. Computer Engineer with experience in modern web technologies.' },
        { name: 'keywords', content: 'Buse Şenöz, Frontend Developer, Vue.js, Nuxt.js, React, TypeScript, JavaScript, Web Development, Computer Engineer, Turkey, Portfolio, Web Developer' },
        { name: 'author', content: 'Buse Şenöz' },
        { name: 'generator', content: 'Nuxt.js' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bssenoz.github.io/' },
        { property: 'og:title', content: 'Buse Şenöz - Frontend Developer & Computer Engineer' },
        { property: 'og:description', content: 'Frontend Developer specializing in JavaScript, Vue.js, Nuxt.js, React, and TypeScript. Computer Engineer with experience in modern web technologies.' },
        { property: 'og:image', content: 'https://bssenoz.github.io/meta-logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Buse Şenöz - Frontend Developer' },
        { property: 'og:site_name', content: 'Buse Şenöz Portfolio' },
        { property: 'og:locale', content: 'tr_TR' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://bssenoz.github.io/' },
        { property: 'twitter:title', content: 'Buse Şenöz - Frontend Developer & Computer Engineer' },
        { property: 'twitter:description', content: 'Frontend Developer specializing in JavaScript, Vue.js, Nuxt.js, React, and TypeScript.' },
        { property: 'twitter:image', content: 'https://bssenoz.github.io/meta-logo.png' },
        { property: 'twitter:image:alt', content: 'Buse Şenöz - Frontend Developer' },
        { property: 'twitter:creator', content: '@bssenoz' },
        
        // Additional SEO
        { name: 'msapplication-TileColor', content: '#3b82f6' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Buse Şenöz' },
        { name: 'application-name', content: 'Buse Şenöz Portfolio' },
        
        // Security
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' }
      ]
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/en'],
      ignore: ['/manifest.json']
    }
  },

  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/image'],

  css: ['~/assets/scss/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  i18n: {
    debug: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
      {
        code: 'tr',
        name: 'Türkçe',
        iso: 'tr-TR'
      },
    ],
    defaultLocale: 'tr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config'
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },

  // Build optimizations
  build: {
    transpile: ['vue-i18n']
  }
});

