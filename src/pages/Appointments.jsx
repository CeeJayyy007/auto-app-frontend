import { columns } from '@/components/appointment/column';
import { DataTable } from '@/components/dataTable/dataTable';
import { statuses } from '../components/appointment/data';
import SideSheet from '@/components/display/SideSheet';
import AppointmentForm from '@/components/appointment/appointmentForm/AppointmentForm';
import { AddAppointmentFormSchema } from '@/components/appointment/appointmentForm/AppointmentValidation';
import useAppointment from '@/hooks/useAppointment';
import useProfile from '@/hooks/useProfile';
import useServices from '@/hooks/useServices';
import {
  findServiceName,
  findVehicleInfo,
  getServices,
  getVehicles
} from '@/utils/helpers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAppointment } from '@/reducers/appointmentReducers';

const Appointments = () => {
  const dispatch = useDispatch();
  const { allServices } = useServices();
  const {
    addAppointment,
    editAppointment,
    removeAppointment,
    createServiceRequest
  } = useAppointment();
  const { result, allVehicles } = useProfile();

  const user = result?.data?.user[0];
  const servicesData = allServices?.data;
  const allVehiclesData = allVehicles?.data?.vehicles;

  useEffect(() => {
    dispatch(setAppointment(user?.Appointments));
  }, [dispatch, user]);

  // do not render anything if profile data is still null
  if (!user || !servicesData || !allVehiclesData) {
    return null;
  }

  const { Vehicles, Appointments: userAppointments } = user;
  const userVehiclesData = Vehicles.sort((a, b) => b.id - a.id);

  // convert vehicles data to select options
  const vehicles = getVehicles(userVehiclesData);

  // conver services data to select options
  const servicesOption = getServices(servicesData);

  // get services name for appointment.serviceId array from appointments
  const appointmentData = userAppointments.map((appointment) => {
    const { serviceId, vehicleId } = appointment;
    const services = (serviceId || []).map((id) =>
      findServiceName(id, servicesData)
    );
    const vehicle = findVehicleInfo(vehicleId, allVehiclesData);

    return {
      ...appointment,
      services: services.filter(Boolean),
      vehicle: vehicle ? `${vehicle.make} ${vehicle.model} ${vehicle.year}` : ''
    };
  });

  if (result.isLoading) {
    return <div>loading data...</div>;
  } else if (result.isError) {
    return <div>error loading data</div>;
  }

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
