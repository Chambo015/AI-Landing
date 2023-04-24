// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss', '~/assets/css/fonts.css'],
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.scss',
    }
})
