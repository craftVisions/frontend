import type { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router';
import { ProtectedRoute, RestrictedRoute } from './components';
import { AuthLayout, Home, Landing, Layout, Login, Signup } from './pages';

const RestrictedRoutes: RouteObject[] = [
  {
    Component: RestrictedRoute,
    children: [
      {
        path: 'landing',
        Component: Landing,
      },
      {
        path: 'auth',
        Component: AuthLayout,
        children: [
          {
            index: true,
            Component: Login,
          },
          {
            path: 'signup',
            Component: Signup,
          },
        ],
      },
    ],
  },
];

const ProtectedRoutes: RouteObject[] = [
  {
    Component: ProtectedRoute,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    children: [...RestrictedRoutes, ...ProtectedRoutes],
  },
]);

export default router;
