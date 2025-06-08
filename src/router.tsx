import { createBrowserRouter } from 'react-router';
import { AuthLayout, Home, Login, Signup } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: Home,
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
]);

export default router;
