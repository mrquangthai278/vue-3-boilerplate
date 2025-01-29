import { createRouter, createWebHistory } from 'vue-router';

import { env } from '@/config/env';

const router = createRouter({
  history: createWebHistory(env.APP_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/modules/main/Home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/exception/NotFound.vue')
    }
  ]
});

export default router;
