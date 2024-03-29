import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import AlertDialogComponent from '../display/AlertDialog';

export const UsersDataTableRowActions = ({ row, removeProfile }) => {
  const { id } = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted focus:ring-0 focus-visible:ring-0 rounded-full"
        >
          <DotsVerticalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* View */}
        <DropdownMenuItem>View</DropdownMenuItem>

        <DropdownMenuSeparator />
        {/* Delete */}
        <AlertDialogComponent
          actionLabel="Delete"
          triggerLabel="Delete"
          title="Delete User Profile"
          description="Are you sure you want to delete this user profile?"
          cancelLabel="Cancel"
          onClick={() => removeProfile(id)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
