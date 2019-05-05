const config = require('./config/production.json')
const { getConfigForKeys } = require('./config/config.js')
const { createClient } = require('./plugins/contentful')

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const cdaClient = createClient(ctfConfig)

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Massy7124's Web Site",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Massy7124のポートフォリオサイトです。ブログも書いていますのでご覧ください！'
      },
      { name: 'twitter:site', content: 'summary' },
      { name: 'twitter:card', content: '@massy7124' },
      {
        name: 'twitter:description',
        content: 'Massy7124のポートフォリオサイトです。'
      },
      { name: 'twitter:image:src', content: '' },
      { property: 'og:url', content: config.server.baseUrl },
      { property: 'og:title', content: "massy7124's site" },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: "massy7124's portfolio site" },
      {
        property: 'og:image',
        content: 'http://massy7124.me/img/massy7124.jpg'
      },
      { property: 'fb:admins', content: '100010745989607' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      }
    ]
  },
  'google-analytics': {
    id: config.google.analytics.trackingId
  },
  manifest: {
    name: "Massy7124's site",
    short_name: 'Massy7124',
    title: "Massy7124's site",
    'og:title': "Massy7124's site",
    description: "Massy7124's site",
    'og:description': "Massy7124's site",
    lang: 'ja',
    theme_color: 'deepskyblue',
    background_color: 'deepskyblue'
  },
  workbox: {
    dev: true
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~plugins/string-limit',
    '~plugins/contentful'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/google-analytics'],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    routes() {
      return cdaClient
        .getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.id}`)]
        })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}
