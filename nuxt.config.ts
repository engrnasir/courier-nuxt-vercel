// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n', 
    '@nuxt/image',
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    [
      '@pinia/nuxt',
      {
        autoImports:['defineStore', 'acceptHRMUpdate']
      }
    ], 
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  imports:{
    dirs:['stores']
  },

  i18n: {
    // vueI18n: './i18n.config.ts', // if you are using custom path, default 
    lazy:true,
    langDir:'locales',
    strategy:'no_prefix',
    locales:[
      {
        code:'en',
        iso:'en-EN',
        name:'English',
        file:'en.yaml'
      },
      {
        code:'es',
        iso:'es-ES',
        name:'Spanish',
        file:'es.yaml'
      }
    ],
    defaultLocale:'en',
  },
  runtimeConfig:{
    public:{
      VUE_APP_MYACCOUNT_EXTERNAL_URL:"https://myaccountexternal-devel.aeropost.com",
      VUE_APP_MYACCOUNT_URL:"https://myaccount-dev.int.aeropost.com",
      VUE_APP_SIGNUP_URL:"https://login-dev.aeropost.com/SignUp",
      VUE_APP_SIGNUP_PACKAGES_ADDRESS_URL:"https://login-dev.aeropost.com/api/SignOn/PackagesAddress",
      VUE_APP_MTK_SITE_URL:"https://stage.aeropost.com"
    },
  },
  image:{
    imagekit:{
      baseURL:"https://ik.imagekit.io/phc7dlrym/courier-aeropost"
    }
  }
  
})