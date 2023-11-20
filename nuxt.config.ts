import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.css",
    "boxicons/css/boxicons.min.css",
    "~/assets/hover.css",
    "vuetify/lib/styles/main.sass",
    "@vuepic/vue-datepicker/dist/main.css",
    "vue-tel-input/vue-tel-input.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/vue-tel-input"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/i18n", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  googleFonts: {
    families: {
      Inter: true,
      Lato: true,
      Montserrat: true,
      Poppins: true,
      Raleway: true,
      "Libre Baskerville": true,
      "Open Sans": true,
      "Playfair Display": true,
    },
  },
});
