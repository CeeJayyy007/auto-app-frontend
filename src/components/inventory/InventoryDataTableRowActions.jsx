import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import AlertDialogComponent from '../additionalDisplay/AlertDialog';
import DrawerComponent from '../additionalDisplay/Drawer';
import ColouredBadge from '../badge/ColouredBadge';
import { inventoryStatusColor } from '@/utils/helpers';
import SideSheet from '../additionalDisplay/SideSheet';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export const InventoryDataTableRowActions = ({ row }) => {
  const { name, quantity, lowLevel, initialPrice, markUp, finalPrice, status } =
    row.original;
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
                Last updated on: 12/12/2023
              </h4>
            </div>
          }
          cancelLabel="Cancel"
        />
        {/* Edit */}
        <SideSheet
          triggerLabel="Edit"
          title="Edit Inventory Item"
          description="Edit Inventory Item details and click Save Inventory Item when done."
          actionLabel="Save Inventory Item"
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
        <DropdownMenuSeparator />
        {/* Delete */}
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
