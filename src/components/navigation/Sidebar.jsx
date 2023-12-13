import { Button } from '@/components/ui/button';
import IconButton from '@/components/IconButton';
import {
  sidebarContent as content,
  bottomNavContent as bottomContent
} from './navUtils';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-[200px] relative pr-8">
      <div className="space-y-3 py-4">
        {content.map((item) => (
          <IconButton key={item.title} {...item} variant="ghost" />
        ))}
      </div>

      <div className="absolute space-y-3 inset-x-0 bottom-8">
        {bottomContent.map((item) => (
          <IconButton key={item.title} {...item} variant="ghost" />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
