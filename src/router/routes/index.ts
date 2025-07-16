import type { RouteRecordRaw } from 'vue-router';

import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

privateRoutes.forEach((route: RouteRecordRaw) => {
  if (!route.meta?.requiresAuth && !route.children) {
    route.meta = { ...route.meta, requiresAuth: true };
    return;
  }

  const validateChildren = (children: RouteRecordRaw[]) => {
    children.forEach((childRoute: RouteRecordRaw) => {
      if (!childRoute.meta?.requiresAuth && !childRoute.children) {
        childRoute.meta = { ...childRoute.meta, requiresAuth: true };
        return;
      }

      if (childRoute.children) {
        validateChildren(childRoute.children);
        return;
      }
    });
  };

  if (route.children) {
    validateChildren(route.children);
    return;
  }
});

export const routes = [...publicRoutes, ...privateRoutes];
