import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

const IconDropdownMenu = ({
  label,
  extraActions,
  className,
  viewAction,
  editAction,
  deleteAction
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex h-8 w-8 p-0 data-[state=open]:bg-muted focus:ring-0 focus-visible:ring-0 rounded-full ${className}`}
        >
          <DotsVerticalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {viewAction && viewAction}
        {editAction && editAction}
        {extraActions && extraActions}
        <DropdownMenuSeparator />
        {deleteAction}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default IconDropdownMenu;
