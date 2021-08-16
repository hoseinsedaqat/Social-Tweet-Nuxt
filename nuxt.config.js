export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tweetapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@/node_modules/@fortawesome/fontawesome-free/css/all.min.css",
    "@/node_modules/sweetalert2/dist/sweetalert2.all.js"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode: 'client' },
    { src: '@/plugins/vuelidate.js' },
    { src: '@/plugins/vue-swal.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['vue-swal']
  }
}
