import { columns } from '@/components/activities/column';
import { activitiesData } from '@/components/activities/data';
import { DataTable } from '@/components/dataTable/dataTable';
import { Button } from '@/components/ui/button';

const Activities = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        <Button>Add Maintenance Record</Button>
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable data={activitiesData} columns={columns} />
      </div>
    </div>
  );
};

export default Activities;
