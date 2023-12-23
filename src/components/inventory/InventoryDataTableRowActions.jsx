import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import AlertDialogComponent from '../alert/AlertDialog';
import DrawerComponent from '../alert/Drawer';
import ColouredBadge from '../badge/ColouredBadge';
import { inventoryStatusColor } from '@/utils/helpers';

export const InventoryDataTableRowActions = ({ row }) => {
  console.log(row.original);
  const {
    id,
    name,
    quantity,
    lowLevel,
    initialPrice,
    markUp,
    finalPrice,
    status
  } = row.original;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted focus:ring-0 focus-visible:ring-0 rounded-full"
        >
          <DotsVerticalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DrawerComponent
          actionLabel="Close"
          triggerLabel="View"
          title={`Viewing ${name} inventory item details`}
          body={
            <div className="flex flex-col space-y-4 py-4">
              <h4 className="text-sm font-semibold mx-4">Name: {name}</h4>
              <h4 className="text-sm font-semibold mx-4">
                Quantity: {quantity}
              </h4>
              <div className="flex flex-row flex-between items-center">
                <h4 className="text-sm font-semibold mx-4">
                  Low Level: {lowLevel}
                </h4>
                <ColouredBadge status={status} colorFn={inventoryStatusColor} />
              </div>
              <h4 className="text-sm font-semibold mx-4">
                Initial Price (₦): {initialPrice}
              </h4>
              <h4 className="text-sm font-semibold mx-4">Mark Up: {markUp}</h4>
              <h4 className="text-sm font-semibold mx-4">
                Final Price (₦): {finalPrice}
              </h4>
              <h4 className="text-sm font-semibold mx-4">Created by: Admin</h4>
              <h4 className="text-sm font-semibold mx-4">Updated by: Admin</h4>
              <h4 className="text-sm font-semibold mx-4">
                Updated on: 12/12/2023
              </h4>
            </div>
          }
          cancelLabel="Cancel"
        />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />

        <AlertDialogComponent
          actionLabel="Delete"
          triggerLabel="Delete"
          title="Delete Inventory Item"
          description="Are you sure you want to delete this item?"
          cancelLabel="Cancel"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
