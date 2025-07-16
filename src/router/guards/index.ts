import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedGeneric } from 'vue-router';

import router from '../index';

// TODO: Fix this function
function getPageTitle(pageTitle: string): string {
  const appTitle = 'My App'; // Replace with your app's title
  return pageTitle ? `${pageTitle} - ${appTitle}` : appTitle;
}

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // eslint-disable-next-line no-console
  console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);

  return next();
});

router.afterEach(async (to: RouteLocationNormalizedGeneric) => {
  document.title = getPageTitle(to.meta.pageTitle ?? '');
});
