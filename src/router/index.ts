import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: '/',
    },
    {
      component: NotFoundView,
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
    },
    {
      // The `import()` enables route-level code-splitting. This generates
      // a separate chunk (AboutView.[hash].js) for this route which is
      // lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      name: 'about',
      path: '/about/:foo?',
    },
  ],
})

export default router
