import type { RouteRecordRaw } from 'vue-router';

import { PRIVATE_ROUTES } from './routesNames';

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    component: () => import('@/layout/EmptyLayout.vue'),
    redirect: '/app/dashboard',
    children: [
      {
        path: 'dashboard',
        // name: PRIVATE_ROUTES.TEST.name,
        name: 'test-dashboard',
        component: () => import('@/views/test/TestView.vue'),
        meta: {
          pageTitle: PRIVATE_ROUTES.TEST.pageTitle
        }
      }
    ]
  }
];
