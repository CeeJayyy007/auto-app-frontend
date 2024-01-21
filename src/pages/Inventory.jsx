import { columns } from '@/components/inventory/column';
import { statuses } from '@/components/inventory/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/display/SideSheet';
import useInventory from '@/hooks/useInventory';
import InventoryForm from '@/components/inventory/inventoryForm/InventoryForm';
import { AddInventoryFormSchema } from '@/components/inventory/inventoryForm/InventoryValidation';
import storePersist from '@/store/storePersist';

const Inventory = () => {
  const { allInventory, addInventory, editInventory, deleteInventory } =
    useInventory();

  const inventoryData = allInventory?.data;

  // do not render anything if profile data is still null
  if (!inventoryData) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Inventory</h3>
        <SideSheet
          type="button"
          triggerLabel="Add Inventory Item"
          title="Add Inventory Item"
          description="Add Inventory Item details and click Add Inventory Item when done."
          actionLabel="Add Inventory Item"
          body={
            <InventoryForm
              formAction={addInventory}
              formValidation={AddInventoryFormSchema}
              buttonText="Add Inventory Item"
            />
          }
        />
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={inventoryData}
          columns={columns(editInventory, deleteInventory)}
          props={{ statuses }}
          placeholder="Search inventory..."
          filterColumn="name"
        />
      </div>
    </div>
  );
};

export default Inventory;
