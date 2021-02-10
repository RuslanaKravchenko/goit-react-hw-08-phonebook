import { lazy } from 'react';
import sprite from '../assets/symbol-defs.svg';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    icon: sprite + '#home',
    exact: true,
    component: lazy(() =>
      import('../views/homePage/HomeView' /* webpackChunkName: "HomePage"*/),
    ),
    isPrivate: false,
    restricted: false,
  },

  {
    path: '/contacts',
    name: 'Contacts',
    icon: sprite + '#group-2',
    exact: true,
    component: lazy(() =>
      import('../views/ContactsView' /* webpackChunkName: "ContactsPage"*/),
    ),
    isPrivate: true,
    restricted: false,
  },

  {
    path: '/signin',
    name: 'SignIn',
    icon: sprite + '#login',
    exact: true,
    component: lazy(() =>
      import('../views/LoginView' /* webpackChunkName: "SignInPage"*/),
    ),
    isPrivate: false,
    restricted: true,
  },

  {
    path: '/signup',
    name: 'Sign Up',
    exact: true,
    component: lazy(() =>
      import('../views/RegisterView' /* webpackChunkName: "SignUpPage"*/),
    ),
    isPrivate: false,
    restricted: true,
  },
];

export default mainRoutes;
