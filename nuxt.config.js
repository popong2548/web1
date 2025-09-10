import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s  Shop', // เปลี่ยนชื่อตรงนี้
    title: 'Fogger',            // และตรงนี้
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
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost/model_shop/model_select.php'
  }, // <-- เพิ่มเครื่องหมายคอมมาไว้ตรงนี้

  // <--- เพิ่มออบเจกต์ firebase ตรงนี้
  firebase: {
    config: {
      apiKey: "AIzaSyA1Aol4clfzDkPEhXFHo5mmP1iq0IF_ZkM", // ค่าของคุณ
      authDomain: "my-nuxt2-project.firebaseapp.com", // ค่าของคุณ
      projectId: "my-nuxt2-project", // ค่าของคุณ
      storageBucket: "my-nuxt2-project.firebasestorage.app", // ค่าของคุณ
      messagingSenderId: "954942831355", // ค่าของคุณ
      appId: "1:954942831355:web:b76747a674850a4e144e5e", // ค่าของคุณ
      measurementId: "G-NJ10METT5H" // ค่าของคุณ (ถ้ามี)
    },
    services: {
      auth: true, // เปิดใช้งาน Firebase Authentication
      // firestore: true, // ถ้าคุณจะใช้ Cloud Firestore ด้วย ก็เปิดเป็น true
      analytics: true // เปิดใช้งาน Firebase Analytics ตามที่คุณได้โค้ดมา
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#ffeb3b',    // เหลืองสด (yellow 500)
          secondary: '#fdd835',  // เหลืองเข้มกว่า (yellow darken-1)
          accent: '#ffee58',     // เหลืองสว่าง (yellow lighten-1)
          info: '#fbc02d',       // เหลืองทอง (yellow darken-2)
          warning: '#f9a825',    // เหลืองทองเข้ม (yellow darken-3)
          error: '#f44336',      // แดง (standard error red)
          success: '#8bc34a'     // เขียวสดใส (light green 500)
        }
      }
    }
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
