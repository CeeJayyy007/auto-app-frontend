import { Badge } from '../ui/badge';

const ItemCard = ({ name, className }) => {
  return (
    <Badge
      variant="outline"
      className={`max-w-[150px] truncate m-1 ${className}`}
    >
      {name}
    </Badge>
  );
};

export default ItemCard;
