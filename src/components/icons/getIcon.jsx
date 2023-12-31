import { Icons } from './icons';

const getIcon = ({ name, className, ...props }) => {
  const IconComponent = Icons[name];
  return (
    <IconComponent
      className={`h-4 w-4 fill-gray-400 ${className}`}
      {...props}
    />
  );
};

export default getIcon;
