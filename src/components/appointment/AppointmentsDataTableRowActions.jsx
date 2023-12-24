import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import AlertDialogComponent from '../additionalDisplay/AlertDialog';
import SideSheet from '../additionalDisplay/SideSheet';
import { Label } from '@/components/ui/label';
import DatePicker from '../datePicker/DatePicker';
import RecordCombobox from '../maintenanceRecord/RecordCombobox';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import DrawerComponent from '../additionalDisplay/Drawer';
import { commaSeparatedArray, statusColor } from '@/utils/helpers';
import ColouredBadge from '../badge/ColouredBadge';
import { services as servicesData } from '../activities/data';

export const AppointmentsDataTableRowActions = ({ row }) => {
  const { date, vehicle, note, services, status } = row.original;

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
        {/* Create request */}
        <DrawerComponent
          type="button"
          actionLabel="Create Request"
          triggerLabel="Create Request"
          title="Create Service Request from Appointment"
          body={
            <div className="flex flex-col space-y-4 py-4">
              <h4 className="text-sm font-semibold mx-4">Date: {date}</h4>
              <h4 className="text-sm font-semibold mx-4">Vehicle: {vehicle}</h4>
              <div className="flex flex-row flex-between items-center">
                <h4 className="text-sm font-semibold mx-4">Status: </h4>
                <ColouredBadge status={status} colorFn={statusColor} />
              </div>
              <h4 className="text-sm font-semibold mx-4">Note: {note}</h4>
              <h4 className="text-sm font-semibold mx-4">
                Services: {commaSeparatedArray(services)}
              </h4>
              <h4 className="text-sm font-semibold mx-4">
                Last updated on: 12/12/2023
              </h4>
            </div>
          }
          cancelLabel="Cancel"
        />

        {/* Edit */}
        <SideSheet
          triggerLabel="Edit"
          title="Edit Appointment"
          description="Edit Appointment and click save when done."
          actionLabel="Save Appointment"
          body={
            <div className="flex flex-col space-y-4 py-4">
              <div className="grid ">
                <Label htmlFor="date" className="text-left mb-2 sr-only">
                  Select Date
                </Label>
                <DatePicker />
              </div>
              <div className="grid ">
                <Label htmlFor="date" className="text-left mb-2 sr-only">
                  Select Vehicle
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleData.map((item) => (
                      <SelectItem key={item.make} value={item}>
                        {`${item.make} ${item.model} ${item.year} `}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center">
                <Label htmlFor="services" className="text-left mb-2 sr-only">
                  Select Services
                </Label>
                <RecordCombobox data={servicesData} name="services" />
              </div>
              <div className="grid ">
                <Label htmlFor="note" className="text-left mb-2 sr-only">
                  Note
                </Label>
                <Textarea placeholder="Enter service request note." />
              </div>
            </div>
          }
        />

        {/* Cancel */}
        <AlertDialogComponent
          actionLabel="Cancel"
          triggerLabel="Cancel"
          title="Cancel Appointment"
          description="Are you sure you want to cancel this appointment?"
          cancelLabel="Cancel"
        />
        <DropdownMenuSeparator />

        {/* Delete */}
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
