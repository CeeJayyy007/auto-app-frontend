import { columns } from '@/components/activities/column';
import { activitiesData } from '@/components/activities/data';
import {
  services,
  statuses,
  inventories,
  vehicles
} from '../components/activities/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/display/SideSheet';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import RecordCombobox from '@/components/maintenanceRecord/RecordCombobox';
import { Textarea } from '@/components/ui/textarea';

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

const userData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    phone: '08012345678',
    role: 'admin'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@gmail.com',
    phone: '08012345670',
    role: 'user'
  }
];

const Activities = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        {/* Add appointment */}
        <SideSheet
          type="button"
          triggerLabel="Add Maintenance Record"
          title="Add Maintenance Record"
          description="Select User and Vehicle details and click Create Service Request when done."
          actionLabel="Create Service Request"
          body={
            <div className="flex flex-col space-y-4 py-4">
              {/* User */}
              <div className="grid ">
                <Label htmlFor="date" className="text-left mb-2 sr-only">
                  Select User
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select User" />
                  </SelectTrigger>
                  <SelectContent>
                    {userData.map((item) => (
                      <SelectItem key={item.firstName} value={item}>
                        {`${item.firstName} ${item.lastName} `}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle */}
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

              {/* Services */}
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
          data={activitiesData}
          columns={columns}
          props={{ services, statuses, inventories, vehicles }}
          placeholder="Search activities..."
          filterColumn="note"
        />
      </div>
    </div>
  );
};

export default Activities;
