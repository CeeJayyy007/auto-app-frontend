import React from 'react';
import IconButton from '@/components/button/IconButton';
import {
  sidebarContent as content,
  bottomNavContent as bottomContent
} from './navUtils';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthentication from '@/hooks/useAuthentication';
import { useUserDispatch, useUserValue } from '@/context/UserContext';

const Sidebar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatchUser = useUserDispatch();
  const user = useUserValue();

  const { handleLogout } = useAuthentication(dispatchUser, navigate);

  const handleClick = async (path) => {
    if (path === '/logout') {
      handleLogout();
    } else {
      navigate(path);
    }
  };

  // do not show the Users, Analytics and Inventory menu items if the user is not an admin
  const shouldRenderMenuItem = (title) => {
    if (
      (title === 'Users' || title === 'Inventory' || title === 'Analytics') &&
      user?.roles !== 'Admin'
    ) {
      return false;
    }

    if (title === 'Profile' && user?.roles !== 'User') {
      return false;
    }

    return true;
  };

  return (
    <div className="flex flex-col h-full w-[200px] relative pr-8">
      <div className="space-y-3 py-4">
        {content.map((item) =>
          shouldRenderMenuItem(item.title) ? (
            <IconButton
              key={item.title}
              {...item}
              variant={location.pathname === item.path ? 'secondary' : 'ghost'}
              className={location.pathname === item.path && 'font-bold'}
              onClick={() => handleClick(item.path)}
            />
          ) : null
        )}
      </div>

      <div className="absolute space-y-3 bottom-8 pr-8">
        {bottomContent.map((item) => (
          <IconButton
            key={item.title}
            {...item}
            variant={location.pathname === item.path ? 'secondary' : 'ghost'}
            className={location.pathname === item.path && 'font-bold'}
            onClick={() => handleClick(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
