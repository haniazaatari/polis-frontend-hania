// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  public: {
    polisApi: 'http://localhost:5000'
  },

    devServer: {
    port: 6002
  },
   pages: true,

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
