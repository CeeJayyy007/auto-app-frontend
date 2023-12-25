import { columns } from '@/components/inventory/column';
import { inventoryData } from '@/components/inventory/data';
import { Button } from '@/components/ui/button';
import { statuses } from '@/components/inventory/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/additionalDisplay/SideSheet';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Inventory = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Inventory</h3>
        <SideSheet
          type="button"
          triggerLabel="Add inventory Item"
          title="Add Inventory Item"
          description="Add Inventory Item details and click Add Inventory Item when done."
          actionLabel="Add Inventory Item"
          body={
            <div className="flex flex-col space-y-4 py-4">
              <div className="grid ">
                <Label htmlFor="name" className="text-left mb-2 sr-only">
                  Name
                </Label>
                <Input placeholder="Name" name="name" />
              </div>
              <div className="grid ">
                <Label htmlFor="quantity" className="text-left mb-2 sr-only">
                  Quantity
                </Label>
                <Input placeholder="Quantity" name="quantity" type="number" />
              </div>
              <div className="grid ">
                <Label htmlFor="lowLevel" className="text-left mb-2 sr-only">
                  Low Level
                </Label>
                <Input placeholder="Low Level" name="lowLevel" type="number" />
              </div>
              <div className="grid ">
                <Label
                  htmlFor="initialPrice"
                  className="text-left mb-2 sr-only"
                >
                  Initial Price
                </Label>
                <Input
                  placeholder="Initial Price"
                  name="initialPrice"
                  type="number"
                />
              </div>
              <div className="grid ">
                <Label htmlFor="markUp" className="text-left mb-2 sr-only">
                  Mark Up
                </Label>
                <Input placeholder="Mark Up" name="markUp" type="number" />
              </div>
              <div className="grid ">
                <Label
                  htmlFor="initialPrice"
                  className="text-left mb-2 sr-only"
                >
                  Final Price
                </Label>
                <Input
                  placeholder="Final Price"
                  name="finalPrice"
                  type="number"
                />
              </div>
            </div>
          }
        />
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
