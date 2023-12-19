import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Appointments from './pages/Appointments';
import Activities from './pages/Activities';
import Services from './pages/Services';
import Inventory from './pages/Inventory';

const privateRoutes = () => {
  return [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: 'profile', element: <Profile /> },
        { path: 'appointments', element: <Appointments /> },
        { path: 'activities', element: <Activities /> },
        { path: 'services', element: <Services /> },
        { path: 'inventory', element: <Inventory /> },
        { path: 'reports', element: <div>Reports</div> },
        { path: 'payments', element: <div>Payments</div> },
        { path: 'settings', element: <div>Settings</div> },
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
