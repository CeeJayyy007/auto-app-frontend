import IconButton from '../button/IconButton';
import { Button } from '../ui/button';

const EmptyPlaceholder = ({
  icon,
  title,
  description,
  className,
  buttonTitle
}) => {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[14px] border border-dashed ${className}`}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {icon}
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">{description}</p>
        {buttonTitle}
      </div>
    </div>
  );
};

export default EmptyPlaceholder;
