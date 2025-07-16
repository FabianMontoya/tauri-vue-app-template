import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';

const initRouter = () =>
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 };
    },
    routes: [...routes]
  });

const router = initRouter();

export default router;
