module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    css: [
      "~assets/responsive.css",
      "~assets/main.css",
      "element-ui/lib/theme-chalk/index.css"
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      }
    ],
    script: [{ src: "https://unpkg.com/element-ui/lib/index.js", body: true }]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/Errors/404.vue")
      })
    }
  },
  plugins: [
    { src: "~plugins/vue-notifications" },
    { src: "~plugins/element-ui", ssr: true },
    { src: "~plugins/vee-validate.js", ssr: true },
    { src: "~plugins/vue-carousel.js", ssr: false }
  ],
  loading: { color: "#3B8070" },
  build: {
    vendor: [
      "axios",
      "vue-notifications",
      "element-ui",
      "vee-validate",
      "vue-carousel"    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
