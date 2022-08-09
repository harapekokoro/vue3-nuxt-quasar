import { Quasar } from 'quasar'
import * as components from 'quasar'
import * as directives from 'quasar'
import langJa from 'quasar/lang/ja'

//Import icon
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Quasar, {
        config: {},
        components,
        directives,
        plugins: {},
        // ここは Quasar 側の lang 設定なので好みです。
        lang: langJa
    })
});