import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s  Shop',
    title: 'Fogger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://img00.deviantart.net/b876/i/2013/061/9/a/ninja_frog_by_gvc060905-d5wrthm.jpg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffffff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fire-auth.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/firebase',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },

  // --- START: แก้ไขส่วนนี้ ---
  proxy: {
    '/api/': {
      target: 'http://localhost:8080/web1', 
      pathRewrite: { '^/api/': '/api/' },
    },
  },
  // --- END: แก้ไขส่วนนี้ ---

  // Firebase configuration
  firebase: {
    config: {
      apiKey: "AIzaSyA1Aol4clfzDkPEhXFHo5mmP1iq0IF_ZkM",
      authDomain: "my-nuxt2-project.firebaseapp.com",
      projectId: "my-nuxt2-project",
      storageBucket: "my-nuxt2-project.firebasestorage.app",
      messagingSenderId: "954942831355",
      appId: "1:954942831355:web:b76747a674850a4e144e5e",
      measurementId: "G-NJ10METT5H"
    },
    services: {
      auth: true,
      analytics: true
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#ffeb3b',
          secondary: '#fdd835',
          accent: '#ffee58',
          info: '#fbc02d',
          warning: '#f9a825',
          error: '#f44336',
          success: '#8bc34a'
        }
      }
    }
  },
  
  router: {
    middleware: ['auth-layout']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}