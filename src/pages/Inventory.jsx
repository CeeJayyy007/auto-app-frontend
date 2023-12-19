import { columns } from '@/components/inventory/column';
import { inventoryData } from '@/components/inventory/data';
import { Button } from '@/components/ui/button';
import { statuses } from '@/components/inventory/data';
import { DataTable } from '@/components/dataTable/dataTable';

const Inventory = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Inventory</h3>
        <Button>Add Inventory Item</Button>
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={inventoryData}
          columns={columns}
          props={{ statuses }}
          placeholder="Search inventory..."
          filterColumn="name"
        />
      </div>
    </div>
  );
};

export default Inventory;
