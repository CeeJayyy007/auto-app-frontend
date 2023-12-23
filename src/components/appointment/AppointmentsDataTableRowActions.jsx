import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import EditAppointment from './EditAppointment';
import AlertDialogComponent from '../alert/AlertDialog';

export const AppointmentsDataTableRowActions = ({ row }) => {
  const { id } = row.original;

  const vehicleData = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: '2021',
      registrationNumber: 'LND123XA'
    },
    {
      make: 'Mercedes',
      model: 'Benz',
      year: '2021',
      registrationNumber: 'LND123XX'
    }
  ];

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
        <DropdownMenuItem>Create Request</DropdownMenuItem>
        <EditAppointment data={vehicleData} />
        <AlertDialogComponent
          actionLabel="Cancel"
          triggerLabel="Cancel"
          title="Cancel Appointment"
          description="Are you sure you want to cancel this appointment?"
          cancelLabel="Cancel"
        />
        <DropdownMenuSeparator />

        <AlertDialogComponent
          actionLabel="Delete"
          triggerLabel="Delete"
          title="Delete Appointment"
          description="Are you sure you want to delete this appointment?"
          cancelLabel="Cancel"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
