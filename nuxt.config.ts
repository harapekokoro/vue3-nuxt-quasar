import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // UI framework 用の CSS の参照パス
    css: [
        'quasar/dist/quasar.prod.css'
    ],
    ssr:false,
    target:'static',
    extras:[
        'material-icons'
    ],
    framework: {
        iconSet: 'material-icons'
    }
})
