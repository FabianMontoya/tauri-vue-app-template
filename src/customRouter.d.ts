import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    pageTitle?: string;
    // must be declared by every route
    requiresAuth?: boolean;
  }
}
