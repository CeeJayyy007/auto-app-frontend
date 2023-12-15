import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';

const privateRoutes = () => {
  return [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: 'profile', element: <Profile /> },
        { path: '*', element: <Navigate to="/" replace /> }
      ]
    }
  ];
};

const publicRoutes = () => {
  return [
    { path: '/sign-in', element: <Authentication /> },
    { path: '*', element: <Navigate to="/sign-in" replace /> }
  ];
};

export { privateRoutes, publicRoutes };
