import { columns } from '@/components/appointment/column';
import { appointmentData } from '@/components/appointment/data';
import { DataTable } from '@/components/dataTable/dataTable';
import { services, statuses, vehicles } from '../components/appointment/data';
import SideSheet from '@/components/display/SideSheet';
import AppointmentForm from '@/components/appointment/AppointmentForm';
import {
  AddAppointmentFormSchema,
  EditAppointmentFormSchema
} from '@/components/appointment/AppointmentValidation';
import useAppointment from '@/hooks/useAppointment';
import { useUserValue } from '@/context/UserContext';
import { get } from 'react-hook-form';
import useProfile from '@/hooks/useProfile';

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

const Appointments = () => {
  const { result } = useProfile();
  const { addAppointment } = useAppointment();

  // do not render anything if profile data is still null
  if (!result?.data) {
    return null;
  }

  const user = result?.data?.user[0];
  const { Vehicles, Appointments: appointments } = user;
  const vehiclesData = Vehicles.sort((a, b) => b.id - a.id);

  console.log(vehiclesData);

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
              appointment={appointments}
              vehicles={vehiclesData}
              formAction={addAppointment}
              formValidation={AddAppointmentFormSchema}
              buttonText="Add Appointment"
            />
          }
        />

        {/* Edit appointment */}
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={appointmentData}
          columns={columns}
          props={{ services, statuses, vehicles }}
          placeholder="Search appointments..."
          filterColumn="note"
        />
      </div>
    </div>
  );
};

export default Appointments;
