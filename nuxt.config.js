export default {
  env:{
    website_url: (process.env.WEBSITE_URL || "http://localhost:3000") + "/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TAL ASSINGMENT",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      "data-theme": "light",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/js/bootstrap.min.js", defer: true },
      { src: "/js/fontawesome.js", defer: true },
      
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/custom.css",
    "~/assets/css/bootstrap.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/http",
  ],
  http: {
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
