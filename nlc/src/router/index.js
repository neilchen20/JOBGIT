import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

import KeyinUser from '../components/KeyinUser.vue'
import ChooseUser from '../components/ChooseUser.vue'
import KeyinPswd from '../components/KeyinPswd.vue'
import VuetifyUser from '../components/VuetifyUser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children:[
        {
          path: 'keyinuser',
          name: 'KeyinUser',
          component: KeyinUser
        },
        {
          path: 'chooseuser',
          name: 'ChooseUser',
          component: ChooseUser
        },
        {
          path: 'keyinpswd',
          name: 'KeyinPswd',
          component: KeyinPswd
        },
        {
          path: 'vuetifyuser',
          name: 'VuetifyUser',
          component: VuetifyUser
        },
      ]
    }
  ]
})

export default router
