export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ZeldaWiki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: 'HTML, CSS, JavaScript, Zelda, Wiki, Game, Guide, Vue, Nuxt'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3000,
    host: 'http://zeldawiki.test',
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/localhost:3000/animals.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'animals.php'}, changeOrigin: true },
    '/localhost:3000/armor.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'armor.php'}, changeOrigin: true },
    '/localhost:3000/weapon.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'weapon.php'}, changeOrigin: true },
    '/lalocalhost:3000/feed.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'feed.php'}, changeOrigin: true },
    '/lalocalhost:3000/story.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'story.php'}, changeOrigin: true },
    '/lalocalhost:3000/sanctuary.php': { target: 'http://localhost:3000/', pathRewrite: {'^/localhost:3000/': 'sanctuary.php'}, changeOrigin: true },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
