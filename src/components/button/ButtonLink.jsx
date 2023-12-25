import { Link } from 'react-router-dom';

const ButtonLink = ({ children, to, className, variant }) => {
  return (
    <Link
      to={to}
      variant={`${variant}`}
      className={`px-4 h-9 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
