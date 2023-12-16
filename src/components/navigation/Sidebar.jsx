import React, { useState } from 'react';
import IconButton from '@/components/button/IconButton';
import {
  sidebarContent as content,
  bottomNavContent as bottomContent
} from './navUtils';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path === '/logout') {
      console.log(path);
      localStorage.removeItem('token');
      navigate('/sign-in');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col h-full w-[200px] relative pr-8">
      <div className="space-y-3 py-4">
        {content.map((item) => (
          <IconButton
            key={item.title}
            {...item}
            variant={location.pathname === item.path ? 'secondary' : 'ghost'}
            onClick={() => handleClick(item.path)}
          />
        ))}
      </div>

      <div className="absolute space-y-3 bottom-8 pr-8">
        {bottomContent.map((item) => (
          <IconButton
            key={item.title}
            {...item}
            variant={location.pathname === item.path ? 'secondary' : 'ghost'}
            onClick={() => handleClick(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
