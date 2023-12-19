import { columns } from '@/components/inventory/column';
import { inventoryData } from '@/components/inventory/data';
import { InventoryDataTable } from '@/components/inventory/inventoryDataTable';
import { Button } from '@/components/ui/button';

const Inventory = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Inventory</h3>
        <Button>Add Inventory Item</Button>
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <InventoryDataTable data={inventoryData} columns={columns} />
      </div>
    </div>
  );
};

export default Inventory;
