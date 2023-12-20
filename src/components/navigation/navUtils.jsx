import getIcon from '../icons/getIcon';

export const sidebarContent = [
  {
    id: 1,
    title: 'Dashboard',
    icon: getIcon({ name: 'dashboard', className: 'mr-2' }),
    path: '/'
  },
  {
    id: 2,
    title: 'Profile',
    icon: getIcon({ name: 'profile', className: 'mr-2' }),
    path: '/profile'
  },
  {
    id: 3,
    title: 'Appointments',
    icon: getIcon({ name: 'appointments', className: 'mr-2 ' }),
    path: '/appointments'
  },
  {
    id: 4,
    title: 'Activities',
    icon: getIcon({ name: 'activities', className: 'mr-2' }),
    path: '/activities'
  },
  {
    id: 5,
    title: 'Services',
    icon: getIcon({ name: 'services', className: 'mr-2' }),
    path: '/services'
  },
  {
    id: 6,
    title: 'Inventory',
    icon: getIcon({ name: 'cart', className: 'mr-2' }),
    path: '/inventory'
  },
  {
    id: 7,
    title: 'Payments',
    icon: getIcon({ name: 'payments', className: 'mr-2' }),
    path: '/payments'
  },
  {
    id: 8,
    title: 'Reports',
    icon: getIcon({ name: 'reports', className: 'mr-2' }),
    path: '/reports'
  },
  {
    id: 9,
    title: 'Analytics',
    icon: getIcon({ name: 'chart', className: 'mr-2' }),
    path: '/analytics'
  }
];

export const bottomNavContent = [
  {
    id: 1,
    title: 'Settings',
    icon: getIcon({ name: 'settings', className: 'mr-2' }),
    path: '/settings'
  },
  {
    id: 2,
    title: 'Logout',
    icon: getIcon({ name: 'logout', className: 'mr-2' }),
    path: '/logout'
  }
];
