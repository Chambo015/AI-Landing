// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss', '~/assets/css/fonts.css'],
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-vuefire', '@nuxt/image-edge'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.scss',
    },
    app: {
        head : { // SEO
            title: 'AI - Integrator',
            htmlAttrs: {
                    lang: 'ru'
            },
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico'
                }
            ]
        }
    },
    typescript: {
        typeCheck: true
    },
    vuefire: { // FireBase
        config: {
          apiKey: process.env.NUXT_API_KEY,
          authDomain: process.env.NUXT_AUTH_DOMAIN,
          projectId:  process.env.NUXT_PROJECT_ID,
          appId:  process.env.NUXT_APP_ID,
          databaseURL: process.env.NUXT_DATABASE_URL,
          messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
          storageBucket: process.env.NUXT_STORAGE_BUCKET
        },
    },
})
