import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)

const vuetify = createVuetify({
    components,
    directives,
})



const app = createApp(App)
                .use(router)
                .use(ElementPlus)
                .use(vuetify)
                .component("FontAwesomeIcon", FontAwesomeIcon)
                .mount('#app')

// app.use(router)
// app.use(ElementPlus)
// app.mount('#app')
