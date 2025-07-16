interface RouteData {
  name: string;
  pageTitle: string;
}

type PrivateRoutesKeys = 'TEST';

type PublicRoutesKeys = 'NOT_FOUND' | 'NOT_AUTHORIZED' | 'GENERAL_ERROR' | 'LOGIN' | 'ABOUT';

const PRIVATE_ROUTES: Record<PrivateRoutesKeys, RouteData> = {
  TEST: {
    name: 'test',
    pageTitle: 'pages.test'
  }
};

const PUBLIC_ROUTES: Record<PublicRoutesKeys, RouteData> = {
  LOGIN: {
    name: 'login',
    pageTitle: 'pages.auth.login'
  },
  ABOUT: {
    name: 'about',
    pageTitle: 'pages.about'
  },
  NOT_FOUND: {
    name: '404',
    pageTitle: 'pages.404'
  },
  NOT_AUTHORIZED: {
    name: 'notAuthorized',
    pageTitle: 'pages.notAuthorized'
  },
  GENERAL_ERROR: {
    name: '500',
    pageTitle: 'pages.500'
  }
};

export { PRIVATE_ROUTES, PUBLIC_ROUTES };
