export default defineNuxtConfig({
  // Runtime configuration (Nuxt 4 recommended)
  runtimeConfig: {
    public: {
      // Used everywhere with useRuntimeConfig().public.polisApi
      polisApi: 'http://localhost:5000'
    }
  },

  // Nuxt 4 dev server recommendation
  devServer: {
    port: 6002,
    host: '0.0.0.0'
  },

  // Enable Pages Router (Nuxt 4 default is App Router)
  pages: true,

  // Nuxt 4 Required
  compatibilityDate: '2025-07-15',

  // DevTools
  devtools: { enabled: true }
});
