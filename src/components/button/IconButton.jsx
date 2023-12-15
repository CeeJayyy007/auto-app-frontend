import { Button } from '../ui/button';

const IconButton = ({ icon, title, variant, className, onClick }) => (
  <Button
    onClick={onClick}
    variant={variant}
    className={`w-full justify-start ${className}`}
  >
    {icon}
    {title}
  </Button>
);

export default IconButton;
