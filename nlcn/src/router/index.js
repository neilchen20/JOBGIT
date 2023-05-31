import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import project from '../views/project.vue'
import interest from '../views/interest.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/interest',
      name: 'interest',
      component: interest
    }
  ]
})

export default router
