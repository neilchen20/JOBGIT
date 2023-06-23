import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import project from '../views/project.vue'
import interest from '../views/interest.vue'
import note from '../views/note.vue'
import apptest from '../views/apptest.vue';
import vuejs from '../views/notes/vuejs.vue'


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
    },
    {
      path: '/note',
      name: 'note',
      component: note,
      children: [
        {
          path: '/vuejs',
          name: 'vuejs',
          component: vuejs
        }
      ]
    }
    ,
    {
      path: '/apptest',
      name: 'apptest',
      component: apptest
    }

  ]
})

export default router
