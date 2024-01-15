import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Appointments from './pages/Appointments';
import Activities from './pages/Activities';
import Services from './pages/Services';
import Inventory from './pages/Inventory';
import MaintenaceRecord from './pages/MaintenanceRecord';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Payments from './pages/Payment';
import PaymentIntegration from './components/payments/PaymentIntegration';

const privateRoutes = () => {
  return [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard replace /> },
        { path: 'users', element: <Users /> },
        { path: 'profile', element: <Profile /> },
        { path: 'appointments', element: <Appointments /> },
        { path: 'activities', element: <Activities /> },
        { path: 'services', element: <Services /> },
        { path: 'maintenance-record/:id', element: <MaintenaceRecord /> },
        { path: 'inventory', element: <Inventory /> },
        { path: 'payments', element: <Payments /> },
        { path: 'payment-integration', element: <PaymentIntegration /> },
        { path: 'reports', element: <div>Reports</div> },
        { path: 'analytics', element: <Analytics /> },
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
