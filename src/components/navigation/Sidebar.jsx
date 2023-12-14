import IconButton from '@/components/IconButton';
import {
  sidebarContent as content,
  bottomNavContent as bottomContent
} from './navUtils';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };

  return (
    <div className="flex flex-col h-full w-[200px] relative pr-8">
      <div className="space-y-3 py-4">
        {content.map((item) => (
          <IconButton
            key={item.title}
            {...item}
            variant="ghost"
            onClick={() => handleClick(item.path)}
          />
        ))}
      </div>

      <div className="absolute space-y-3 bottom-8 pr-8">
        {bottomContent.map((item) => (
          <IconButton key={item.title} {...item} variant="ghost" />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
