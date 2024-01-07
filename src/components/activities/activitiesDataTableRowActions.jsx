import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import AlertDialogComponent from '../display/AlertDialog';

export const ActivitiesDataTableRowActions = ({ row }) => {
  const navigate = useNavigate();

  const { id, status } = row.original;

  const handleView = () => {
    navigate(`/maintenance-record/${id}`);
  };

  console.log(status);

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
        <DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
        {/* Cancel */}
        {status === 'In-Progress' && (
          <AlertDialogComponent
            actionLabel="Cancel"
            triggerLabel="Cancel"
            title="Cancel Maintenance Record"
            description="Are you sure you want to cancel this maintenance record?"
            cancelLabel="Cancel"
          />
        )}
        <DropdownMenuSeparator />
        {/* Delete */}
        <AlertDialogComponent
          actionLabel="Delete"
          triggerLabel="Delete"
          title="Delete Maintenance Record"
          description="Are you sure you want to delete this record?"
          cancelLabel="Cancel"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
