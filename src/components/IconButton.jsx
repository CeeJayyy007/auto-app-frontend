import { Button } from './ui/button';

const IconButton = ({ icon, title, variant, onClick }) => (
  <Button onClick={onClick} variant={variant} className="w-full justify-start">
    {icon}
    {title}
  </Button>
);

export default IconButton;
