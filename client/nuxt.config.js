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
    css: ['~/assets/main.css'],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      },
      {
        rel: "stylesheet",
        href: "https://namboss.blob.core.windows.net/huong/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://namboss.blob.core.windows.net/huong/mdb.min.css"
      },
      { rel: "stylesheet", href: "https://mdbootstrap.com/live/_MDB/css/customizer.min.css" }
    ],
    script: [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", body: true },
      {
        src: "https://namboss.blob.core.windows.net/huong/popper.min.js", body: true
      },
      {
        src: "https://namboss.blob.core.windows.net/huong/bootstrap.min.js", body: true
      },
      {
        src: "https://namboss.blob.core.windows.net/huong/mdb.js", body: true
      },
      { src: "https://mdbootstrap.com/live/_MDB/js/customizer.min.js", body: true },
      { src: "https://unpkg.com/element-ui/lib/index.js", body: true }
    ]
  },
  modules: ["@nuxtjs/font-awesome"],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/Errors/404.vue")
      })
    }
  },
  loading: {
    color: '#1f74ff',
    failedColor: 'white',
    height: '4px',
    rtl: false
  },
  plugins: [
    { src: "~/plugins/vue-notifications" },
    { src: "~/plugins/element-ui", ssr: true },
    { src: "~/plugins/vee-validate.js", ssr: true },
    { src: "~/plugins/vue-carousel.js", ssr: false }
  ],
  build: {
    vendor: [
      "axios",
      "vue-notifications",
      "element-ui",
      "vee-validate",
      "vue-carousel",
    ],
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
