import { columns } from '@/components/activities/column';
import { activitiesData } from '@/components/activities/data';
import { Button } from '@/components/ui/button';
import {
  services,
  statuses,
  inventories,
  vehicles
} from '../components/activities/data';
import { DataTable } from '@/components/dataTable/dataTable';

const Activities = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        <Button>Add Maintenance Record</Button>
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
