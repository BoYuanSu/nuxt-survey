export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-noeslint',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  // like Vue CLI Overlay Error Settings https://cli.vuejs.org/core-plugins/eslint.html#configuration
  eslint: {
    fix: true,
    emitError: false,
    emitWarning: true
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/router',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://localhost:3000' // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL // BROWSER_BASE_URL for client side requests.
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL // BASE_URL for server side requests.
    }
  },
  routerModule: {
    /* module options */
    fileName: 'router'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
