import { Badge } from '../ui/badge';

const ColouredBadge = ({ status, colorFn }) => {
  return (
    <Badge
      className={`w-[90px] flex justify-center px-1 font-normal rounded-full ${colorFn(
        status?.value ? status.value : status
      )}`}
    >
      {status?.label ? status.label : status}
    </Badge>
  );
};

export default ColouredBadge;
