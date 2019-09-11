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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "bg-gray-200"
    }
  },
  /*
   ** Nuxt Webfontloader
   */
  webfontloader: {
    custom: {
      families: ["Crimson Text:n4,n7", "Nunito Sans:n4,n7"],
      urls: [
        "https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap",
        "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap"
      ]
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
  modules: [
    "nuxt-i18n",
    "vue-scrollto/nuxt",
    "nuxt-webfontloader",
    "@nuxtjs/sitemap"
  ],
  devModules: ["@nuxtjs/tailwindcss"],
  /*
   ** Sitemap Module
   */
  sitemap: {
    hostname: "https://csr-la.net/",
    gzip: true,
    routes: []
  },
  /*
   ** i18n options
   */
  i18n: {
    lazy: true,
    baseUrl: "https://csr-la.net",
    locales: [
      { code: "de", iso: "de-DE", file: "de.js" },
      { code: "en", iso: "en-US", file: "en.js" },
      { code: "es", iso: "es-ES", file: "es.js" },
      { code: "pt", iso: "pt-PT", file: "pt.js" }
    ],
    langDir: "lang/",
    defaultLocale: "en",
    seo: true,
    detectBrowserLanguage: false,
    strategy: "prefix_and_default"
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
