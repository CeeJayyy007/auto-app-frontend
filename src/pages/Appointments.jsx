import { columns } from '@/components/appointment/column';
import { appointmentData } from '@/components/appointment/data';
import { DataTable } from '@/components/dataTable/dataTable';
import { Button } from '@/components/ui/button';
import { services, statuses, vehicles } from '../components/appointment/data';

const Appointments = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Appointments</h3>
        <Button>Add Appointment</Button>
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
