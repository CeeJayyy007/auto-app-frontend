import { Badge } from '../ui/badge';

const ColouredBadge = ({ status, colorFn }) => {
  return (
    <Badge
      className={`w-[80px] flex justify-center px-1 font-normal rounded-full ${colorFn(
        status.value
      )}`}
    >
      {status.label}
    </Badge>
  );
};

export default ColouredBadge;
