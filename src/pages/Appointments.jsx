import { columns } from '@/components/appointment/column';
import { DataTable } from '@/components/dataTable/dataTable';
import { statuses } from '../components/appointment/data';
import SideSheet from '@/components/display/SideSheet';
import AppointmentForm from '@/components/appointment/appointmentForm/AppointmentForm';
import { AddAppointmentFormSchema } from '@/components/appointment/appointmentForm/AppointmentValidation';
import useAppointment from '@/hooks/useAppointment';
import {
  findServiceName,
  findVehicleInfo,
  getServices,
  getVehicles
} from '@/utils/helpers';
import storePersist from '@/store/storePersist';

const Appointments = () => {
  const {
    addAppointment,
    editAppointment,
    removeAppointment,
    createServiceRequest
  } = useAppointment();

  const userAppointments = storePersist.get('appointments');
  const servicesData = storePersist.get('service');
  const user = storePersist.get('profile').user[0];

  // do not render anything if profile data is still null
  if (!userAppointments) {
    return null;
  }

  // convert vehicles data to select options
  const vehicles = getVehicles(user?.Vehicles);

  // conver services data to select options
  const servicesOption = getServices(servicesData);

  // get services name for appointment.serviceId array from appointments
  const appointmentData = userAppointments.map((appointment) => {
    const { servicesDetails, vehicleDetails } = appointment;

    const vehicle = vehicleDetails
      ? `${vehicleDetails.make} ${vehicleDetails.model} ${vehicleDetails.year}`
      : '';

    return {
      ...appointment,
      services: servicesDetails.map((service) => service.name),
      vehicle
    };
  });

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Appointments</h3>

        {/* Add appointment */}
        <SideSheet
          type="button"
          triggerLabel="Add Appointment"
          title="Add Appointment"
          description="Add Appointment details and click Add Appointment when done..."
          actionLabel="Add Appointment"
          body={
            <AppointmentForm
              userId={user.id}
              vehicles={vehicles}
              services={servicesOption}
              formAction={addAppointment}
              formValidation={AddAppointmentFormSchema}
              buttonText="Add Appointment"
            />
          }
        />
      </div>
      {/* Appointment table */}
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={appointmentData}
          columns={columns(
            vehicles,
            servicesOption,
            editAppointment,
            createServiceRequest,
            removeAppointment
          )}
          props={{ services: servicesOption, statuses, vehicles }}
          placeholder="Search appointments..."
          filterColumn="note"
        />
      </div>
    </div>
  );
};

export default Appointments;
