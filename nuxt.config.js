export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Dr. Christian Hauser" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,700|DM+Sans:400,700&display=swap"
      }
    ],
    bodyAttrs: {
      class: "bg-gray-200"
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#003399", throttle: 0 },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/global.js" },
    { src: "~/plugins/vue-lazyload.js", ssr: false },
    { src: "~/plugins/fastClick.js", ssr: false }
  ],
  /*
   ** purgeCSS whitelist
   */
  purgeCSS: {
    whitelist: [
      "bg-base-blue-darker-400",
      "bg-base-blue-darker-500",
      "bg-base-blue-darker-700",
      "bg-mexico-500",
      "bg-peru-500",
      "bg-yellow-500",
      "bg-brazil-500",
      "bg-argentina-500",
      "bg-switzerland-500",
      "page-enter-active",
      "page-leave-active",
      "page-enter",
      "page-leave-active",
      "fade-enter-active",
      "fade-leave-active",
      "fade-enter",
      "fade-leave-to"
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-i18n", "vue-scrollto/nuxt"],
  devModules: ["@nuxtjs/tailwindcss"],
  /*
   ** i18n options
   */
  i18n: {
    lazy: true,
    baseUrl: "https://preview-csrla-w5ca2b.netlify.com/",
    locales: [
      { code: "de", iso: "de-DE", file: "de.js" },
      { code: "en", iso: "en-US", file: "en.js" },
      { code: "es", iso: "es-ES", file: "es.js" },
      { code: "pt", iso: "pt-PT", file: "pt.js" }
    ],
    langDir: "lang/",
    defaultLocale: "de",
    seo: true,
    detectBrowserLanguage: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
