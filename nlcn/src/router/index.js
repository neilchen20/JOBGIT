import { createRouter, createWebHistory } from 'vue-router'


const routers = [
    {
      path: '/',
      name: 'index',
      component: () => import ('../views/index.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import ('../views/project.vue')
    },
    {
      path: '/interest',
      name: 'interest',
      component: () => import ('../views/interest.vue')
    },
    {
      path: '/note',
      name: 'note',
      component: () => import ('../views/note.vue'),
      children: [
        {
          path: '/vuejs',
          name: 'vuejs',
          component: () => import ('../views/notes/vuejs.vue')
        }
      ]
    },
    {
      path: '/apptest',
      name: 'apptest',
      component: () => import ('../views/apptest.vue')
    },
    {
    path: "/404",
    // alias: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
]
const router = createRouter({
  history: createWebHistory('/'),
  routes: routers,
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404');
  } else {
    next();
  }
});

export default router