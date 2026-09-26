// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  serverDir: 'src/server',
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  routeRules: {
    '/': { redirect: '/login' }
  },
  runtimeConfig: {
    sessionSecret: 'ganti-string-acak-minimal-32-karakter!!'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})