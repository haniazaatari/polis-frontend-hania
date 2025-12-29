export default defineNuxtConfig({
  // Runtime configuration (Nuxt 4 recommended)
  runtimeConfig: {
    public: {
      // Used everywhere with useRuntimeConfig().public.polisApi
      polisApi: "https://polisbackend.zaatari.net"
    }
  },

  // Nuxt 4 dev server recommendation
 devServer: {
    host: '0.0.0.0',
    port: 6002,
     },

      // ★ Add this block — REQUIRED for Vite to accept Cloudflare traffic
  vite: {
    server: {
      allowedHosts: ['polis.zaatari.net'],
      hmr: {
        host: 'polis.zaatari.net',
        protocol: 'wss',
      }
    }
  },
  pages: true,

  // // Enable Pages Router (Nuxt 4 default is App Router)
  // pages: true,

  // Nuxt 4 Required
  compatibilityDate: '2025-07-15',

  // DevTools
  devtools: { enabled: true }
});
