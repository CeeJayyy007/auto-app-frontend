import { Icons } from '../icons';

const getIcon = (name) => {
  const IconComponent = Icons[name];
  if (IconComponent) {
    return <IconComponent className="mr-2 h-4 w-4" />;
  } else {
    return <Icons.dashboard />;
  }
};

export const sidebarContent = [
  {
    id: 1,
    title: 'Dashboard',
    icon: getIcon('dashboard'),
    path: '/dashboard'
  },
  {
    id: 2,
    title: 'Profile',
    icon: getIcon('profile'),
    path: '/profile'
  },
  {
    id: 3,
    title: 'Appointments',
    icon: getIcon('appointments'),
    path: '/appointments'
  },
  {
    id: 4,
    title: 'Activities',
    icon: getIcon('activities'),
    path: '/activities'
  },
  {
    id: 5,
    title: 'Services',
    icon: getIcon('services'),
    path: '/services'
  },
  {
    id: 6,
    title: 'Payments',
    icon: getIcon('payments'),
    path: '/payments'
  },
  {
    id: 7,
    title: 'Reports',
    icon: getIcon('reports'),
    path: '/reports'
  }
];

export const bottomNavContent = [
  {
    id: 1,
    title: 'Settings',
    icon: getIcon('settings'),
    path: '/settings'
  },
  {
    id: 2,
    title: 'Logout',
    icon: getIcon('logout'),
    path: '/logout'
  }
];
