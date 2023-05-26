import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:windi.css'


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App).use(router).use(vuetify).use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')