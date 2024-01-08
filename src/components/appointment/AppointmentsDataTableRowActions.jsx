import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import AlertDialogComponent from '../display/AlertDialog';
import SideSheet from '../display/SideSheet';
import DrawerComponent from '../display/Drawer';
import { commaSeparatedArray, getDate, statusColor } from '@/utils/helpers';
import ColouredBadge from '../badge/ColouredBadge';
import AppointmentForm from './AppointmentForm';
import { EditAppointmentFormSchema } from './AppointmentValidation';
import { useUserValue } from '@/context/UserContext';

export const AppointmentsDataTableRowActions = ({
  row,
  editAppointment,
  createServiceRequest,
  removeAppointment,
  vehicles,
  servicesOption
}) => {
  const {
    id,
    date,
    time,
    vehicle,
    note,
    services,
    status,
    vehicleId,
    serviceId
  } = row.original;
  const cancelObject = { status: 'Canceled' };
  const user = useUserValue();

  const handleCreateServiceRequest = (appointmentId) => {
    const data = {
      appointmentId,
      date,
      time,
      vehicleId: vehicleId,
      note,
      serviceId
    };

    createServiceRequest(data);
  };

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
        {status === 'Pending' && (
          <DrawerComponent
            type="button"
            description="Create service request from the following appointment details."
            actionLabel="Create Request"
            triggerLabel="Create Request"
            title="Create Service Request"
            onClick={() => handleCreateServiceRequest(id)}
            body={
              <div className="flex flex-col space-y-4 py-4">
                <h4 className="text-sm font-semibold mx-4">
                  Date: {getDate(date)}
                </h4>
                <h4 className="text-sm font-semibold mx-4">
                  Vehicle: {vehicle}
                </h4>
                <div className="flex flex-row flex-between items-center">
                  <h4 className="text-sm font-semibold mx-4">Status: </h4>
                  <ColouredBadge status={status} colorFn={statusColor} />
                </div>
                <h4 className="text-sm font-semibold mx-4">Note: {note}</h4>
                <h4 className="text-sm font-semibold mx-4">
                  Services: {commaSeparatedArray(services)}
                </h4>
                <h4 className="text-sm font-semibold mx-4">
                  Last updated on: {getDate(date)}
                </h4>
              </div>
            }
            cancelLabel="Cancel"
          />
        )}

        {/* Edit */}
        {status === 'Pending' && (
          <SideSheet
            triggerLabel="Edit"
            title="Edit Appointment"
            description="Edit Appointment and click save when done."
            actionLabel="Save Appointment"
            body={
              <AppointmentForm
                userId={user.id}
                vehicles={vehicles}
                services={servicesOption}
                rowData={row.original}
                formAction={editAppointment}
                formValidation={EditAppointmentFormSchema}
                buttonText="Edit Appointment"
              />
            }
          />
        )}
        {/* Cancel */}
        {(status === 'Pending' || status === 'In-Progress') && (
          <AlertDialogComponent
            actionLabel="Cancel"
            triggerLabel="Cancel"
            title="Cancel Appointment"
            description="Are you sure you want to cancel this appointment?"
            cancelLabel="Cancel"
            onClick={() => editAppointment(cancelObject, id)}
          />
        )}
        <DropdownMenuSeparator />

        {/* Delete */}
        <AlertDialogComponent
          actionLabel="Delete"
          triggerLabel="Delete"
          title="Delete Appointment"
          description="Are you sure you want to delete this appointment?"
          cancelLabel="Cancel"
          onClick={() => removeAppointment(id)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
