import { columns } from '@/components/appointment/column';
import { appointmentData } from '@/components/appointment/data';
import { DataTable } from '@/components/dataTable/dataTable';
import { Button } from '@/components/ui/button';
import { services, statuses, vehicles } from '../components/appointment/data';
import { Label } from '@/components/ui/label';
import SideSheet from '@/components/additionalDisplay/SideSheet';
import DatePicker from '@/components/datePicker/DatePicker';
import RecordCombobox from '@/components/maintenanceRecord/RecordCombobox';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

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
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Appointments</h3>

        {/* Add appointment */}
        <SideSheet
          type="button"
          triggerLabel="Add Appointment"
          title="Add Appointment"
          description="Add Appointment details and click Add Appointment when done."
          actionLabel="Add Appointment"
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
                <RecordCombobox data={services} name="services" />
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
