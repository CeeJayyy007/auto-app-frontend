import IconButton from '../button/IconButton';
import getIcon from '../icons/getIcon';

const MenuIcon = ({ className }) => {
  return (
    <IconButton
      icon={getIcon({
        name: 'menu',
        className: 'mx-auto'
      })}
      className={`h-8 w-8 p-0 rounded-full  border hover:bg-gray-100  ${className}`}
      variant="ghost"
    />
  );
};

export default MenuIcon;
