import type { RouteRecordRaw } from 'vue-router';

import LoginView from '@/views/auth/LoginView.vue';
import NotAuthorizedView from '@/views/errors/NotAuthorizedView.vue';
import NotFoundView from '@/views/errors/NotFoundView.vue';

import { PUBLIC_ROUTES } from './routesNames';

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: PUBLIC_ROUTES.NOT_FOUND.name,
    component: NotFoundView,
    meta: {
      pageTitle: PUBLIC_ROUTES.NOT_FOUND.pageTitle
    }
  },
  {
    path: '/not-authorized',
    name: PUBLIC_ROUTES.NOT_AUTHORIZED.name,
    component: NotAuthorizedView,
    meta: {
      pageTitle: PUBLIC_ROUTES.NOT_AUTHORIZED.pageTitle
    }
  },
  {
    path: '/',
    component: () => import('@/layout/EmptyLayout.vue'),
    redirect: '/test',
    children: [
      {
        path: '/about',
        name: PUBLIC_ROUTES.ABOUT.name,
        component: () => import('@/views/AboutView.vue'),
        meta: {
          pageTitle: PUBLIC_ROUTES.ABOUT.pageTitle
        }
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/TestView.vue')
      }
    ]
  },
  {
    path: '/auth', // used in guards
    component: () => import('@/layout/EmptyLayout.vue'),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: PUBLIC_ROUTES.LOGIN.name,
        component: LoginView,
        meta: {
          pageTitle: PUBLIC_ROUTES.LOGIN.pageTitle
        }
      }
    ]
  }
];
